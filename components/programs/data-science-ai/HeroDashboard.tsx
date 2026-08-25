"use client";

import { motion } from "framer-motion";
import {
  IconBrain,
  IconTrendingUp,
  IconCode,
  IconSparkles,
  IconUsers,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[560px]"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[40px] bg-cyan-500/20 blur-3xl" />

      {/* Glass Card */}

      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.35)]">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-300">
              AI Learning Dashboard
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Career Progress
            </h3>

          </div>

          <div className="rounded-2xl bg-cyan-500/20 p-4">

            <IconBrain
              size={34}
              className="text-cyan-300"
            />

          </div>

        </div>

        {/* Progress */}

        <div className="mt-10">

          <div className="mb-3 flex items-center justify-between">

            <span className="font-medium text-slate-300">
              Program Completion
            </span>

            <span className="font-bold text-cyan-300">
              82%
            </span>

          </div>

          <div className="h-4 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{
                duration: 1.4,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            />

          </div>

        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-2 gap-5">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center gap-3">

              <IconCode
                size={22}
                className="text-cyan-400"
              />

              <span className="text-slate-300">
                Projects
              </span>

            </div>

            <h4 className="mt-4 text-3xl font-black text-white">
              12+
            </h4>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="flex items-center gap-3">

              <IconUsers
                size={22}
                className="text-cyan-400"
              />

              <span className="text-slate-300">
                Mentors
              </span>

            </div>

            <h4 className="mt-4 text-3xl font-black text-white">
              30+
            </h4>

          </div>

        </div>

        {/* Skills */}

        <div className="mt-10 space-y-5">

          {[
            ["Python", "95%"],
            ["Machine Learning", "88%"],
            ["Deep Learning", "80%"],
            ["Generative AI", "92%"],
          ].map(([skill, value]) => (

            <div key={skill}>

              <div className="mb-2 flex justify-between">

                <span className="text-slate-300">
                  {skill}
                </span>

                <span className="font-semibold text-cyan-300">
                  {value}
                </span>

              </div>

              <div className="h-2 rounded-full bg-white/10">

                <div
                  style={{ width: value }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Card */}

        <div className="mt-10 flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">

          <div>

            <p className="text-sm text-slate-300">
              Placement Status
            </p>

            <h4 className="mt-1 text-xl font-black text-white">
              Interview Ready
            </h4>

          </div>

          <IconCircleCheckFilled
            size={42}
            className="text-emerald-400"
          />

        </div>

        {/* Salary */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-center">

          <p className="text-cyan-100">
            Average Salary
          </p>

          <h2 className="mt-2 text-5xl font-black text-white">
            $185K
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2 text-cyan-100">

            <IconTrendingUp size={18} />

            <span>Top Hiring Companies</span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}