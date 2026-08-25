"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MessageCircleQuestion,
  Plus,
  Sparkles,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Career Tech Global kya hai?",
    answer:
      "Career Tech Global ek career-focused learning platform hai jahan students AI, Data Science, Cybersecurity aur emerging technologies ko practical projects, expert mentorship aur structured learning ke through seekhte hain.",
  },
  {
    question: "Kya courses beginners ke liye suitable hain?",
    answer:
      "Haan. Courses beginner-friendly fundamentals se start hote hain aur gradually advanced concepts, hands-on assignments aur real-world projects tak le jaate hain. Aapko programming background na ho tab bhi structured roadmap follow kar sakte hain.",
  },
  {
    question: "Kya mujhe live classes aur mentorship milegi?",
    answer:
      "Program ke format ke according live sessions, doubt-solving support, mentor guidance aur project reviews available hote hain. Exact support details selected program ke page par mention ki jaati hain.",
  },
  {
    question: "Kya practical projects included hain?",
    answer:
      "Bilkul. Learning ko practical banane ke liye portfolio projects, industry-inspired assignments, case studies aur hands-on practice activities include ki jaati hain.",
  },
  {
    question: "Kya course complete karne par certificate milega?",
    answer:
      "Program requirements successfully complete karne par certificate diya jaata hai. Certificate ke saath aap apne projects, skills aur learning outcomes ko portfolio ya resume mein showcase kar sakte hain.",
  },
  {
    question: "Kya placement ya career support available hai?",
    answer:
      "Career support mein resume guidance, interview preparation, job-readiness sessions, profile improvement aur relevant opportunities ke liye guidance shamil ho sakti hai. Support program ke terms par depend karta hai.",
  },
  {
    question: "Main apne liye right program kaise choose karun?",
    answer:
      "Apne current skill level, career goal aur available time ke basis par program choose karein. Agar confusion ho, to counselling team se baat karke suitable learning path identify kar sakte hain.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050816] px-4 py-24 text-white sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left content */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              We are here to help
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Questions?
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                We have answers.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
              Career Tech Global ke programs, mentorship, projects aur career
              support ke baare mein commonly asked questions ke answers yahan
              dekhein.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-slate-950">
                  <MessageCircleQuestion size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Still have questions?
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Our counselling team can help you choose the right path.
                  </p>

                  <button className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                    Talk to an expert
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ list */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const buttonId = `faq-question-${index}`;
              const panelId = `faq-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-300/35 bg-cyan-300/[0.07] shadow-lg shadow-cyan-500/[0.06]"
                      : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-inset sm:px-6"
                    >
                      <span
                        className={`text-base font-semibold transition-colors sm:text-lg ${
                          isOpen ? "text-cyan-200" : "text-white"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-cyan-300 text-slate-950"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        <ChevronDown size={19} />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-5 pb-6 text-sm leading-7 text-slate-400 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-cyan-400/[0.08] to-blue-500/[0.08] p-6 sm:flex-row sm:p-8">
          <div>
            <p className="text-lg font-semibold text-white">
              Ready to start your career journey?
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Find the right program for your goals.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
            Explore Programs
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}