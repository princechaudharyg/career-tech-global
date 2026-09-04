"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

import SectionHeading from "./SectionHeading";
import { faqs } from "./cyberSecurityData";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
<section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Questions before you start"
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border ${
                    isOpen
                      ? "border-cyan-300 bg-cyan-50/40"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="text-sm font-black text-slate-900">
                      {faq.question}
                    </span>

                    <IconChevronDown
                      size={19}
                      className={`shrink-0 text-slate-400 transition ${
                        isOpen ? "rotate-180 text-cyan-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 px-5 pb-5 pt-4">
                      <p className="text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
