import {
    IconFileText,
    IconBrandLinkedin,
    IconUserCheck,
    IconBriefcase,
    IconCode,
    IconCurrencyDollar,
    IconWorld,
    IconRocket,
  } from "@tabler/icons-react";
  
  import Container from "@/components/ui/Container";
  import Card from "@/components/ui/Card";
  import SectionHeading from "@/components/ui/SectionHeading";
  
  const services = [
    {
      icon: IconFileText,
      title: "ATS Resume Building",
      desc: "Professional ATS-friendly resume for maximum recruiter visibility.",
    },
    {
      icon: IconBrandLinkedin,
      title: "LinkedIn Optimization",
      desc: "Optimize your LinkedIn profile to attract recruiters.",
    },
    {
      icon: IconUserCheck,
      title: "HR Mock Interview",
      desc: "Practice with real HR interview questions and feedback.",
    },
    {
      icon: IconCode,
      title: "Technical Interview",
      desc: "Coding & technical interview preparation.",
    },
    {
      icon: IconBriefcase,
      title: "Career Coaching",
      desc: "One-on-one career roadmap with industry experts.",
    },
    {
      icon: IconCurrencyDollar,
      title: "Salary Negotiation",
      desc: "Learn how to negotiate better salary offers.",
    },
    {
      icon: IconWorld,
      title: "Personal Branding",
      desc: "Build a strong online professional presence.",
    },
    {
      icon: IconRocket,
      title: "Placement Strategy",
      desc: "Job search strategy and recruiter outreach support.",
    },
  ];
  
  export default function ServicesGrid() {
    return (
      <section id="services" className="py-24 bg-slate-50">
        <Container>
  
          <SectionHeading
            badge="Career Services"
            title="Everything You Need To Get Hired"
            subtitle="Our premium career services help you stand out, crack interviews and land high-paying tech jobs."
          />
  
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
  
            {services.map((service, index) => {
              const Icon = service.icon;
  
              return (
                <Card key={index}>
  
                  <Icon
                    size={42}
                    className="text-blue-600"
                  />
  
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
  
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.desc}
                  </p>
  
                </Card>
              );
            })}
  
          </div>
  
        </Container>
      </section>
    );
  }