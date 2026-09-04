"use client";

import { useState } from "react";

import Hero from "@/components/opportunities/Hero";
import SearchFilters, {
  type OpportunityFilters,
} from "@/components/opportunities/SearchFilters";
import FeaturedJobs from "@/components/opportunities/FeaturedJobs";
import HiringEvents from "@/components/opportunities/HiringEvents";
import HiringPartners from "@/components/opportunities/HiringPartners";
import CareerResources from "@/components/opportunities/CareerResources";
import CTA from "@/components/opportunities/CTA";

export default function OpenOpportunitiesPage() {
  const [filters, setFilters] = useState<OpportunityFilters>({
    keyword: "",
    location: "",
    jobType: "All Jobs",
    targetRole: "All Roles",
  });

  return (
    <main className="overflow-x-hidden bg-white pt-20">
      <Hero />

      <SearchFilters
        filters={filters}
        onFiltersChange={setFilters}
      />

      <FeaturedJobs filters={filters} />

      <HiringEvents />
      <HiringPartners />
      <CareerResources />
      <CTA />
    </main>
  );
}