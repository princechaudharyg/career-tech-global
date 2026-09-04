import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import Programs from "@/components/home/Programs";
import WhyChoose from "@/components/home/WhyChoose";
import Comparison from "@/components/home/Comparison";
import TrustedCompany from "@/components/home/TrustedCompany";
import FAQ from "@/components/career-services/FAQ";
import FinalCTA from "@/components/career-services/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <Hero />
      <TrustSection />
      <Programs />
      <WhyChoose />
      <Comparison />
      <TrustedCompany />
      <FAQ />
      <FinalCTA />
    </main>
  );
}