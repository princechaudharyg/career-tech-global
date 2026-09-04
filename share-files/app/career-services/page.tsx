import CareerHero from "@/components/career-services/CareerHero";
import ServicesGrid from "@/components/career-services/ServicesGrid";
import ResumeTransformation from "@/components/career-services/ResumeTransformation";
import ATSOptimization from "@/components/career-services/ATSOptimization";
import LinkedInBranding from "@/components/career-services/LinkedInBranding";
import MockInterview from "@/components/career-services/MockInterview";
import PlacementProcess from "@/components/career-services/PlacementProcess";
import SuccessStats from "@/components/career-services/SuccessStats";
import Testimonials from "@/components/career-services/Testimonials";
import PricingPlans from "@/components/career-services/PricingPlans";
import FAQ from "@/components/career-services/FAQ";
import FinalCTA from "@/components/career-services/FinalCTA";

export default function CareerServicesPage() {
  return (
    <main className="bg-white">
      <CareerHero />
      <ServicesGrid />
      <ResumeTransformation />
      <ATSOptimization />
      <LinkedInBranding />
      <MockInterview />
      <PlacementProcess />
      <SuccessStats />
      <Testimonials />
      <PricingPlans />
      <FAQ />
      <FinalCTA />
    </main>
  );
}