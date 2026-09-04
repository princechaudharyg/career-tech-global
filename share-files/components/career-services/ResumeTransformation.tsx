"use client";

import { motion } from "framer-motion";
import {
  IconFileCv,
  IconArrowRight,
  IconCircleXFilled,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export default function ResumeTransformation() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Resume Transformation
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">

            From Average Resume

            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

              To Interview Magnet

            </span>

          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            Our career experts rebuild your resume to meet recruiter
            expectations and modern ATS systems.

          </p>

        </motion.div>

        {/* Comparison */}

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-3">

          {/* Before */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-red-200 bg-red-50 p-10 shadow-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-red-500 p-4 text-white">

                <IconFileCv size={34} />

              </div>

              <div>

                <p className="text-sm text-red-500">
                  Before
                </p>

                <h3 className="text-3xl font-black text-slate-900">
                  Generic Resume
                </h3>

              </div>

            </div>

            <ul className="mt-10 space-y-5">

              {[
                "Low ATS Score",
                "Missing Keywords",
                "Poor Formatting",
                "No Recruiter Response",
                "Weak Project Section",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3"
                >

                  <IconCircleXFilled
                    className="text-red-500"
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

            <div className="mt-10 rounded-2xl bg-red-100 p-6 text-center">

              <p className="text-sm text-slate-600">

                ATS Resume Score

              </p>

              <h3 className="mt-2 text-6xl font-black text-red-600">
                34%
              </h3>

            </div>

          </motion.div>

          {/* Arrow */}

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl">

              <IconArrowRight size={44} />

            </div>

          </motion.div>

          {/* After */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-10 shadow-xl"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-emerald-500 p-4 text-white">

                <IconFileCv size={34} />

              </div>

              <div>

                <p className="text-sm text-emerald-500">
                  After
                </p>

                <h3 className="text-3xl font-black text-slate-900">
                  Recruiter Ready
                </h3>

              </div>

            </div>

            <ul className="mt-10 space-y-5">

              {[
                "ATS Optimized",
                "Industry Keywords",
                "Modern Layout",
                "Recruiter Friendly",
                "Project Focused",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3"
                >

                  <IconCircleCheckFilled
                    className="text-emerald-500"
                  />

                  <span className="text-lg text-slate-700">
                    {item}
                  </span>

                </li>

              ))}

            </ul>

            <div className="mt-10 rounded-2xl bg-emerald-100 p-6 text-center">

              <p className="text-sm text-slate-600">

                ATS Resume Score

              </p>

              <h3 className="mt-2 text-6xl font-black text-emerald-600">
                96%
              </h3>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}