"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "Do I need any coding experience before joining?",
    answer:
      "No. Our programs are designed for beginners as well as working professionals. We start from fundamentals and gradually move to advanced concepts.",
  },
  {
    question: "Will I get placement assistance?",
    answer:
      "Yes. We provide ATS resume building, LinkedIn optimization, mock interviews, career guidance and placement assistance.",
  },
  {
    question: "Are the classes live or recorded?",
    answer:
      "All core sessions are conducted live. Recordings are also provided so you can revise anytime.",
  },
  {
    question: "What projects will I build?",
    answer:
      "You'll work on industry-oriented capstone projects in AI, Data Science, Cyber Security and GRC to build a strong portfolio.",
  },
  {
    question: "Do I receive a certificate?",
    answer:
      "Yes. After successful completion of the program, you'll receive an industry-recognized certificate from Career Tech Global LLC.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="absolute left-0 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
            <CircleHelp size={15} />
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Everything you need to know before starting your learning journey.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[22px] border bg-white transition duration-300 ${
                  isOpen
                    ? "border-cyan-300 shadow-xl shadow-cyan-100/50"
                    : "border-slate-200 shadow-sm hover:border-cyan-200 hover:shadow-lg"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black transition ${
                      isOpen
                        ? "bg-cyan-600 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="flex-1 text-base font-black leading-6 text-slate-900 sm:text-lg">
                    {faq.question}
                  </h3>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-cyan-100 text-cyan-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      className={`transition duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 border-t border-slate-100 pb-5 pt-4 sm:mx-6 sm:pb-6">
                      <p className="pl-14 text-sm leading-7 text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}