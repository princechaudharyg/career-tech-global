export default function OneToOnePrograms() {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
  
          {/* LEFT */}
          <div>
  
            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
              PREMIUM MENTORSHIP
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Learn Directly
              <span className="block text-blue-600">
                From Industry Experts
              </span>
            </h2>
  
            <p className="mt-8 text-lg leading-8 text-slate-600">
              Personalized one-on-one sessions designed for professionals,
              job seekers and career switchers who want faster results with
              dedicated mentorship.
            </p>
  
            <div className="mt-10 space-y-4">
  
              <div>✅ Personalized Learning Roadmap</div>
              <div>✅ Weekly 1-on-1 Live Sessions</div>
              <div>✅ Resume & LinkedIn Optimization</div>
              <div>✅ Mock Technical Interviews</div>
              <div>✅ Live Projects & Portfolio</div>
              <div>✅ Placement Assistance</div>
  
            </div>
  
            <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Apply for Mentorship
            </button>
  
          </div>
  
          {/* RIGHT */}
  
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-2xl">
  
            <h3 className="text-3xl font-bold">
              Premium Features
            </h3>
  
            <div className="mt-10 space-y-6">
  
              <div className="rounded-xl bg-white/10 p-5">
                <h4 className="font-bold">Dedicated Mentor</h4>
                <p className="mt-2 text-blue-100">
                  Learn directly from working professionals.
                </p>
              </div>
  
              <div className="rounded-xl bg-white/10 p-5">
                <h4 className="font-bold">Flexible Schedule</h4>
                <p className="mt-2 text-blue-100">
                  Book sessions according to your availability.
                </p>
              </div>
  
              <div className="rounded-xl bg-white/10 p-5">
                <h4 className="font-bold">Career Guidance</h4>
                <p className="mt-2 text-blue-100">
                  End-to-end support until placement.
                </p>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }