import CareerHero from "@/components/career-services/CareerHero";
import ServicesGrid from "@/components/career-services/ServicesGrid";
import ATSResume from "@/components/career-services/ATSResume";
import InterviewPrep from "@/components/career-services/InterviewPrep";
import Pricing from "@/components/career-services/Pricing";
import CTA from "@/components/career-services/CTA";

export default function CareerServicesPage() {
  return (
    <main className="pt-20">
      <CareerHero />
      <ServicesGrid />
      <ATSResume />
      <InterviewPrep />
      <Pricing />
      <CTA />
    </main>
  );
}