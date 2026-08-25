const outcomes = [
  {
    title: "ATS Resume",
    description:
      "Build an ATS-friendly resume that increases your chances of getting shortlisted.",
    icon: "📄",
    color: "from-blue-500 to-cyan-500",
    softColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Mock Interviews",
    description:
      "Practice technical and HR interviews with industry professionals.",
    icon: "🎯",
    color: "from-violet-500 to-purple-600",
    softColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    title: "Placement Assistance",
    description:
      "Dedicated career support to help you secure interviews and job offers.",
    icon: "💼",
    color: "from-cyan-500 to-blue-600",
    softColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    title: "Industry Certifications",
    description:
      "Earn valuable certificates to strengthen your professional profile.",
    icon: "🏆",
    color: "from-amber-500 to-orange-500",
    softColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    title: "Global Opportunities",
    description:
      "Prepare for remote and international technology careers.",
    icon: "🌎",
    color: "from-emerald-500 to-teal-600",
    softColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    title: "Lifetime Career Support",
    description:
      "Continue receiving career guidance even after completing your program.",
    icon: "🚀",
    color: "from-rose-500 to-pink-600",
    softColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
];

export default function CareerOutcomes() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="absolute left-0 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
            CAREER OUTCOMES
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Everything You Need To Get Hired
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Our programs are designed not only to teach skills but to help you
            confidently launch your career in the tech industry.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[28px] border ${item.borderColor} bg-white p-6 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7`}
            >
              <div
                className={`absolute right-0 top-0 h-36 w-36 translate-x-1/3 -translate-y-1/3 rounded-full ${item.softColor} transition duration-500 group-hover:scale-125`}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br ${item.color} text-3xl shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${item.softColor} text-xs font-black text-slate-700`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5">
                  <span
                    className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${item.color}`}
                  />

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Career advantage
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}