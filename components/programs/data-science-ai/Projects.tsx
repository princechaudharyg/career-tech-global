"use client";

import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrain,
  IconChartBar,
  IconCode,
  IconDatabase,
  IconRobot,
  IconShieldCheck,
} from "@tabler/icons-react";

const projects = [
  {
    number: "01",
    title: "Enterprise AI Chatbot",
    level: "Advanced",
    icon: IconRobot,
    tech: "OpenAI, LangChain, RAG, Pinecone",
    desc: "Build an enterprise chatbot with document search.",
    color: "from-cyan-400 to-blue-600",
    softColor: "bg-cyan-50",
    textColor: "text-cyan-600",
  },
  {
    number: "02",
    title: "Fraud Detection",
    level: "Intermediate",
    icon: IconShieldCheck,
    tech: "Python, Scikit-learn",
    desc: "Detect fraudulent financial transactions.",
    color: "from-blue-400 to-indigo-600",
    softColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    number: "03",
    title: "Sales Forecasting",
    level: "Intermediate",
    icon: IconChartBar,
    tech: "XGBoost, Pandas",
    desc: "Forecast future sales using ML.",
    color: "from-violet-400 to-purple-600",
    softColor: "bg-violet-50",
    textColor: "text-violet-600",
  },
  {
    number: "04",
    title: "Customer Churn Prediction",
    level: "Intermediate",
    icon: IconDatabase,
    tech: "SQL, Python",
    desc: "Predict customers likely to leave.",
    color: "from-emerald-400 to-teal-600",
    softColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    number: "05",
    title: "Medical Diagnosis AI",
    level: "Advanced",
    icon: IconBrain,
    tech: "TensorFlow",
    desc: "Deep learning for disease prediction.",
    color: "from-fuchsia-400 to-pink-600",
    softColor: "bg-fuchsia-50",
    textColor: "text-fuchsia-600",
  },
  {
    number: "06",
    title: "AI Resume Screener",
    level: "Advanced",
    icon: IconCode,
    tech: "LLMs, FastAPI",
    desc: "Rank resumes using AI.",
    color: "from-amber-400 to-orange-600",
    softColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />

            Hands-on Portfolio
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.055em] text-slate-950 sm:text-5xl">
            Build Real Industry Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Graduate with a GitHub-ready portfolio that impresses recruiters.
          </p>
        </motion.div>

        {/* Project Grid */}
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
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 18,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_35px_rgba(15,23,42,.06)] transition duration-300 hover:border-cyan-300 hover:shadow-[0_20px_50px_rgba(14,165,233,.14)]"
              >
                {/* Top Gradient Line */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`}
                />

                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${project.softColor}`}
                  >
                    <ProjectIcon
                      size={22}
                      stroke={2}
                      className={project.textColor}
                    />
                  </div>

                  <span className="text-[10px] font-black tracking-[0.16em] text-slate-300">
                    {project.number}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-black leading-tight text-slate-900">
                    {project.title}
                  </h3>

                  <IconArrowUpRight
                    size={17}
                    className="shrink-0 text-slate-300 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-600"
                  />
                </div>

                <div className="mt-2">
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.13em] ${project.textColor}`}
                  >
                    {project.level}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex items-start gap-2 border-t border-slate-100 pt-4">
                  <span className="mt-0.5 text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
                    Stack
                  </span>

                  <p className="text-xs font-semibold leading-5 text-slate-700">
                    {project.tech}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
            delay: 0.2,
          }}
          className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-sm font-semibold text-slate-500"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          Every project is designed to become portfolio evidence.
        </motion.div>
      </div>
    </section>
  );
}