"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "100+",
    label: "Hours Learning",
  },
  {
    value: "25+",
    label: "Projects",
  },
  {
    value: "1:1",
    label: "Mentorship",
  },
  {
    value: "Career",
    label: "Support",
  },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Industry Curriculum",
    description: "Updated according to market demand.",
  },
  {
    icon: Users,
    title: "Live Mentorship",
    description: "Learn directly from industry experts.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description: "Resume, LinkedIn & Interview preparation.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Industry-recognized completion certificate.",
  },
];

export default function ProgramsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#06142f] py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.22),transparent_28%),radial-gradient(circle_at_88%_15%,rgba(37,99,235,0.32),transparent_30%),radial-gradient(circle_at_60%_100%,rgba(8,145,178,0.18),transparent_38%)]" />

      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-200/25 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur-xl sm:px-5">
              🚀 Job-Oriented Programs
            </span>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Learn.
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                Build.
              </span>
              <br />
              Get Hired.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Master Artificial Intelligence, Data Science, Cyber Security,
              Ethical Hacking and Cloud Computing through live mentorship,
              real-world projects and dedicated placement assistance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/30"
              >
                Enroll Now
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/career-services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white shadow-lg shadow-slate-950/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
              >
                Career Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.07] backdrop-blur-xl sm:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`relative px-4 py-5 sm:px-5 ${
                    index !== 0
                      ? "border-l border-white/10"
                      : ""
                  } ${index >= 2 ? "border-t border-white/10 sm:border-t-0" : ""}`}
                >
                  <p className="text-2xl font-black tracking-tight text-cyan-200 sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-3 rounded-[38px] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-violet-500/25 blur-2xl" />

            <div className="relative rounded-[30px] border border-white/15 bg-slate-950/35 p-5 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Career Tech Advantage
                  </p>

                  <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Why Students Choose Us
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-400/10 text-cyan-200">
                  <Award size={24} />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="group rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.12]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                        <Icon size={20} />
                      </div>

                      <h4 className="mt-4 text-sm font-black text-white">
                        {benefit.title}
                      </h4>

                      <p className="mt-1.5 text-xs leading-5 text-slate-300">
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-cyan-300/15 bg-cyan-400/10 p-4">
                <div className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,1)]" />

                <p className="text-xs font-semibold leading-5 text-cyan-50">
                  Learn practical skills, build real projects and prepare for
                  career opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}