export default function Programs() {
    const batchPrograms = [
      "Data Science & Artificial Intelligence",
      "Cyber Security & Ethical Hacking",
      "Cyber Security & Artificial Intelligence",
    ];
  
    const oneToOnePrograms = [
      "Data Science & Artificial Intelligence",
      "Cyber Security & Artificial Intelligence",
      "GRC & Artificial Intelligence",
    ];
  
    return (
      <section id="programs" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              OUR PROGRAMS
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Choose Your Learning Path
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Whether you prefer collaborative batch learning or personalized
              one-on-one mentorship, Career Tech Global offers programs designed
              to accelerate your career.
            </p>
          </div>
  
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
  
            {/* Batch Programs */}
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600">
                Batch Programs
              </h3>
  
              <p className="mt-3 text-slate-600">
                Learn with a group of motivated learners at an affordable cost.
              </p>
  
              <div className="mt-8 space-y-4">
                {batchPrograms.map((program) => (
                  <div
                    key={program}
                    className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-600 hover:shadow-md"
                  >
                    <h4 className="font-semibold">{program}</h4>
                  </div>
                ))}
              </div>
            </div>
  
            {/* One-to-One */}
            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-lg">
              <h3 className="text-3xl font-bold">
                1-on-1 Mentorship
              </h3>
  
              <p className="mt-3 text-blue-100">
                Personalized training with a dedicated mentor and customized
                learning plan.
              </p>
  
              <div className="mt-8 space-y-4">
                {oneToOnePrograms.map((program) => (
                  <div
                    key={program}
                    className="rounded-xl bg-white/10 p-5 backdrop-blur"
                  >
                    <h4 className="font-semibold">{program}</h4>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }