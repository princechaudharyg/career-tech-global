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
  IconHexagon,
  IconCircle,
  IconTriangle,
} from "@tabler/icons-react";

const features = [
  {
    icon: IconBriefcase,
    title: "Industry Partners",
    description: "Hiring network",
  },
  {
    icon: IconTargetArrow,
    title: "Career Support",
    description: "1-on-1 guidance",
  },
  {
    icon: IconChartBar,
    title: "Practical Learning",
    description: "Real projects",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1220] py-20 sm:py-24 lg:py-28">
      
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute left-[-160px] top-[-160px] h-[480px] w-[480px] rounded-full bg-cyan-500/[0.07] blur-[140px]" />
        <div className="absolute right-[-140px] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[150px]" />
        
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[10%] top-[30%] h-20 w-20 rounded-full border border-cyan-400/10"
        />
        
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[15%] top-[15%]"
        >
          <IconHexagon size={40} className="text-blue-400/10" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[25%] top-[60%]"
        >
          <IconCircle size={30} className="text-cyan-400/10" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 35, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[30%] top-[70%]"
        >
          <IconTriangle size={35} className="text-blue-400/10" />
        </motion.div>
        
        {/* Particle effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute h-1 w-1 rounded-full bg-cyan-400/30"
            />
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] xl:gap-20">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[640px]"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2">
              <IconSparkles size={14} className="text-cyan-300" />
              <span className="text-xs font-semibold text-cyan-300">
                AI-Powered Career Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.4rem]">
              Build the skills.{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Build your career.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[560px] text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Master high-demand technology skills through practical training,
              real-world projects, expert mentorship and career-focused
              support designed for the modern job market.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Explore Programs
                <IconArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400/25 hover:bg-white/[0.07]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10">
                  <IconPlayerPlayFilled size={12} className="ml-[1px] text-cyan-300" />
                </span>
                See How It Works
              </button>
            </div>

            {/* Features - Safe language */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-cyan-400/20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                        <Icon size={17} className="text-cyan-300" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          {item.title}
                        </p>
                        <p className="text-[11px] font-medium text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0E1B2C] p-5 shadow-2xl sm:p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                    <IconBrain size={22} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      Career Intelligence
                    </p>
                    <h2 className="mt-0.5 text-base font-bold text-white">
                      Career Command Center
                    </h2>
                  </div>
                </div>

                <div className="hidden items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 sm:flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-semibold text-emerald-300">
                    Live
                  </span>
                </div>
              </div>

              {/* Career Score */}
              <div className="relative mt-5 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-5">
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      Career Readiness Score
                    </p>
                    <p className="mt-1.5 text-5xl font-bold tracking-tight text-white">
                      92<span className="text-2xl">%</span>
                    </p>
                    <p className="mt-1.5 max-w-[200px] text-xs leading-5 text-white/70">
                      Sample dashboard preview
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <IconBrain size={22} className="text-white" />
                  </div>
                </div>

                <div className="relative mt-5">
                  <div className="flex justify-between text-[10px] font-medium text-white/60">
                    <span>Profile Strength</span>
                    <span>92%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/15">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      className="h-full rounded-full bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Skill Progress
                    </p>
                    <IconChartBar size={16} className="text-cyan-300" />
                  </div>

                  <div className="mt-3 space-y-2.5">
                    <ProgressBar label="AI / ML" value={94} />
                    <ProgressBar label="Data" value={87} />
                    <ProgressBar label="Cyber" value={81} />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Hiring Match
                  </p>
                  <p className="mt-2 text-3xl font-bold text-white">86%</p>

                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-emerald-300">Strong Match</span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "86%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 hidden rounded-xl border border-white/10 bg-[#0E1B2C] px-4 py-3 shadow-xl sm:block"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                New Opportunity
              </p>
              <p className="mt-1 text-sm font-bold text-white">Data Analyst</p>
              <p className="mt-0.5 text-xs text-emerald-300">94% Match</p>
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

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-slate-400">{label}</span>
        <span className="text-[10px] font-semibold text-cyan-300">{value}%</span>
      </div>

      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
    </div>
  );
}