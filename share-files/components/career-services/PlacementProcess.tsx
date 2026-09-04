 "use client";

import { motion } from "framer-motion";
import {
  IconClipboardCheck,
  IconFileCv,
  IconSearch,
  IconMessage2,
  IconBriefcase,
  IconCircleCheck,
} from "@tabler/icons-react";

const steps = [
  {
    step: "01",
    title: "Career Assessment",
    description:
      "Understand your current skills, career goals and create a personalized roadmap.",
    icon: IconClipboardCheck,
    color: "from-cyan-500 to-blue-600",
  },
  {
    step: "02",
    title: "Resume Optimization",
    description:
      "Build an ATS-friendly resume that gets shortlisted by recruiters.",
    icon: IconFileCv,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: "03",
    title: "Recruiter Matching",
    description:
      "Your profile is matched with hiring companies and active recruiters.",
    icon: IconSearch,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    step: "04",
    title: "Interview Preparation",
    description:
      "Mock interviews, HR rounds and technical interview preparation.",
    icon: IconMessage2,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "05",
    title: "Interview Scheduling",
    description:
      "Get interview opportunities with global technology companies.",
    icon: IconBriefcase,
    color: "from-emerald-500 to-cyan-600",
  },
  {
    step: "06",
    title: "Offer & Career Support",
    description:
      "Receive offer guidance, salary negotiation and lifetime career support.",
    icon: IconCircleCheck,
    color: "from-sky-500 to-blue-700",
  },
];

export default function PlacementProcess() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-200 blur-[140px] opacity-40" />
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-200 blur-[140px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Placement Process
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Your Roadmap To
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              A Successful Tech Career
            </span>
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Our structured placement process ensures you are prepared from
            learning to landing your dream job.
          </p>
        </motion.div>

        <div className="relative mt-24">

          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600 lg:block" />

          <div className="space-y-12">

            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >

                  <div
                    className={`hidden lg:flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${item.color} text-white shadow-xl`}
                  >
                    <Icon size={30} />
                  </div>

                  <div className="flex-1 rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl">

                    <span className="text-sm font-black tracking-[0.25em] text-slate-400">
                      STEP {item.step}
                    </span>

                    <h3 className="mt-4 text-3xl font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}