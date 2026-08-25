"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  IconBriefcase,
  IconFileCv,
  IconBrandLinkedin,
  IconArrowRight,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

const services = [
  "ATS Resume Optimization",
  "LinkedIn Branding",
  "Mock Interviews",
  "Placement Assistance",
];

export default function CareerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 pt-32 pb-20 lg:pt-36 lg:pb-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:px-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[680px]"
        >
          {/* Label */}
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Career Services
          </span>

          {/* Heading */}
          <h1 className="mt-6 max-w-[650px] text-[clamp(2.8rem,5vw,5.8rem)] font-black leading-[0.94] tracking-[-0.045em] text-white">
            Everything You
            <br />
            Need
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              To Land Your
              <br />
              Dream Job
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[610px] text-base leading-7 text-slate-300 sm:text-lg">
            From ATS Resume Optimization and LinkedIn Branding to Mock
            Interviews and Placement Assistance — we prepare you for
            high-paying global careers.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl transition duration-200 hover:scale-[1.02] hover:shadow-cyan-500/20 sm:px-7"
            >
              Book Consultation
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition duration-200 hover:bg-white/20 sm:px-7"
            >
              Explore Programs
              <IconArrowRight size={18} stroke={2} />
            </Link>
          </div>

          {/* Services List */}
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {services.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <IconCircleCheckFilled
                  size={20}
                  stroke={2}
                  className="shrink-0 text-emerald-400"
                />

                <span className="text-sm text-slate-200 sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="w-full lg:pl-3"
        >
          <div className="mx-auto w-full max-w-[600px] rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-7 lg:rounded-[32px]">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">
                  Career Dashboard
                </p>

                <h2 className="mt-1.5 text-2xl font-black text-white sm:text-3xl">
                  Job Ready
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-lg sm:h-16 sm:w-16">
                <IconBriefcase size={30} stroke={2} />
              </div>
            </div>

            {/* Resume Score */}
            <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-white sm:mt-7 sm:rounded-3xl sm:p-6">
              <p className="text-sm font-medium opacity-80">
                ATS Resume Score
              </p>

              <h3 className="mt-1 text-5xl font-black tracking-tight sm:text-6xl">
                96%
              </h3>

              <div className="mt-4 h-2.5 rounded-full bg-white/20">
                <div className="h-full w-[96%] rounded-full bg-white" />
              </div>
            </div>

            {/* Dashboard Stats */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
              {/* Resume */}
              <div className="rounded-2xl bg-white p-4 sm:p-5">
                <IconFileCv
                  size={25}
                  stroke={2}
                  className="text-cyan-600"
                />

                <p className="mt-2.5 text-xs text-slate-500 sm:text-sm">
                  Resume
                </p>

                <h3 className="mt-0.5 text-2xl font-black text-slate-900 sm:text-3xl">
                  Ready
                </h3>
              </div>

              {/* LinkedIn */}
              <div className="rounded-2xl bg-white p-4 sm:p-5">
                <IconBrandLinkedin
                  size={25}
                  stroke={2}
                  className="text-blue-600"
                />

                <p className="mt-2.5 text-xs text-slate-500 sm:text-sm">
                  LinkedIn SSI
                </p>

                <h3 className="mt-0.5 text-2xl font-black text-slate-900 sm:text-3xl">
                  92
                </h3>
              </div>

              {/* Interviews */}
              <div className="rounded-2xl bg-white p-4 sm:p-5">
                <IconBriefcase
                  size={25}
                  stroke={2}
                  className="text-emerald-600"
                />

                <p className="mt-2.5 text-xs text-slate-500 sm:text-sm">
                  Interviews
                </p>

                <h3 className="mt-0.5 text-2xl font-black text-slate-900 sm:text-3xl">
                  18
                </h3>
              </div>

              {/* Offer Chance */}
              <div className="rounded-2xl bg-white p-4 sm:p-5">
                <p className="text-xs text-slate-500 sm:text-sm">
                  Offer Chance
                </p>

                <h3 className="mt-2 text-2xl font-black text-emerald-600 sm:text-3xl">
                  94%
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}