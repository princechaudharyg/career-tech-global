"use client";

const companies = [
  "Microsoft",
  "Amazon",
  "Google",
  "Deloitte",
  "Accenture",
  "IBM",
];

export default function TrustSection() {
  return (
    <section className="relative border-y border-white/5 bg-[#050816] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Career ecosystem
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Built around the skills employers need.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Career Tech Global combines practical technology training,
            career preparation and access to real-world opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-20 items-center justify-center rounded-2xl
              border border-white/10 bg-white/[0.025]
              text-sm font-semibold text-slate-400
              transition duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.05]
              hover:text-white"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}