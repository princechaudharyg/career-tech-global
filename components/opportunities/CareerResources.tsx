"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconBrain,
  IconFileText,
  IconRoute,
  IconUserCheck,
} from "@tabler/icons-react";

const resources = [
  {
    title: "ATS Resume Guide",
    description: "Create a resume that gets noticed by recruiters and ATS tools.",
    icon: IconFileText,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Interview Preparation",
    description: "Practice HR and technical interviews with a clear strategy.",
    icon: IconUserCheck,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Career Roadmap",
    description: "Choose the right learning path for your target technology role.",
    icon: IconRoute,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "AI Career Insights",
    description: "Understand the tools, skills and roles shaping the future of tech.",
    icon: IconBrain,
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function CareerResources() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-10">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-violet-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-violet-700">
            Career resources
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Prepare before you apply.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
            Practical resources to help you build confidence, improve your
            profile and move closer to your next opportunity.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.title}
                className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/30 transition hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${resource.color}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-900">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {resource.description}
                </p>

                <Link
                  href="/career-services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-600"
                >
                  Explore resource
                  <IconArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}