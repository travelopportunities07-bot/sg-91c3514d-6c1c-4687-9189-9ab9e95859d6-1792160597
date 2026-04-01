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
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Mentions Légales</h1>
          
          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6">Responsable de la publication</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong className="text-navy">Nom de l'entreprise :</strong> Vocalis Academy</p>
              <p><strong className="text-navy">Représentant légal :</strong> [Prénom et Nom]</p>
              <p><strong className="text-navy">Adresse :</strong> 71-75, Shelton Street, Covent Garden, WC2H 9JQ, Londres, Royaume-Uni</p>
            </div>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6">Contact</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong className="text-navy">Téléphone :</strong> +44 7537 10 6060 (uniquement joignable via WhatsApp)</p>
              <p><strong className="text-navy">Email :</strong> contact@vocalis-academy.com</p>
              <p><strong className="text-navy">Numéro d'immatriculation :</strong> [HRB au registre du commerce]</p>
              <p><strong className="text-navy">Numéro de TVA intracommunautaire (USt-IdNr) :</strong> [Numéro de TVA]</p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6">Règlement des litiges</h2>
            <p className="text-gray-700 mb-4">
              La Commission européenne fournit une plateforme de règlement des litiges en ligne (OS) : 
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:underline ml-1 font-medium"
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