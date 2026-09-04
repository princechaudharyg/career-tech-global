"use client";

import { motion } from "framer-motion";

import {
  IconArrowRight,
  IconBrain,
  IconBriefcase,
  IconCertificate,
  IconCheck,
  IconCloudComputing,
  IconRocket,
  IconTarget,
} from "@tabler/icons-react";

const credentials = [
  {
    title: "Microsoft Azure AI Fundamentals",
    code: "AI-900",
    issuer: "Microsoft",
    category: "Artificial Intelligence",
    type: "Certification",
    status: "Official Microsoft credential",
    icon: IconBrain,
    accent: "cyan",
    roles: [
      "AI Associate",
      "Junior Data Scientist",
      "AI Support Associate",
    ],
    why:
      "Shows that you understand core AI, Machine Learning, Computer Vision, NLP and Generative AI concepts.",
  },
  {
    title: "Microsoft Azure Data Fundamentals",
    code: "DP-900",
    issuer: "Microsoft",
    category: "Cloud Data",
    type: "Certification",
    status: "Official Microsoft credential",
    icon: IconCloudComputing,
    accent: "blue",
    roles: [
      "Data Analyst",
      "Azure Data Associate",
      "Junior BI Analyst",
    ],
    why:
      "Shows knowledge of relational data, cloud data services, analytics workloads and database fundamentals.",
  },
  {
    title: "Professional Machine Learning Engineer",
    code: "Google Cloud",
    issuer: "Google Cloud",
    category: "Machine Learning",
    type: "Certification",
    status: "Official Google Cloud credential",
    icon: IconBrain,
    accent: "violet",
    roles: [
      "Machine Learning Engineer",
      "AI Engineer",
      "ML Operations Associate",
    ],
    why:
      "Connects to designing, deploying and monitoring Machine Learning solutions in professional environments.",
  },
  {
    title: "Machine Learning Engineer",
    code: "Associate",
    issuer: "Amazon Web Services",
    category: "Cloud AI",
    type: "Certification",
    status: "Official AWS credential",
    icon: IconCloudComputing,
    accent: "orange",
    roles: [
      "AWS ML Associate",
      "Cloud AI Associate",
      "Junior MLOps Engineer",
    ],
    why:
      "Shows knowledge of Machine Learning workflows, cloud infrastructure and model deployment concepts.",
  },
  {
    title: "Machine Learning Professional",
    code: "Databricks",
    issuer: "Databricks",
    category: "Lakehouse AI",
    type: "Certification",
    status: "Official Databricks credential",
    icon: IconRocket,
    accent: "red",
    roles: [
      "Data Engineer",
      "Machine Learning Engineer",
      "Lakehouse Associate",
    ],
    why:
      "Connects to Spark, Lakehouse architecture, experiment tracking and production Machine Learning workflows.",
  },
];

const accentStyles = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-300/20",
    background: "bg-cyan-400/10",
  },
  blue: {
    text: "text-blue-300",
    border: "border-blue-300/20",
    background: "bg-blue-400/10",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-300/20",
    background: "bg-violet-400/10",
  },
  orange: {
    text: "text-orange-300",
    border: "border-orange-300/20",
    background: "bg-orange-400/10",
  },
  red: {
    text: "text-red-300",
    border: "border-red-300/20",
    background: "bg-red-400/10",
  },
};

const hiringSteps = [
  {
    number: "01",
    title: "Get noticed",
    description:
      "A recognized credential can make your skills easier to identify during resume and recruiter screening.",
    icon: IconTarget,
  },
  {
    number: "02",
    title: "Show direction",
    description:
      "Certifications help communicate which area you are targeting: AI, data, cloud or Machine Learning.",
    icon: IconBrain,
  },
  {
    number: "03",
    title: "Support your projects",
    description:
      "A credential becomes more valuable when your GitHub, portfolio and projects demonstrate the same skills.",
    icon: IconRocket,
  },
  {
    number: "04",
    title: "Build interview confidence",
    description:
      "Structured certification domains give you a clear framework for technical interview preparation.",
    icon: IconBriefcase,
  },
];

