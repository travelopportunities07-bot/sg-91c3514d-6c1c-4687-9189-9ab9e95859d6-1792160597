import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, Video, BookOpen, Award, Shield, Sparkles } from "lucide-react";

export default function DeutschPackages() {
  return (
    <>
      <SEO
        title="Deutsche Pakete - Goethe Zertifikat"
        description="Deutschkurse A1, A2, B1, B2 in Kleingruppen oder 1-zu-1. Unbegrenzte Skool-Ressourcen und wöchentliche Live-Sitzungen."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/deutsch-packages-hero.png" 
                    alt="Deutsch Lernen" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mt-12 text-center">
                  <div className="inline-flex items-center gap-2 bg-red-100 px-6 py-3 rounded-full mb-6">
                    <span className="text-2xl">🇩🇪</span>
                    <span className="text-red-900 font-semibold">Deutsche Zertifizierung</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
                    Unsere Schulungspakete
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Einmalzahlung · Dauer 2 Monate · Skool-Ressourcen + Live-Austausch inklusive
                  </p>
                </div>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Kleingruppen-Angebot (3–6 Personen)
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-red-900">A1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Anfänger</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-red-600">59,97€</span>
                      </div>
                      <p className="text-sm text-gray-600">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h Austausch / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unbegrenzte Skool A1 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h Live-Gruppe / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Frankophone Gemeinschaft</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Jetzt anmelden
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-red-900">A2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Grundstufe</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-red-600">59,97€</span>
                      </div>
                      <p className="text-sm text-gray-600">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h Austausch / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unbegrenzte Skool A2 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h Live-Gruppe / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Frankophone Gemeinschaft</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Jetzt anmelden
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-red-900">B1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Mittelstufe</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-red-600">74,97€</span>
                      </div>
                      <p className="text-sm text-gray-600">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h Austausch / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unbegrenzte Skool B1 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h Live-Gruppe / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Forum + Korrekturen</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Jetzt anmelden
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-red-900">B2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Selbstständig</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-red-600">74,97€</span>
                      </div>
                      <p className="text-sm text-gray-600">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h Austausch / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unbegrenzte Skool B2 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h Live-Gruppe / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Vorbereitung Goethe B2</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Jetzt anmelden
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-2xl font-heading font-bold text-navy mb-8 text-center flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6 text-gold" />
                    Sparpakete für Mehrere Niveaus
                    <Sparkles className="w-6 h-6 text-gold" />
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 shadow-xl border-2 border-red-300 hover:border-red-500 transition-all">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-red-200 px-4 py-2 rounded-full mb-4">
                          <span className="text-sm font-semibold text-red-900">Pack A1 - A2</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-navy mb-2">Anfänger bis Grundstufe</h3>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold text-red-600">109,97€</span>
                        </div>
                        <p className="text-sm text-gray-600 font-semibold">Einmalzahlung · 4 Monate</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">A1 + A2 Niveaus komplett</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">48h Austausch gesamt</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">Alle Skool A1 & A2 Ressourcen</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">10€ Ersparnis</span>
                        </div>
                      </div>

                      <Link href="/#contact">
                        <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                          Jetzt anmelden
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 shadow-xl border-2 border-red-300 hover:border-red-500 transition-all">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-red-200 px-4 py-2 rounded-full mb-4">
                          <span className="text-sm font-semibold text-red-900">Pack B1 - B2</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-navy mb-2">Mittelstufe bis Selbstständig</h3>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold text-red-600">109,97€</span>
                        </div>
                        <p className="text-sm text-gray-600 font-semibold">Einmalzahlung · 4 Monate</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">B1 + B2 Niveaus komplett</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">48h Austausch gesamt</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">Alle Skool B1 & B2 Ressourcen</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-navy">40€ Ersparnis</span>
                        </div>
                      </div>

                      <Link href="/#contact">
                        <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                          Jetzt anmelden
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-gradient-to-br from-gold to-orange-400 rounded-3xl p-6 shadow-2xl border-4 border-gold transform scale-105 relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-900 px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                        BESTE WAHL
                      </div>
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                          <span className="text-sm font-semibold text-white">Pack Komplett</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-2">A1 bis B2 Komplett</h3>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold text-white">219,97€</span>
                        </div>
                        <p className="text-sm text-orange-100 font-semibold">Einmalzahlung · 8 Monate</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white font-semibold">A1 + A2 + B1 + B2 komplett</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white font-semibold">96h Austausch gesamt</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white font-semibold">Alle Skool-Ressourcen</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-white font-semibold">50€ Ersparnis</span>
                        </div>
                      </div>

                      <Link href="/#contact">
                        <Button className="w-full bg-white hover:bg-gray-100 text-orange-900 font-bold rounded-xl py-4 text-sm shadow-lg">
                          Jetzt anmelden
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  1-zu-1-Angebot (Einzelunterricht)
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-orange-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-orange-900">A1 · 1-zu-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Anfänger</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-orange-600">159€</span>
                      </div>
                      <p className="text-sm text-gray-600">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h Einzelunterricht / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unbegrenzte Skool A1 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h Video 1-zu-1 / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Persönlicher Plan</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Dieses Angebot Nehmen
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-orange-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-orange-900">A2 · 1-zu-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Grundstufe</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-orange-600">159€</span>
                      </div>
                      <p className="text-sm text-gray-600">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h Einzelunterricht / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unbegrenzte Skool A2 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h Video 1-zu-1 / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Persönlicher Plan</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Dieses Angebot Nehmen
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-3xl p-6 shadow-2xl border-4 border-gold transform scale-105 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                      BELIEBT
                    </div>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-white">B1 · 1-zu-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">Mittelstufe</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">189€</span>
                      </div>
                      <p className="text-sm text-orange-100">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">12h Einzelunterricht / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">Unbegrenzte Skool B1 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">3h Video 1-zu-1 / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">Schriftliche Korrekturen inklusive</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-white hover:bg-gray-100 text-orange-900 font-bold rounded-xl py-4 text-sm shadow-lg">
                        Dieses Angebot Nehmen
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-orange-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-orange-900">B2 · 1-zu-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Selbstständig</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-orange-600">199€</span>
                      </div>
                      <p className="text-sm text-gray-600">Einmalzahlung · ~2 Monate</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h Einzelunterricht / Monat</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unbegrenzte Skool B2 Ressourcen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h Video 1-zu-1 / Woche</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Vorbereitung Goethe B2</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Dieses Angebot Nehmen
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 text-center">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Sichere Zahlung & Zufriedenheitsgarantie
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Alle unsere Zahlungen sind sicher. Zufriedenheitsgarantie oder Geld zurück innerhalb von 7 Tagen.
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