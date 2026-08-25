"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/programs/cyber-security-ai/FAQ";
import Curriculum from "@/components/programs/cyber-security-ai/Curriculum";

import SectionHeading from "@/components/programs/cyber-security-ai/SectionHeading";
import {
  faqs,
  industryTools,
  modules,
  projects,
} from "@/components/programs/cyber-security-ai/cyberSecurityData";

import {
  IconArrowRight,
  IconBrain,
  IconBriefcase,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconCloudComputing,
  IconDatabase,
  IconFileCertificate,
  IconRocket,
  IconShield,
  IconTarget,
  IconTerminal2,
} from "@tabler/icons-react";

export default function CyberSecurityAIProgram() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#050b18] pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="pointer-events-none absolute -bottom-48 -right-32 h-[560px] w-[560px] rounded-full bg-blue-600/20 blur-[160px]" />

        <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-20 xl:px-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[720px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
              </span>

              30-week Cyber Security and AI program
            </div>

            <h1 className="mt-7 text-[clamp(3rem,6vw,6.4rem)] font-black leading-[0.9] tracking-[-0.06em] text-white">
              Become a Cyber Security
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                & AI Professional
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] text-base leading-7 text-slate-300 sm:text-lg">
              Master Cyber Security, Ethical Hacking, Cloud Security, SOC
              Operations and AI Security through hands-on labs, real-world
              projects and expert-led mentorship.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:scale-[1.03]"
              >
                Book Free Career Consultation

                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#curriculum"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
              >
                Explore Curriculum
              </a>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Ethical Hacking and penetration testing",
                "SOC and SIEM investigation",
                "Cloud and AI Security",
                "Portfolio and interview preparation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <IconCheck
                    size={18}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Premium Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-5 top-8 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-8">
              <p className="text-[10px] text-slate-400">
                Threat status
              </p>

              <p className="mt-1 text-xs font-bold text-emerald-400">
                Monitoring active
              </p>
            </div>

            <div className="absolute -bottom-5 right-0 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-right-7">
              <p className="text-[10px] text-slate-400">
                Current module
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                Ethical Hacking
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.08] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                    <p className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                      SECURITY COMMAND CENTER
                    </p>
                  </div>

                  <h2 className="mt-2 text-2xl font-black text-white">
                    Threat Monitor
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg">
                  <IconShield size={29} />
                </div>
              </div>

              {/* Threat Map */}
              <div className="relative mt-6 h-56 overflow-hidden rounded-[24px] border border-white/10 bg-[#071426]">
                <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(103,232,249,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,.15)_1px,transparent_1px)] [background-size:28px_28px]" />

                <svg
                  viewBox="0 0 500 240"
                  className="absolute inset-0 h-full w-full opacity-60"
                >
                  <path
                    d="M80 75 C170 25, 220 170, 320 75 S430 150, 470 65"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1"
                    strokeDasharray="5 8"
                  />

                  <path
                    d="M55 180 C160 120, 260 190, 420 115"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="1"
                    strokeDasharray="4 10"
                  />
                </svg>

                {[
                  "left-[16%] top-[28%]",
                  "left-[42%] top-[58%]",
                  "right-[24%] top-[30%]",
                  "right-[12%] bottom-[22%]",
                  "left-[58%] top-[20%]",
                ].map((position, index) => (
                  <motion.div
                    key={position}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                    className={`absolute h-2.5 w-2.5 rounded-full ${
                      index === 2
                        ? "bg-red-400"
                        : "bg-cyan-300"
                    } ${position}`}
                  />
                ))}

                <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2">
                  <p className="text-[10px] text-slate-400">
                    Global activity
                  </p>

                  <p className="mt-1 text-sm font-black text-emerald-400">
                    Monitoring active
                  </p>
                </div>
              </div>

              {/* Terminal */}
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 p-4 font-mono">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <p className="text-[11px] text-emerald-400">
                  $ investigate --source auth-logs
                </p>

                <p className="mt-2 text-[11px] text-slate-400">
                  status:{" "}
                  <span className="text-cyan-300">
                    analyzing suspicious activity...
                  </span>
                </p>

                <p className="mt-2 text-[11px] text-amber-300">
                  finding: impossible travel detected
                </p>
              </div>

              {/* Threat Stats */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ["Alerts", "24", "text-amber-400"],
                  ["Blocked", "18", "text-emerald-400"],
                  ["Critical", "02", "text-red-400"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white p-3 text-center"
                  >
                    <p className="text-[10px] text-slate-500">
                      {label}
                    </p>

                    <p className={`mt-1 text-xl font-black ${color}`}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="border-b border-slate-100 bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["30", "Weeks"],
            ["12", "Modules"],
            ["Hands-on", "Exercises"],
            ["25+", "Projects"],
            ["1", "Capstone"],
            ["Career", "Support"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black text-slate-950">
                {value}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CAREER TECH GLOBAL */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            dark
            eyebrow="Why Career Tech Global?"
            title="Learn skills. Build proof. Prepare for opportunity."
            description="A career-focused approach connecting technical learning with projects, communication and interview readiness."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              [
                "Structured Roadmap",
                "Follow one clear 30-week path from fundamentals to AI security.",
                IconTarget,
              ],
              [
                "Project Evidence",
                "Build work that demonstrates what you can investigate, secure and explain.",
                IconDatabase,
              ],
              [
                "Modern Security Stack",
                "Practice tools across SOC, cloud, Ethical Hacking and AI Security.",
                IconCloudComputing,
              ],
              [
                "AI-Powered Learning",
                "Learn how AI is transforming cyber defense, SOC operations and threat detection.",
                IconBrain,
              ],
              [
                "Career Readiness",
                "Prepare your resume, portfolio, project stories and technical interviews.",
                IconBriefcase,
              ],
            ].map(([title, description, Component]) => {
              const FeatureIcon = Component as typeof IconShield;

              return (
                <div
                  key={String(title)}
                  className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6"
                >
                  <FeatureIcon size={28} className="text-cyan-300" />

                  <h3 className="mt-5 text-lg font-black text-white">
                    {String(title)}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {String(description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ENROLL */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Who should enroll?"
            title="Built for different career starting points"
            description="You do not need to come from one specific background to begin learning Cyber Security and AI."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["College Students", "Build practical skills alongside your studies."],
              ["IT Professionals", "Move toward security, SOC or cloud roles."],
              ["Career Switchers", "Follow a structured path into cyber security."],
              ["Fresh Graduates", "Create projects beyond your academic resume."],
              ["Working Professionals", "Add security and AI skills to your current role."],
              ["Military Veterans", "Translate operational experience into security careers."],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/30"
              >
                <IconCheck size={22} className="text-emerald-600" />

                <h3 className="mt-4 text-lg font-black text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Curriculum />


      {/* LEARNING EXPERIENCE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Learning experience"
            title="Learn through multiple formats"
            description="Each format supports a different part of your technical and career development."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Live Classes", "Ask questions and learn with structured instruction."],
              ["Recorded Sessions", "Review important concepts at your own pace."],
              ["Hands-on Labs", "Practice security workflows in controlled environments."],
              ["Real Projects", "Build work that can become part of your portfolio."],
              ["Mentorship", "Get guidance when you are blocked or unsure."],
              ["Career Support", "Prepare your resume, LinkedIn and interview stories."],
            ].map(([title, description], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                  <IconRocket size={21} className="text-cyan-600" />
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY TOOLS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Industry tools"
            title="Tools you will practice with"
            description="Work with security, cloud, automation and AI tools across the learning journey."
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {industryTools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50">
                  <IconTerminal2
                    size={18}
                    className="text-cyan-600"
                  />
                </div>

                <span className="text-sm font-bold text-slate-700">
                  {tool}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE PROJECTS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Live projects"
            title="Build work you can discuss in interviews"
            description="Practice Ethical Hacking, SOC Operations, Cloud Security, AI Defense and GRC."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-lg`}
                  >
                    <ProjectIcon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER PATHS */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            dark
            eyebrow="Career paths"
            title="Explore security career directions"
            description="Illustrative U.S. market estimates only. Compensation varies by experience, location, employer and specialization."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["SOC Analyst", "$75Kâ€“$105K", IconChartBar],
              ["Cyber Security Analyst", "$90Kâ€“$130K", IconShield],
              ["Cloud Security Engineer", "$120Kâ€“$170K", IconCloudComputing],
              ["AI Security Engineer", "$140Kâ€“$200K", IconBrain],
            ].map(([role, range, Component]) => {
              const CareerIcon = Component as typeof IconShield;

              return (
                <div
                  key={String(role)}
                  className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5"
                >
                  <CareerIcon size={25} className="text-cyan-300" />

                  <p className="mt-5 text-sm font-bold text-slate-300">
                    {String(role)}
                  </p>

                  <p className="mt-2 text-2xl font-black text-white">
                    {String(range)}
                  </p>

                  <p className="mt-2 text-[11px] text-slate-500">
                    Market estimate
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            Salary figures are educational market estimates, not promises or
            placement guarantees.
          </p>
        </div>
      </section>

      {/* CAREER SERVICES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Career services"
            title="Turn your skills into a stronger application"
            description="Technical learning is only one part of becoming career-ready."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "ATS Resume Optimization",
              "LinkedIn Profile Branding",
              "Mock Technical Interviews",
              "Security Portfolio Review",
              "Project Storytelling",
              "Recruiter Guidance",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <IconCheck size={20} className="text-emerald-600" />

                <span className="text-sm font-bold text-slate-700">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Certifications"
            title="Build certification-aligned knowledge"
            description="Career Tech Global Professional Certificate with exam preparation support. This is not an official partnership or exam certification unless separately stated."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "CompTIA Security+",
              "CEH",
              "Microsoft SC-900",
              "Microsoft AZ-500",
              "ISCÂ² CC",
            ].map((certificate) => (
              <div
                key={certificate}
                className="rounded-[24px] border border-slate-200 bg-white p-5 text-center shadow-lg shadow-slate-200/30"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                  <IconFileCertificate size={26} />
                </div>

                <h3 className="mt-5 text-sm font-black text-slate-900">
                  {certificate}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Exam Preparation Support
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Student testimonials"
            title="Verified student stories coming soon"
            description="Real LinkedIn reviews, photos and career outcomes will be published after verified student consent."
          />

          <div className="mx-auto mt-10 max-w-md rounded-[26px] border border-dashed border-slate-300 bg-slate-50 p-7">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
              <IconBriefcase size={26} className="text-cyan-600" />
            </div>

            <p className="mt-5 text-sm font-bold text-slate-700">
              Student stories coming soon.
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Verified reviews and LinkedIn profiles will be added after real
              student consent.
            </p>
          </div>
        </div>
      </section>
      <FAQ />


      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#050b18] py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.08] p-7 text-center shadow-2xl backdrop-blur-2xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
              <IconRocket size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl">
              Ready to start your Cyber Security career?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Get a personalized learning roadmap for Ethical Hacking, SOC,
              Cloud Security and AI Security.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:scale-[1.03]"
              >
                Book Your Free Career Consultation

                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
  href="/register"
  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
>
  Apply Now
                <IconArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
