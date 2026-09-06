"use client";

import { motion } from "framer-motion";
import { IconRoute, IconCheck, IconClock, IconBulb } from "@tabler/icons-react";

const roadmapItems = [
  {
    icon: IconCheck,
    title: "Core Programs",
    description: "AI, Data Science, Cyber Security, GRC courses",
    status: "completed",
    statusText: "Live Now",
  },
  {
    icon: IconClock,
    title: "Career Services",
    description: "Resume optimization, LinkedIn branding, mock interviews",
    status: "completed",
    statusText: "Live Now",
  },
  {
    icon: IconBulb,
    title: "AI Learning Platform",
    description: "Personalized AI mentor for 24/7 support",
    status: "in-progress",
    statusText: "Coming Soon",
  },
  {
    icon: IconRoute,
    title: "Enterprise Partnerships",
    description: "Direct hiring pipelines with top companies",
    status: "planned",
    statusText: "In Development",
  },
];

export default function Roadmap() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            What's Coming
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Our
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            We're building features that matter. Here's what we've
            shipped and what's coming next.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={
                        "flex h-14 w-14 items-center justify-center rounded-2xl " +
                        (item.status === "completed"
                          ? "bg-emerald-100 text-emerald-600"
                          : item.status === "in-progress"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-slate-100 text-slate-600")
                      }
                    >
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span
                    className={
                      "rounded-full px-3 py-1 text-xs font-bold " +
                      (item.status === "completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : item.status === "in-progress"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-700")
                    }
                  >
                    {item.statusText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-bold text-slate-600">
            Have ideas? We'd love to hear from you!
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Share Your Feedback
          </a>
        </motion.div>
      </div>
    </section>
  );
}