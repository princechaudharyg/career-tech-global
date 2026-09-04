"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBriefcase,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
  IconMapPin,
  IconTargetArrow,
} from "@tabler/icons-react";

import { createClient } from "@/lib/supabase/client";
import JobReadinessModal from "./JobReadinessModal";
import {
  opportunityJobs,
  type OpportunityJob,
} from "./opportunityData";
import type { OpportunityFilters } from "./SearchFilters";

type DatabaseOpportunity = {
  id: string;
  title: string;
  company: string;
  location: string;
  work_mode: string;
  job_type: string;
  experience_level: string;
  description: string | null;
  skills: string[] | null;
  apply_url: string;
  is_published: boolean | null;
};

type LiveOpportunityJob = OpportunityJob & {
  description: string;
  applyUrl: string;
  experienceLevel: string;
};

const cardColors = [
  "bg-cyan-600",
  "bg-blue-600",
  "bg-violet-600",
  "bg-emerald-600",
  "bg-orange-500",
  "bg-rose-600",
];

function getCategory(
  title: string,
  skills: string[],
): OpportunityJob["category"] {
  const text = `${title} ${skills.join(" ")}`.toLowerCase();

  if (
    text.includes("cyber") ||
    text.includes("security") ||
    text.includes("soc") ||
    text.includes("network") ||
    text.includes("threat")
  ) {
    return "Cyber Security";
  }

  if (
    text.includes("grc") ||
    text.includes("governance") ||
    text.includes("risk") ||
    text.includes("compliance") ||
    text.includes("audit")
  ) {
    return "GRC & AI";
  }

  if (
    text.includes("data") ||
    text.includes("ai") ||
    text.includes("machine learning") ||
    text.includes("python") ||
    text.includes("sql") ||
    text.includes("analytics")
  ) {
    return "AI & Data";
  }

  return "Engineering";
}

function getRecommendedProgram(
  category: OpportunityJob["category"],
) {
  if (category === "AI & Data") {
    return "Data Science & AI";
  }

  if (category === "Cyber Security") {
    return "Cyber Security Program";
  }

  if (category === "GRC & AI") {
    return "GRC + AI Program";
  }

  return "Software Engineering Program";
}

function getJobType(jobType: string): OpportunityJob["type"] {
  const value = jobType.toLowerCase();

  if (value.includes("intern")) {
    return "Internship";
  }

  if (value.includes("contract")) {
    return "Contract";
  }

  return "Full Time";
}

function getWorkMode(workMode: string): OpportunityJob["workMode"] {
  const value = workMode.toLowerCase();

  if (value.includes("hybrid")) {
    return "Hybrid";
  }

  if (value.includes("on-site") || value.includes("onsite")) {
    return "Onsite";
  }

  return "Remote";
}

