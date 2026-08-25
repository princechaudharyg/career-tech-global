"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Crown,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type ComparisonItem = {
  title: string;
  description: string;
  traditional: boolean | string;
  careerTech: boolean | string;
};

const comparisonData: ComparisonItem[] = [
  {
    title: "Learning Format",
    description: "How students consume and practice knowledge",
    traditional: "Mostly theory-based classes",
    careerTech: "Interactive, project-based learning",
  },
  {
    title: "Industry-Relevant Skills",
    description: "Skills aligned with current hiring requirements",
    traditional: false,
    careerTech: true,
  },
  {
    title: "AI-Powered Learning",
    description: "Personalized learning support using AI tools",
    traditional: false,
    careerTech: true,
  },
  {
    title: "Live Projects",
    description: "Real-world projects for practical experience",
    traditional: "Limited academic assignments",
    careerTech: "Real-world portfolio projects",
  },
  {
    title: "Mentorship",
    description: "Guidance from experienced professionals",
    traditional: "Occasional academic guidance",
    careerTech: "Dedicated expert mentorship",
  },
  {
    title: "Career Preparation",
    description: "Support for interviews and job readiness",
    traditional: "Self-preparation",
    careerTech: "Structured career acceleration",
  },
  {
    title: "Placement Support",
    description: "Help with opportunities and hiring",
    traditional: "Limited or unavailable",
    careerTech: "Job-ready ecosystem and placement support",
  },
  {
    title: "Learning Experience",
    description: "Engagement, progress tracking and motivation",
    traditional: "One-size-fits-all approach",
    careerTech: "Personalized and outcome-focused",
  },
];

function Value({
  value,
  highlighted = false,
}: {
  value: boolean | string;
  highlighted?: boolean;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
          highlighted
            ? "bg-cyan-400 text-slate-950"
            : "bg-white/10 text-white"
        }`}
      >
        <Check size={17} strokeWidth={3} />
      </span>
    ) : (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] text-slate-600">
        <X size={16} />
      </span>
    );
  }

  return (
    <span
      className={`text-sm leading-6 ${
        highlighted ? "text-white" : "text-slate-400"
      }`}
    >
      {value}
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-24 text-white sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            A smarter way to build your future
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Don&apos;t just learn.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Become career-ready.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Traditional education gives you information. Career Tech Global
            helps you turn that information into skills, projects and real
            career outcomes.
          </p>
        </motion.div>

        {/* Comparison card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl shadow-cyan-950/20 backdrop-blur-xl"
        >
          {/* Column heading */}
          <div className="grid grid-cols-1 border-b border-white/10 md:grid-cols-[1.2fr_0.9fr_1fr]">
            <div className="hidden p-7 md:block">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Compare your path
              </p>
              <p className="mt-2 text-sm text-slate-400">
                The difference is in the outcome.
              </p>
            </div>

            <div className="border-b border-white/10 p-6 md:border-b-0 md:border-l md:border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-slate-300">
                  <Crown size={19} />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">
                    Traditional Learning
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Knowledge-focused
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-6 md:border-l md:border-cyan-300/20 md:bg-cyan-400/[0.06]">
              <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                Recommended
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20">
                  <Zap size={19} fill="currentColor" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Career Tech Global
                  </p>
                  <p className="mt-1 text-xs text-cyan-200/70">
                    Outcome-focused
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div>
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group grid grid-cols-1 border-b border-white/[0.07] last:border-b-0 md:grid-cols-[1.2fr_0.9fr_1fr]"
              >
                <div className="p-6 transition-colors group-hover:bg-white/[0.025]">
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-white/[0.07] p-6 md:border-l md:border-t-0 md:border-white/[0.07]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 md:hidden">
                    Traditional
                  </span>
                  <Value value={item.traditional} />
                </div>

                <div className="flex items-center gap-3 border-t border-cyan-300/10 bg-cyan-400/[0.035] p-6 md:border-l md:border-t-0 md:border-cyan-300/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300/70 md:hidden">
                    Career Tech
                  </span>
                  <Value value={item.careerTech} highlighted />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-cyan-400/[0.08] to-blue-500/[0.08] p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="flex items-center gap-2 text-lg font-semibold text-white">
              <Sparkles size={18} className="text-cyan-300" />
              Your career deserves more than certificates.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Learn. Build. Get mentored. Move forward.
            </p>
          </div>

          <button className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
            Explore Programs
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}