"use client";

import { motion } from "framer-motion";
import {
  IconTarget,
  IconBulb,
  IconRocket,
  IconCircleCheckFilled,
} from "@tabler/icons-react";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-100 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative"
          >

            <div className="rounded-[36px] bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-10 text-white shadow-[0_30px_80px_rgba(6,182,212,.25)]">

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                Our Story
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight">
                From Vision
                <br />
                To Global Impact
              </h2>

              <p className="mt-8 text-lg leading-9 text-cyan-50">
                We started with one mission —
                to bridge the gap between education
                and employment through practical,
                industry-focused technology training.
              </p>

              <div className="mt-12 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-white/20 p-3">
                    <IconTarget size={26} />
                  </div>

                  <div>

                    <h4 className="font-bold">
                      Mission Driven
                    </h4>

                    <p className="text-cyan-100">
                      Career First Education
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-white/20 p-3">
                    <IconRocket size={26} />
                  </div>

                  <div>

                    <h4 className="font-bold">
                      Industry Ready
                    </h4>

                    <p className="text-cyan-100">
                      Practical Learning Experience
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
              Who We Are
            </span>

            <h2 className="mt-8 text-5xl font-black text-slate-900">
              Building Careers,
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Not Just Courses.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Career Tech Global LLC was founded with the belief that
              education should directly lead to career opportunities.
              Traditional learning often focuses on theory, while the
              industry demands practical skills and real experience.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Our programs combine live mentorship, real-world projects,
              AI-powered learning, resume optimization, interview
              preparation and dedicated placement support into one
              complete career transformation platform.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Live Instructor-Led Learning",
                "Real Industry Projects",
                "AI Powered Career Support",
                "Resume & LinkedIn Optimization",
                "Interview Preparation",
                "Placement Assistance",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <IconCircleCheckFilled
                    size={22}
                    className="text-emerald-500"
                  />

                  <span className="text-lg font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 rounded-[28px] border border-cyan-100 bg-cyan-50 p-8">

              <div className="flex items-start gap-4">

                <div className="rounded-2xl bg-cyan-500 p-3 text-white">
                  <IconBulb size={28} />
                </div>

                <div>

                  <h3 className="text-2xl font-black text-slate-900">
                    Our Philosophy
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    Every learner deserves access to world-class education,
                    hands-on experience and career opportunities regardless
                    of their background.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}