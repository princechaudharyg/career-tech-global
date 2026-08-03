import {
    IconMapPin,
    IconBriefcase,
    IconCurrencyDollar,
    IconArrowRight,
  } from "@tabler/icons-react";
  
  const jobs = [
    {
      company: "Microsoft",
      role: "AI Engineer",
      location: "Remote",
      type: "Full Time",
      salary: "$120k",
    },
    {
      company: "Google",
      role: "Data Scientist",
      location: "California",
      type: "Full Time",
      salary: "$135k",
    },
    {
      company: "Amazon",
      role: "Cloud Engineer",
      location: "Seattle",
      type: "Hybrid",
      salary: "$110k",
    },
    {
      company: "IBM",
      role: "Cyber Security Analyst",
      location: "Remote",
      type: "Full Time",
      salary: "$105k",
    },
    {
      company: "Oracle",
      role: "GRC Consultant",
      location: "Austin",
      type: "Hybrid",
      salary: "$98k",
    },
    {
      company: "Cisco",
      role: "Network Security Engineer",
      location: "Texas",
      type: "Full Time",
      salary: "$115k",
    },
  ];
  
  export default function FeaturedJobs() {
    return (
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              FEATURED JOBS
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Latest Opportunities
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Explore some of the most in-demand technology jobs.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  
            {jobs.map((job) => (
              <div
                key={job.role}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {job.company}
                </span>
  
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {job.role}
                </h3>
  
                <div className="mt-6 space-y-3 text-slate-600">
  
                  <div className="flex items-center gap-3">
                    <IconMapPin size={18} />
                    {job.location}
                  </div>
  
                  <div className="flex items-center gap-3">
                    <IconBriefcase size={18} />
                    {job.type}
                  </div>
  
                  <div className="flex items-center gap-3">
                    <IconCurrencyDollar size={18} />
                    {job.salary}
                  </div>
  
                </div>
  
                <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Apply Now
                  <IconArrowRight size={18} />
                </button>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }