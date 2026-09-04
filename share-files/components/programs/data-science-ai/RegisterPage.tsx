"use client";

import { motion } from "framer-motion";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconWorld,
  IconBriefcase,
  IconSchool,
  IconBrandLinkedin,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";

type InputProps = {
  icon: React.ReactNode;
  placeholder: string;
};

function Input({ icon, placeholder }: InputProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
      <div className="text-cyan-600">{icon}</div>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
      />
    </div>
  );
}

export default function RegisterPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-cyan-50"
    >
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-cyan-100 px-5 py-2 text-xs font-black uppercase tracking-wider text-cyan-700">
              Registration
            </span>

            <h1 className="mt-6 text-5xl font-black text-slate-900">
              Reserve Your Seat
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-600">
              Register today with a
              <span className="font-bold text-cyan-700">
                {" "}
                fully refundable $49 registration fee
              </span>{" "}
              and schedule your orientation with our Trainer, Recruiter, and
              Placement Manager.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-2xl"
          >
            <h2 className="text-3xl font-black text-slate-900">
              Personal Information
            </h2>

            <p className="mt-2 text-slate-500">
              Fill in your details to begin your registration.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Input icon={<IconUser size={20} />} placeholder="First Name" />

              <Input icon={<IconUser size={20} />} placeholder="Last Name" />

              <Input
                icon={<IconMail size={20} />}
                placeholder="Email Address"
              />

              <Input
                icon={<IconPhone size={20} />}
                placeholder="Phone Number"
              />

              <Input icon={<IconWorld size={20} />} placeholder="Country" />

              <Input
                icon={<IconBriefcase size={20} />}
                placeholder="Current Job Role"
              />

              <Input
                icon={<IconSchool size={20} />}
                placeholder="Highest Qualification"
              />

              <Input
                icon={<IconBrandLinkedin size={20} />}
                placeholder="LinkedIn Profile (Optional)"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl"
            >
              <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-700">
                What Happens After Registration?
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900">
                Your Orientation Journey
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Before enrolling, you&apos;ll attend a personalized orientation
                where our experts help you understand the complete program,
                placement process and career roadmap.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "Meet Your Trainer",
                    description:
                      "Understand the curriculum, projects and learning roadmap.",
                  },
                  {
                    title: "Meet Your Recruiter",
                    description:
                      "Learn how hiring works and what companies expect.",
                  },
                  {
                    title: "Meet Your Placement Manager",
                    description:
                      "Discuss career planning and placement support.",
                  },
                  {
                    title: "Live Orientation Session",
                    description:
                      "Ask questions and decide if the program is right for you.",
                  },
                  {
                    title: "Choose to Continue",
                    description:
                      "Continue with the program or request a full refund.",
                  },
                ].map((step, index) => (
                  <div key={step.title} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-lg font-black text-white shadow-lg">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 shadow-2xl"
            >
              <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300">
                Registration Benefits
              </span>

              <h3 className="mt-6 text-3xl font-black text-white">
                $49 Registration Includes
              </h3>

              <div className="mt-8 space-y-4">
                {[
                  "One-to-One Orientation Session",
                  "Meet Your Trainer",
                  "Meet Your Recruiter",
                  "Meet Placement Manager",
                  "Career Consultation",
                  "Learning Roadmap",
                  "Program Q&A Session",
                  "100% Refund Option",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-4"
                  >
                    <IconCheck size={18} className="text-emerald-400" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-cyan-500 p-6">
                <p className="text-sm font-black uppercase tracking-widest text-white/80">
                  Refund Policy
                </p>

                <h4 className="mt-3 text-2xl font-black text-white">
                  100% Refundable
                </h4>

                <p className="mt-3 leading-7 text-cyan-50">
                  If you decide not to continue after your orientation session,
                  your complete $49 registration fee will be refunded.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[36px] bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-10 shadow-2xl"
          >
            <div className="text-center">
              <span className="rounded-full bg-white/20 px-5 py-2 text-xs font-black uppercase tracking-widest text-white">
                Final Step
              </span>

              <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
                Complete Your Registration
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
                Pay a fully refundable <strong>$49 registration fee</strong> to
                reserve your seat and schedule your orientation session.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-xl rounded-[30px] bg-white p-8 shadow-xl">
              <div className="text-center">
                <p className="text-sm font-black uppercase tracking-widest text-cyan-600">
                  Registration Fee
                </p>

                <h3 className="mt-4 text-6xl font-black text-slate-900">
                  $49
                </h3>

                <p className="mt-3 text-lg font-semibold text-emerald-600">
                  100% Refundable
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Trainer Orientation",
                  "Recruiter Consultation",
                  "Placement Manager Session",
                  "Career Roadmap Discussion",
                  "Program Overview",
                  "100% Refund if you do not continue",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <IconCheck size={20} className="text-emerald-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <label className="mt-10 flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 rounded border-slate-300"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I understand that the $49 registration fee is fully refundable
                  if I decide not to continue after my orientation session.
                </span>
              </label>

              <button
                type="button"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 text-lg font-bold text-white shadow-xl transition hover:scale-[1.02]"
              >
                Proceed to Secure Payment
                <IconArrowRight size={22} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}