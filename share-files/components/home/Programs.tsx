"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Radar,
  Check,
} from "lucide-react";

const programs = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Data Science & AI",
    description:
      "Build practical skills in data analytics, machine learning, deep learning and generative AI through real-world projects.",
    accent: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/20",
    features: [
      "Python & Data Analytics",
      "Machine Learning & Deep Learning",
      "Generative AI & LLMs",
      "Real-world Capstone Projects",
    ],
    href: "/programs/data-science-ai",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Cyber Security, Ethical Hacking & AI",
    description:
      "Develop modern cybersecurity skills with ethical hacking, threat detection and AI-powered security workflows.",
    accent: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-blue-500/20",
    features: [
      "Cybersecurity Fundamentals",
      "Ethical Hacking",
      "Threat Detection & Security",
      "AI for Cybersecurity",
    ],
    href: "/programs/cyber-security-ai",
  },
  {
    number: "03",
    icon: Radar,
    title: "GRC & AI",
    description:
      "Learn governance, risk and compliance concepts while developing practical AI skills for modern security teams.",
    accent: "from-violet-400 to-cyan-400",
    glow: "group-hover:shadow-violet-500/20",
    features: [
      "Governance & Risk",
      "Compliance Frameworks",
      "Security & Risk Assessment",
      "AI-Powered GRC",
    ],
    href: "/programs/grc-ai",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#050816] py-24 md:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Career-focused programs
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Learn skills that
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              move your career forward.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            Industry-relevant technology programs designed around practical
            learning, real projects and career readiness.
          </p>
        </div>

        {/* Program Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article
                key={program.number}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 shadow-2xl shadow-black/20 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${program.glow}`}
              >
                {/* Top gradient line */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${program.accent} opacity-60`}
                />

                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-600">
                    PROGRAM {program.number}
                  </span>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${program.accent} bg-opacity-10`}
                  >
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold leading-tight text-white">
                    {program.title}
                  </h3>

                  <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-400">
                    {program.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-7 h-px bg-white/10" />

                {/* Features */}
                <div className="space-y-4">
                  {program.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                        <Check className="h-3 w-3 text-cyan-400" />
                      </div>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-8">
                  <Link
                    href={program.href}
                    className="group/link flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
                  >
                    <span>Explore program</span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom glow */}
                <div
                  className={`pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${program.accent} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20`}
                />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-sm text-slate-500">
            Not sure which program is right for you?
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Talk to a career advisor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}