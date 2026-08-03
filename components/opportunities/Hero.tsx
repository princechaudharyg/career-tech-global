import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroJobCard from "./HeroJobCard";
import HeroCompanies from "./HeroCompanies";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <HeroContent />
            <HeroStats />
          </div>

          <div>
            <HeroJobCard />
          </div>

        </div>

        <HeroCompanies />

      </div>

    </section>
  );
}