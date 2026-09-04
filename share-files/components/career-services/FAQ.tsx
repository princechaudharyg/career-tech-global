"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconPlus,
  IconMinus,
} from "@tabler/icons-react";

const faqs = [
  {
    question: "How does Career Tech Global help me get hired?",
    answer:
      "We provide ATS resume optimization, LinkedIn branding, mock interviews, recruiter guidance, portfolio reviews, and placement assistance to maximize your chances of getting hired.",
  },
  {
    question: "Is placement guaranteed?",
    answer:
      "We don't guarantee employment, but we provide comprehensive placement assistance, recruiter connections, interview preparation, and career coaching to significantly improve your job prospects.",
  },
  {
    question: "Will my resume be ATS optimized?",
    answer:
      "Yes. Every resume is designed to pass Applicant Tracking Systems (ATS) used by top global companies before reaching recruiters.",
  },
  {
    question: "Do you provide LinkedIn profile optimization?",
    answer:
      "Absolutely. We optimize your headline, summary, experience, skills, keywords, featured section, and recruiter visibility to help you stand out.",
  },
  {
    question: "How many mock interviews will I receive?",
    answer:
      "Depending on your selected package, you'll receive multiple AI-powered and expert-led mock interviews with personalized feedback reports.",
  },
  {
    question: "Can experienced professionals also join?",
    answer:
      "Yes. Our career services are designed for fresh graduates, working professionals, career changers, and international job seekers.",
  },
];

export default function FAQ() {

  const [open, setOpen] = useState<number | null>(0);

  return (

    <section className="relative overflow-hidden bg-white py-28">

      <div className="absolute left-0 top-0 h-[380px] w-[380px] rounded-full bg-cyan-100 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-100 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 text-5xl font-black text-slate-900">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-600">
            Find answers to the most common questions about our
            career transformation and placement services.
          </p>

        </motion.div>

        <div className="mt-20 space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-lg"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-8 text-left"
              >

                <h3 className="text-xl font-bold text-slate-900">
                  {faq.question}
                </h3>

                {open === index ? (
                  <IconMinus className="text-cyan-600" />
                ) : (
                  <IconPlus className="text-cyan-600" />
                )}

              </button>

              <AnimatePresence>

                {open === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="border-t border-slate-100 px-8 pb-8 pt-6">

                      <p className="leading-8 text-slate-600">
                        {faq.answer}
                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}