"use client";

import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconChartBar,
  IconCheck,
  IconGlobe,
  IconRocket,
  IconUsers,
} from "@tabler/icons-react";

const hiringEcosystem = [
  {
    number: "01",
    title: "Global Technology Companies",
    description:
      "Explore data, AI, cloud and software career directions across modern technology organizations.",
    roles: ["Data Analyst", "AI Associate", "Cloud Associate"],
    icon: IconBuildingSkyscraper,
    color: "from-cyan-400 to-blue-600",
  },
  {
    number: "02",
    title: "AI Product Teams",
    description:
      "Build skills for teams creating Machine Learning, Generative AI and intelligent software products.",
    roles: ["ML Engineer", "AI Engineer", "GenAI Developer"],
    icon: IconRocket,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    number: "03",
    title: "Cloud and Data Teams",
    description:
      "Develop practical experience with cloud platforms, data pipelines, analytics and deployment workflows.",
    roles: ["Data Engineer", "Cloud Associate", "MLOps Associate"],
    icon: IconGlobe,
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "04",
    title: "Financial Services",
    description:
      "Explore data and AI use cases across banking, fintech, risk and financial operations.",
    roles: ["Risk Analyst", "BI Analyst", "Data Scientist"],
    icon: IconChartBar,
    color: "from-emerald-500 to-cyan-600",
  },
  {
    number: "05",
    title: "Consulting and Enterprise",
    description:
      "Learn how to communicate technical solutions and support data-driven transformation projects.",
    roles: ["Technology Analyst", "Data Consultant", "AI Consultant"],
    icon: IconUsers,
    color: "from-orange-500 to-red-600",
  },
  {
    number: "06",
    title: "Startups and Scaleups",
    description:
      "Build versatile skills for fast-moving teams working across data, AI, analytics and product.",
    roles: [
      "Founding Data Hire",
      "AI Product Associate",
      "Analytics Engineer",
    ],
    icon: IconRocket,
    color: "from-pink-500 to-violet-600",
  },
];

const careerHighlights = [
  {
    icon: IconChartBar,
    title: "Role Clarity",
    description:
      "Understand the skills, projects and tools connected to your target role.",
  },
  {
    icon: IconBriefcase,
    title: "Portfolio Confidence",
    description:
      "Present practical work that communicates your ability beyond a certificate.",
  },
  {
    icon: IconGlobe,
    title: "Industry Readiness",
    description:
      "Build habits around communication, problem-solving and professional presentation.",
  },
];

const careerSupport = [
  "Role-specific project portfolio",
  "ATS-friendly resume",
  "LinkedIn profile positioning",
  "Mock technical interviews",
  "Project storytelling",
  "Job search guidance",
];

const careerJourney = [
  "Choose your target direction",
  "Build practical projects",
  "Strengthen your career profile",
  "Prepare for interviews",
];

export default function HiringPartners() {
  return (
    <section className="relative overflow-hidden bg-[#050914] py-24 sm:py-32">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.24)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Brand Header */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
              <IconBriefcase size={22} />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-white">
                Career Tech Global
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Career Opportunity Network
              </p>
            </div>
          </div>

          <p className="max-w-xs text-xs leading-5 text-slate-500 sm:text-right">
            Explore career directions, target roles and the skills employers
            commonly look for.
          </p>
        </div>

        {/* Main Heading */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              Hiring ecosystem
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl">
              Build for the roles
              <span className="text-cyan-300"> you want next.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400 lg:justify-self-end">
            Career Tech Global helps connect your learning, portfolio and job
            search with real career directions in the technology market.
          </p>
        </div>

        {/* Career Readiness Highlights */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {careerHighlights.map((item, index) => {
            const HighlightIcon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="group rounded-2xl border border-cyan-300/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <HighlightIcon size={21} />
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Opportunity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 overflow-hidden rounded-[30px] border border-cyan-300/20 bg-gradient-to-br from-[#102944] to-[#071323] p-6 shadow-2xl sm:p-8"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_18px_#34d399]" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300">
                  Opportunity feed
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Discover roles matched to your learning path.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                Browse opportunities across AI, Data, Cloud and technology
                roles. Use your readiness score to understand what to improve
                before applying.
              </p>
            </div>

            <a
              href="/open-opportunities"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Opportunities

              <IconArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* Ecosystem Cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hiringEcosystem.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-6 transition hover:border-cyan-300/30 hover:bg-white/[0.08] sm:p-7"
              >
                <div
                  className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    >
                      <ItemIcon size={26} />
                    </div>

                    <span className="text-xs font-black tracking-[0.18em] text-slate-600">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Target roles
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.roles.map((role) => (
                        <span
                          key={role}
                          className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-slate-300"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Career Support */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Career support system
            </p>

            <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Your application should show more than a certificate.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              We connect learning with practical career assets that recruiters
              and hiring teams can review.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {careerSupport.map((step) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                  <IconCheck size={18} className="text-emerald-300" />
                </div>

                <span className="text-sm font-semibold text-slate-300">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Journey */}
        <div className="mt-16 rounded-[30px] border border-white/10 bg-gradient-to-br from-[#0c1b31] to-[#07101f] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Your career journey
              </p>

              <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Turn learning into visible career progress.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Move from learning concepts to building proof of work and
                developing the confidence to pursue your next opportunity.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {careerJourney.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-sm font-bold text-slate-200">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-6 rounded-[30px] border border-white/10 bg-gradient-to-r from-cyan-500 to-blue-600 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Career-ready mindset
            </div>

            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
              Your next opportunity starts with your next project
            </p>

            <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Build your career direction with Career Tech Global.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80">
              Build practical proof of work, communicate your strengths and
              take a clearer step toward the technology roles you want to
              pursue.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-cyan-700 transition hover:scale-[1.03] hover:bg-cyan-50"
          >
            Book Career Consultation

            <IconArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}