import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, TrendingUp, Users, Award, ArrowRight } from "lucide-react";

export default function GuideMinesAustraliennes() {
  return (
    <>
      <SEO 
        title="Guide Mines Australiennes - PowerLingua Shop"
        description="Le guide complet pour décrocher un emploi bien rémunéré dans les mines australiennes"
      />
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section with Storytelling */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy/5 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
                  <span className="text-gold font-semibold text-sm">ÉDITION 2025 - GUIDE PREMIUM</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6 leading-tight">
                  MINE YOUR <span className="text-gold">FUTURE</span>
                </h1>
                <h2 className="font-serif text-2xl md:text-3xl text-navy/80 mb-6">
                  Le Guide Stratégique Complet
                </h2>
                <p className="text-xl text-navy/70 mb-8">
                  Pour Africains et Européens qui veulent décrocher un emploi bien rémunéré dans les mines australiennes — de zéro à ton premier shift FIFO
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold">25</div>
                    <div className="text-sm text-navy/60">Chapitres</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold">150+</div>
                    <div className="text-sm text-navy/60">Agences listées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold">300+</div>
                    <div className="text-sm text-navy/60">Employeurs</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/mine_austra.png"
                  alt="Guide Mines Australiennes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">
              Imagine-toi dans 6 mois...
            </h2>
            <div className="space-y-6 text-lg text-white/90">
              <p>
                Tu te réveilles dans ton camp minier ultra-moderne en Western Australia. Le soleil se lève sur le bush australien. Ton shift de 12 heures commence dans une heure.
              </p>
              <p>
                À la fin de ton roster de 2 semaines, tu touches <span className="text-gold font-bold">12 000 à 18 000 AUD</span> — soit entre 5,4 et 8,1 millions de FCFA par mois. Pas d'impôts sur le revenu en dessous de 18 200 AUD. Logement payé. Nourriture fournie.
              </p>
              <p className="text-xl font-semibold text-gold">
                Pendant que tes collègues en Afrique ou en Europe gagnent 200 000 à 500 000 FCFA, toi tu envoies 3 millions chez toi chaque mois.
              </p>
              <p>
                Ce n'est pas un rêve. C'est la réalité de milliers d'Africains et Européens qui ont franchi le pas. Et maintenant, c'est ton tour.
              </p>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Les obstacles qui t'empêchent de réussir
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Tu ne sais pas par où commencer</h3>
                <p className="text-navy/70">
                  Visa, CV australien, certifications requises... L'information est éparpillée et souvent contradictoire.
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Les arnaques sont partout</h3>
                <p className="text-navy/70">
                  Fausses promesses d'agences, visas frauduleux, frais cachés... Tu risques de perdre ton argent.
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Tu penses que c'est trop difficile</h3>
                <p className="text-navy/70">
                  Sans expérience en Australie, sans diplôme australien, sans connexions... Comment faire ?
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Tu manques de temps et d'argent</h3>
                <p className="text-navy/70">
                  Faire tes propres recherches peut prendre des mois et te coûter des milliers d'euros en fausses pistes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold/5 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Ce que ce guide va t'apporter
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "La roadmap exacte, étape par étape, du visa au premier salaire",
                "150+ agences de recrutement FIFO vérifiées avec leurs contacts directs",
                "300+ employeurs miniers qui recrutent activement des étrangers",
                "Les 18 villes minières stratégiques et leurs opportunités",
                "Comment créer un CV australien qui passe les ATS",
                "Les certifications exactes à obtenir (White Card, RIIWHS204D...)",
                "Comment négocier un salaire de 150k+ AUD par an",
                "Les erreurs fatales à éviter dans les candidatures",
                "Les templates d'email pour contacter les recruteurs",
                "Le réseau secret des groupes Facebook de mineurs FIFO"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-navy/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Ils l'ont fait. Pourquoi pas toi ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy/80 mb-4 italic">
                  "Grâce à ce guide, j'ai décroché mon premier contrat FIFO en 4 mois. Je gagne maintenant 7 millions FCFA par mois comme opérateur de foreuse. Ma vie a changé."
                </p>
                <p className="font-semibold text-navy">— Jean-Pierre K., Cameroun → Perth</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy/80 mb-4 italic">
                  "Les templates de CV et les contacts d'agences m'ont fait gagner 6 mois. J'ai économisé plus de 2 000 € en évitant les arnaques. Merci PowerLingua !"
                </p>
                <p className="font-semibold text-navy">— Thomas M., France → Kalgoorlie</p>
              </div>
            </div>
          </div>
        </section>

        {/* Irresistible Offer Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-gold text-white rounded-full mb-6 font-bold">
              OFFRE LIMITÉE
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
              Investis 8 997 FCFA aujourd'hui
            </h2>
            <p className="text-2xl text-navy/70 mb-8">
              Pour potentiellement gagner 5 à 8 millions FCFA par mois
            </p>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <div className="mb-8">
                <span className="text-6xl font-bold text-gold">8 997 FCFA</span>
                <p className="text-navy/60 mt-2">Soit moins qu'un repas au restaurant</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">25 chapitres détaillés (250+ pages)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">150+ contacts d'agences de recrutement</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">300+ employeurs qui recrutent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Templates de CV et emails</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Accès immédiat au PDF</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Mises à jour gratuites à vie</span>
                </div>
              </div>

              <Button className="w-full bg-gold hover:bg-gold/90 text-white font-bold py-8 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Ajouter au Panier
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-navy/60 mt-4">
                🔒 Paiement sécurisé • Accès instantané
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <Award className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">Garantie Satisfait</p>
              </div>
              <div className="p-6">
                <Users className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">500+ Clients</p>
              </div>
              <div className="p-6">
                <TrendingUp className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">Résultats Prouvés</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ta vie peut changer en 6 mois
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Mais seulement si tu prends la décision aujourd'hui.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Chaque jour qui passe, c'est un jour de moins pour commencer ta nouvelle vie en Australie. Chaque mois qui passe, c'est 5 à 8 millions FCFA que tu aurais pu gagner.
            </p>
            <Button className="bg-gold hover:bg-gold/90 text-white font-bold py-6 px-12 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Je veux commencer maintenant
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}