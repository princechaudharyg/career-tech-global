"use client";

import { motion } from "framer-motion";
import {
  IconTrendingUp,
  IconRobot,
  IconStarFilled,
  IconBriefcase,
} from "@tabler/icons-react";

export default function FloatingCards() {
  return (
    <>
      {/* Salary */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -left-20 top-16 hidden rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-2xl lg:block"
      >
        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-emerald-500/20 p-3">
            <IconTrendingUp
              size={28}
              className="text-emerald-400"
            />
          </div>

          <div>

            <p className="text-sm text-slate-300">
              Average Salary
            </p>

            <h4 className="text-3xl font-black text-white">
              $185K
            </h4>

          </div>

        </div>
      </motion.div>

      {/* AI Mentor */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -right-20 top-36 hidden rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-2xl lg:block"
      >
        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-cyan-500/20 p-3">
            <IconRobot
              size={28}
              className="text-cyan-300"
            />
          </div>

          <div>

            <p className="text-sm text-slate-300">
              AI Mentor
            </p>

            <h4 className="font-black text-white">
              Available 24×7
            </h4>

          </div>

        </div>
      </motion.div>

      {/* Rating */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-24 -left-14 hidden rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur-2xl lg:block"
      >
        <div className="flex items-center gap-3">

          <IconStarFilled
            size={26}
            className="fill-yellow-400 text-yellow-400"
          />

          <div>

            <h4 className="text-2xl font-black text-white">
              4.9
            </h4>

            <p className="text-sm text-slate-300">
              Student Rating
            </p>

          </div>

        </div>
      </motion.div>

      {/* Live Hiring */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 px-8 py-5 backdrop-blur-2xl lg:flex"
      >
        <div className="flex items-center gap-4">

          <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />

          <IconBriefcase
            size={24}
            className="text-cyan-300"
          />

          <div>

            <h4 className="font-bold text-white">
              150+ Active Hiring Partners
            </h4>

            <p className="text-sm text-slate-300">
              Google • Amazon • Microsoft • NVIDIA
            </p>

          </div>

        </div>
      </motion.div>
    </>
  );
}