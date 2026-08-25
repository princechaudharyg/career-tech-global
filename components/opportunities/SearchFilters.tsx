"use client";

import {
  IconBriefcase,
  IconMapPin,
  IconSearch,
  IconTargetArrow,
} from "@tabler/icons-react";

export type OpportunityFilters = {
  keyword: string;
  location: string;
  jobType: string;
  targetRole: string;
};

type SearchFiltersProps = {
  filters: OpportunityFilters;
  onFiltersChange: (filters: OpportunityFilters) => void;
};

export default function SearchFilters({
  filters,
  onFiltersChange,
}: SearchFiltersProps) {
  const updateFilter = (
    key: keyof OpportunityFilters,
    value: string,
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      keyword: "",
      location: "",
      jobType: "All Jobs",
      targetRole: "All Roles",
    });
  };

  const scrollToJobs = () => {
    document
      .getElementById("featured-jobs")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="opportunity-filters"
      className="relative bg-slate-50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-[1250px] px-5 sm:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-7">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-600">
                Build your opportunity profile
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Find roles that fit your journey
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Search by role, location and work preference to discover
                opportunities that match your goals.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Matching engine active
            </div>
          </div>

          {/* Filters */}
          <div className="mt-7 grid gap-3 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
            {/* Keyword */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-100">
              <IconSearch
                size={20}
                stroke={2}
                className="shrink-0 text-cyan-600"
              />

              <input
                type="text"
                value={filters.keyword}
                onChange={(event) =>
                  updateFilter("keyword", event.target.value)
                }
                placeholder="Search role, skill or company"
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-100">
              <IconMapPin
                size={20}
                stroke={2}
                className="shrink-0 text-cyan-600"
              />

              <input
                type="text"
                value={filters.location}
                onChange={(event) =>
                  updateFilter("location", event.target.value)
                }
                placeholder="Location"
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Job Type */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-100">
              <IconBriefcase
                size={20}
                stroke={2}
                className="shrink-0 text-cyan-600"
              />

              <select
                value={filters.jobType}
                onChange={(event) =>
                  updateFilter("jobType", event.target.value)
                }
                className="w-full bg-transparent text-sm text-slate-700 outline-none"
              >
                <option value="All Jobs">All Jobs</option>
                <option value="Full Time">Full Time</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            {/* Target Role */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-100">
              <IconTargetArrow
                size={20}
                stroke={2}
                className="shrink-0 text-cyan-600"
              />

              <select
                value={filters.targetRole}
                onChange={(event) =>
                  updateFilter("targetRole", event.target.value)
                }
                className="w-full bg-transparent text-sm text-slate-700 outline-none"
              >
                <option value="All Roles">All Roles</option>
                <option value="AI & Data">AI & Data</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Engineering">Engineering</option>
                <option value="GRC & AI">GRC & AI</option>
              </select>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-slate-400">
              Your search helps us show opportunities relevant to your career
              direction.
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full border border-slate-200 px-5 py-2.5 text-xs font-bold text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
              >
                Clear Filters
              </button>

              <button
                type="button"
                onClick={scrollToJobs}
                className="rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-cyan-600"
              >
                Show Matching Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}