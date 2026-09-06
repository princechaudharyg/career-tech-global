"use client";

import { motion } from "framer-motion";
import { IconTrendingUp, IconBrain, IconRocket } from "@tabler/icons-react";

const leaders = [
  {
    name: "Satya Nadella",
    role: "CEO, Microsoft",
    quote:
      "The demand for AI skills is growing 3.5x faster than overall tech talent demand. Continuous learning is no longer optional.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Satya_Nadella_2017_%28cropped%29.jpg/220px-Satya_Nadella_2017_%28cropped%29.jpg",
  },
  {
    name: "Sundar Pichai",
    role: "CEO, Google & Alphabet",
    quote:
      "AI is one of the most important things humanity is working on. It's more profound than fire or electricity. Learning AI is investing in your future.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sundar_Pichai_%282024%29_%28cropped%29.jpg/220px-Sundar_Pichai_%282024%29_%28cropped%29.jpg",
  },
  {
    name: "Jensen Huang",
    role: "CEO, NVIDIA",
    quote:
      "Every company will become an AI company. The professionals who learn AI now will lead the next industrial revolution.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jensen_Huang_GTC_2016_%28cropped%29.jpg/220px-Jensen_Huang_GTC_2016_%28cropped%29.jpg",
  },
];

const stats = [
  {
    icon: IconTrendingUp,
    title: "AI Jobs Growth",
    value: "74%",
    description: "Annual growth in AI-related job postings (LinkedIn 2024)",
  },
  {
    icon: IconBrain,
    title: "Skills Gap",
    value: "85M",
    description: "AI专业人才 shortage globally by 2030 (World Economic Forum)",
  },
  {
    icon: IconRocket,
    title: "Salary Premium",
    value: "+45%",
    description: "Higher salaries for AI-skilled professionals (McKinsey)",
  },
];

export default function IndustryLeaders() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Leaders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Industry Insights
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Why Top Leaders Say
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Upskilling is Critical
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Industry leaders emphasize continuous learning in AI and
            data science as the key to career success.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{leader.name}</h4>
                  <p className="text-sm text-slate-600">{leader.role}</p>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-700 italic">
                "{leader.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 rounded-[36px] bg-gradient-to-r from-cyan-500 to-blue-600 p-12 text-white">
          <h3 className="text-3xl font-black text-center">
            The Data Doesn't Lie
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                    <Icon size={32} />
                  </div>
                  <h4 className="mt-6 text-5xl font-black">{stat.value}</h4>
                  <p className="mt-2 text-xl font-bold">{stat.title}</p>
                  <p className="mt-3 text-sm text-cyan-100">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}