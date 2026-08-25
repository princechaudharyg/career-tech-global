"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  IconArrowRight,
  IconBrain,
  IconChartBar,
  IconCheck,
  IconCode,
  IconDatabase,
  IconRocket,
  IconSparkles,
} from "@tabler/icons-react";

const stats = [
  {
    value: "30",
    label: "Weeks structured learning",
  },
  {
    value: "12",
    label: "Industry modules",
  },
  {
    value: "15+",
    label: "Hands-on projects",
  },
];

const learningPoints = [
  "Beginner-friendly Python and SQL foundations",
  "Machine Learning and Deep Learning projects",
  "Generative AI, LLMs and RAG applications",
  "Cloud deployment and career preparation",
];

const technologies = [
  "Python",
  "SQL",
  "Machine Learning",
  "PyTorch",
  "LLMs",
  "LangChain",
  "AWS",
  "Docker",
];

const dashboardSteps = [
  {
    label: "Python",
    value: "Completed",
    icon: IconCode,
    iconColor: "text-cyan-600",
    iconBackground: "bg-cyan-50",
    valueColor: "text-emerald-600",
  },
  {
    label: "Analytics",
    value: "Completed",
    icon: IconChartBar,
    iconColor: "text-blue-600",
    iconBackground: "bg-blue-50",
    valueColor: "text-emerald-600",
  },
  {
    label: "Machine Learning",
    value: "70%",
    icon: IconBrain,
    iconColor: "text-violet-600",
    iconBackground: "bg-violet-50",
    valueColor: "text-cyan-600",
  },
  {
    label: "Deployment",
    value: "Next",
    icon: IconRocket,
    iconColor: "text-orange-600",
    iconBackground: "bg-orange-50",
    valueColor: "text-orange-600",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061326] pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[560px] w-[560px] rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      <div className="pointer-events-none absolute right-[8%] top-24 hidden h-32 w-32 rounded-full border border-cyan-400/10 lg:block" />

      <div className="pointer-events-none absolute right-[10%] top-28 hidden h-20 w-20 rounded-full border border-blue-400/10 lg:block" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20 xl:px-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-[720px]"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>

            30-week Data Science & AI program
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-[clamp(3rem,6vw,6.5rem)] font-black leading-[0.9] tracking-[-0.06em] text-white">
            Build With Data.
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Think With AI.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[650px] text-base leading-7 text-slate-300 sm:text-lg">
            Learn Python, SQL, Statistics, Machine Learning, Deep Learning,
            Generative AI and Cloud Deployment through a structured,
            project-first learning journey.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-cyan-500/20 transition duration-200 hover:scale-[1.03] hover:shadow-cyan-400/30 sm:px-7"
            >
              Start Your AI Journey

              <IconArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#curriculum"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition duration-200 hover:border-cyan-300/40 hover:bg-white/10 sm:px-7"
            >
              Explore Curriculum
            </Link>
          </div>

          {/* Learning Points */}
          <div className="mt-9 grid max-w-[680px] gap-3 sm:grid-cols-2">
            {learningPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-2.5"
              >
                <IconCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <span className="text-sm leading-5 text-slate-200">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 max-w-[140px] text-xs leading-5 text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-[610px]"
        >
          {/* Floating Badge: Top Left */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-9"
          >
            <p className="text-[10px] text-slate-400">
              Learning mode
            </p>

            <p className="mt-1 text-xs font-bold text-white">
              Project First
            </p>
          </motion.div>

          {/* Floating Badge: Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="absolute -bottom-5 right-0 z-20 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-right-8"
          >
            <p className="text-[10px] text-slate-400">
              Career focus
            </p>

            <p className="mt-1 text-xs font-bold text-white">
              Portfolio Ready
            </p>
          </motion.div>

          {/* Main Dashboard Card */}
          <div className="rounded-[34px] border border-white/10 bg-white/[0.08] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-6">
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

                  <p className="text-xs font-medium text-slate-400">
                    AI LEARNING DASHBOARD
                  </p>
                </div>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Your Data Journey
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20 sm:h-16 sm:w-16">
                <IconBrain size={30} />
              </div>
            </div>

            {/* Program Progress */}
            <div className="mt-6 rounded-[24px] bg-gradient-to-br from-cyan-500 to-blue-600 p-5 text-white shadow-lg shadow-cyan-500/20 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                    Program progress
                  </p>

                  <h3 className="mt-1 text-5xl font-black tracking-tight sm:text-6xl">
                    68%
                  </h3>
                </div>

                <div className="rounded-xl bg-white/15 p-2.5">
                  <IconRocket size={24} />
                </div>
              </div>

              <div className="mt-5 h-2.5 rounded-full bg-white/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                  }}
                  className="h-full rounded-full bg-white shadow-lg"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-white/75">
                <span>Python to ML</span>
                <span>Deep AI ahead</span>
              </div>
            </div>

            {/* Learning Cards */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-4">
              {dashboardSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.label}
                    className="rounded-2xl bg-white p-3.5 sm:p-4"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${step.iconBackground}`}
                    >
                      <Icon
                        size={20}
                        className={step.iconColor}
                      />
                    </div>

                    <p className="mt-3 text-[11px] font-medium leading-4 text-slate-500">
                      {step.label}
                    </p>

                    <p
                      className={`mt-1 text-sm font-black ${step.valueColor}`}
                    >
                      {step.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Current Project */}
            <div className="mt-5 rounded-2xl border border-cyan-300/10 bg-cyan-400/5 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                  <IconDatabase
                    size={21}
                    className="text-cyan-300"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Current project
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    End-to-end customer churn prediction
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-5">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                Technology stack
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-cyan-300/10 bg-cyan-400/5 p-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
                <IconSparkles
                  size={20}
                  className="text-cyan-300"
                />
              </div>

              <p className="text-xs leading-5 text-slate-300">
                Build a portfolio that shows how you think, solve problems
                and create useful AI applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 mx-auto mt-14 flex max-w-[1500px] items-center justify-center px-5 sm:px-8 lg:mt-16 xl:px-10">
        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
          <span className="h-px w-10 bg-slate-700" />

          Explore the 30-week learning roadmap

          <span className="h-px w-10 bg-slate-700" />
        </div>
      </div>
    </section>
  );
}