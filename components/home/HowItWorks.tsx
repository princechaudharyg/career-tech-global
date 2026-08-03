export default function HowItWorks() {
    const steps = [
      {
        number: "01",
        title: "Book a Free Consultation",
        description:
          "Talk to our career advisors to understand your goals and choose the right learning path.",
      },
      {
        number: "02",
        title: "Choose Your Program",
        description:
          "Select between Batch Learning or 1-on-1 Mentorship based on your learning style.",
      },
      {
        number: "03",
        title: "Learn with Experts",
        description:
          "Attend live sessions, work on real-world projects, and receive mentorship from industry professionals.",
      },
      {
        number: "04",
        title: "Launch Your Career",
        description:
          "Build your resume, prepare for interviews, and receive career guidance with placement support.",
      },
    ];
  
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              HOW IT WORKS
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Your Journey Starts Here
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              From consultation to career support, we guide you at every step of
              your professional journey.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl font-extrabold text-blue-600">
                  {step.number}
                </div>
  
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>
  
                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }