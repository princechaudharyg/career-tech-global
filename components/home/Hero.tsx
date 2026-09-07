"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconRocket } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              <IconRocket size={18} />
              Launching Soon
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900 lg:text-8xl">
              Ready To
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Hire Talent
              </span>
            </h1>

            <p className="mt-8 text-2xl leading-9 text-slate-600">
              We're building the future of tech hiring.
              <br />
              Launching soon - get early access!
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="/programs"
                className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 font-semibold text-white transition hover:scale-105"
              >
                Explore Programs
                <IconArrowRight size={20} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-8 py-5 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}