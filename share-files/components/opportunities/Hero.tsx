"use client";

import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBrain,
  IconCheck,
  IconTargetArrow,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#061326] pb-20 pt-32 text-white lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20 xl:px-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Opportunity intelligence
          </span>

          <h1 className="mt-7 max-w-3xl text-[clamp(3rem,6vw,6.2rem)] font-black leading-[0.92] tracking-[-0.06em]">
            Find the gap
            <br />
            between you and
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              your next role.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Discover opportunities based on your skills, career goals and
            readiness—not just job titles.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="inline-flex items-center gap-2">
              <IconCheck size={16} className="text-emerald-400" />
              Skill-based matching
            </span>

            <span className="inline-flex items-center gap-2">
              <IconCheck size={16} className="text-emerald-400" />
              Honest skill gaps
            </span>

            <span className="inline-flex items-center gap-2">
              <IconCheck size={16} className="text-emerald-400" />
              Clear next steps
            </span>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[30px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-2xl sm:p-7"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                Your opportunity profile
              </p>

              <h2 className="mt-2 text-2xl font-black">
                AI Engineer
              </h2>
            </div>

            <div className="rounded-2xl bg-cyan-500 p-3">
              <IconTargetArrow size={27} />
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-5 text-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  Current match
                </p>

                <p className="mt-1 text-4xl font-black text-slate-950">
                  72%
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                <IconBrain size={25} />
              </div>
            </div>

            <div className="mt-5 h-2.5 rounded-full bg-slate-100">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Strong skills
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "SQL", "Machine Learning"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-amber-50 p-3">
              <p className="text-xs font-bold text-amber-700">
                Your next best action
              </p>

              <p className="mt-1 text-sm font-semibold text-amber-900">
                Improve Cloud Deployment skills
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("opportunity-filters")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-bold transition hover:scale-[1.02]"
          >
            Build my opportunity profile
            <IconArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}