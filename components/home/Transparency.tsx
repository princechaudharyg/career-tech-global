"use client";

import { motion } from "framer-motion";
import { IconShieldCheck, IconEye, IconUsers, IconTrendingUp } from "@tabler/icons-react";

const values = [
  {
    icon: IconEye,
    title: "Radical Transparency",
    description: "We're honest about where we are. No fake stats, no inflated claims.",
  },
  {
    icon: IconShieldCheck,
    title: "Quality First",
    description: "Every course, every feature is built with care and attention to detail.",
  },
  {
    icon: IconUsers,
    title: "Community Driven",
    description: "Your feedback shapes our roadmap. We build what you need.",
  },
  {
    icon: IconTrendingUp,
    title: "Continuous Growth",
    description: "We're learning and improving every day, just like our students.",
  },
];

export default function Transparency() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Values
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Why Choose A
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Growing Company?
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            We may be new, but that's our strength. We're hungry,
            we listen, and we care deeply about every student's success.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-cyan-500 to-blue-600 p-12 text-center text-white"
        >
          <h3 className="text-3xl font-black">
            Join Our Journey
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50">
            As an early member, you're not just a student - you're part of
            our story. Your success will define ours, and we're committed
            to earning your trust every single day.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/programs"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-cyan-700 transition hover:scale-105"
            >
              Explore Programs
            </a>

            <a
              href="/contact"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Talk To Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}