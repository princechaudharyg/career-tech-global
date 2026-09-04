const programs = [
    {
      title: "Data Science & AI",
      duration: "6 Months",
      level: "Beginner to Advanced",
      color: "bg-blue-600",
      skills: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "SQL",
        "Power BI",
      ],
    },
    {
      title: "Cyber Security & Ethical Hacking",
      duration: "6 Months",
      level: "Beginner",
      color: "bg-green-600",
      skills: [
        "Networking",
        "Linux",
        "Ethical Hacking",
        "Web Security",
        "Pen Testing",
        "SOC",
      ],
    },
    {
      title: "Cyber Security & AI",
      duration: "6 Months",
      level: "Intermediate",
      color: "bg-purple-600",
      skills: [
        "Cyber Security",
        "AI Security",
        "Automation",
        "Python",
        "Cloud Security",
        "Threat Detection",
      ],
    },
  ];
  
  export default function BatchPrograms() {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              LIVE BATCH PROGRAMS
            </span>
  
            <h2 className="mt-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
              Choose Your Career Path
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Learn through live instructor-led classes, real-world projects,
              career guidance and placement support.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
  
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`inline-block rounded-full ${program.color} px-4 py-2 text-sm font-semibold text-white`}
                >
                  {program.level}
                </div>
  
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>
  
                <p className="mt-2 text-slate-500">
                  Duration: {program.duration}
                </p>
  
                <div className="mt-6 space-y-3">
                  {program.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="text-blue-600">✔</span>
                      {skill}
                    </div>
                  ))}
                </div>
  
                <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }