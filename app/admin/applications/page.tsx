import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

const STATUS_OPTIONS = [
  "pending",
  "reviewed",
  "shortlisted",
  "rejected",
  "hired",
] as const;

const statusStyles: Record<string, string> = {
  pending: "bg-amber-400/10 text-amber-300",
  reviewed: "bg-cyan-400/10 text-cyan-300",
  shortlisted: "bg-emerald-400/10 text-emerald-300",
  rejected: "bg-red-400/10 text-red-300",
  hired: "bg-purple-400/10 text-purple-300",
};

type ApplicationRow = {
  id: string;
  user_id: string | null;
  status: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  cover_letter: string | null;
  rejection_reason: string | null;
  created_at: string;
  opportunities: { id: string; title: string; company: string } | null;
  profiles: { full_name: string | null } | null;
};

export default async function AdminApplicationsPage() {
  const supabase = await createClient();

  const {
    data: { user: currentUser },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !currentUser) {
    redirect("/auth/sign-in");
  }

  const { data: currentProfile, error: currentProfileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", currentUser.id)
    .single();

  if (currentProfileError || currentProfile?.role !== "admin") {
    redirect("/dashboard");
  }

  const { data: applicationsData } = await supabase
    .from("applications")
    .select(
      "id, user_id, status, full_name, email, phone, cover_letter, rejection_reason, created_at, opportunities(id, title, company), profiles(full_name)",
    )
    .order("created_at", { ascending: false });

  const applications = (applicationsData ?? []) as unknown as ApplicationRow[];

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-48 text-white sm:px-6 sm:pt-52 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <Link
            href="/admin"
            className="mb-5 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
          >
            ← Back to Admin
          </Link>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Career Tech Global
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            View Applications
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Manage all job applications from candidates.
          </p>
        </div>

        {applications.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center text-slate-400">
            No applications yet.
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((application) => {
              const applicantName =
                application.profiles?.full_name ||
                application.full_name ||
                "Unnamed applicant";

              return (
                <div
                  key={application.id}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400">
                        {application.opportunities?.company ?? "Unknown company"}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-white">
                        {application.opportunities?.title ?? "Opportunity removed"}
                      </h3>

                      <p className="mt-2 text-sm text-slate-300">
                        Applicant:{" "}
                        <span className="font-semibold text-white">
                          {applicantName}
                        </span>
                      </p>

                      {application.email && (
                        <p className="text-sm text-slate-400">
                          {application.email}
                          {application.phone ? ` · ${application.phone}` : ""}
                        </p>
                      )}

                      {application.cover_letter && (
                        <p className="mt-3 max-w-2xl text-sm text-slate-400">
                          &ldquo;{application.cover_letter}&rdquo;
                        </p>
                      )}

                      {application.status === "rejected" &&
                        application.rejection_reason && (
                          <div className="mt-3 max-w-2xl rounded-lg border border-red-400/20 bg-red-400/5 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wider text-red-300">
                              Rejection reason
                            </p>
                            <p className="mt-1 text-sm text-red-200">
                              {application.rejection_reason}
                            </p>
                          </div>
                        )}

                      <p className="mt-3 text-xs text-slate-500">
                        Applied on{" "}
                        {new Date(application.created_at).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex w-full max-w-xs flex-col items-end gap-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                          statusStyles[application.status] ??
                          "bg-slate-400/10 text-slate-300"
                        }`}
                      >
                        {application.status}
                      </span>

                      <form
                        action="/admin/applications/update-status"
                        method="post"
                        className="flex w-full flex-col items-end gap-2"
                      >
                        <input
                          type="hidden"
                          name="applicationId"
                          value={application.id}
                        />

                        <div className="flex w-full items-center gap-2">
                          <select
                            name="status"
                            defaultValue={application.status}
                            className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-white"
                          >
                            {STATUS_OPTIONS.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <button
                            type="submit"
                            className="rounded-lg bg-cyan-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
                          >
                            Update
                          </button>
                        </div>

                        <textarea
                          name="rejectionReason"
                          defaultValue={application.rejection_reason ?? ""}
                          rows={2}
                          placeholder="Rejection reason (only used if status = rejected)"
                          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs text-white placeholder-slate-500"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}