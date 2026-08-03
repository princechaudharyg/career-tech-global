const features = [
    ["Live Instructor Classes", "✅", "✅"],
    ["Recorded Sessions", "✅", "✅"],
    ["1-on-1 Mentor", "❌", "✅"],
    ["Career Roadmap", "Basic", "Personalized"],
    ["Resume Building", "✅", "✅"],
    ["LinkedIn Optimization", "✅", "✅"],
    ["Mock Interviews", "Group", "Personal"],
    ["Real Projects", "3+", "6+"],
    ["Placement Support", "Standard", "Priority"],
    ["Flexible Schedule", "❌", "✅"],
  ];
  
  export default function ProgramComparison() {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              COMPARE PROGRAMS
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Which Learning Path
              <span className="block text-blue-600">
                Fits You Best?
              </span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Compare our Live Batch Programs with Premium 1-on-1 Mentorship.
            </p>
          </div>
  
          <div className="mt-16 overflow-hidden rounded-3xl bg-white shadow-xl">
  
            <table className="w-full">
  
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-6 text-left">Features</th>
                  <th className="p-6 text-center">Live Batch</th>
                  <th className="p-6 text-center">1-on-1 Mentorship</th>
                </tr>
              </thead>
  
              <tbody>
  
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="p-5 font-medium">{item[0]}</td>
  
                    <td className="p-5 text-center">
                      {item[1]}
                    </td>
  
                    <td className="p-5 text-center font-semibold text-blue-600">
                      {item[2]}
                    </td>
                  </tr>
                ))}
  
              </tbody>
  
            </table>
  
          </div>
  
        </div>
      </section>
    );
  }