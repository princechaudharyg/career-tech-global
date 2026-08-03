import {
    IconCheck,
    IconFileText,
    IconSearch,
    IconSparkles,
    IconDownload,
  } from "@tabler/icons-react";
  
  export default function ATSResume() {
    const steps = [
      {
        icon: IconSearch,
        title: "Resume Review",
        desc: "We analyze your existing resume and identify ATS issues.",
      },
      {
        icon: IconSparkles,
        title: "ATS Optimization",
        desc: "Add recruiter-friendly keywords and improve formatting.",
      },
      {
        icon: IconFileText,
        title: "Professional Rewrite",
        desc: "Transform your resume into a modern, industry-ready profile.",
      },
      {
        icon: IconDownload,
        title: "Final Delivery",
        desc: "Receive ATS-friendly PDF & editable Word format.",
      },
    ];
  
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              ATS RESUME SERVICE
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Build a Resume That
              <span className="block text-blue-600">
                Gets Interview Calls
              </span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Our experts optimize your resume to pass Applicant Tracking Systems
              (ATS) and impress recruiters.
            </p>
          </div>
  
          <div className="mt-20 grid gap-14 lg:grid-cols-2">
  
            {/* Left Timeline */}
            <div className="space-y-8">
  
              {steps.map((step, index) => {
                const Icon = step.icon;
  
                return (
                  <div
                    key={index}
                    className="flex gap-5 rounded-2xl border p-6 transition hover:border-blue-600 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                      <Icon className="text-blue-600" size={28} />
                    </div>
  
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {step.title}
                      </h3>
  
                      <p className="mt-2 leading-7 text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
  
            </div>
  
            {/* Right Preview Card */}
  
            <div className="rounded-3xl border bg-slate-50 p-10 shadow-xl">
  
              <h3 className="text-3xl font-bold">
                ATS Resume Score
              </h3>
  
              <div className="mt-8 flex items-center justify-center">
  
                <div className="flex h-44 w-44 items-center justify-center rounded-full border-8 border-blue-600 text-5xl font-extrabold text-blue-600">
                  95%
                </div>
  
              </div>
  
              <div className="mt-10 space-y-4">
  
                {[
                  "ATS Friendly Format",
                  "Keyword Optimized",
                  "Professional Design",
                  "Editable Word File",
                  "PDF Included",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <IconCheck
                      className="text-green-600"
                      size={20}
                    />
  
                    <span>{item}</span>
  
                  </div>
                ))}
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }