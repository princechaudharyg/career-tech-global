export default function AboutPage() {
    return (
      <main className="bg-white">
  
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
  
            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
              ABOUT CAREER TECH GLOBAL LLC
            </span>
  
            <h1 className="mt-8 text-5xl font-extrabold">
              Empowering Future Tech Professionals
            </h1>
  
            <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
              Career Tech Global LLC is dedicated to helping aspiring professionals
              build successful careers in Artificial Intelligence, Data Science,
              Cyber Security, Ethical Hacking and GRC through practical,
              industry-focused education.
            </p>
  
          </div>
        </section>
  
        {/* Mission & Vision */}
        <section className="py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
  
            <div className="rounded-2xl bg-slate-50 p-8 shadow">
              <h2 className="text-3xl font-bold text-slate-900">
                Our Mission
              </h2>
  
              <p className="mt-6 leading-8 text-slate-600">
                Our mission is to bridge the gap between education and industry by
                providing practical, job-oriented training with mentorship,
                projects, certifications and placement support.
              </p>
            </div>
  
            <div className="rounded-2xl bg-slate-50 p-8 shadow">
              <h2 className="text-3xl font-bold text-slate-900">
                Our Vision
              </h2>
  
              <p className="mt-6 leading-8 text-slate-600">
                To become one of the world's most trusted AI and Cyber Security
                education companies helping students build successful global
                careers.
              </p>
            </div>
  
          </div>
        </section>
  
        {/* Values */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
  
            <h2 className="text-center text-4xl font-bold">
              Why Career Tech Global?
            </h2>
  
            <div className="mt-12 grid gap-8 md:grid-cols-3">
  
              <div className="rounded-2xl bg-white p-8 shadow">
                <h3 className="text-2xl font-bold">
                  Industry Experts
                </h3>
  
                <p className="mt-4 text-slate-600">
                  Learn directly from experienced professionals working in AI,
                  Data Science and Cyber Security.
                </p>
              </div>
  
              <div className="rounded-2xl bg-white p-8 shadow">
                <h3 className="text-2xl font-bold">
                  Practical Learning
                </h3>
  
                <p className="mt-4 text-slate-600">
                  Real-world projects, live sessions and hands-on labs designed
                  for job readiness.
                </p>
              </div>
  
              <div className="rounded-2xl bg-white p-8 shadow">
                <h3 className="text-2xl font-bold">
                  Career Support
                </h3>
  
                <p className="mt-4 text-slate-600">
                  Resume building, interview preparation, LinkedIn optimization
                  and placement assistance.
                </p>
              </div>
  
            </div>
  
          </div>
        </section>
  
      </main>
    );
  }