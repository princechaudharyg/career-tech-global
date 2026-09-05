"use client";

import Image from "next/image";
import { ArrowUpRight, Building2, Sparkles, Users, Target, Award } from "lucide-react";

type Company = {
  name: string;
  logo: string;
  category: string;
};

const companies: Company[] = [
  {
    name: "Microsoft",
    logo: "/images/companies/microsoft.svg",
    category: "Technology",
  },
  {
    name: "Google",
    logo: "/images/companies/google.svg",
    category: "Technology",
  },
  {
    name: "Amazon",
    logo: "/images/companies/amazon.svg",
    category: "Technology",
  },
  {
    name: "Deloitte",
    logo: "/images/companies/deloitte.svg",
    category: "Consulting",
  },
  {
    name: "TCS",
    logo: "/images/companies/tcs.svg",
    category: "IT Services",
  },
  {
    name: "Infosys",
    logo: "/images/companies/infosys.svg",
    category: "IT Services",
  },
  {
    name: "Accenture",
    logo: "/images/companies/accenture.svg",
    category: "Consulting",
  },
  {
    name: "Wipro",
    logo: "/images/companies/wipro.svg",
    category: "IT Services",
  },
];

const marqueeCompanies = [...companies, ...companies];

export default function TrustedCompany() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-4 py-20 text-white sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-sm text-cyan-300">
            <Sparkles size={16} />
            Build in-demand skills
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Learn skills that
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              leading companies value.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Build industry-ready skills, work on practical projects and prepare
            for opportunities with companies shaping the future.
          </p>
        </div>

        {/* Features - Safe language */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <Building2 className="mx-auto mb-3 text-cyan-300" size={22} />
            <p className="text-lg font-bold text-white">Industry Partners</p>
            <p className="mt-1 text-sm text-slate-500">Hiring network</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <Users className="mx-auto mb-3 text-blue-300" size={22} />
            <p className="text-lg font-bold text-white">Career Support</p>
            <p className="mt-1 text-sm text-slate-500">1-on-1 guidance</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-xl">
            <Award className="mx-auto mb-3 text-violet-300" size={22} />
            <p className="text-lg font-bold text-white">Practical Learning</p>
            <p className="mt-1 text-sm text-slate-500">Real projects</p>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="mt-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Our learners aspire to work with
          </p>

          <div className="relative overflow-hidden">
            {/* Edge fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050816] to-transparent sm:w-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050816] to-transparent sm:w-40" />

            <div className="trusted-marquee flex w-max gap-4 py-3 hover:[animation-play-state:paused]">
              {marqueeCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="group flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] px-6 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.08] hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative h-8 w-28 opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        sizes="112px"
                        className="object-contain"
                      />
                    </div>

                    <span className="text-[10px] uppercase tracking-wider text-slate-600 transition-colors group-hover:text-cyan-200/70">
                      {company.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust statement */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-cyan-300/15 bg-gradient-to-r from-cyan-400/[0.08] to-blue-500/[0.08] p-6 sm:flex-row sm:p-7">
          <div>
            <p className="text-lg font-semibold text-white">
              Your next opportunity starts with the right skills.
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Learn from industry experts and become future-ready.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200">
            Explore Learning Paths
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        .trusted-marquee {
          animation: trusted-scroll 42s linear infinite;
        }

        @keyframes trusted-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}