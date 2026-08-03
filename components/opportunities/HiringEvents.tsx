const events = [
    {
      title: "AI Career Hiring Drive",
      date: "August 15, 2026",
      company: "Microsoft & Partners",
      mode: "Online",
    },
    {
      title: "Cyber Security Recruitment",
      date: "August 20, 2026",
      company: "Cisco",
      mode: "Virtual",
    },
    {
      title: "Data Science Career Fair",
      date: "September 5, 2026",
      company: "Google",
      mode: "Hybrid",
    },
  ];
  
  export default function HiringEvents() {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              HIRING EVENTS
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Upcoming Recruitment Events
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Participate in exclusive hiring events and connect directly with recruiters.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
  
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  {event.mode}
                </span>
  
                <h3 className="mt-6 text-2xl font-bold">
                  {event.title}
                </h3>
  
                <p className="mt-4 text-slate-600">
                  {event.company}
                </p>
  
                <p className="mt-2 text-blue-600 font-semibold">
                  {event.date}
                </p>
  
                <button className="mt-8 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700">
                  Register Now
                </button>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }