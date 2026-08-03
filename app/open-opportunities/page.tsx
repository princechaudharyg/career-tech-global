import Hero from "@/components/opportunities/Hero";
import SearchFilters from "@/components/opportunities/SearchFilters";
import FeaturedJobs from "@/components/opportunities/FeaturedJobs";
import HiringEvents from "@/components/opportunities/HiringEvents";
import HiringPartners from "@/components/opportunities/HiringPartners";
import CareerResources from "@/components/opportunities/CareerResources";
import CTA from "@/components/opportunities/CTA";

export default function OpenOpportunitiesPage() {
  return (
    <main className="pt-20">
      <Hero />
      <SearchFilters />
      <FeaturedJobs />
      <HiringEvents />
      <HiringPartners />
      <CareerResources />
      <CTA />
    </main>
  );
}