"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconArrowRight,
  IconSparkles,
  IconRocket,
  IconBriefcase,
  IconCertificate,
  IconUsers,
IconHeartHandshake,
  IconTrendingUp,
  IconWallet,
} from "@tabler/icons-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-32">
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-5 py-2 shadow-md">
              <IconSparkles size={18} className="text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">
                About Career Tech Global LLC
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
              Building
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Future Technology
              </span>
              Leaders
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Career Tech Global LLC empowers ambitious learners to
              launch successful careers in Artificial Intelligence,
              Data Science, Cyber Security, Cloud Computing and
              emerging technologies through industry-focused learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
              >
                Explore Programs
                <IconArrowRight size={20} />
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Book Consultation
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <IconRocket className="text-cyan-600" />
                <span className="font-medium">Live Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <IconCertificate className="text-cyan-600" />
                <span className="font-medium">Career Focused</span>
              </div>
              <div className="flex items-center gap-3">
                <IconBriefcase className="text-cyan-600" />
                <span className="font-medium">Placement Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[36px] border border-white/60 bg-white/80 p-10 shadow-[0_35px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <h3 className="text-3xl font-black text-slate-900">
                What We Offer
              </h3>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                    <IconUsers size={24} />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-slate-900">
                    Students
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Growing community
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                   <IconHeartHandshake size={24} />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-slate-900">
                    Partners
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Industry network
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <IconTrendingUp size={24} />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-slate-900">
                    Career Growth
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Placement assistance
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                    <IconWallet size={24} />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-slate-900">
                    ROI
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Career investment
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
                <p className="text-sm opacity-80">Our Mission</p>
                <h4 className="mt-3 text-2xl font-black leading-snug">
                  Empower learners with industry-ready skills and
                  connect them with global career opportunities.
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}