"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBrain,
  IconBriefcase,
  IconCheck,
  IconScale,
  IconShieldCheck,
  IconTargetArrow,
} from "@tabler/icons-react";

const programs = [
  {
    id: "data-science-ai",
    title: "Data Science & AI",
    label: "AI Career Program",
    icon: IconBrain,
    iconClass: "bg-violet-600",
    softClass: "bg-violet-50",
    borderClass: "border-violet-200",
    textClass: "text-violet-700",
    training:
      "structured training from Python and Machine Learning to Deep Learning, LLMs and deployment",
    projects:
      "guided AI projects, ML projects and an end-to-end Generative AI portfolio project",
    placement:
      "ATS resume optimization, LinkedIn branding, mock interviews and role-specific placement guidance",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLMs",
      "Deployment",
    ],
    careers: [
      "AI Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    label: "Security Career Program",
    icon: IconShieldCheck,
    iconClass: "bg-emerald-600",
    softClass: "bg-emerald-50",
    borderClass: "border-emerald-200",
    textClass: "text-emerald-700",
    training:
      "practical training in Networking, Linux, Ethical Hacking, SOC operations, SIEM and Cloud Security",
    projects:
      "security labs, incident investigation cases, vulnerability assessments and SOC-based projects",
    placement:
      "security resume preparation, technical interview practice and placement support",
    skills: [
      "Networking",
      "Linux",
      "Ethical Hacking",
      "SOC",
      "SIEM",
      "Cloud Security",
    ],
    careers: [
      "Cyber Security Analyst",
      "SOC Analyst",
      "Security Engineer",
    ],
  },
  {
    id: "grc-ai",
    title: "GRC & AI",
    label: "Governance Career Program",
    icon: IconScale,
    iconClass: "bg-amber-600",
    softClass: "bg-amber-50",
    borderClass: "border-amber-200",
    textClass: "text-amber-700",
    training:
      "practical training in Governance, Risk, Compliance, ISO frameworks, AI governance and risk management",
    projects:
      "risk registers, policy documentation, compliance mapping and AI governance case studies",
    placement:
      "GRC-focused resume preparation, case study practice, interview coaching and role matching support",
    skills: [
      "Governance",
      "Risk Management",
      "Compliance",
      "ISO Frameworks",
      "AI Governance",
      "Auditing",
    ],
    careers: [
      "GRC Analyst",
      "Risk Analyst",
      "Compliance Analyst",
    ],
  },
];

export default function FeaturedPrograms() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-700">
            <IconTargetArrow size={15} />
            Our flagship programs
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Build skills for the career you want.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Choose your career path, learn through practical training, build
            real-world projects, and prepare for opportunities with dedicated
            career support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.id}
                id={program.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-[30px] border ${program.borderClass} bg-white p-6 shadow-lg shadow-slate-200/60 transition hover:shadow-2xl sm:p-7`}
              >
                <div
                  className={`absolute right-0 top-0 h-36 w-36 translate-x-10 -translate-y-10 rounded-full ${program.softClass}`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${program.iconClass}`}
                    >
                      <Icon size={27} />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider ${program.softClass} ${program.textClass}`}
                    >
                      {program.label}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-slate-950">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Our training provides{" "}
                    <span className="font-bold text-slate-800">
                      {program.training}
                    </span>
                    .
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <p className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Skills you will learn
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {program.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-lg px-2.5 py-1.5 text-[11px] font-bold ${program.softClass} ${program.textClass}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`mt-6 rounded-2xl border ${program.borderClass} ${program.softClass} p-4`}
                  >
                    <p
                      className={`text-xs font-black uppercase tracking-wider ${program.textClass}`}
                    >
                      Practical projects
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {program.projects}.
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-900">
                      <IconBriefcase size={15} />
                      Career outcomes
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {program.careers.map((career) => (
                        <span
                          key={career}
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-slate-600"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-wider text-cyan-300">
                      Placement support
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      {program.placement}.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-black text-white transition hover:opacity-90 ${program.iconClass}`}
                  >
                    Explore Program
                    <IconArrowRight size={18} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[30px] bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-400">
                Learn. Build. Get Hired.
              </p>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Prepare for opportunities with practical skills and projects.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Build your portfolio, improve your interview confidence, and
                get career-focused guidance through your learning journey.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 text-sm font-black text-white transition hover:bg-cyan-400"
            >
              Enroll Now
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}