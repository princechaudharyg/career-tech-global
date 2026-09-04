const steps = [
  {
    number: "01",
    title: "Foundation",
    description:
      "Build strong fundamentals in programming, tools, and core concepts.",
  },
  {
    number: "02",
    title: "Hands-on Projects",
    description:
      "Work on industry-inspired projects to gain practical experience.",
  },
  {
    number: "03",
    title: "Career Preparation",
    description:
      "Resume building, LinkedIn optimization, and mock interviews.",
  },
  {
    number: "04",
    title: "Placement Support",
    description:
      "Connect with hiring partners and prepare for real job opportunities.",
  },
];

const colors = [
  {
    number: "text-blue-600",
    badge: "bg-blue-600",
    soft: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    number: "text-cyan-600",
    badge: "bg-cyan-600",
    soft: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    number: "text-violet-600",
    badge: "bg-violet-600",
    soft: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    number: "text-emerald-600",
    badge: "bg-emerald-600",
    soft: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

export default function LearningTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
            LEARNING JOURNEY
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Your Roadmap to Success
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            A structured learning path designed to take you from beginner to
            job-ready professional.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-11 hidden h-px bg-gradient-to-r from-blue-200 via-cyan-300 via-violet-300 to-emerald-300 xl:block" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {steps.map((step, index) => {
              const style = colors[index];

              return (
                <article
                  key={step.number}
                  className="group relative rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl sm:p-7"
                >
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <span
                      className={`flex h-[88px] w-[88px] items-center justify-center rounded-[26px] text-3xl font-black text-white shadow-xl ${style.badge}`}
                    >
                      {step.number}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] ${style.soft} ${style.number}`}
                    >
                      Step {index + 1}
                    </span>
                  </div>

                  <div
                    className={`mt-7 h-1 w-14 rounded-full ${style.badge}`}
                  />

                  <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {step.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${style.badge}`}
                    />

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Learning milestone
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute right-[-17px] top-10 z-20 hidden h-4 w-4 rotate-45 border-r border-t border-cyan-300 bg-white xl:block" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}