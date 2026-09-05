"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBriefcase,
  IconCurrencyDollar,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";

const careers = [
  {
    title: "Data Analyst",
    salary: "$95K+",
    growth: "+32%",
    openings: "12,000+ Jobs",
    icon: IconTrendingUp,
    color: "from-cyan-500 to-blue-600",
    softColor: "bg-cyan-400/10",
    textColor: "text-cyan-300",
  },
  {
    title: "Data Scientist",
    salary: "$145K+",
    growth: "+41%",
    openings: "18,500+ Jobs",
    icon: IconCurrencyDollar,
    color: "from-violet-500 to-cyan-500",
    softColor: "bg-violet-400/10",
    textColor: "text-violet-300",
  },
  {
    title: "ML Engineer",
    salary: "$175K+",
    growth: "+54%",
    openings: "9,400+ Jobs",
    icon: IconBriefcase,
    color: "from-emerald-500 to-cyan-500",
    softColor: "bg-emerald-400/10",
    textColor: "text-emerald-300",
  },
  {
    title: "AI Engineer",
    salary: "$185K+",
    growth: "+67%",
    openings: "7,800+ Jobs",
    icon: IconUsers,
    color: "from-sky-500 to-indigo-600",
    softColor: "bg-sky-400/10",
    textColor: "text-sky-300",
  },
];

export default function CareerOutcomes() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">
            Career Outcomes
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl">
            Your Career After Graduation
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Our graduates work with Fortune 500 companies, fast-growing
            startups and AI-first organizations across the world.
          </p>
        </motion.div>

        {/* Career Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {careers.map((career) => {
            const CareerIcon = career.icon;

            return (
              <motion.article
                key={career.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07] sm:p-6"
              >
                {/* Top Gradient */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${career.color}`}
                />

                {/* Card Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${career.softColor}`}
                    >
                      <CareerIcon
                        size={22}
                        stroke={2}
                        className={career.textColor}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-white">
                        {career.title}
                      </h3>

                      <p className="mt-1 text-[9px] font-black uppercase tracking-[0.14em] text-slate-500">
                        High-demand career path
                      </p>
                    </div>
                  </div>

                  <IconArrowUpRight
                    size={19}
                    className="shrink-0 text-slate-600 transition duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300"
                  />
                </div>

                {/* Salary */}
                <div className="mt-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Average Salary
                  </p>

                  <p className="mt-1 text-4xl font-black tracking-[-0.05em] text-white">
                    {career.salary}
                  </p>
                </div>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-500">
                      Growth Rate
                    </p>

                    <p className="mt-1 text-lg font-black text-emerald-300">
                      {career.growth}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-3">
                    <p className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-500">
                      Job Openings
                    </p>

                    <p className="mt-1 text-sm font-black text-cyan-300">
                      {career.openings}
                    </p>
                  </div>
                </div>

                {/* Open Opportunities Link */}
                <Link
href="/open-opportunities"
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${career.color} px-5 py-3 text-sm font-black text-white transition duration-300 hover:scale-[1.02]`}
                >
                  Explore Career

                  <IconArrowUpRight size={17} />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}