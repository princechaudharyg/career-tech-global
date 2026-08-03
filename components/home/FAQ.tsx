"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer:
      "No. Our beginner-friendly programs start from the fundamentals and gradually move to advanced concepts.",
  },
  {
    question: "What's the difference between Batch Learning and 1-on-1 Mentorship?",
    answer:
      "Batch Learning is instructor-led with multiple students, while 1-on-1 Mentorship offers a dedicated trainer, personalized roadmap and flexible scheduling.",
  },
  {
    question: "Will I receive placement assistance?",
    answer:
      "Yes. We provide resume guidance, LinkedIn optimization, mock interviews and career support to help you become job-ready.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "Our primary training is live and interactive. Recordings may also be provided for revision depending on the program.",
  },
  {
    question: "Which programs do you offer?",
    answer:
      "We currently offer Data Science & Artificial Intelligence, Cyber Security & Ethical Hacking, Cyber Security & Artificial Intelligence and GRC & Artificial Intelligence.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free career consultation and our advisors will help you choose the right learning path.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before starting your learning journey.
          </p>
        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <IconChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}