const certifications = [
    "Microsoft",
    "Google",
    "AWS",
    "CompTIA",
    "EC-Council",
    "ISC²",
  ];
  
  const partners = [
    "Amazon",
    "Microsoft",
    "Google",
    "Deloitte",
    "Accenture",
    "Infosys",
    "TCS",
    "Capgemini",
  ];
  
  export default function IndustryRecognition() {
    return (
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="text-center">
            <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
              INDUSTRY RECOGNITION
            </span>
  
            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Certifications &
              <span className="block text-blue-600">
                Hiring Ecosystem
              </span>
            </h2>
  
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Build skills that align with globally recognized certifications and
              prepare for opportunities with leading technology companies.
            </p>
          </div>
  
          {/* Certifications */}
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-bold">
              Certification Path
            </h3>
  
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-white p-6 text-center font-semibold shadow transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
  
          {/* Hiring Partners */}
          <div className="mt-20">
            <h3 className="mb-8 text-center text-2xl font-bold">
              Companies Our Learners Target
            </h3>
  
            <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-4">
              {partners.map((company) => (
                <div
                  key={company}
                  className="rounded-xl bg-white p-6 text-center font-semibold shadow transition hover:bg-blue-600 hover:text-white"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  }