import { IconSearch, IconMapPin, IconBriefcase } from "@tabler/icons-react";

export default function SearchFilters() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="text-3xl font-bold text-slate-900">
            Find Your Next Opportunity
          </h2>

          <p className="mt-3 text-slate-600">
            Search verified jobs, internships and hiring opportunities.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">

            {/* Keyword */}

            <div className="flex items-center gap-3 rounded-xl border p-4">
              <IconSearch size={22} className="text-blue-600" />

              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full outline-none"
              />
            </div>

            {/* Location */}

            <div className="flex items-center gap-3 rounded-xl border p-4">
              <IconMapPin size={22} className="text-blue-600" />

              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none"
              />
            </div>

            {/* Job Type */}

            <div className="flex items-center gap-3 rounded-xl border p-4">
              <IconBriefcase size={22} className="text-blue-600" />

              <select className="w-full bg-transparent outline-none">
                <option>All Jobs</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
                <option>Internship</option>
              </select>
            </div>

            {/* Button */}

            <button className="rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
              Search Jobs
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}