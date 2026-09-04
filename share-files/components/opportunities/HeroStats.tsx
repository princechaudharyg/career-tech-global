import {
    IconBriefcase,
    IconBuildingSkyscraper,
    IconTrendingUp,
  } from "@tabler/icons-react";
  
  const stats = [
    {
      icon: IconBriefcase,
      number: "500+",
      title: "Live Opportunities",
    },
    {
      icon: IconBuildingSkyscraper,
      number: "200+",
      title: "Hiring Partners",
    },
    {
      icon: IconTrendingUp,
      number: "95%",
      title: "Career Success Support",
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
  
              <h3 className="mt-5 text-3xl font-extrabold text-slate-900">
                {item.number}
              </h3>
  
              <p className="mt-2 text-slate-600">
                {item.title}
              </p>
            </div>
          );
        })}
  
      </div>
    );
  }