"use client";

import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBuildingSkyscraper,
  IconSparkles,
} from "@tabler/icons-react";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "OpenAI",
  "IBM",
  "Oracle",
  "Meta",
  "Cisco",
];

export default function HiringPartners() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1250px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-[#061326] p-6 text-white sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-400/15 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                <IconSparkles size={15} />
                Hiring partner network
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
                Connect with companies building the future.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Build the skills and confidence needed to stand out in a
                competitive technology job market.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {companies.map((company) => (
                <motion.div
                  key={company}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="flex min-h-[85px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center transition hover:border-cyan-300/30 hover:bg-white/10"
                >
                  <div>
                    <IconBuildingSkyscraper
                      size={19}
                      className="mx-auto mb-2 text-cyan-300"
                    />

                    <p className="text-sm font-black">{company}</p>

                    <IconArrowUpRight
                      size={14}
                      className="mx-auto mt-1 text-slate-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}