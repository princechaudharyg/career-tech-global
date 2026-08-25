"use client";

import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconPlayerPlayFilled,
  IconSparkles,
  IconBrain,
  IconChartBar,
  IconBriefcase,
  IconTargetArrow,
} from "@tabler/icons-react";

const stats = [
  {
    icon: IconBriefcase,
    value: "250+",
    label: "Hiring Partners",
  },
  {
    icon: IconTargetArrow,
    value: "10K+",
    label: "Career Opportunities",
  },
  {
    icon: IconChartBar,
    value: "94%",
    label: "Career Readiness",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#030B14]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[-180px] h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-[-150px] top-[15%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] xl:gap-24">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[760px]"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 backdrop-blur-xl"
            >
              <IconSparkles
                size={15}
                className="text-cyan-300"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                AI-Powered Career Platform
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-7 text-[52px] font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-[64px] lg:text-[72px] xl:text-[84px]"
            >
              Build the skills.

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Build your career.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-7 max-w-[650px] text-base leading-8 text-slate-400 sm:text-lg"
            >
              Master high-demand technology skills through practical
              training, real-world projects, expert mentorship and
              career-focused support designed for the modern job market.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-9 flex flex-wrap gap-4"
            >

              <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(34,211,238,0.35)]">
                Explore Programs

                <IconArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]">

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10">
                  <IconPlayerPlayFilled
                    size={14}
                    className="ml-[1px] text-cyan-300"
                  />
                </span>

                See How It Works
              </button>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >

              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                        <Icon
                          size={19}
                          className="text-cyan-300"
                        />
                      </div>

                      <div>
                        <p className="text-xl font-black text-white">
                          {item.value}
                        </p>

                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

            </motion.div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[650px]"
          >

            {/* Outer Glow */}
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Dashboard */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#071522]/90 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-6">

              {/* Dashboard Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Dashboard Header */}
              <div className="relative flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">

                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.25, 0.7, 0.25],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                      }}
                      className="absolute inset-0 rounded-2xl border border-cyan-400/30"
                    />

                    <IconBrain
                      size={25}
                      className="relative text-cyan-300"
                    />

                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                      Career Intelligence
                    </p>

                    <h2 className="mt-1 text-lg font-black text-white">
                      Career Command Center
                    </h2>
                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-300">
                    Live
                  </span>
                </div>

              </div>

              {/* Career Score */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative mt-6 overflow-hidden rounded-[26px] bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-6"
              >

                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

                <div className="relative flex items-start justify-between">

                  <div>

                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/65">
                      Career Readiness Score
                    </p>

                    <p className="mt-2 text-6xl font-black tracking-[-0.07em] text-white">
                      92
                      <span className="text-3xl">%</span>
                    </p>

                    <p className="mt-2 max-w-[210px] text-xs leading-6 text-white/70">
                      Your career profile is performing above average.
                    </p>

                  </div>

                  {/* Score Circle */}
                  <div className="relative flex h-24 w-24 items-center justify-center">

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full border border-dashed border-white/25"
                    />

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10">
                      <IconBrain
                        size={23}
                        className="text-white"
                      />
                    </div>

                  </div>

                </div>

                <div className="mt-6">

                  <div className="flex justify-between text-[9px] font-bold uppercase tracking-[0.12em] text-white/60">
                    <span>Profile Strength</span>
                    <span>92%</span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{
                        duration: 1.5,
                        delay: 0.6,
                      }}
                      className="h-full rounded-full bg-white"
                    />

                  </div>

                </div>

              </motion.div>

              {/* Analytics */}
              <div className="relative mt-5 grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">

                  <div className="flex items-center justify-between">

                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">
                      Skill Progress
                    </p>

                    <IconChartBar
                      size={17}
                      className="text-cyan-300"
                    />

                  </div>

                  <div className="mt-4 space-y-3">

                    <ProgressBar
                      label="AI / ML"
                      value={94}
                    />

                    <ProgressBar
                      label="Data"
                      value={87}
                    />

                    <ProgressBar
                      label="Cyber"
                      value={81}
                    />

                  </div>

                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">

                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">
                    Hiring Match
                  </p>

                  <p className="mt-3 text-4xl font-black text-white">
                    86%
                  </p>

                  <div className="mt-4 flex items-center gap-2">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                    <span className="text-[10px] text-emerald-300">
                      Strong Match
                    </span>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "86%" }}
                      transition={{ duration: 1.4, delay: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                    />
                  </div>

                </div>

              </div>

              {/* AI Recommendation */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="relative mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.045] p-4"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">
                    <IconSparkles
                      size={17}
                      className="text-cyan-300"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.15em] text-cyan-300">
                      AI Recommendation
                    </p>

                    <p className="mt-1 text-xs text-slate-300">
                      Complete your SQL project to improve your hiring score.
                    </p>
                  </div>

                </div>

              </motion.div>

            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.6,
              }}
              className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-[#081825]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >

              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">
                New Opportunity
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                Data Analyst
              </p>

              <p className="mt-1 text-xs text-emerald-300">
                94% Match
              </p>

            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.35,
                duration: 0.6,
              }}
              className="absolute -right-4 -top-5 hidden rounded-2xl border border-cyan-400/15 bg-[#081825]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >

              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-cyan-300">
                AI Career Insight
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                Profile Strength
              </p>

              <p className="mt-1 text-sm font-black text-cyan-300">
                +18%
              </p>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* =========================
   Progress Bar
========================= */

function ProgressBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>

      <div className="flex items-center justify-between">
        <span className="text-[10px] text-slate-400">
          {label}
        </span>

        <span className="text-[10px] font-bold text-cyan-300">
          {value}%
        </span>
      </div>

      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />

      </div>

    </div>
  );
}
