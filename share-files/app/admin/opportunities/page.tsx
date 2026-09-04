import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminOpportunitiesPage() {
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

  const { data: opportunities, error: opportunitiesError } = await supabase
    .from("opportunities")
    .select("*")
    .order("created_at", { ascending: false });

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
            Manage Opportunities
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Add, edit, and remove jobs, internships, and programs.
          </p>
        </div>

        {opportunitiesError ? (
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-5 text-sm text-red-200">
            Unable to load opportunities: {opportunitiesError.message}
          </div>
        ) : (
          <>
            <div className="mb-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
              <form
                action="/admin/opportunities/add"
                method="post"
                className="grid gap-5 p-6 sm:grid-cols-2"
              >
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="e.g. Software Engineering Intern"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="e.g. Google"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="e.g. Remote / New Delhi"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Opportunity Type
                  </label>
                  <select
                    name="opportunityType"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="Job">Job</option>
                    <option value="Internship">Internship</option>
                    <option value="Program">Program</option>
                    <option value="Scholarship">Scholarship</option>
                    <option value="Hackathon">Hackathon</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="Brief details about the opportunity..."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Apply URL
                  </label>
                  <input
                    type="url"
                    name="applyUrl"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    placeholder="https://..."
                  />
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <input
                    type="checkbox"
                    name="isPublished"
                    id="isPublished"
                    defaultChecked
                    className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-cyan-400 focus:ring-cyan-400"
                  />
                  <label
                    htmlFor="isPublished"
                    className="text-sm font-medium text-slate-300"
                  >
                    Publish immediately
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
                  >
                    Add Opportunity
                  </button>
                </div>
              </form>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
              <table className="min-w-[900px] w-full text-left text-sm">
                <thead className="border-b border-slate-700 bg-slate-800">
                  <tr>
                    <th className="w-1/3 whitespace-nowrap px-6 py-4 font-semibold text-white">
                      Title
                    </th>
                    <th className="w-1/6 whitespace-nowrap px-6 py-4 font-semibold text-white">
                      Organization
                    </th>
                    <th className="w-1/6 whitespace-nowrap px-6 py-4 font-semibold text-white">
                      Type
                    </th>
                    <th className="w-1/6 whitespace-nowrap px-6 py-4 font-semibold text-white">
                      Status
                    </th>
                    <th className="w-1/6 whitespace-nowrap px-6 py-4 font-semibold text-white">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-800">
                  {opportunities && opportunities.length > 0 ? (
                    opportunities.map((opp) => (
                      <tr
                        key={opp.id}
                        className="transition hover:bg-slate-800/60"
                      >
                        <td className="px-6 py-5 font-medium text-slate-200">
                          {opp.title}
                        </td>
                        <td className="px-6 py-5 text-slate-300">
                          {opp.organization}
                        </td>
                        <td className="px-6 py-5 text-slate-300">
                          {opp.opportunity_type}
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                              opp.is_published
                                ? "bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/30"
                                : "bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/30"
                            }`}
                          >
                            {opp.is_published ? "Published" : "Draft"}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex gap-2">
                            <button
                              type="button"
                              className="rounded-lg border border-cyan-400/60 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="rounded-lg border border-red-400/60 px-3 py-1.5 text-xs font-semibold text-red-300 transition hover:bg-red-400 hover:text-slate-950"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-10 text-center text-slate-400"
                      >
                        No opportunities yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </main>
  );
}