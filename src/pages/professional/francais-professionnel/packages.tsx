import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

export default function FrancaisProfessionnelPackages() {
  return (
    <>
      <SEO
        title="Packs Français Professionnel - Programmes de Formation"
        description="Choisissez votre pack de français professionnel. Petit groupe ou coaching 1-to-1 avec sessions live, ressources illimitées et préparation aux certifications."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Packs Français Professionnel
              </h1>
              <p className="text-xl text-white/90">
                Paiement unique · Durée 2 mois · Contenu Skool + échanges live inclus
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Offre Petit Groupe (4–6 personnes)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Apprenez avec vos pairs dans des sessions interactives
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Populaire
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">B1 Pro</h3>
                      <p className="text-gray-600 mb-2">Français du travail</p>
                      <p className="text-sm text-gray-500 mb-4">Niveau intermédiaire</p>
                      <p className="text-xs text-gray-400 mb-4">Réunions, e-mails professionnels, présentations simples</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€179</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">paiement unique · 2 mois</p>
                      <p className="text-xs text-gray-400 line-through">350 € prix marché</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h d'échanges live groupe / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Ressources Skool B1 Pro illimitées</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Vocabulaire réunions & négociation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Attestation de formation</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Prendre cette offre
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Premium
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">B2 Pro</h3>
                      <p className="text-white/80 mb-2">Français des affaires</p>
                      <p className="text-sm text-white/70 mb-4">Niveau autonome</p>
                      <p className="text-xs text-white/60 mb-4">Négociation, rapports, conférences internationales</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€297</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">paiement unique · 2 mois</p>
                      <p className="text-xs text-white/50 line-through">450 € prix marché</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h d'échanges live groupe / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Ressources Skool B2 Pro illimitées</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Simulations réunions & pitchs</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Préparation DELF Pro B2 incluse</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Prendre cette offre
                    </Button>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">C1 Pro</h3>
                      <p className="text-gray-600 mb-2">Français expert</p>
                      <p className="text-sm text-gray-500 mb-4">Langue de direction</p>
                      <p className="text-xs text-gray-400 mb-4">Leadership, rédaction avancée, représentation internationale</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€299</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">paiement unique · 2 mois</p>
                      <p className="text-xs text-gray-400 line-through">600 € prix marché</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h d'échanges live groupe / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Ressources Skool C1 Pro illimitées</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Coaching communication stratégique</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Attestation Qualiopi</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Prendre cette offre
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Offre 1-to-1 (cours individuel)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Formation personnalisée avec coach expert dédié
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-bold">
                        Meilleure valeur
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">B1 Pro · 1-to-1</h3>
                      <p className="text-gray-600 mb-4">Français du travail — Individuel</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€349</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">paiement unique · 2 mois</p>
                      <p className="text-xs text-gray-400 line-through">1 100 € prix marché</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h visio 1-to-1 dédiées / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Plan personnalisé sur-mesure</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Accès Skool B1 Pro illimité</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Prendre cette offre
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Top
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">B2 Pro · 1-to-1</h3>
                      <p className="text-white/80 mb-4">Français des affaires — Individuel</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€449</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">paiement unique · 2 mois</p>
                      <p className="text-xs text-white/50 line-through">1 350 € prix marché</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h visio 1-to-1 dédiées / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Simulations & corrections écrites</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Accès Skool B2 Pro illimité</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Prendre cette offre
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">C1 Pro · 1-to-1</h3>
                      <p className="text-gray-600 mb-4">Français expert — Individuel</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€699</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">paiement unique · 2 mois</p>
                      <p className="text-xs text-gray-400 line-through">1 650 € prix marché</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h visio 1-to-1 dédiées / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Coaching & feedback personnalisé</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Accès Skool C1 Pro illimité</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Prendre cette offre
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-white rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Vous ne savez pas quel pack choisir ?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Réservez une consultation gratuite de 20 minutes pour évaluer votre niveau actuel et discuter de vos objectifs professionnels.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-full px-10 py-6 text-lg">
                    Planifier une Consultation Gratuite
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}