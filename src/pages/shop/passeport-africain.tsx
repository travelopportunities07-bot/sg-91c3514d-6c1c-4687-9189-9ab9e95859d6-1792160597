import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, Globe, Target, Shield, ArrowRight } from "lucide-react";

export default function PasseportAfricain() {
  return (
    <>
      <SEO 
        title="Passeport Africain - PowerLingua Shop"
        description="Le guide ultime 2026 pour immigrer, trouver un job et réussir dans 15 pays stratégiques"
      />
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy/5 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
                  <span className="text-gold font-semibold text-sm">📘 GUIDE OFFICIEL IMMIGRATION AFRIQUE</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6 leading-tight">
                  PASSEPORT AFRICAIN
                </h1>
                <h2 className="text-2xl md:text-3xl text-navy/80 mb-6">
                  Le Guide Ultime 2026 pour Immigrer, Trouver un Job et Réussir dans 15 Pays Stratégiques
                </h2>
                <p className="text-lg text-navy/70 mb-8">
                  Stratégies, Secteurs Porteurs, Démarches Rapides & Conseils d'Expatriés
                </p>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold">15</div>
                    <div className="text-sm text-navy/60">Pays couverts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold">75M</div>
                    <div className="text-sm text-navy/60">Postes vacants (OCDE)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold">10×</div>
                    <div className="text-sm text-navy/60">Salaire Afrique → Europe</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Screenshot_2026-05-30_03.05.02.png"
                  alt="Passeport Africain"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">
              L'Afrique compte 1,4 milliard d'habitants
            </h2>
            <div className="space-y-6 text-lg text-white/90">
              <p>
                Dont 60% ont moins de 25 ans. Le chômage des jeunes atteint <span className="text-gold font-bold">30% en moyenne</span>. Pendant ce temps, l'Europe, le Canada, l'Australie vieillissent et manquent de 75 millions de travailleurs qualifiés.
              </p>
              <p>
                Le paradoxe ? Pendant que l'Afrique exporte ses matières premières, elle pourrait exporter ses talents vers des opportunités 10× mieux rémunérées.
              </p>
              <p className="text-xl font-semibold text-gold">
                Un infirmier au Sénégal gagne 150 000 FCFA. Au Canada, il gagne 2,5 millions FCFA. Même profil. Même compétence. Juste un passeport différent.
              </p>
              <p>
                Ce guide, c'est ton nouveau passeport. Celui qui transforme ta compétence africaine en salaire européen.
              </p>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Pourquoi tant d'Africains échouent à émigrer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Information fragmentée</h3>
                <p className="text-navy/70">
                  Tu passes 6 mois sur Google, YouTube, forums... pour avoir des infos contradictoires et périmées.
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Arnaques d'agences</h3>
                <p className="text-navy/70">
                  Tu paies 500 000 à 2 millions FCFA à une "agence" qui disparaît après avoir pris ton argent.
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Mauvais pays ciblé</h3>
                <p className="text-navy/70">
                  Tu choisis le Canada parce que "tout le monde y va"... sans savoir que l'Allemagne recrute 10× plus dans ton secteur.
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Refus de visa</h3>
                <p className="text-navy/70">
                  Ton dossier est rejeté 3 fois parce que tu ne connais pas les codes et exigences réelles des consulats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold/5 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Ce que tu vas découvrir dans ce guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Les 15 pays les plus accessibles pour les Africains en 2026",
                "Les secteurs qui recrutent massivement (santé, tech, BTP, logistique...)",
                "Comment choisir LE bon pays selon ton profil",
                "Les démarches visa étape par étape pour chaque pays",
                "Les pièges à éviter (frais cachés, faux recruteurs, arnaques)",
                "Comment faire reconnaître ton diplôme africain",
                "Les programmes d'immigration express (Canada, Australie, Allemagne)",
                "Comment trouver un employeur sponsor depuis l'Afrique",
                "Les templates de CV et lettres de motivation qui marchent",
                "Le coût RÉEL de l'immigration (budget pays par pays)",
                "Les aides financières et bourses disponibles",
                "Comment s'intégrer rapidement (langue, culture, réseau)"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-navy/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Des résultats concrets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy/80 mb-4 italic">
                  "J'ai choisi l'Allemagne grâce à ce guide au lieu du Canada. En 8 mois, j'ai mon visa et un job d'infirmière à 2,8 millions FCFA/mois. Meilleur investissement de ma vie."
                </p>
                <p className="font-semibold text-navy">— Fatoumata D., Côte d'Ivoire → Berlin</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy/80 mb-4 italic">
                  "Les templates de CV et la liste des recruteurs m'ont fait gagner 1 an. J'ai évité 3 arnaques et économisé 800 000 FCFA. Merci PowerLingua !"
                </p>
                <p className="font-semibold text-navy">— Amadou S., Mali → Montréal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-gold text-white rounded-full mb-6 font-bold">
              PRIX DE LANCEMENT
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
              6 997 FCFA seulement
            </h2>
            <p className="text-2xl text-navy/70 mb-8">
              Moins que le prix d'une "consultation" avec une agence douteuse
            </p>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <div className="mb-8">
                <span className="text-6xl font-bold text-gold">6 997 FCFA</span>
                <p className="text-navy/60 mt-2">Au lieu de 15 000 FCFA</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Guide complet 15 pays (300+ pages)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Checklists visa pays par pays</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Templates CV et lettres de motivation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Liste de recruteurs internationaux</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Budget détaillé par destination</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Accès immédiat + mises à jour 2026</span>
                </div>
              </div>

              <Button className="w-full bg-gold hover:bg-gold/90 text-white font-bold py-8 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Ajouter au Panier
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-navy/60 mt-4">
                🔒 Paiement sécurisé • Téléchargement instantané
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <Globe className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">15 Destinations</p>
              </div>
              <div className="p-6">
                <Target className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">Stratégies Éprouvées</p>
              </div>
              <div className="p-6">
                <Shield className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">Anti-Arnaques</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              2026 sera ton année ou celle d'un autre
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Les 75 millions de postes vacants en Europe et au Canada ne vont pas t'attendre.
            </p>
            <Button className="bg-gold hover:bg-gold/90 text-white font-bold py-6 px-12 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Je démarre mon projet d'immigration
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}