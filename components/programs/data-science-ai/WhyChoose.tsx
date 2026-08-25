"use client";

import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrain,
  IconBriefcase,
  IconChartBar,
  IconCheck,
  IconCloudComputing,
  IconCode,
  IconRocket,
} from "@tabler/icons-react";

const benefits = [
  {
    number: "01",
    title: "Learn By Building",
    description:
      "Move beyond theory with practical assignments and projects that show how data and AI are used in real business situations.",
    icon: IconCode,
    gradient: "from-cyan-400 to-blue-600",
    glow: "bg-cyan-400/20",
  },
  {
    number: "02",
    title: "Complete AI Roadmap",
    description:
      "Follow one structured path from Python and SQL foundations to Machine Learning, Deep Learning and Generative AI.",
    icon: IconBrain,
    gradient: "from-violet-400 to-indigo-600",
    glow: "bg-violet-400/20",
  },
  {
    number: "03",
    title: "Business-Focused Analytics",
    description:
      "Learn how to clean, analyze and visualize data so your insights can support better business decisions.",
    icon: IconChartBar,
    gradient: "from-blue-400 to-cyan-600",
    glow: "bg-blue-400/20",
  },
  {
    number: "04",
    title: "Modern AI Stack",
    description:
      "Work with current tools and workflows including APIs, LLMs, RAG, LangChain, FastAPI, Docker and cloud deployment.",
    icon: IconCloudComputing,
    gradient: "from-indigo-400 to-blue-700",
    glow: "bg-indigo-400/20",
  },
  {
    number: "05",
    title: "Portfolio That Proves Skills",
    description:
      "Create a portfolio with analysis, prediction, NLP, Generative AI and deployment projects that you can explain confidently.",
    icon: IconRocket,
    gradient: "from-emerald-400 to-cyan-600",
    glow: "bg-emerald-400/20",
  },
  {
    number: "06",
    title: "Career Preparation",
    description:
      "Prepare for data and AI roles with resume optimization, project storytelling, mock interviews and role-specific guidance.",
    icon: IconBriefcase,
    gradient: "from-amber-300 to-orange-600",
    glow: "bg-amber-400/20",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#050b18] py-24 text-white sm:py-32">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-[-15%] top-[20%] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="absolute bottom-[-15%] left-[25%] h-[520px] w-[520px] rounded-full bg-violet-600/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_14px_#6ee7b7]" />

            Why this program
          </div>

          <h2 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl">
            Learn the skills that
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              move careers forward.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            A practical learning experience designed to help you understand
            data, build intelligent systems and communicate your work with
            confidence.
          </p>
        </motion.div>

        {/* Benefit Cards */}
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
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const BenefitIcon = benefit.icon;

            return (
              <motion.article
                key={benefit.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition duration-500 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:shadow-[0_25px_80px_rgba(34,211,238,.1)] sm:p-7"
              >
                {/* Card Glow */}
                <div
                  className={`pointer-events-none absolute right-[-75px] top-[-75px] h-52 w-52 rounded-full ${benefit.glow} opacity-50 blur-3xl transition duration-500 group-hover:opacity-90`}
                />

                <div className="relative">
                  {/* Top Row */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white shadow-lg transition duration-500 group-hover:rotate-3 group-hover:scale-110`}
                    >
                      <BenefitIcon
                        size={26}
                        stroke={2.1}
                      />
                    </div>

                    <span className="text-xs font-black tracking-[0.18em] text-white/25">
                      {benefit.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-black leading-tight text-white sm:text-2xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {benefit.description}
                  </p>

                  {/* Bottom Status */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15">
                        <IconCheck
                          size={13}
                          stroke={3}
                          className="text-emerald-300"
                        />
                      </span>

                      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-300">
                        Included
                      </span>
                    </div>

                    <IconArrowUpRight
                      size={18}
                      className="text-slate-600 transition duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}