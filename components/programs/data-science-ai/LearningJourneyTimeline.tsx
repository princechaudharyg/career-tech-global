"use client";

import { motion } from "framer-motion";

import {
  IconArrowRight,
  IconBrain,
  IconBriefcase,
  IconChartBar,
  IconCheck,
  IconCloudComputing,
  IconDatabase,
  IconRocket,
} from "@tabler/icons-react";

const journey = [
  {
    week: "Weeks 1–4",
    title: "Build Your Foundation",
    description:
      "Start with Python, SQL, Git and the problem-solving skills needed for modern data work.",
    result: "You can write programs and work with structured data.",
    icon: IconCodeSafe,
    color: "from-cyan-500 to-blue-600",
    skills: ["Python", "SQL", "Git", "Problem Solving"],
  },
  {
    week: "Weeks 5–9",
    title: "Understand Data",
    description:
      "Learn statistics, data cleaning, exploratory analysis and visualization.",
    result: "You can turn raw data into useful business insights.",
    icon: IconChartBar,
    color: "from-blue-500 to-indigo-600",
    skills: ["Statistics", "Pandas", "EDA", "Power BI"],
  },
  {
    week: "Weeks 10–15",
    title: "Build Machine Learning Models",
    description:
      "Train, evaluate and improve supervised and unsupervised machine learning models.",
    result: "You can build models for prediction and classification problems.",
    icon: IconBrain,
    color: "from-indigo-500 to-violet-600",
    skills: ["Regression", "Classification", "Clustering", "Model Evaluation"],
  },
  {
    week: "Weeks 16–21",
    title: "Explore Deep Learning",
    description:
      "Understand neural networks and apply deep learning to text, images and structured data.",
    result: "You can create useful deep learning prototypes.",
    icon: IconBrain,
    color: "from-violet-500 to-fuchsia-600",
    skills: ["PyTorch", "TensorFlow", "NLP", "Computer Vision"],
  },
  {
    week: "Weeks 22–26",
    title: "Build Generative AI Apps",
    description:
      "Work with LLMs, embeddings, vector search, RAG systems and AI application workflows.",
    result: "You can build grounded AI assistants for real use cases.",
    icon: IconDatabase,
    color: "from-fuchsia-500 to-rose-600",
    skills: ["LLMs", "RAG", "Embeddings", "LangChain"],
  },
  {
    week: "Weeks 27–30",
    title: "Deploy and Launch Your Career",
    description:
      "Deploy your project, polish your portfolio and prepare for technical interviews.",
    result: "You finish with a showcase-ready AI portfolio.",
    icon: IconBriefcase,
    color: "from-emerald-500 to-cyan-600",
    skills: ["Docker", "AWS", "Portfolio", "Mock Interviews"],
  },
];

function IconCodeSafe(props: { size?: number; className?: string }) {
  return <IconCloudComputing {...props} />;
}

export default function LearningJourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300">
            Your learning journey
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
            A clear path from beginner to AI builder
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Every stage has a clear focus, practical skills and a measurable
            outcome so you always know what comes next.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-emerald-400 lg:block" />

          <div className="space-y-6">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.week}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="relative grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:border-cyan-300/30 sm:p-7 lg:grid-cols-[70px_230px_1fr] lg:items-start lg:gap-8"
                >
                  {/* Timeline Icon */}
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                      {item.week}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Details */}
                  <div>
                    <p className="text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-start gap-2 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                      <IconCheck
                        size={17}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />

                      <p className="text-xs leading-5 text-slate-300">
                        <span className="font-black text-emerald-300">
                          Milestone:
                        </span>{" "}
                        {item.result}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-12 flex max-w-5xl items-center gap-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">
            <IconRocket size={23} className="text-cyan-300" />
          </div>

          <p className="text-sm leading-6 text-slate-300">
            You do not just complete lessons. You move from learning a concept
            to building something with it.
          </p>
        </div>
      </div>
    </section>
  );
}