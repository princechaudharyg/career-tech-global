"use client";

import { motion } from "framer-motion";
import {
  IconCheck,
  IconStarFilled,
} from "@tabler/icons-react";

const plans = [
  {
    name: "Resume Pro",
    price: "$99",
    description: "Perfect for professionals looking to improve their resume.",
    button: "Get Started",
    featured: false,
    features: [
      "ATS Optimized Resume",
      "Resume Review",
      "LinkedIn Optimization",
      "PDF & Word Formats",
      "1 Revision",
    ],
  },

  {
    name: "Career Accelerator",
    price: "$299",
    description: "Most popular package for serious job seekers.",
    button: "Start Today",
    featured: true,
    features: [
      "Everything in Resume Pro",
      "LinkedIn Branding",
      "AI Mock Interviews",
      "Interview Preparation",
      "Job Search Strategy",
      "3 Revisions",
      "Priority Support",
    ],
  },

  {
    name: "Premium Placement",
    price: "$599",
    description: "Complete career transformation with placement assistance.",
    button: "Apply Now",
    featured: false,
    features: [
      "Everything in Career Accelerator",
      "Unlimited Resume Updates",
      "Dedicated Career Coach",
      "Direct Recruiter Referrals",
      "Lifetime Support",
      "Salary Negotiation",
      "Priority Placement Assistance",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            Pricing
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Choose Your Career Package
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Flexible plans designed for students and professionals at every stage.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-[36px] border p-10 shadow-2xl transition-all duration-300 ${
                plan.featured
                  ? "border-cyan-400 bg-gradient-to-b from-cyan-600 to-blue-700 text-white scale-105"
                  : "border-white/10 bg-white/10 backdrop-blur-xl text-white"
              }`}
            >

              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-sm font-bold text-cyan-700 flex items-center gap-2">
                  <IconStarFilled size={16} />
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>

              <p className="mt-4 text-slate-200">
                {plan.description}
              </p>

              <h2 className="mt-8 text-6xl font-black">
                {plan.price}
              </h2>

              <button
                className={`mt-10 w-full rounded-2xl py-4 text-lg font-bold transition ${
                  plan.featured
                    ? "bg-white text-cyan-700 hover:scale-105"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105"
                }`}
              >
                {plan.button}
              </button>

              <div className="my-10 h-px bg-white/20" />

              <div className="space-y-5">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <IconCheck
                      className="text-emerald-400"
                      size={20}
                    />

                    <span>
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}