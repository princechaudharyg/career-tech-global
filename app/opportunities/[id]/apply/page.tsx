"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ApplyPage() {
  const params = useParams();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    setError("");

    const supabase = createClient();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const education = formData.get("education");
    const skills = formData.get("skills");
    const experience = formData.get("experience");
    const salaryExpectation = formData.get("salaryExpectation");
    const coverLetter = formData.get("coverLetter");

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof education !== "string" ||
      typeof experience !== "string"
    ) {
      setError("Please fill all required fields");
      setSubmitting(false);
      return;
    }

    const { error: insertError } = await supabase.from("applications").insert({
      opportunity_id: params.id,
      full_name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      education,
      skills: typeof skills === "string" ? skills.trim() : null,
      experience,
      salary_expectation: typeof salaryExpectation === "string" ? salaryExpectation.trim() : null,
      cover_letter: typeof coverLetter === "string" ? coverLetter.trim() : null,
      status: "pending",
    });

    if (insertError) {
      setError("Failed to submit application. Please try again.");
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-48 text-white sm:px-6 sm:pt-52 lg:px-8">
        <section className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8 text-center">
            <h1 className="text-2xl font-bold text-emerald-300">
              Application Submitted!
            </h1>
            <p className="mt-3 text-slate-300">
              Your application has been submitted successfully.
            </p>
            <Link
              href="/open-opportunities"
              className="mt-6 inline-flex rounded-lg bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Browse More Jobs
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 pb-16 pt-48 text-white sm:px-6 sm:pt-52 lg:px-8">
      <section className="mx-auto w-full max-w-2xl">
        <Link
          href="/open-opportunities"
          className="mb-5 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
        >
          ← Back to Opportunities
        </Link>

        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Career Tech Global
          </p>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Apply for Position
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Fill in your details to submit your application.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(new FormData(e.currentTarget));
          }}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Current Education
              </label>
              <select
                name="education"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="">Select...</option>
                <option value="Fresher">Fresher</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Working Professional">Working Professional</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Experience
              </label>
              <select
                name="experience"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="">Select...</option>
                <option value="0-1 years">0-1 years</option>
                <option value="1-3 years">1-3 years</option>
                <option value="3+ years">3+ years</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Salary Expectation
              </label>
              <select
                name="salaryExpectation"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="">Select...</option>
                <option value="3-5 LPA">3-5 LPA</option>
                <option value="5-8 LPA">5-8 LPA</option>
                <option value="8-12 LPA">8-12 LPA</option>
                <option value="12+ LPA">12+ LPA</option>
                <option value="Negotiable">Negotiable</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Skills
              </label>
              <textarea
                name="skills"
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="e.g. Python, SQL, Machine Learning..."
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-200">
                Cover Letter (Optional)
              </label>
              <textarea
                name="coverLetter"
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                placeholder="Tell us why you're a great fit..."
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
            <Link
              href="/open-opportunities"
              className="flex-1 rounded-lg border border-slate-600 px-6 py-3 text-center text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}