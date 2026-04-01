import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LocationsSection } from "@/components/LocationsSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <SEO
        title="Vocalis Academy - Maîtrisez les Langues avec des Experts"
        description="Apprenez le Français, l'Anglais, l'Allemand et le Chinois avec des experts. Accompagnement personnalisé pour écoliers, étudiants et professionnels en Afrique et en Europe."
        image="/og-image.png"
      />
      <Header />
      <main>
        <Hero />
        <LocationsSection />
      </main>
      <WhatsAppButton />
    </>
  );
}