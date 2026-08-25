import {
  Award,
  BriefcaseBusiness,
  Building2,
  Globe,
} from "lucide-react";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "IBM",
  "Accenture",
  "Deloitte",
  "EY",
  "Capgemini",
  "Infosys",
  "TCS",
  "Cognizant",
  "Wipro",
];

const companyColors = [
  "from-blue-500 to-cyan-500",
  "from-blue-600 to-indigo-600",
  "from-orange-500 to-amber-500",
  "from-slate-700 to-slate-950",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-blue-500 to-cyan-600",
  "from-indigo-500 to-blue-700",
  "from-blue-600 to-indigo-700",
  "from-cyan-500 to-blue-600",
  "from-violet-600 to-purple-700",
];

export default function HiringPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute left-0 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
            CAREER OPPORTUNITIES
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Build Skills Companies Are Looking For
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Our curriculum is designed around real industry requirements to
            help learners become job-ready for top technology companies.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {companies.map((company, index) => (
            <div
              key={company}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-xl"
            >
              <div
                className={`absolute right-0 top-0 h-20 w-20 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br ${companyColors[index]} opacity-10 transition duration-500 group-hover:scale-150 group-hover:opacity-20`}
              />

              <div className="relative flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${companyColors[index]} text-white shadow-md`}
                >
                  <Building2 size={19} />
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-900">
                    {company}
                  </h3>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Technology Career Pathways
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
          <p className="text-xs leading-5 text-slate-500">
            Company names are used only to illustrate technology career
            pathways and industry skill expectations. They do not indicate
            affiliation, sponsorship, endorsement, or a formal hiring
            partnership.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="group rounded-[28px] bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/50 transition duration-300 hover:-translate-y-2 sm:p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
              <BriefcaseBusiness size={27} />
            </div>

            <h3 className="mt-7 text-2xl font-black">
              Placement Support
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Resume reviews, interview preparation and personalized career
              guidance.
            </p>
          </div>

          <div className="group rounded-[28px] bg-gradient-to-br from-cyan-600 to-blue-700 p-6 text-white shadow-xl shadow-cyan-200/60 transition duration-300 hover:-translate-y-2 sm:p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white transition group-hover:bg-white group-hover:text-cyan-700">
              <Award size={27} />
            </div>

            <h3 className="mt-7 text-2xl font-black">
              Industry Ready
            </h3>

            <p className="mt-4 text-sm leading-7 text-cyan-100">
              Learn technologies that are actively used by leading companies.
            </p>
          </div>

          <div className="group rounded-[28px] bg-gradient-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-200/60 transition duration-300 hover:-translate-y-2 sm:p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white transition group-hover:bg-white group-hover:text-indigo-700">
              <Globe size={27} />
            </div>

            <h3 className="mt-7 text-2xl font-black">
              Global Careers
            </h3>

            <p className="mt-4 text-sm leading-7 text-blue-100">
              Prepare for remote and international opportunities with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}