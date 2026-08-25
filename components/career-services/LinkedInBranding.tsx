"use client";

import { motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconEye,
  IconUsers,
  IconBriefcase,
  IconTrendingUp,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export default function LinkedInBranding() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT DASHBOARD */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-500">
                    LinkedIn Profile
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-slate-900">
                    Recruiter Optimized
                  </h2>

                </div>

                <div className="rounded-2xl bg-blue-600 p-4 text-white">

                  <IconBrandLinkedin size={34} />

                </div>

              </div>

              {/* SSI */}

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

                <p className="text-sm opacity-80">
                  LinkedIn SSI Score
                </p>

                <h3 className="mt-2 text-6xl font-black">
                  92
                </h3>

                <div className="mt-5 h-3 rounded-full bg-white/20">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="h-full rounded-full bg-white"
                  />

                </div>

              </div>

              {/* Metrics */}

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-slate-200 p-5">

                  <IconEye className="text-cyan-600" />

                  <p className="mt-3 text-sm text-slate-500">
                    Weekly Views
                  </p>

                  <h3 className="text-3xl font-black">
                    2.8K
                  </h3>

                </div>

                <div className="rounded-2xl border border-slate-200 p-5">

                  <IconUsers className="text-blue-600" />

                  <p className="mt-3 text-sm text-slate-500">
                    Recruiters
                  </p>

                  <h3 className="text-3xl font-black">
                    430+
                  </h3>

                </div>

                <div className="rounded-2xl border border-slate-200 p-5">

                  <IconBriefcase className="text-emerald-600" />

                  <p className="mt-3 text-sm text-slate-500">
                    Job Matches
                  </p>

                  <h3 className="text-3xl font-black">
                    185
                  </h3>

                </div>

                <div className="rounded-2xl border border-slate-200 p-5">

                  <IconTrendingUp className="text-violet-600" />

                  <p className="mt-3 text-sm text-slate-500">
                    Growth
                  </p>

                  <h3 className="text-3xl font-black text-emerald-600">
                    +320%
                  </h3>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              LinkedIn Branding
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">

              Build A Profile
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Recruiters Can't Ignore
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              Your LinkedIn profile is your digital resume.
              We optimize every section to increase recruiter
              visibility and interview opportunities.

            </p>

            <div className="mt-10 space-y-6">

              {[
                "Professional Headline Optimization",
                "Keyword Rich About Section",
                "Featured Projects",
                "Recruiter Search Optimization",
                "Networking Strategy",
                "Personal Branding",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <IconCircleCheckFilled
                    className="text-emerald-500"
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}