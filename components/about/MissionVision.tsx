"use client";

import { motion } from "framer-motion";
import {
  IconTargetArrow,
  IconEye,
  IconDiamond,
} from "@tabler/icons-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "Empower students and professionals with practical, industry-focused technology education that leads to real career opportunities.",
    icon: IconTargetArrow,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Our Vision",
    description:
      "Become the world's most trusted career acceleration platform for AI, Data Science, Cyber Security and emerging technologies.",
    icon: IconEye,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Our Promise",
    description:
      "Every learner receives world-class training, hands-on experience, personalized mentorship and dedicated career support.",
    icon: IconDiamond,
    color: "from-violet-500 to-fuchsia-600",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Our Foundation
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Mission, Vision &
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Our Promise
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Everything we build is driven by a simple goal —
            helping learners transform their potential into
            successful global technology careers.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="rounded-[32px] border border-white/60 bg-white/80 p-10 shadow-xl backdrop-blur-xl transition-all"
              >

                <div
                  className={`inline-flex rounded-3xl bg-gradient-to-r ${card.color} p-5 text-white shadow-xl`}
                >

                  <Icon size={34} />

                </div>

                <h3 className="mt-8 text-3xl font-black text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {card.description}
                </p>

                <div
                  className={`mt-10 h-2 w-20 rounded-full bg-gradient-to-r ${card.color}`}
                />

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}