export default function Certifications() {
  return (
    <section className="relative overflow-hidden bg-[#050914] py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Brand Header */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
              <IconCertificate size={22} />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-white">
                Career Tech Global
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Career Credentials
              </p>
            </div>
          </div>

          <p className="max-w-xs text-xs leading-5 text-slate-500 sm:text-right">
            Learn the skill. Build the proof. Add the credential. Move toward
            the opportunity.
          </p>
        </div>

        {/* Heading */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
              Credentials that support your career
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl">
              Your skills become
              <span className="text-cyan-300"> easier to trust.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400 lg:justify-self-end">
            Certifications can support recruiter screening, resume credibility
            and interview conversations when they are connected to practical
            projects.
          </p>
        </div>

        {/* Career Tech Global Certificate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[34px] border border-emerald-300/20 bg-gradient-to-br from-[#0d2a2b] via-[#081b27] to-[#050914] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                <IconCheck size={14} />
                Career Tech Global credential
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                CTG / Program Certificate
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-black leading-tight text-white sm:text-5xl">
                Career Tech Global
                <br />
                Professional Certificate
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                A program certificate issued after successful completion of the
                curriculum, practical projects, assessments and final capstone.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Curriculum completed",
                  "Practical projects",
                  "Final capstone",
                  "Portfolio review",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-300"
                  >
                    <IconCheck
                      size={17}
                      className="text-emerald-400"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="relative mx-auto flex w-full max-w-[350px] items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full border border-emerald-300/10" />

              <div className="absolute h-56 w-56 rounded-full border border-cyan-300/10" />

              <motion.div
                animate={{
                  rotate: [0, 2, 0, -2, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full rotate-[-3deg] rounded-[22px] border border-emerald-200/60 bg-gradient-to-br from-white to-slate-100 p-5 text-center shadow-[0_25px_70px_rgba(0,0,0,0.5)] sm:p-7"
              >
                <div className="absolute inset-2 rounded-[16px] border border-slate-300/70" />

                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-200 bg-emerald-50 text-emerald-600">
                    <IconCertificate size={30} />
                  </div>

                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">
                    Professional Certificate
                  </p>

                  <h4 className="mt-4 text-xl font-black text-slate-900">
                    Career Tech Global
                  </h4>

                  <div className="mx-auto mt-4 h-px w-28 bg-slate-300" />

                  <p className="mt-4 text-[10px] leading-4 text-slate-500">
                    Awarded after verified completion of program requirements,
                    projects and capstone.
                  </p>

                  <div className="mt-7 flex items-end justify-between text-left">
                    <div>
                      <div className="h-px w-24 bg-slate-400" />

                      <p className="mt-1 text-[8px] font-bold uppercase text-slate-400">
                        Authorized Signature
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[8px] font-bold uppercase text-slate-400">
                        Credential ID
                      </p>

                      <p className="mt-1 text-[9px] font-black text-slate-700">
                        CTG-VERIFIED
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Why Certifications Help */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Why credentials matter
            </p>

            <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              How certifications support your job search
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              A certification does not guarantee a job. It supports your
              profile by giving recruiters, hiring managers and interviewers a
              clear signal about the skills you are targeting.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-300">
                      {step.number}
                    </span>

                    <StepIcon
                      size={21}
                      className="text-slate-500"
                    />
                  </div>

                  <h4 className="mt-6 text-lg font-black text-white">
                    {step.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Credential Registry */}
        <div className="mt-20">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Credential collection
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Credentials mapped to career directions
              </h3>
            </div>

            <p className="text-xs text-slate-500">
              05 recognized certification paths
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04]">
            {credentials.map((credential, index) => {
              const CredentialIcon = credential.icon;

              const styles =
                accentStyles[
                  credential.accent as keyof typeof accentStyles
                ];

              return (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group border-b border-white/10 p-6 transition last:border-b-0 hover:bg-white/[0.06] sm:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[64px_1fr_auto] lg:items-start">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${styles.border} ${styles.background}`}
                    >
                      <CredentialIcon
                        size={25}
                        className={styles.text}
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-xl font-black text-white">
                          {credential.title}
                        </h4>

                        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-slate-500">
                          {credential.code}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                        <span className={styles.text}>
                          {credential.issuer}
                        </span>

                        <span>•</span>

                        <span>{credential.category}</span>
                      </div>

                      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
                        {credential.why}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {credential.roles.map((role) => (
                          <span
                            key={role}
                            className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-slate-300"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-5 lg:block lg:text-right">
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider ${styles.text}`}
                      >
                        Credential
                      </span>

                      <IconArrowRight
                        size={19}
                        className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Honest Hiring Note */}
        <div className="mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-center">
          <p className="text-sm font-bold text-amber-200">
            Certification supports your application—it does not replace
            practical experience.
          </p>

          <p className="mt-2 text-xs leading-5 text-amber-100/70">
            The strongest profile combines a recognized credential, real
            projects, a documented portfolio, interview readiness and relevant
            job applications.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col gap-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Your next credential starts with your next project
            </p>

            <h3 className="mt-3 text-2xl font-black text-white">
              Build your career record with Career Tech Global.
            </h3>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
          >
            Talk to an Advisor

            <IconArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}