import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import WhyContact from "@/components/contact/WhyContact";
import Map from "@/components/contact/Map";
import FAQ from "@/components/contact/FAQ";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <main className="bg-white pt-20">
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <WhyContact />
      <Map />
      <FAQ />
      <CTA />
    </main>
  );
}