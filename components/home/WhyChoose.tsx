"use client";

import {
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  Target,
  Users,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Skills built for the real world",
    description:
      "Learn modern technology skills through practical curriculum designed around the tools and workflows used in today's technology roles.",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Career-first learning",
    description:
      "Training does not stop at technical knowledge. Build the resume, portfolio and interview readiness needed to compete for real opportunities.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Learn by building",
    description:
      "Work on practical projects and portfolio-ready work so you can demonstrate what you know instead of only talking about certifications.",
  },
  {
    icon: Users,
    number: "04",
    title: "Mentorship & guidance",
    description:
      "Get structured guidance throughout your learning journey with support focused on technical growth and career progression.",
  },
  {
    icon: Target,
    number: "05",
    title: "Focused career paths",
    description:
      "Choose a focused technology path based on your interests, goals and the skills required for the roles you want to pursue.",
  },
  {
    icon: Zap,
    number: "06",
    title: "Built for career momentum",
    description:
      "Move from learning to execution with a clear roadmap that connects skills, projects, career preparation and opportunities.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#050816] py-24 md:py-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 right-[-120px] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Why Career Tech Global
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              More than training.
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                A career system.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-400 lg:ml-auto lg:text-lg">
            Technology changes quickly. Your career strategy should keep up.
            Career Tech Global connects technical learning with projects,
            mentorship and career preparation so you can turn knowledge into
            career momentum.
          </p>
        </div>

        {/* Main feature panel */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-6 md:p-8 lg:p-10">

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

            {/* Left */}
            <div className="flex flex-col justify-between">

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Target className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white md:text-3xl">
                  Designed around your career outcome.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 md:text-base">
                  We believe technology education should have a destination.
                  Every part of the experience is designed to help you build
                  useful skills and become more career-ready.
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Career journey
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {["Learn", "Build", "Prepare", "Advance"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2"
                      >
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300">
                          {item}
                        </span>

                        {index !== 3 && (
                          <span className="text-slate-700">→</span>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.number}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.035]"
                  >
                    <div className="flex items-start justify-between">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>

                      <span className="text-xs font-bold tracking-[0.15em] text-slate-700">
                        {reason.number}
                      </span>
                    </div>

                    <h4 className="mt-5 text-base font-semibold text-white">
                      {reason.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}