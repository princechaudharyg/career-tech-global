"use client";

import { motion } from "framer-motion";
import {
  IconMessageChatbot,
  IconBrain,
  IconBriefcase,
  IconCode,
  IconCircleCheckFilled,
  IconStarFilled,
} from "@tabler/icons-react";

const interviews = [
  {
    title: "Technical Interview",
    icon: IconCode,
    score: "96%",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "HR Interview",
    icon: IconBriefcase,
    score: "94%",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Behavioral Round",
    icon: IconBrain,
    score: "98%",
    color: "from-violet-500 to-fuchsia-600",
  },
];

export default function MockInterview() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              AI Mock Interviews
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">

              Practice Like
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                A Real Interview
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">

              Experience realistic technical and HR interviews with AI
              feedback, expert guidance and detailed performance analysis.

            </p>

            <div className="mt-10 space-y-5">

              {[
                "AI Interview Simulator",
                "Technical Coding Questions",
                "HR & Behavioral Rounds",
                "Detailed Feedback Report",
                "Unlimited Practice Sessions",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <IconCircleCheckFilled className="text-emerald-400" />
                  <span className="text-lg text-slate-200">
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-300">
                  Live Dashboard
                </p>

                <h3 className="mt-2 text-3xl font-black text-white">
                  Interview Results
                </h3>

              </div>

              <div className="rounded-2xl bg-cyan-500 p-4 text-white">
                <IconMessageChatbot size={34} />
              </div>

            </div>

            <div className="mt-10 space-y-6">

              {interviews.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-6 shadow-lg"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-4">

                        <div
                          className={`rounded-2xl bg-gradient-to-r ${item.color} p-4 text-white`}
                        >
                          <Icon size={28} />
                        </div>

                        <div>

                          <h3 className="text-xl font-bold">
                            {item.title}
                          </h3>

                          <p className="text-slate-500">
                            Completed
                          </p>

                        </div>

                      </div>

                      <div className="text-right">

                        <p className="text-sm text-slate-500">
                          Score
                        </p>

                        <h2 className="text-3xl font-black text-cyan-600">
                          {item.score}
                        </h2>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <p className="opacity-80">
                    Overall Performance
                  </p>

                  <h2 className="mt-2 text-6xl font-black">
                    A+
                  </h2>

                </div>

                <IconStarFilled size={70} />

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}