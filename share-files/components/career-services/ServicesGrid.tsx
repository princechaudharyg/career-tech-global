"use client";

import { motion } from "framer-motion";
import {
  IconFileCv,
  IconBrandLinkedin,
  IconMessageChatbot,
  IconBriefcase,
  IconTargetArrow,
  IconCurrencyDollar,
} from "@tabler/icons-react";

const services = [
  {
    title: "ATS Resume Optimization",
    description:
      "Transform your resume into an ATS-friendly document that gets noticed by recruiters.",
    icon: IconFileCv,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "LinkedIn Branding",
    description:
      "Build a recruiter-focused LinkedIn profile that increases profile views and opportunities.",
    icon: IconBrandLinkedin,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Mock Interviews",
    description:
      "Practice real technical and HR interviews with detailed feedback from experts.",
    icon: IconMessageChatbot,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    title: "Career Coaching",
    description:
      "Personalized mentorship to help you choose the right career path and job strategy.",
    icon: IconTargetArrow,
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Placement Assistance",
    description:
      "Access hiring partners, job referrals and interview scheduling support.",
    icon: IconBriefcase,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Salary Negotiation",
    description:
      "Learn how to confidently negotiate compensation and maximize your offer.",
    icon: IconCurrencyDollar,
    color: "from-sky-500 to-blue-700",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Premium Career Services
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">

            Everything Required
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              To Get Hired Faster
            </span>

          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">

            We don't just teach technology.
            We help you build a complete career profile
            that recruiters love.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:border-cyan-300 hover:shadow-2xl"
              >

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${service.color} p-5 text-white shadow-lg`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button
                  className={`mt-8 rounded-2xl bg-gradient-to-r ${service.color} px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105`}
                >
                  Learn More →
                </button>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}