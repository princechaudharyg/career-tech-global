"use client";

import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconRocket,
  IconCalendarEvent,
  IconFileCv,
  IconBrandLinkedin,
  IconRobot,
} from "@tabler/icons-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[42px] border border-white/10 bg-white/10 p-14 text-center backdrop-blur-2xl shadow-[0_40px_120px_rgba(6,182,212,0.15)]"
        >
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl">
            <IconRocket size={46} />
          </div>

          <h2 className="mt-10 text-5xl font-black leading-tight text-white lg:text-6xl">
            Ready To Accelerate
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Your Career?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Join Career Tech Global LLC and get everything you need to
            land your dream job — ATS Resume, LinkedIn Branding,
            AI Mock Interviews, Career Coaching and Placement Support.
          </p>

          {/* Features Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                <IconFileCv size={28} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                ATS Resume
              </h3>
              <p className="mt-3 text-slate-400">
                Optimized for recruiters
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <IconBrandLinkedin size={28} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                LinkedIn Branding
              </h3>
              <p className="mt-3 text-slate-400">
                Professional profile makeover
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                <IconRobot size={28} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                AI Mock Interviews
              </h3>
              <p className="mt-3 text-slate-400">
                Practice with AI feedback
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="/register"
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-2xl"
            >
              Apply Now
              <IconArrowRight size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-xl"
            >
              <IconCalendarEvent size={22} />
              Book Free Consultation
            </motion.a>
          </div>

          <p className="mt-10 text-sm text-slate-400">
            No hidden fees • Expert Mentors • Lifetime Career Support
          </p>
        </motion.div>
      </div>
    </section>
  );
}