"use client";

import { motion } from "framer-motion";
import {
  IconScan,
  IconCircleCheckFilled,
  IconBolt,
  IconBrain,
} from "@tabler/icons-react";

export default function ATSOptimization() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              ATS Optimization
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">

              Beat The ATS
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Before Recruiters See You
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">

              More than 75% of resumes never reach a recruiter because
              they fail ATS screening. We optimize every section so your
              resume passes automated filters.

            </p>

            <div className="mt-12 space-y-6">

              {[
                "Industry Keywords",
                "ATS Compatible Formatting",
                "Role Specific Resume",
                "AI Resume Review",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <IconCircleCheckFilled
                    className="text-emerald-400"
                  />

                  <span className="text-lg text-slate-200">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-300">
                    ATS Scanner
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    Resume Analysis
                  </h3>

                </div>

                <div className="rounded-2xl bg-cyan-500 p-4 text-white">

                  <IconScan size={34} />

                </div>

              </div>

              {/* Score */}

              <div className="mt-10">

                <div className="mb-3 flex justify-between">

                  <span className="text-slate-300">
                    ATS Compatibility
                  </span>

                  <span className="font-bold text-cyan-300">
                    96%
                  </span>

                </div>

                <div className="h-4 rounded-full bg-white/10">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "96%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  />

                </div>

              </div>

              {/* Metrics */}

              <div className="mt-10 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-white p-5">

                  <IconBolt className="text-cyan-600" />

                  <p className="mt-3 text-sm text-slate-500">
                    Keywords
                  </p>

                  <h3 className="text-3xl font-black">
                    98%
                  </h3>

                </div>

                <div className="rounded-2xl bg-white p-5">

                  <IconBrain className="text-violet-600" />

                  <p className="mt-3 text-sm text-slate-500">
                    AI Score
                  </p>

                  <h3 className="text-3xl font-black">
                    95%
                  </h3>

                </div>

                <div className="rounded-2xl bg-white p-5">

                  <p className="text-sm text-slate-500">
                    Parsing
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-emerald-600">
                    PASS
                  </h3>

                </div>

                <div className="rounded-2xl bg-white p-5">

                  <p className="text-sm text-slate-500">
                    Recruiter Match
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-blue-600">
                    94%
                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}