import {
  Brain,
  Briefcase,
  Code2,
  Database,
  Shield,
  Trophy,
} from "lucide-react";

const roadmap = [
  {
    icon: Code2,
    title: "Programming Fundamentals",
    description:
      "Build a strong foundation with Python, Git, Linux and problem solving.",
    color: "from-blue-500 to-cyan-500",
    softColor: "bg-blue-50",
    numberColor: "text-blue-700",
  },
  {
    icon: Database,
    title: "Core Technologies",
    description:
      "Master SQL, Data Analysis, Networking, Cloud and Security fundamentals.",
    color: "from-indigo-500 to-blue-600",
    softColor: "bg-indigo-50",
    numberColor: "text-indigo-700",
  },
  {
    icon: Brain,
    title: "Specialization",
    description:
      "Choose AI, Data Science, Cyber Security or GRC according to your career goals.",
    color: "from-cyan-500 to-emerald-500",
    softColor: "bg-cyan-50",
    numberColor: "text-cyan-700",
  },
  {
    icon: Shield,
    title: "Real Projects",
    description:
      "Gain practical experience through capstone projects and hands-on labs.",
    color: "from-emerald-500 to-green-600",
    softColor: "bg-emerald-50",
    numberColor: "text-emerald-700",
  },
  {
    icon: Briefcase,
    title: "Interview Preparation",
    description:
      "ATS Resume, LinkedIn Optimization, Mock Interviews and HR preparation.",
    color: "from-orange-500 to-red-500",
    softColor: "bg-orange-50",
    numberColor: "text-orange-700",
  },
  {
    icon: Trophy,
    title: "Placement Support",
    description:
      "Dedicated placement assistance with hiring partners and career guidance.",
    color: "from-purple-500 to-pink-500",
    softColor: "bg-purple-50",
    numberColor: "text-purple-700",
  },
];

export default function Curriculum() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="absolute left-0 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
            LEARNING ROADMAP
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Your Journey From Beginner To Professional
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Follow our structured roadmap designed by industry experts to help
            you build practical skills and become job-ready.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-10 hidden h-[calc(100%-80px)] w-px -translate-x-1/2 bg-gradient-to-b from-blue-200 via-cyan-300 to-purple-200 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:gap-x-20 lg:gap-y-9">
            {roadmap.map((step, index) => {
              const Icon = step.icon;
              const isRightSide = index % 2 !== 0;

              return (
                <article
                  key={step.title}
                  className={`group relative ${
                    isRightSide ? "lg:translate-y-16" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl sm:p-7">
                    <div
                      className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${step.color}`}
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                      >
                        <Icon size={26} />
                      </div>

                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${step.softColor} text-sm font-black ${step.numberColor}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {step.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${step.color}`}
                      />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Step {index + 1} of {roadmap.length}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`absolute top-10 hidden h-5 w-5 rounded-full border-4 border-white bg-gradient-to-br ${step.color} shadow-lg lg:block ${
                      isRightSide
                        ? "-left-[51px]"
                        : "-right-[51px]"
                    }`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}