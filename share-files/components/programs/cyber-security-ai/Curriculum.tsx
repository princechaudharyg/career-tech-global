"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconCheck,
  IconChevronDown,
} from "@tabler/icons-react";

import SectionHeading from "./SectionHeading";
import { modules } from "./cyberSecurityData";

export default function Curriculum() {
  const [openModule, setOpenModule] = useState("03");

  return (
<section
        id="curriculum"
        className="bg-slate-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="30-week curriculum"
            title="From Ethical Hacking to AI Security"
            description="Every module includes skills, tools, a project and a clear outcome."
          />

          <div className="mx-auto mt-14 max-w-5xl space-y-4">
            {modules.map((module, index) => {
              const ModuleIcon = module.icon;
              const isOpen = openModule === module.number;

              return (
                <motion.article
                  key={module.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className={`overflow-hidden rounded-[24px] border bg-white shadow-lg shadow-slate-200/40 ${
                    isOpen
                      ? "border-cyan-300"
                      : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenModule(
                        isOpen ? "" : module.number,
                      )
                    }
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300">
                      <ModuleIcon size={23} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-black uppercase tracking-wider text-cyan-600">
                          Module {module.number}
                        </span>

                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-black text-slate-500">
                          {module.duration}
                        </span>
                      </div>

                      <h3 className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
                        {module.title}
                      </h3>
                    </div>

                    <IconChevronDown
                      size={20}
                      className={`text-slate-400 transition ${
                        isOpen
                          ? "rotate-180 text-cyan-600"
                          : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <p className="text-sm leading-6 text-slate-500">
                            {module.description}
                          </p>

                          <div className="mt-5 rounded-2xl bg-slate-950 p-5">
                            <p className="text-[10px] font-black uppercase tracking-wider text-cyan-300">
                              Project
                            </p>

                            <p className="mt-2 text-sm font-bold leading-6 text-white">
                              {module.project}
                            </p>
                          </div>

                          <div className="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                            <p className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                              Outcome
                            </p>

                            <p className="mt-2 text-sm font-semibold leading-6 text-emerald-950">
                              {module.outcome}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                            Skills
                          </p>

                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            {module.skills.map((skill) => (
                              <div
                                key={skill}
                                className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700"
                              >
                                <IconCheck
                                  size={16}
                                  className="text-emerald-600"
                                />

                                {skill}
                              </div>
                            ))}
                          </div>

                          <p className="mt-6 text-[10px] font-black uppercase tracking-wider text-slate-500">
                            Tools
                          </p>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {module.tools.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-lg bg-cyan-50 px-3 py-2 text-xs font-bold text-cyan-700"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
  );
}
