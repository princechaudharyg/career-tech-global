const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "IBM",
    "Oracle",
    "Cisco",
  ];
  
  export default function HeroCompanies() {
    return (
      <div className="mt-20">
  
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Trusted Career Paths Inspired By
        </p>
  
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
  
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-lg font-semibold text-slate-700 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
            >
              {company}
            </div>
          ))}
  
        </div>
  
      </div>
    );
  }