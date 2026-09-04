"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I enroll in a program?",
    answer:
      "Simply submit the consultation form or contact our admissions team. We'll guide you through the complete enrollment process.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We offer ATS resume building, LinkedIn optimization, mock interviews and placement assistance.",
  },
  {
    question: "Are the classes live or self-paced?",
    answer:
      "Most programs include live instructor-led sessions along with recorded content for revision.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Absolutely. We have structured learning paths for complete beginners as well as experienced professionals.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before starting your journey.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
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

                <ChevronDown
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