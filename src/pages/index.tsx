import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SEO
        title="PowerLingua - Maîtrisez les Langues avec des Experts"
        description="Apprenez le Français, l'Anglais, l'Allemand, l'Espagnol et le Chinois avec des experts. Accompagnement personnalisé pour écoliers, étudiants et professionnels."
        image="/og-image.png"
      />
      <Header />
      <main>
        <HeroSection />
        <ScrollingBanner variant="blue" />
        <ServicesSection />
        <ScrollingBanner variant="silver" />
        <TestimonialsSection />
        <ScrollingBanner variant="blue" />
        <FAQSection />
        <ScrollingBanner variant="silver" />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}