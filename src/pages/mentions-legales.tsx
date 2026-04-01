import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function MentionsLegales() {
  return (
    <>
      <SEO 
        title="Mentions Légales - Vocalis Academy"
        description="Mentions légales et informations légales de Vocalis Academy"
      />
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Mentions Légales</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Responsable de la publication</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Nom de l'entreprise :</strong> Vocalis Academy</p>
              <p><strong>Représentant légal :</strong> [Prénom et Nom]</p>
              <p><strong>Adresse :</strong> [Adresse complète en Allemagne]</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Contact</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Téléphone :</strong> [Numéro de téléphone]</p>
              <p><strong>Email :</strong> contact@vocalis-academy.com</p>
              <p><strong>Numéro d'immatriculation :</strong> [HRB au registre du commerce]</p>
              <p><strong>Numéro de TVA intracommunautaire (USt-IdNr) :</strong> [Numéro de TVA]</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Règlement des litiges</h2>
            <p className="text-gray-700 mb-4">
              La Commission européenne fournit une plateforme de règlement des litiges en ligne (OS) : 
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:underline ml-1"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-gray-700">
              Nous ne sommes ni disposés ni obligés de participer à une procédure de règlement des litiges devant un conseil d'arbitrage de consommation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}