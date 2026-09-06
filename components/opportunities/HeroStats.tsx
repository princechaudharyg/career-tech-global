import {
  IconBriefcase,
  IconBuildingSkyscraper,
  IconTrendingUp,
} from "@tabler/icons-react";

const stats = [
  {
    icon: IconBriefcase,
    title: "Opportunities",
    description: "Job openings",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Partners",
    description: "Hiring network",
  },
  {
    icon: IconTrendingUp,
    title: "Career Support",
    description: "Placement assistance",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <Icon size={24} className="text-blue-600" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}