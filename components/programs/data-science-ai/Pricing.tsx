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

const includedFeatures = [
  {
    icon: IconChartBar,
    title: "30-Week Applied Curriculum",
    description:
      "A structured learning journey covering data, analytics, machine learning, AI and cloud workflows.",
  },
  {
    icon: IconRocket,
    title: "AI and Machine Learning Projects",
    description:
      "Build practical projects that demonstrate your ability to solve real business and technical problems.",
  },
  {
    icon: IconBriefcase,
    title: "Career-Ready Portfolio",
    description:
      "Create a polished portfolio that helps you communicate your work with clarity and confidence.",
  },
  {
    icon: IconUsers,
    title: "Live Expert Instruction",
    description:
      "Learn through live sessions, practical demonstrations, guided implementation and structured feedback.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Industry-Style Case Studies",
    description:
      "Work through realistic case studies inspired by modern technology, business and operations teams.",
  },
  {
    icon: IconGlobe,
    title: "Cloud and Deployment Workflows",
    description:
      "Understand how data and AI solutions move from prototypes toward usable applications.",
  },
  {
    icon: IconCheck,
    title: "Resume Optimization",
    description:
      "Improve the way your skills, projects and measurable outcomes are presented on your resume.",
  },
  {
    icon: IconBriefcase,
    title: "LinkedIn Positioning",
    description:
      "Build a stronger professional presence with focused positioning for your target career direction.",
  },
  {
    icon: IconUsers,
    title: "Mock Technical Interviews",
    description:
      "Practice explaining technical concepts, project decisions and problem-solving approaches.",
  },
  {
    icon: IconChartBar,
    title: "Project Storytelling",
    description:
      "Learn how to explain your projects using business context, technical choices and measurable impact.",
  },
  {
    icon: IconRocket,
    title: "Generative AI Foundations",
    description:
      "Explore modern GenAI concepts, workflows and use cases through guided practical exercises.",
  },
  {
    icon: IconGlobe,
    title: "Data Analytics Foundations",
    description:
      "Develop a strong understanding of data cleaning, analysis, visualization and insight generation.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Professional Communication",
    description:
      "Improve how you present your thinking, collaborate with teams and communicate technical work.",
  },
  {
    icon: IconCheck,
    title: "Progress Reviews",
    description:
      "Use structured checkpoints to understand your progress and identify areas for improvement.",
  },
  {
    icon: IconBriefcase,
    title: "Career Direction Sessions",
    description:
      "Clarify the difference between analytics, data science, AI, cloud and related career paths.",
  },
  {
    icon: IconUsers,
    title: "Recruiter Perspective Sessions",
    description:
      "Understand how recruiters and hiring teams may evaluate your profile, resume and portfolio.",
  },
  {
    icon: IconChartBar,
    title: "Career Readiness Framework",
    description:
      "Track your development across technical skills, communication, projects and interview preparation.",
  },
  {
    icon: IconRocket,
    title: "Capstone Project",
    description:
      "Bring your learning together through a complete project designed to showcase end-to-end thinking.",
  },
  {
    icon: IconGlobe,
    title: "Learning Community",
    description:
      "Stay connected with peers, discussions, practical updates and career-focused conversations.",
  },
  {
    icon: IconCheck,
    title: "Application Guidance",
    description:
      "Get practical support for organizing applications and communicating your strongest evidence.",
  },
  {
    icon: IconBriefcase,
    title: "Interview Preparation Plan",
    description:
      "Follow a focused preparation plan for technical, behavioral and project-based interviews.",
  },
  {
    icon: IconUsers,
    title: "Premium Orientation Experience",
    description:
      "Meet the trainer, recruiter and program support team before making your final decision.",
  },
];

const orientationSteps = [
  {
    number: "01",
    title: "Meet Your Trainer",
    description:
      "Understand how the program is taught, what you will build and how live learning is structured.",
    icon: IconUsers,
  },
  {
    number: "02",
    title: "Meet the Recruiter",
    description:
      "Learn how hiring teams evaluate candidates and what makes a profile easier to understand.",
    icon: IconBriefcase,
  },
  {
    number: "03",
    title: "Meet the Career Manager",
    description:
      "Explore the career support process, readiness milestones and practical next steps.",
    icon: IconChartBar,
  },
  {
    number: "04",
    title: "Attend Orientation",
    description:
      "Experience the learning environment, ask questions and understand the complete student journey.",
    icon: IconGlobe,
  },
  {
    number: "05",
    title: "Make Your Decision",
    description:
      "Take the time to decide whether the program aligns with your goals and expectations.",
    icon: IconCheck,
  },
];

