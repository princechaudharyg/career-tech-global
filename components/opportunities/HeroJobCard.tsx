import { IconMapPin, IconBriefcase, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function HeroJobCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
        🔥 Latest Opportunity
      </span>

      <h3 className="mt-6 text-3xl font-bold text-slate-900">
        AI Engineer
      </h3>

      <p className="mt-2 text-lg text-blue-600 font-semibold">
        Microsoft
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 text-slate-600">
          <IconMapPin size={20} />
          Remote
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <IconBriefcase size={20} />
          Full Time
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-100 p-5">

        <p className="text-sm text-slate-500">
          Estimated Salary
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-blue-600">
          $120k / Year
        </h2>

      </div>

      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Apply Now

        <IconArrowRight size={20} />
      </Link>

    </div>
  );
}