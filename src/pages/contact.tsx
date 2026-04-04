import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contactez-Nous - Vocalis Academy"
        description="Contactez notre équipe d'experts pour commencer votre parcours linguistique. Formation en Français, Anglais, Allemand, Espagnol et Chinois."
      />
      <Header />
      <main>
        <ExpertiseSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}