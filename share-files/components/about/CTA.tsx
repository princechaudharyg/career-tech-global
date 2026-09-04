"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <h2 className="text-5xl font-black text-white lg:text-6xl">

            Ready To Build
            <span className="block">
              Your Dream Tech Career?
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-cyan-100">

            Join Career Tech Global LLC and learn directly from
            industry experts through live projects, mentorship,
            career coaching and placement assistance.

          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/programs"
              className="flex items-center gap-3 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-cyan-700 shadow-2xl transition duration-300 hover:scale-105"
            >
              Explore Programs

              <IconArrowRight size={22} />

            </Link>

            <Link
              href="/contact"
              className="rounded-2xl border border-white/30 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
            >
              Book Free Consultation
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}