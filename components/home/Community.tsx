"use client";

import { motion } from "framer-motion";
import { IconUsers, IconMessage, IconHeart, IconStar } from "@tabler/icons-react";

const communityStats = [
  {
    icon: IconUsers,
    value: "Growing",
    label: "Active Members",
  },
  {
    icon: IconMessage,
    value: "24/7",
    label: "Support Available",
  },
  {
    icon: IconHeart,
    value: "100%",
    label: "Dedication",
  },
  {
    icon: IconStar,
    value: "5★",
    label: "Quality Focus",
  },
];

export default function Community() {
  return (
    <section className="bg-gradient-to-br from-cyan-500 to-blue-600 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            <IconUsers size={18} />
            Our Community
          </span>

          <h2 className="mt-8 text-5xl font-black">
            Join A Community That
            <span className="block">Cares</span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-cyan-50">
            As a young company, we're building something special.
            Every member matters. Every voice is heard.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[30px] bg-white/10 p-8 text-center backdrop-blur"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                  <Icon size={32} />
                </div>

                <p className="mt-6 text-4xl font-black">{stat.value}</p>

                <p className="mt-2 text-cyan-50">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-white p-12 text-center text-slate-900"
        >
          <h3 className="text-3xl font-black">
            Be An Early Member
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Join us now and help shape the future of Career Tech Global.
            Your feedback will directly influence our growth, and you'll
            be part of something special from day one.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/programs"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Programs
            </a>

            <a
              href="/contact"
              className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
            >
              Talk To Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}