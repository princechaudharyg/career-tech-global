"use client";

import { motion } from "framer-motion";
import {
  IconBrain,
  IconBriefcase,
  IconWorld,
  IconRocket,
  IconCertificate,
  IconUsers,
} from "@tabler/icons-react";

const features = [
  {
    title: "Industry Designed Curriculum",
    description:
      "Every program is built with practical industry requirements, ensuring learners develop job-ready technical skills.",
    icon: IconBrain,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Career-Focused Learning",
    description:
      "From beginner to professional, our learning paths are structured to maximize employability and career growth.",
    icon: IconRocket,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Expert Mentors",
    description:
      "Learn directly from experienced professionals working in leading global technology companies.",
    icon: IconUsers,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Placement Assistance",
    description:
      "Resume optimization, LinkedIn branding, mock interviews and dedicated placement guidance.",
    icon: IconBriefcase,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Industry Certifications",
    description:
      "Earn certifications that strengthen your portfolio and improve your career opportunities.",
    icon: IconCertificate,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Global Opportunities",
    description:
      "Prepare for remote and international technology careers with globally relevant skills.",
    icon: IconWorld,
    color: "from-sky-500 to-cyan-600",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            Why Choose Career Tech Global
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            More Than A Course

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              A Complete Career Ecosystem

            </span>

          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-300">

            We combine world-class education, mentorship,
            real projects and career services to prepare
            professionals for tomorrow's technology industry.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                  duration: .5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/10"
              >

                <div
                  className={`inline-flex rounded-3xl bg-gradient-to-r ${feature.color} p-5 text-white shadow-xl`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-8 text-2xl font-black text-white">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {feature.description}
                </p>

                <div
                  className={`mt-8 h-2 w-20 rounded-full bg-gradient-to-r ${feature.color}`}
                />

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}