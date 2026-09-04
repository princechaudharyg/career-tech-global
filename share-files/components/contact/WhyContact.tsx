import { ShieldCheck, Users, Briefcase, Clock } from "lucide-react";

export default function WhyContact() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-cyan-500" />,
      title: "Trusted Guidance",
      description:
        "Get honest advice from experienced mentors who understand today's tech industry.",
    },
    {
      icon: <Users className="h-10 w-10 text-cyan-500" />,
      title: "1-on-1 Counseling",
      description:
        "Discuss your background, career goals, and receive a personalized learning roadmap.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-cyan-500" />,
      title: "Placement Support",
      description:
        "Resume optimization, LinkedIn branding, mock interviews, and hiring assistance.",
    },
    {
      icon: <Clock className="h-10 w-10 text-cyan-500" />,
      title: "Quick Response",
      description:
        "Our admissions team usually responds within 24 business hours.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            More Than Just Training
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We don't just teach technology—we help students build careers through
            mentorship, projects, interview preparation, and placement support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-cyan-50 p-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}