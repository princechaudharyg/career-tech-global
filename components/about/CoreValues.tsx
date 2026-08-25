"use client";

import { motion } from "framer-motion";
import {
  IconBulb,
  IconTargetArrow,
  IconHeartHandshake,
  IconShieldCheck,
} from "@tabler/icons-react";

const values = [
  {
    title: "Innovation",
    description:
      "We continuously evolve our programs to keep learners ahead in AI and emerging technologies.",
    icon: IconBulb,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Career First",
    description:
      "Every decision we make is focused on improving employability and helping learners achieve career success.",
    icon: IconTargetArrow,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Student Success",
    description:
      "We believe every learner deserves mentorship, guidance and lifetime support beyond graduation.",
    icon: IconHeartHandshake,
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Integrity",
    description:
      "Transparent guidance, practical learning and ethical career development are at the heart of our mission.",
    icon: IconShieldCheck,
    color: "from-violet-500 to-fuchsia-600",
  },
];

export default function CoreValues() {
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
            Our Core Values
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Principles That Drive
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Everything We Do
            </span>
          </h2>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .1,
                  duration: .5,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl"
              >

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${value.color} p-4 text-white`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {value.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}