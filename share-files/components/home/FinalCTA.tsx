"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const benefits = [
  "Industry-focused learning paths",
  "Hands-on projects and assignments",
  "Expert mentorship and career guidance",
];

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative overflow-hidden bg-[#050816] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.12] via-blue-500/[0.08] to-violet-500/[0.12] px-6 py-14 shadow-2xl shadow-cyan-950/30 sm:px-10 lg:px-16 lg:py-20">
          {/* Inner glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.1] px-4 py-2 text-sm text-cyan-200">
                <Sparkles size={16} />
                Your future starts here
              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                Stop waiting for
                <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  the right opportunity.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Start building the skills, confidence and portfolio that can
                take your career to the next level.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-slate-300 sm:text-base"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-cyan-300"
                    />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/programs"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-200"
                >
                  Explore Programs
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.1]"
                >
                  <MessageCircle size={18} />
                  Talk to an Expert
                </Link>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                No complicated process. Just the right path for your goals.
              </p>
            </div>

            {/* Floating visual card */}
            <div className="relative mx-auto w-full max-w-sm lg:mr-0">
              <div className="absolute -inset-5 rounded-[2rem] bg-cyan-300/10 blur-2xl" />

              <div className="relative rounded-3xl border border-white/15 bg-[#080d21]/80 p-5 shadow-2xl backdrop-blur-xl">
                {/* Card header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950">
                      <Rocket size={21} />
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        Career Growth
                      </p>
                      <p className="text-xs text-slate-500">
                        Your learning journey
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Active
                  </div>
                </div>

                {/* Progress */}
                <div className="py-6">
                  <div className="mb-3 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Skill progress</p>
                      <p className="mt-1 text-3xl font-bold text-white">78%</p>
                    </div>

                    <span className="text-xs text-cyan-300">
                      +24% this month
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" />
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <Users size={18} className="mb-3 text-blue-300" />
                    <p className="text-xl font-bold text-white">10K+</p>
                    <p className="mt-1 text-xs text-slate-500">Learners</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <Star
                      size={18}
                      className="mb-3 text-amber-300"
                      fill="currentColor"
                    />
                    <p className="text-xl font-bold text-white">4.9/5</p>
                    <p className="mt-1 text-xs text-slate-500">Learner rating</p>
                  </div>
                </div>

                {/* Bottom message */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] p-4">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
                  <p className="text-xs leading-5 text-cyan-100/80">
                    Your next breakthrough could start today.
                  </p>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -right-3 -top-5 rounded-2xl border border-white/15 bg-[#111936]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-7">
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  Future ready
                </p>
                <p className="mt-1 text-sm font-bold text-cyan-200">
                  Build. Grow. Achieve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust line */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center text-sm text-slate-500 sm:flex-row">
          <div className="flex items-center gap-1 text-amber-300">
            <Star size={15} fill="currentColor" />
            <Star size={15} fill="currentColor" />
            <Star size={15} fill="currentColor" />
            <Star size={15} fill="currentColor" />
            <Star size={15} fill="currentColor" />
          </div>
          <span>Learner-first education for the careers of tomorrow</span>
        </div>
      </div>
    </section>
  );
}