"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Props = {
  opportunityId: string;
  isLoggedIn: boolean;
  alreadyApplied: boolean;
  userEmail: string;
};

export default function ApplyForm({
  opportunityId,
  isLoggedIn,
  alreadyApplied,
  userEmail,
}: Props) {
  const pathname = usePathname();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [phone, setPhone] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="text-center">
        <h3 className="text-lg font-bold text-white">Ready to apply?</h3>
        <p className="mt-2 text-sm text-slate-400">
          Sign in to submit your application for this opportunity.
        </p>
        <Link
          href={`/auth/sign-in?redirect=${encodeURIComponent(pathname)}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Sign in to Apply
        </Link>
      </div>
    );
  }

  if (alreadyApplied || status === "success") {
    return (
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-2xl">
          ✓
        </div>
        <h3 className="mt-4 text-lg font-bold text-white">
          Application submitted
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          You&apos;ll hear back from the team soon. You can track the status
          from your dashboard.
        </p>
        <Link
          href="/dashboard"
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400"
        >
          Go to Dashboard
        </Link>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!fullName.trim() || !email.trim()) {
      setStatus("error");
      setErrorText("Please fill in your name and email.");
      return;
    }

    setStatus("submitting");
    setErrorText("");

    try {
      let resumeUrl: string | null = null;

      if (resumeFile) {
        const supabase = createClient();

        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setStatus("error");
          setErrorText("Your session expired. Please sign in again.");
          return;
        }

        const fileExt = resumeFile.name.split(".").pop();
        const filePath = `${user.id}/${opportunityId}-${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("resumes")
          .upload(filePath, resumeFile, {
            upsert: false,
          });

        if (uploadError) {
          setStatus("error");
          setErrorText("Could not upload resume. Please try again.");
          return;
        }

        resumeUrl = filePath;
      }

      const response = await fetch(
        `/api/opportunities/${opportunityId}/apply`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            coverNote: coverNote.trim(),
            resumeUrl,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok && !result?.alreadyApplied) {
        setStatus("error");
        setErrorText(result?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorText("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-bold text-white">Apply for this role</h3>

      {status === "error" && errorText && (
        <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {errorText}
        </div>
      )}

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-slate-400">
          Full Name
        </label>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-slate-400">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-slate-400">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-slate-400">
          Resume (PDF, DOC, DOCX)
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-cyan-400 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-950"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-slate-400">
          Cover Note (optional)
        </label>
        <textarea
          rows={4}
          value={coverNote}
          onChange={(e) => setCoverNote(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          placeholder="Why are you a good fit for this role?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}