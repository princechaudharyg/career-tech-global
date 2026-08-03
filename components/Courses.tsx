export default function Courses() {
    const courses = [
      "Data Science & AI",
      "Cyber Security",
      "Cloud Computing",
      "Full Stack Development",
    ];
  
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
  
          <h2 className="mb-4 text-center text-4xl font-bold">
            Our Featured Programs
          </h2>
  
          <p className="mb-12 text-center text-gray-600">
            Learn today's most in-demand tech skills.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course}
                className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">{course}</h3>
  
                <p className="mt-4 text-gray-600">
                  Industry-ready curriculum with projects and placement support.
                </p>
  
                <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white">
                  Learn More
                </button>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }