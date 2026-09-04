"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { faqs } from "./grcData";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
<section className="py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">
              Before you register.
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-white">
                      {faq.question}
                    </span>

                    <span className="text-xl text-cyan-300">
                      {isOpen ? "âˆ’" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
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
                        className="px-5 pb-5"
                      >
                        <p className="text-sm leading-6 text-slate-400">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
}
