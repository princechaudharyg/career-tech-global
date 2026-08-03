import {
    IconArrowRight,
    IconBriefcase,
    IconFileText,
    IconBrandLinkedin,
    IconMessage2Check,
  } from "@tabler/icons-react";
  
  import Button from "@/components/ui/Button";
  import Badge from "@/components/ui/Badge";
  import Container from "@/components/ui/Container";
  import Card from "@/components/ui/Card";
  
  export default function CareerHero() {
    return (
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-28 text-white">
        <Container>
  
          <div className="grid items-center gap-16 lg:grid-cols-2">
  
            {/* LEFT */}
  
            <div>
  
              <Badge>
                🚀 Career Services
              </Badge>
  
              <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
                Get Hired
                <span className="block text-cyan-300">
                  Faster Than Ever
                </span>
              </h1>
  
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                Professional resume building, LinkedIn optimization,
                mock interviews and career coaching designed to help
                you land high-paying tech jobs.
              </p>
  
              <div className="mt-10 flex flex-wrap gap-5">
  
                <Button href="/contact">
                  Book Consultation
                </Button>
  
                <Button
                  href="#services"
                  variant="secondary"
                >
                  Explore Services
                </Button>
  
              </div>
  
            </div>
  
            {/* RIGHT */}
  
            <div className="grid gap-5">
  
              <Card>
  
                <div className="flex items-center gap-4">
  
                  <IconFileText
                    className="text-blue-600"
                    size={36}
                  />
  
                  <div>
  
                    <h3 className="text-xl font-bold text-slate-900">
                      ATS Resume Building
                    </h3>
  
                    <p className="mt-1 text-slate-500">
                      Resume optimized for recruiters & ATS.
                    </p>
  
                  </div>
  
                </div>
  
              </Card>
  
              <Card>
  
                <div className="flex items-center gap-4">
  
                  <IconBrandLinkedin
                    className="text-blue-600"
                    size={36}
                  />
  
                  <div>
  
                    <h3 className="text-xl font-bold text-slate-900">
                      LinkedIn Optimization
                    </h3>
  
                    <p className="mt-1 text-slate-500">
                      Build a recruiter-friendly LinkedIn profile.
                    </p>
  
                  </div>
  
                </div>
  
              </Card>
  
              <Card>
  
                <div className="flex items-center gap-4">
  
                  <IconMessage2Check
                    className="text-blue-600"
                    size={36}
                  />
  
                  <div>
  
                    <h3 className="text-xl font-bold text-slate-900">
                      Mock Interviews
                    </h3>
  
                    <p className="mt-1 text-slate-500">
                      HR + Technical interview preparation.
                    </p>
  
                  </div>
  
                </div>
  
              </Card>
  
              <Card>
  
                <div className="flex items-center gap-4">
  
                  <IconBriefcase
                    className="text-blue-600"
                    size={36}
                  />
  
                  <div>
  
                    <h3 className="text-xl font-bold text-slate-900">
                      Career Coaching
                    </h3>
  
                    <p className="mt-1 text-slate-500">
                      Personalized roadmap to your dream job.
                    </p>
  
                  </div>
  
                </div>
  
              </Card>
  
            </div>
  
          </div>
  
        </Container>
      </section>
    );
  }