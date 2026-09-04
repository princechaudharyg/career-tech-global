"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Opportunity = {
  id: string;
  title: string;
  company: string;
  location: string | null;
  work_mode: string;
  job_type: string;
  experience_level: string;
  description: string | null;
  skills: string[] | null;
  apply_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export default function AdminOpportunitiesPage() {
  const [currentUser, setCurrentUser] = useState<{ id: string } | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState<Opportunity | null>(null);
  const [deletingJobId, setDeletingJobId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        redirect("/auth/sign-in");
        return;
      }

      setCurrentUser(user);

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role !== "admin") {
        redirect("/dashboard");
        return;
      }

      setIsAdmin(true);

      const { data: jobs } = await supabase
        .from("opportunities")
        .select("*")
        .order("created_at", { ascending: false });

      setOpportunities(jobs || []);
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-48 text-white sm:px-6 sm:pt-52 lg:px-8">
        <section className="mx-auto w-full max-w-6xl">
          <p className="text-center text-slate-400">Loading...</p>
        </section>
      </main>
    );
  }

  if (!isAdmin) {
    return null;
  }

  async function handleEditSubmit(formData: FormData) {
    setSubmitting(true);

    const response = await fetch("/admin/opportunities/edit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setEditingJob(null);
      window.location.reload();
    } else {
      setSubmitting(false);
      alert("Failed to update opportunity");
    }
  }

  async function handleDeleteConfirm() {
    if (!deletingJobId) return;

    setSubmitting(true);

    const formData = new FormData();
    formData.append("opportunityId", deletingJobId);

    const response = await fetch("/admin/opportunities/delete", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setDeletingJobId(null);
      window.location.reload();
    } else {
      setSubmitting(false);
      alert("Failed to delete opportunity");
    }
  }

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

        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">
          <form
            action="/admin/opportunities/add"
            method="post"
            className="grid gap-5 p-6 sm:grid-cols-2"
          >
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="e.g. Data Analyst"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Company
              </label>
              <input
                type="text"
                name="company"
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
                Work Mode
              </label>
              <select
                name="workMode"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Job Type
              </label>
              <select
                name="jobType"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="Full Time">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Skills (comma separated)
              </label>
              <input
                type="text"
                name="skills"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="e.g. Python, SQL, Machine Learning"
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
                <th className="w-1/4 whitespace-nowrap px-6 py-4 font-semibold text-white">
                  Title
                </th>
                <th className="w-1/4 whitespace-nowrap px-6 py-4 font-semibold text-white">
                  Company
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
                      {opp.company}
                    </td>
                    <td className="px-6 py-5 text-slate-300">
                      {opp.job_type}
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
                          onClick={() => setEditingJob(opp)}
                          className="rounded-lg border border-cyan-400/60 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeletingJobId(opp.id)}
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
                  <td colSpan={5} className="px-6 py-10 text-center text-slate-400">
                    No opportunities yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <h2 className="mb-4 text-xl font-bold text-white">Edit Opportunity</h2>

            <form action={handleEditSubmit} className="grid gap-5 sm:grid-cols-2">
              <input type="hidden" name="opportunityId" value={editingJob.id} />

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={editingJob.title}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  defaultValue={editingJob.company}
                  required
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  defaultValue={editingJob.location || ""}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Work Mode
                </label>
                <select
                  name="workMode"
                  defaultValue={editingJob.work_mode}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Onsite">Onsite</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Job Type
                </label>
                <select
                  name="jobType"
                  defaultValue={editingJob.job_type}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Experience Level
                </label>
                <select
                  name="experienceLevel"
                  defaultValue={editingJob.experience_level}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Senior Level">Senior Level</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Skills (comma separated)
                </label>
                <input
                  type="text"
                  name="skills"
                  defaultValue={editingJob.skills?.join(", ") || ""}
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
                  defaultValue={editingJob.description || ""}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-slate-200">
                  Apply URL
                </label>
                <input
                  type="url"
                  name="applyUrl"
                  defaultValue={editingJob.apply_url || ""}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              <div className="flex items-center gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  name="isPublished"
                  id="isPublishedEdit"
                  defaultChecked={editingJob.is_published}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-cyan-400 focus:ring-cyan-400"
                />
                <label
                  htmlFor="isPublishedEdit"
                  className="text-sm font-medium text-slate-300"
                >
                  Publish immediately
                </label>
              </div>

              <div className="flex gap-3 sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
                >
                  {submitting ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditingJob(null)}
                  disabled={submitting}
                  className="flex-1 rounded-lg border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 disabled:opacity-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deletingJobId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-red-400/40 bg-slate-900 p-6 shadow-2xl">
            <h2 className="mb-3 text-xl font-bold text-white">Delete Opportunity?</h2>
            <p className="mb-6 text-sm text-slate-300">
              This action cannot be undone. The job will be permanently removed.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleDeleteConfirm}
                disabled={submitting}
                className="flex-1 rounded-lg bg-red-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-red-300 disabled:opacity-50"
              >
                {submitting ? "Deleting..." : "Delete"}
              </button>
              <button
                type="button"
                onClick={() => setDeletingJobId(null)}
                disabled={submitting}
                className="flex-1 rounded-lg border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}