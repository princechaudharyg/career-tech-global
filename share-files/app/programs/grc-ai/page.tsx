"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FAQ from "@/components/programs/grc-ai/FAQ";
import {
  careerRoles,
  certifications,
  handsOnProjects,
  modules,
} from "@/components/programs/grc-ai/grcData";
import {
  IconArrowRight,
  IconBrain,
  IconBriefcase,
  IconCheck,
  IconCode,
  IconDatabase,
  IconLock,
  IconRocket,
  IconShieldCheck,
  IconSparkles,
  IconTargetArrow,
  IconX,
} from "@tabler/icons-react";



export default function GRCWithAI() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmitted(false);
  };

  return (
    <main className="relative overflow-hidden bg-[#030712] text-white">
      {/* Global Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-56 -top-56 h-[620px] w-[620px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />

        <div className="absolute -bottom-64 -right-48 h-[620px] w-[620px] rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(103,232,249,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.7) 1px, transparent 1px)",
            backgroundSize: "62px 62px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative border-b border-white/[0.07]">
        <motion.div
          animate={{
            y: ["-5%", "105%"],
            opacity: [0, 0.65, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_20px_#67e8f9]"
        />

        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
          {/* Hero Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />

              Premium GRC and AI Program
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.07em] text-white sm:text-7xl">
              Build expertise in
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                GRC with AI.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              A personalized one-to-one experience for professionals who want
              to understand governance, risk, compliance, cybersecurity and
              responsible AI through practical work.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_12px_35px_rgba(34,211,238,.2)] transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Register Now

                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.05] px-6 py-4 text-sm font-black text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                View Curriculum
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-sm text-slate-300">
              <IconCheck
                size={17}
                className="text-emerald-300"
              />

              One-to-one personalized learning experience.
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-t border-white/[0.08] pt-6">
              <div>
                <p className="text-2xl font-black text-white">
                  08
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-500">
                  Core Modules
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">
                  06+
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-500">
                  Practical Builds
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-white">
                  01
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-500">
                  Final Capstone
                </p>
              </div>
            </div>
          </motion.div>

          {/* Pricing Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[38px] bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/25 bg-[#071321]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,.5)] sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(103,232,249,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.8) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10">
                      <IconBrain
                        size={23}
                        className="text-cyan-200"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.16em] text-cyan-300">
                        Personalized Track
                      </p>

                      <h2 className="mt-1 text-lg font-black text-white">
                        GRC with AI
                      </h2>
                    </div>
                  </div>

                  <IconSparkles
                    size={23}
                    className="text-cyan-200"
                  />
                </div>

                <div className="mt-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                    Total Program Investment
                  </p>

                  <p className="mt-2 text-5xl font-black tracking-[-0.07em] text-white">
                    $6,999
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-amber-200">
                    Registration Fee
                  </p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-3xl font-black text-white">
                      $999
                    </span>

                    <span className="mb-1 text-xs text-amber-100/70">
                      to reserve your seat
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "One-to-one mentor guidance",
                    "Personalized curriculum roadmap",
                    "Hands-on GRC and AI projects",
                    "Career and portfolio support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <IconCheck
                        size={16}
                        className="text-emerald-300"
                      />

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
                >
                  Begin Registration

                  <IconArrowRight size={18} />
                </button>

                <p className="mt-4 text-center text-[10px] text-slate-500">
                  Personalized onboarding begins after registration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Experience */}
      <section className="border-b border-white/[0.07] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
              The experience
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Learn by doing real GRC and AI work.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Each phase combines concepts, mentor guidance, practical
              assignments, review sessions and portfolio evidence.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Learn the framework, business context and decision-making process.",
                icon: IconBrain,
              },
              {
                number: "02",
                title: "Build",
                text: "Create risk registers, control matrices, policies and AI assessments.",
                icon: IconCode,
              },
              {
                number: "03",
                title: "Review",
                text: "Receive feedback and improve your work through mentor-led reviews.",
                icon: IconShieldCheck,
              },
              {
                number: "04",
                title: "Present",
                text: "Explain your decisions clearly in interviews and stakeholder meetings.",
                icon: IconBriefcase,
              },
            ].map((item) => {
              const ExperienceIcon = item.icon;

              return (
                <div
                  key={item.number}
                  className="rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5"
                >
                  <div className="flex items-center justify-between">
                    <ExperienceIcon
                      size={23}
                      className="text-cyan-200"
                    />

                    <span className="text-xs font-black text-white/25">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section
        id="curriculum"
        className="border-b border-white/[0.07] py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
              Complete Curriculum
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              A complete path from foundations to execution.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              The curriculum is designed to help you understand, build,
              document and present professional GRC and AI work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {modules.map((module) => {
              const ModuleIcon = module.icon;

              return (
                <motion.article
                  key={module.number}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5 transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${module.color}`}
                  />

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10">
                      <ModuleIcon
                        size={22}
                        className="text-cyan-200"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.14em] text-cyan-300">
                          Module {module.number}
                        </span>
                      </div>

                      <h3 className="mt-2 text-xl font-black text-white">
                        {module.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hands-on Projects */}
      <section className="border-b border-white/[0.07] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                Hands-on Experience
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Build work you can actually explain.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-400">
              Every project is designed to become portfolio evidence and a
              conversation starter for interviews.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {handsOnProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-5"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.color}`}
                />

                <div className="flex items-center justify-between">
                  <IconCode
                    size={23}
                    className="text-cyan-200"
                  />

                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-emerald-300">
                    Practical Build
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 border-t border-white/[0.08] pt-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">
                    Tools and deliverables
                  </p>

                  <p className="mt-2 text-xs font-semibold leading-5 text-cyan-100">
                    {project.tools}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone */}
      <section className="border-b border-white/[0.07] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/[0.1] via-blue-500/[0.06] to-violet-500/[0.1] p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                  Final Capstone
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                  Build an AI governance and enterprise risk command center.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Bring together risk scoring, control mapping, AI assessment,
                  evidence tracking, remediation planning and executive
                  reporting in one complete capstone project.
                </p>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
                >
                  Start the Program

                  <IconArrowRight size={17} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Risk Register",
                  "Control Matrix",
                  "AI Assessment",
                  "Executive Report",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <IconCheck
                      size={17}
                      className="text-emerald-300"
                    />

                    <p className="mt-4 text-sm font-bold text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-b border-white/[0.07] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
              Certification Pathway
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Credentials and preparation that support your career direction.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400">
              Complete the internal program requirements and prepare for
              relevant security, compliance and identity certification paths.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {certifications.map((certificate) => {
              const CertificateIcon = certificate.icon;

              return (
                <div
                  key={certificate.title}
                  className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-6"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${certificate.color}`}
                  />

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10">
                      <CertificateIcon
                        size={22}
                        className="text-cyan-200"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.14em] text-cyan-300">
                        {certificate.type}
                      </p>

                      <h3 className="mt-2 text-xl font-black text-white">
                        {certificate.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {certificate.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-slate-500">
            Microsoft preparation tracks do not guarantee certification.
            Official Microsoft credentials require meeting Microsoftâ€™s
            requirements and passing the relevant official exam.
          </p>
        </div>
      </section>

      {/* Career Roles */}
      <section className="border-b border-white/[0.07] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                Career Direction
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Roles this experience can prepare you for.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                Your final role depends on your background, skills, portfolio,
                interview performance and market conditions.
              </p>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 py-3.5 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/20"
              >
                Discuss Your Goal

                <IconArrowRight size={17} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {careerRoles.map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-4"
                >
                  <IconCheck
                    size={16}
                    className="text-emerald-300"
                  />

                  <span className="text-sm font-semibold text-slate-300">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b border-white/[0.07] py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/25 bg-gradient-to-br from-[#0b2440] via-[#071321] to-[#121535] p-7 text-center sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                Enrollment Investment
              </p>

              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Invest in your GRC and AI career.
              </h2>

              <div className="mt-8 flex flex-wrap items-end justify-center gap-3">
                <span className="text-6xl font-black tracking-[-0.08em] text-white">
                  $6,999
                </span>

                <span className="mb-2 text-sm text-slate-400">
                  total program fee
                </span>
              </div>

              <div className="mx-auto mt-6 max-w-md rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-amber-200">
                  Registration Fee
                </p>

                <p className="mt-2 text-3xl font-black text-white">
                  $999
                </p>

                <p className="mt-2 text-xs leading-5 text-amber-100/75">
                  Required to reserve your seat and begin personalized
                  onboarding.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Register for GRC with AI

                <IconArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <FAQ />


      {/* Registration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-[500px] overflow-y-auto rounded-[28px] border border-cyan-300/25 bg-[#071321] p-6 shadow-[0_30px_100px_rgba(0,0,0,.75)] sm:p-8"
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close registration form"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <IconX size={18} />
              </button>

              {!submitted ? (
                <>
                  <div className="pr-10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10">
                      <IconBrain
                        size={23}
                        className="text-cyan-200"
                      />
                    </div>

                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                      Program Registration
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Start your GRC with AI journey.
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Submit your details and our team will contact you about
                      the one-to-one personalized program.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 space-y-5"
                  >
                    <div>
                      <label
                        htmlFor="grc-name"
                        className="mb-2 block text-xs font-bold text-slate-300"
                      >
                        Full Name
                      </label>

                      <input
                        id="grc-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="grc-email"
                        className="mb-2 block text-xs font-bold text-slate-300"
                      >
                        Email Address
                      </label>

                      <input
                        id="grc-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="grc-contact"
                        className="mb-2 block text-xs font-bold text-slate-300"
                      >
                        Contact Number
                      </label>

                      <input
                        id="grc-contact"
                        name="contact"
                        type="tel"
                        required
                        placeholder="+1 000 000 0000"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/60"
                      />
                    </div>

                    <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Total Program Fee
                        </span>

                        <span className="font-black text-white">
                          $6,999
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Registration Fee
                        </span>

                        <span className="font-black text-amber-200">
                          $999
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
                    >
                      Submit Registration

                      <IconArrowRight size={17} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-300/10">
                    <IconCheck
                      size={32}
                      className="text-emerald-300"
                    />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                    Registration Received
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    You&apos;re on the list.
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-400">
                    Our team will contact you using the details you provided.
                  </p>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="mt-7 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
