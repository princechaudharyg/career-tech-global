export default function Outcomes() {
    const roles = [
      {
        title: "AI Engineer",
        salary: "$90K – $160K / year",
      },
      {
        title: "Data Scientist",
        salary: "$95K – $170K / year",
      },
      {
        title: "Cyber Security Analyst",
        salary: "$80K – $145K / year",
      },
      {
        title: "GRC Analyst",
        salary: "$85K – $140K / year",
      },
    ];
  
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              CAREER OUTCOMES
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Turn Your Learning Into A Career
            </h2>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Our programs are designed to help learners build practical skills
              for today's technology careers. Roles and salary ranges vary based
              on experience, location and employer.
            </p>
          </div>
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {role.title}
                </h3>
  
                <p className="mt-4 text-blue-600 font-semibold">
                  {role.salary}
                </p>
  
                <p className="mt-6 text-slate-600 leading-7">
                  Career-ready training, projects, interview preparation and
                  placement guidance for this role.
                </p>
              </div>
            ))}
  
          </div>
  
          <p className="mt-10 text-center text-sm text-slate-500">
            * Salary ranges are approximate market estimates and may vary based on
            experience, skills, employer and geographic location.
          </p>
  
        </div>
      </section>
    );
  }