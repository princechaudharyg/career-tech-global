export default function WhoIsThisFor() {
    const audience = [
      {
        title: "College Students",
        description:
          "Start your tech career with practical skills, real projects and industry mentorship before graduation.",
        icon: "🎓",
      },
      {
        title: "Working Professionals",
        description:
          "Upskill in AI, Cyber Security and Data Science to accelerate your career and unlock better opportunities.",
        icon: "💼",
      },
      {
        title: "Career Switchers",
        description:
          "Transition into the tech industry with structured learning, personalized guidance and placement support.",
        icon: "🚀",
      },
      {
        title: "International Aspirants",
        description:
          "Build globally relevant technical skills that prepare you for international career opportunities.",
        icon: "🌍",
      },
    ];
  
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              WHO IS THIS FOR?
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Designed For Every Stage Of Your Career
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Whether you're just starting, switching careers or looking to
              advance in your current role, our programs are built around your
              professional goals.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {audience.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="text-5xl">{item.icon}</div>
  
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>
  
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }