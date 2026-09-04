"use client";

import { motion } from "framer-motion";
import {
  IconUsers,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconCurrencyDollar,
  IconArrowUpRight,
} from "@tabler/icons-react";

const stats = [
  {
    value: "250+",
    title: "Hiring Partners",
    description: "Global companies actively hiring our learners.",
    icon: IconBuildingSkyscraper,
    color: "from-cyan-500 to-blue-600",
  },
  {
    value: "95%",
    title: "Placement Assistance",
    description: "Career guidance from resume to final interview.",
    icon: IconBriefcase,
    color: "from-emerald-500 to-cyan-600",
  },
  {
    value: "15,000+",
    title: "Students Trained",
    description: "Professionals transformed across multiple domains.",
    icon: IconUsers,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    value: "$185K",
    title: "Highest Salary Potential",
    description: "Top compensation achieved by our learners.",
    icon: IconCurrencyDollar,
    color: "from-orange-500 to-red-500",
  },
];

export default function SuccessStats() {
  return (
    <section className="relative overflow-hidden bg-white py-28">

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Career Impact
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">

            Numbers That
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Speak For Themselves
            </span>

          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            We focus on measurable career outcomes, industry exposure,
            and long-term professional success.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:border-cyan-300 hover:shadow-2xl"
              >

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${item.color} p-5 text-white shadow-xl`}
                >
                  <Icon size={36} />
                </div>

                <h3 className="mt-8 text-5xl font-black text-slate-900">
                  {item.value}
                </h3>

                <h4 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-600">

                  Learn More

                  <IconArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-cyan-500 to-blue-600 p-12 text-center text-white shadow-2xl"
        >

          <h3 className="text-4xl font-black">
            Your Success Is Our Mission
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-50">
            Every learner receives personalized career guidance,
            recruiter support, interview preparation and lifetime
            professional mentorship.
          </p>

        </motion.div>

      </div>

    </section>
  );
}