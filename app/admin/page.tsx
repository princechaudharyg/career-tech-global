import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
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

  const { count: usersCount } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  const { count: adminCount } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true })
    .eq("role", "admin");

  const { count: opportunitiesCount } = await supabase
    .from("opportunities")
    .select("*", { count: "exact", head: true })
    .eq("is_published", true);

  const { count: applicationsCount } = await supabase
    .from("applications")
    .select("*", { count: "exact", head: true });

  const { count: messagesCount } = await supabase
    .from("contact_messages")
    .select("*", { count: "exact", head: true })
    .eq("status", "new");

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-48 text-white sm:px-6 sm:pt-52 lg:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <div className="mb-10">
          <Link
            href="/dashboard"
            className="mb-5 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
          >
            ← Back to Dashboard
          </Link>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Career Tech Global
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Manage users, opportunities, and applications.
          </p>
        </div>

        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Total Users
            </p>
            <p className="mt-2 text-4xl font-black text-white">
              {usersCount || 0}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Total Admins
            </p>
            <p className="mt-2 text-4xl font-black text-purple-400">
              {adminCount || 0}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Published Jobs
            </p>
            <p className="mt-2 text-4xl font-black text-cyan-400">
              {opportunitiesCount || 0}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Applications
            </p>
            <p className="mt-2 text-4xl font-black text-emerald-400">
              {applicationsCount || 0}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              New Messages
            </p>
            <p className="mt-2 text-4xl font-black text-amber-400">
              {messagesCount || 0}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/admin/users">
            <div className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Career Tech Global
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                User Management
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Manage registered users and access roles.
              </p>
            </div>
          </Link>

          <Link href="/admin/opportunities">
            <div className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Career Tech Global
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                Manage Opportunities
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Add, edit, and remove jobs, internships, and programs.
              </p>
            </div>
          </Link>

          <Link href="/admin/applications">
            <div className="group flex flex-col rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Career Tech Global
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                View Applications
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Manage all job applications from candidates.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}