function getLogo(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function mapOpportunity(
  job: DatabaseOpportunity,
  index: number,
): LiveOpportunityJob {
  const skills =
    job.skills && job.skills.length > 0
      ? job.skills
      : ["Career opportunity"];

  const category = getCategory(job.title, skills);

  return {
    id: job.id,
    company: job.company || "Company",
    role: job.title || "Open Opportunity",
    location: job.location || "Location not specified",
    type: getJobType(job.job_type || "Full Time"),
    workMode: getWorkMode(job.work_mode || "Remote"),
    category,
    salaryMin: 0,
    salaryMax: 0,
    match: 0,
    recommendedProgram: getRecommendedProgram(category),
    matchedSkills: skills,
    skillGaps: [],
    logo: getLogo(job.title || "Job"),
    color: cardColors[index % cardColors.length],
    isSample: false,
    description:
      job.description ||
      "Explore this opportunity and check your readiness before applying.",
    applyUrl: job.apply_url || "#",
    experienceLevel: job.experience_level || "Entry Level",
  };
}

function createFallbackJobs(
  existingJobCount: number,
): LiveOpportunityJob[] {
  const minimumJobsToShow = 60;
  const requiredFallbackJobs = Math.max(
    0,
    minimumJobsToShow - existingJobCount,
  );

  return opportunityJobs
    .slice(0, requiredFallbackJobs)
    .map((sampleJob) => ({
      ...sampleJob,
      id: `demo-${sampleJob.id}`,
      description:
        "Practice opportunity for career exploration, readiness assessment, skill-building, and portfolio preparation.",
      applyUrl: "/programs",
      experienceLevel: "Entry Level",
      isSample: true,
    }));
}

export default function FeaturedJobs({
  filters,
}: {
  filters: OpportunityFilters;
}) {
  const [selectedJob, setSelectedJob] =
    useState<OpportunityJob | null>(null);

  const [allJobs, setAllJobs] = useState<LiveOpportunityJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 6;

  useEffect(() => {
    async function loadOpportunities() {
      setLoading(true);
      setErrorMessage("");

      const supabase = createClient();

      const { data, error } = await supabase
        .from("opportunities")
        .select(
          "id, title, company, location, work_mode, job_type, experience_level, description, skills, apply_url, is_published",
        )
        .order("created_at", { ascending: false });

      if (error) {
        const fallbackJobs = createFallbackJobs(0);

        setAllJobs(fallbackJobs);
        setErrorMessage("");
        setLoading(false);
        return;
      }

      const liveJobs = ((data || []) as DatabaseOpportunity[]).map(
        mapOpportunity,
      );

      const fallbackJobs = createFallbackJobs(liveJobs.length);

      setAllJobs([...liveJobs, ...fallbackJobs]);
      setLoading(false);
    }

    loadOpportunities();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    filters.keyword,
    filters.location,
    filters.jobType,
    filters.targetRole,
  ]);

  const filteredJobs = useMemo(() => {
    const keyword = filters.keyword.toLowerCase().trim();
    const location = filters.location.toLowerCase().trim();

    return allJobs.filter((job) => {
      const matchesKeyword =
        keyword.length === 0 ||
        job.role.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.category.toLowerCase().includes(keyword) ||
        job.workMode.toLowerCase().includes(keyword) ||
        job.matchedSkills.some((skill) =>
          skill.toLowerCase().includes(keyword),
        );

      const matchesLocation =
        location.length === 0 ||
        job.location.toLowerCase().includes(location) ||
        job.workMode.toLowerCase().includes(location);

      const matchesJobType =
        filters.jobType === "All Jobs" ||
        job.type === filters.jobType;

      const matchesTargetRole =
        filters.targetRole === "All Roles" ||
        job.category === filters.targetRole;

      return (
        matchesKeyword &&
        matchesLocation &&
        matchesJobType &&
        matchesTargetRole
      );
    });
  }, [allJobs, filters]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredJobs.length / jobsPerPage),
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * jobsPerPage;

  const visibleJobs = filteredJobs.slice(
    startIndex,
    startIndex + jobsPerPage,
  );

  const totalCompanies = new Set(
    allJobs.map((job) => job.company),
  ).size;

  return (
    <>
      <section id="featured-jobs" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-700">
                Opportunity Radar
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Career opportunities for your future.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                Explore jobs, check role-specific readiness, discover your
                skill gaps, and follow the recommended career path.
              </p>

              <p className="mt-3 text-xs font-bold text-slate-400">
                {allJobs.length} jobs · {totalCompanies} companies
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-sm font-bold text-slate-500">
                Page {safeCurrentPage} of {totalPages}
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-400">
                Showing {visibleJobs.length} of {filteredJobs.length} jobs
              </p>
            </div>
          </div>

          {loading && (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <p className="text-lg font-black text-slate-900">
                Loading opportunities...
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Please wait while jobs are loading.
              </p>
            </div>
          )}

          {!loading && errorMessage && (
            <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-12 text-center">
              <p className="text-lg font-black text-red-900">
                Unable to load opportunities
              </p>

              <p className="mt-2 text-sm text-red-700">
                {errorMessage}
              </p>
            </div>
          )}

          {!loading && !errorMessage && filteredJobs.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <p className="text-lg font-black text-slate-900">
                No matching opportunities found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Remove search filters or try another keyword.
              </p>
            </div>
          )}

          {!loading && !errorMessage && filteredJobs.length > 0 && (
            <>
              <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {visibleJobs.map((job, index) => {
                  const isExternalApplyUrl =
                    job.applyUrl.startsWith("http");

                  return (
                    <motion.article
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                      }}
                      whileHover={{ y: -7 }}
                      className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40 transition hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg ${job.color}`}
                          >
                            {job.logo}
                          </div>

                          <div>
                            <p className="text-sm font-bold text-slate-900">
                              {job.company}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {job.isSample
                                ? "Practice opportunity"
                                : "Live opportunity"}
                            </p>
                          </div>
                        </div>

                        <span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-black uppercase text-emerald-700">
                          {job.experienceLevel}
                        </span>
                      </div>

                      <h3 className="mt-7 text-xl font-black text-slate-900 sm:text-2xl">
                        {job.role}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-600">
                          {job.category}
                        </span>

                        <span className="rounded-lg bg-cyan-50 px-2.5 py-1.5 text-xs font-bold text-cyan-700">
                          {job.workMode}
                        </span>
                      </div>

                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                        {job.description}
                      </p>

                      <div className="mt-5 space-y-2.5 text-sm text-slate-600">
                        <div className="flex items-center gap-3">
                          <IconMapPin size={17} className="text-cyan-600" />
                          <span>{job.location}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <IconBriefcase
                            size={17}
                            className="text-cyan-600"
                          />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl bg-emerald-50 p-3">
                        <p className="text-xs font-black uppercase tracking-wider text-emerald-700">
                          Key skills
                        </p>

                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {job.matchedSkills
                            .slice(0, 5)
                            .map((skill) => (
                              <span
                                key={skill}
                                className="rounded-md bg-white px-2 py-1 text-[10px] font-bold text-emerald-700"
                              >
                                <IconCheck
                                  size={11}
                                  className="mr-1 inline"
                                />
                                {skill}
                              </span>
                            ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedJob(job)}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-cyan-600"
                      >
                        Check My Readiness
                        <IconTargetArrow size={18} />
                      </button>

                      <a
                        href={job.applyUrl}
                        target={isExternalApplyUrl ? "_blank" : undefined}
                        rel={isExternalApplyUrl ? "noreferrer" : undefined}
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-500 px-5 py-3.5 text-sm font-bold text-cyan-700 transition hover:bg-cyan-50"
                      >
                        {job.isSample
                          ? "Explore Program"
                          : "View & Apply"}
                        <IconArrowRight size={18} />
                      </a>
                    </motion.article>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) => Math.max(page - 1, 1))
                    }
                    disabled={safeCurrentPage === 1}
                    className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <IconChevronLeft size={17} />
                    Previous
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1,
                  ).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`h-10 w-10 rounded-xl text-sm font-black transition ${
                        safeCurrentPage === pageNumber
                          ? "bg-slate-950 text-white shadow-lg"
                          : "border border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-600"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(page + 1, totalPages),
                      )
                    }
                    disabled={safeCurrentPage === totalPages}
                    className="inline-flex items-center gap-1 rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                    <IconChevronRight size={17} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <JobReadinessModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </>
  );
}