const faqs = [
  {
    question: "Who is this program designed for?",
    answer:
      "The program is designed for ambitious learners, career switchers, recent graduates and working professionals who want to build practical skills across data, AI, machine learning and cloud-related workflows.",
  },
  {
    question: "Do I need a computer science background?",
    answer:
      "A computer science degree is not required. You should be comfortable using a computer, learning consistently and working through structured technical exercises.",
  },
  {
    question: "What is included in the $2,499 program fee?",
    answer:
      "The program fee includes the 30-week curriculum, live learning experience, practical projects, career support resources, portfolio development, interview preparation, orientation sessions and the features listed on this page.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "An installment option may be available for eligible students. The payment schedule and applicable terms will be shown during the enrollment process.",
  },
  {
    question: "What is the $49 registration payment?",
    answer:
      "The $49 registration payment reserves your orientation and admissions slot. It is refundable according to the registration terms shown before payment.",
  },
  {
    question: "Does the program guarantee a job?",
    answer:
      "No program can guarantee a specific job, salary or hiring outcome. Results depend on skills, consistency, experience, portfolio, communication, interview performance, work authorization and market conditions.",
  },
  {
    question: "When do I decide whether to continue?",
    answer:
      "Attend the orientation experience, understand the program structure and ask your questions before making your final enrollment decision.",
  },
  {
    question: "Is the program suitable for international students?",
    answer:
      "The curriculum is designed for a global audience. Employment eligibility, work authorization and hiring requirements vary by country, employer and role.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
      {children}
    </p>
  );
}

