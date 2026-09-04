const steps = [
    "Enroll",
    "Live Training",
    "Hands-on Projects",
    "Certification",
    "Resume Building",
    "Mock Interviews",
    "Placement Support",
  ];
  
  export default function LearningJourney() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              YOUR JOURNEY
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              From Learning to
              <span className="block text-blue-600">
                Landing Your Dream Job
              </span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              We don't just teach. We prepare you for your entire career journey.
            </p>
          </div>
  
          <div className="mt-20 grid gap-8 md:grid-cols-4 lg:grid-cols-7">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {index + 1}
                </div>
  
                <h3 className="mt-5 font-semibold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }