import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ApplyForm from "@/components/opportunities/ApplyForm";

export const dynamic = "force-dynamic";

export default async function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: opportunity, error } = await supabase
    .from("opportunities")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !opportunity) {
    notFound();
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let alreadyApplied = false;
  if (user) {
    const { data: existingApplication } = await supabase
      .from("applications")
      .select("id")
      .eq("user_id", user.id)
      .eq("opportunity_id", id)
      .maybeSingle();

    alreadyApplied = Boolean(existingApplication);
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-5xl">
        <Link
          href="/open-opportunities"
          className="mb-6 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
        >
          ← Back to Opportunities
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Left: Job details */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-400">
              {opportunity.company}
            </p>

            <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
              {opportunity.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-2">
              {opportunity.location && (
                <span className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">
                  📍 {opportunity.location}
                </span>
              )}
              {opportunity.work_mode && (
                <span className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">
                  {opportunity.work_mode}
                </span>
              )}
              {opportunity.job_type && (
                <span className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">
                  {opportunity.job_type}
                </span>
              )}
              {opportunity.experience_level && (
                <span className="rounded-full bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">
                  {opportunity.experience_level}
                </span>
              )}
              {opportunity.salary_range && (
                <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  💰 {opportunity.salary_range}
                </span>
              )}
              {opportunity.deadline && (
                <span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300">
                  Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                </span>
              )}
            </div>

            {opportunity.description && (
              <div className="mt-7">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Description
                </h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-300">
                  {opportunity.description}
                </p>
              </div>
            )}

            {Array.isArray(opportunity.skills) && opportunity.skills.length > 0 && (
              <div className="mt-7">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Skills
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {opportunity.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Apply form */}
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7 sm:p-8">
            <ApplyForm
              opportunityId={opportunity.id}
              isLoggedIn={Boolean(user)}
              alreadyApplied={alreadyApplied}
              userEmail={user?.email ?? ""}
            />
          </div>
        </div>
      </section>
    </main>
  );
}