function CheckItem({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
        <IconCheck size={13} stroke={3} />
      </div>

      <span className="text-sm leading-6 text-slate-300">{children}</span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[#040711] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-18%] top-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-[-18%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute bottom-[-10%] left-[25%] h-[550px] w-[550px] rounded-full bg-violet-600/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      {/* Hero */}
      <div className="relative px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.82fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                  Admissions now open
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-7 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl"
              >
                Invest in the
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  career you want next.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
              >
                A premium applied learning experience for ambitious people
                building a future in data, artificial intelligence, machine
                learning and modern technology.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300">
                  30-week experience
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300">
                  Applied projects
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-slate-300">
                  Career-focused support
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <a
                  href="#tuition"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_36px_rgba(103,232,249,.25)]"
                >
                  View tuition and inclusions
                  <IconArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#orientation"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-black text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
                >
                  See orientation journey
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Pricing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-br from-cyan-300/40 via-blue-500/10 to-violet-500/40 opacity-70 blur-xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                        Career Tech Global
                      </p>

                      <p className="mt-2 text-sm text-slate-400">
                        Data, AI and technology career program
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <IconRocket size={23} />
                    </div>
                  </div>

                  <div className="py-8">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Program investment
                    </p>

                    <div className="mt-3 flex items-end gap-3">
                      <span className="text-5xl font-black tracking-[-0.06em] text-white">
                        $2,499
                      </span>

                      <span className="mb-2 text-sm text-slate-500">
                        one-time tuition
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      Flexible installment options may be available during
                      enrollment.
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <CheckItem>30-week applied learning experience</CheckItem>
                    <CheckItem>Portfolio and project development</CheckItem>
                    <CheckItem>Career readiness support</CheckItem>
                    <CheckItem>Orientation before final decision</CheckItem>
                  </div>

                  <a
                    href="/register"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
                  >
                    Reserve your orientation
                    <IconArrowRight size={17} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tuition */}
      <section id="tuition" className="relative px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Transparent tuition</SectionEyebrow>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              A serious investment in a serious direction.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              You are investing in structure, practice, feedback, portfolio
              evidence and career preparation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Full Tuition */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[32px] border border-cyan-300/25 bg-gradient-to-br from-[#102943] via-[#0b1b31] to-[#07101e] p-7 shadow-2xl sm:p-10"
            >
              <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                      Full program tuition
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                      Data Science and AI
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-200">
                    Premium track
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm text-slate-400">Program fee</p>

                  <div className="mt-2 flex flex-wrap items-end gap-3">
                    <span className="text-6xl font-black tracking-[-0.07em] text-white">
                      $2,499
                    </span>

                    <span className="mb-3 text-sm text-slate-500">
                      total tuition
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-2">
                  <CheckItem>30-week curriculum</CheckItem>
                  <CheckItem>Live learning experience</CheckItem>
                  <CheckItem>Applied portfolio projects</CheckItem>
                  <CheckItem>Career support system</CheckItem>
                  <CheckItem>Interview preparation</CheckItem>
                  <CheckItem>Capstone project</CheckItem>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/15 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        Installment option
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Ask the admissions team about available payment
                        schedules.
                      </p>
                    </div>

                    <IconChartBar
                      size={25}
                      className="shrink-0 text-cyan-300"
                    />
                  </div>
                </div>

                <a
                  href="/register"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
                >
                  Start with orientation
                  <IconArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Registration */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              id="registration"
              className="relative overflow-hidden rounded-[32px] border border-violet-300/20 bg-gradient-to-br from-[#211b42] via-[#17132e] to-[#0b0a1b] p-7 shadow-2xl sm:p-10"
            >
              <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Fully refundable registration
                </div>

                <h3 className="mt-7 max-w-md text-4xl font-black leading-[1] tracking-[-0.05em] text-white sm:text-5xl">
                  Begin with a
                  <span className="block text-violet-300">$49 decision.</span>
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
                  Reserve your orientation place, meet the team and experience
                  the program before making your final decision.
                </p>

                <div className="mt-8 flex items-end gap-3">
                  <span className="text-7xl font-black tracking-[-0.08em] text-white">
                    $49
                  </span>

                  <span className="mb-3 text-sm text-slate-400">
                    registration
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  <CheckItem>Orientation access</CheckItem>
                  <CheckItem>Meet the trainer</CheckItem>
                  <CheckItem>Meet the recruiter</CheckItem>
                  <CheckItem>Meet the career support team</CheckItem>
                  <CheckItem>
                    Refundable according to registration terms
                  </CheckItem>
                </div>

                <a
                  href="/register"
                  className="group mt-9 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-violet-100"
                >
                  Reserve my orientation
                  <IconArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                  Refund eligibility is subject to the registration terms shown
                  before payment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Orientation */}
      <section
        id="orientation"
        className="relative border-y border-white/10 bg-white/[0.025] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionEyebrow>Before you decide</SectionEyebrow>

              <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.05em] text-white sm:text-6xl">
                See the experience before you commit.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                The orientation is designed to give you clarity. Meet the
                people behind the program, understand the learning journey and
                make a confident decision.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-5">
                <p className="text-sm font-black text-cyan-200">
                  Clarity before commitment.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Ask questions, explore the curriculum and decide whether the
                  program aligns with your goals.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[25px] top-8 hidden w-px bg-gradient-to-b from-cyan-300/50 via-violet-300/30 to-transparent sm:block" />

              <div className="space-y-4">
                {orientationSteps.map((step, index) => {
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="relative flex gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.07] sm:p-6"
                    >
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-[#071426] text-cyan-300">
                        <StepIcon size={22} />
                      </div>

                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                          Step {step.number}
                        </p>

                        <h3 className="mt-2 text-xl font-black text-white">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>What is included</SectionEyebrow>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              Everything should move you forward.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              A complete ecosystem built around learning, application,
              communication and career readiness.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {includedFeatures.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.07]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <FeatureIcon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-black text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-emerald-300/15 bg-gradient-to-br from-[#0b2927] via-[#071b20] to-[#07101a] p-7 sm:p-10">
            <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-300">
                <IconCheck size={30} />
              </div>

              <div>
                <SectionEyebrow>Refund policy</SectionEyebrow>

                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  Make your decision with clarity.
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Your $49 registration payment is designed to reserve your
                  orientation experience. If you attend the orientation and
                  decide the program is not the right fit, you may request a
                  refund according to the registration terms provided before
                  payment.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <CheckItem>Attend the orientation experience</CheckItem>
                  <CheckItem>Meet the program support team</CheckItem>
                  <CheckItem>Ask questions before enrolling</CheckItem>
                  <CheckItem>Review the applicable refund terms</CheckItem>
                </div>

                <p className="mt-7 text-xs leading-5 text-slate-500">
                  Program tuition, installment payments and registration refunds
                  may have separate terms. Please review the final enrollment
                  agreement before completing payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-white/[0.02] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <SectionEyebrow>Frequently asked questions</SectionEyebrow>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              Important questions.
              <span className="block text-cyan-300">Clear answers.</span>
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 open:border-cyan-300/25 open:bg-cyan-300/[0.04] sm:p-6"
              >
                <summary className="cursor-pointer list-none pr-8 text-base font-black text-white">
                  <span className="relative block">
                    {faq.question}

                    <span className="absolute right-0 top-1 text-xl font-normal text-cyan-300 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 py-24 sm:px-8 sm:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.04] to-transparent" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
              <IconRocket size={30} />
            </div>

            <SectionEyebrow>Build what comes next</SectionEyebrow>

            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
              Your next chapter deserves a serious plan.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Start with the orientation. Meet the team, understand the
              experience and decide whether Career Tech Global is the right
              environment for your goals.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-8 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_45px_rgba(103,232,249,.28)]"
              >
                Reserve orientation for $49
                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-black text-white transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                Talk to admissions
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-600">
              Review all payment, enrollment and refund terms before completing
              your registration.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
