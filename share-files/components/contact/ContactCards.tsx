import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactCards() {
  const cards = [
    {
      icon: <Phone className="h-10 w-10 text-cyan-400" />,
      title: "Call Our Advisors",
      description:
        "Talk directly with our career advisors to choose the best learning path.",
      value: "+1 (XXX) XXX-XXXX",
    },
    {
      icon: <Mail className="h-10 w-10 text-cyan-400" />,
      title: "Email Us",
      description:
        "Get detailed responses regarding programs, pricing and admissions.",
      value: "admissions@careertechglobal.com",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-cyan-400" />,
      title: "Live Chat",
      description:
        "Connect instantly with our support team during business hours.",
      value: "Average reply < 5 mins",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            CONTACT OPTIONS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            We're Here to Help
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Choose the most convenient way to connect with our admissions and
            career support team.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
            >
              <div className="mb-8 inline-flex rounded-2xl bg-cyan-50 p-5 transition group-hover:bg-cyan-500">
                <div className="group-hover:text-white">
                  {card.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {card.description}
              </p>

              <div className="mt-8 font-semibold text-cyan-600">
                {card.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}