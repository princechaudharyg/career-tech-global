"use client";
import { motion } from "framer-motion";
import { IconQuote, IconHeart } from "@tabler/icons-react";

export default function FounderStory() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-500 to-blue-600 blur-2xl opacity-30" />

              <div className="relative aspect-square w-full max-w-md rounded-[40px] bg-gradient-to-br from-cyan-100 to-blue-100 p-8">
                <img
                  src="/ceo.jpeg"
                  alt="Founder"
                  className="h-full w-full rounded-[32px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              <IconHeart size={18} />
              Our Story
            </span>

            <h2 className="mt-8 text-4xl font-black text-slate-900 lg:text-5xl">
              Building Career Tech Global
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                With Purpose
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Hi, I&apos;m the founder of Career Tech Global LLC. I started this
                company with a simple mission: to help professionals like you
                break into high-growth tech fields without the traditional
                barriers.
              </p>
              <p>
                After seeing too many talented people struggle with outdated
                courses and empty promises, I decided to build something
                different. A platform that focuses on real skills, honest
                guidance, and genuine career support.
              </p>
              <p>
                We&apos;re a young company, but we&apos;re committed to transparency,
                quality, and your success. Every feature, every course, and
                every service is built with one goal: helping you land your
                dream job.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <IconQuote size={32} className="text-cyan-500" />
              <p className="text-lg font-bold text-slate-700 italic">
                &quot;Your success is the only metric that matters to us.&quot;
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/about"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Learn More About Us
              </a>
              <a
                href="/contact"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}