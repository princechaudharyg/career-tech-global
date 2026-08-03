import Link from "next/link";
import { IconArrowRight, IconUpload } from "@tabler/icons-react";

export default function HeroContent() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        🚀 500+ Live Career Opportunities
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
        Find Your
        <span className="block text-blue-600">
          Dream Career
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Discover verified jobs, internships and hiring events in
        Artificial Intelligence, Data Science, Cyber Security,
        Cloud Computing and Software Development.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Browse Opportunities
          <IconArrowRight size={20} />
        </Link>

        <Link
          href="/career-services"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-4 font-semibold transition hover:border-blue-600 hover:text-blue-600"
        >
          Upload Resume
          <IconUpload size={20} />
        </Link>

      </div>

    </div>
  );
}