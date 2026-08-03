import { IconCheck, IconCrown } from "@tabler/icons-react";

const plans = [
  {
    title: "Resume Pro",
    price: "$79",
    popular: false,
    features: [
      "ATS Optimized Resume",
      "Editable Word File",
      "Professional PDF",
      "Keyword Optimization",
      "2 Revisions",
    ],
  },
  {
    title: "Career Pro",
    price: "$149",
    popular: true,
    features: [
      "Everything in Resume Pro",
      "LinkedIn Optimization",
      "Mock HR Interview",
      "Career Consultation",
      "Unlimited Revisions",
    ],
  },
  {
    title: "Ultimate Career",
    price: "$249",
    popular: false,
    features: [
      "Everything in Career Pro",
      "Technical Interview",
      "Portfolio Review",
      "Job Search Strategy",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            PRICING
          </span>

          <h2 className="mt-6 text-5xl font-extrabold">
            Choose Your Career Package
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Premium career services designed to maximize your interview success.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? "border-blue-600 ring-2 ring-blue-600" : ""
              }`}
            >
              {plan.popular && (
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  <IconCrown size={18} />
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.title}
              </h3>

              <div className="mt-6 text-5xl font-extrabold text-blue-600">
                {plan.price}
              </div>

              <p className="mt-2 text-slate-500">
                One-time payment
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <IconCheck className="text-green-600" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}