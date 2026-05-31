import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, Video, BookOpen, Award, Shield } from "lucide-react";

export default function FrancaisPackages() {
  return (
    <>
      <SEO
        title="Packs Français - Certification DELF/DALF"
        description="Formations français A1, A2, B1, B2 en petit groupe ou 1-to-1. Ressources Skool illimitées et live hebdomadaires."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-indigo-100 px-6 py-3 rounded-full mb-6">
                  <span className="text-2xl">🇫🇷</span>
                  <span className="text-indigo-900 font-semibold">Certification Français</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
                  Nos Packs de Formation
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Paiement unique · Durée 2 mois · Ressources Skool + échanges live inclus
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Offre Petit Groupe (3–6 personnes)
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-indigo-900">A1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Débutant</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-indigo-600">129€</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h d'échange / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Ressources Skool A1 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live groupe / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Communauté francophone</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-indigo-900">A2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Élémentaire</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-indigo-600">149€</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h d'échange / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Ressources Skool A2 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live groupe / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Communauté francophone</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-indigo-900">B1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Intermédiaire</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-indigo-600">179€</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h d'échange / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Ressources Skool B1 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live groupe / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Accès forum + corrections</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-indigo-900">B2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Indépendant</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-indigo-600">179€</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h d'échange / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Ressources Skool B2 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live groupe / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Prép. certif. DELF B2</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Offre 1-to-1 (Cours Individuel)
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-purple-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-purple-900">A1 · 1-to-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Débutant</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-purple-600">159€</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h individuel / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Ressources Skool A1 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h visio 1-to-1 / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Plan personnalisé</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-purple-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-purple-900">A2 · 1-to-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Élémentaire</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-purple-600">159€</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h individuel / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Ressources Skool A2 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h visio 1-to-1 / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Plan personnalisé</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-3xl p-6 shadow-2xl border-4 border-gold transform scale-105 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                      POPULAIRE
                    </div>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-white">B1 · 1-to-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">Intermédiaire</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">189€</span>
                      </div>
                      <p className="text-sm text-purple-100">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">12h individuel / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">Ressources Skool B1 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">3h visio 1-to-1 / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">Corrections écrites incluses</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-white hover:bg-gray-100 text-purple-900 font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-purple-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-purple-900">B2 · 1-to-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Indépendant</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-purple-600">199€</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 mois</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h individuel / mois</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Ressources Skool B2 illimitées</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h visio 1-to-1 / semaine</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Prép. certif. DELF B2</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Prendre cette Offre
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 text-center">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Paiement Sécurisé & Garantie Satisfait
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Tous nos paiements sont sécurisés. Garantie satisfait ou remboursé sous 7 jours.
                </p>
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