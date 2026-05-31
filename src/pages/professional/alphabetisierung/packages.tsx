import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star, Award } from "lucide-react";

export default function AlphabetisierungPackages() {
  return (
    <>
      <SEO
        title="Alphabetisierung & Integration - Pakete"
        description="Wählen Sie Ihr Deutsch-Integrationspaket. Vom Alphabet bis zur beruflichen Integration in Deutschland."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Unsere Pakete — Integrationspfad
              </h1>
              <p className="text-xl text-white/90">
                Für frankophone Erwachsene in Deutschland
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-3">Paket 1</h3>
                    <p className="text-gray-600 mb-2">Starter-Paket — Alphabetisierung auf Deutsch</p>
                    <p className="text-sm text-gray-500 mb-4">Für Nicht-Leser im lateinischen Alphabet · Keine Schreibkenntnisse</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-navy">€199</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">2 Monate · Einmalzahlung</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>24h Live-Gruppe</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Lateinisches Alphabet + Grundlesen</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Geführtes Schreibtraining</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Alltagsvokabular A1</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Unbegrenzte Skool Alpha-Ressourcen</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                    Dieses Paket buchen
                  </Button>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-3">Paket 2</h3>
                    <p className="text-gray-600 mb-2">Grundkurs-Paket — Deutsch im Alltag (A1–A2)</p>
                    <p className="text-sm text-gray-500 mb-4">Alltagsleben, Einkäufe, einfache Verwaltung · Kann lesen</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-navy">€249</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">2 Monate · Einmalzahlung</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>24h Live-Gruppe</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>A1 → A2 komplett</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Vokabular Verwaltungen & Gesundheit</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Simulierte Alltagsinteraktionen</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Unbegrenzte Skool A1/A2-Ressourcen</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                    Dieses Paket buchen
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                      Beliebt
                    </span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">Paket 3</h3>
                    <p className="text-white/80 mb-2">Integrations-Paket — Deutsch für Beruf & Leben (A2–B1)</p>
                    <p className="text-sm text-white/70 mb-4">Arbeit, Kinderschule, Bürgerleben in Deutschland</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-white">€329</span>
                    </div>
                    <p className="text-sm text-white/70 mb-1">2 Monate · Einmalzahlung</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>24h Live-Gruppe</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>A2 → B1 komplett</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Modul: Arbeit finden in Deutschland</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Modul: Schule & Familie</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Modul: Rechte & Verwaltungen</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Test DTZ (Deutschtest für Zuwanderer)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-white/90">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Unbegrenzte Skool-Ressourcen</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                    Dieses Paket buchen
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-gold/10 to-white rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      Best Value
                    </span>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold text-navy mb-3">Paket 4</h3>
                    <p className="text-gray-600 mb-2">Vollpaket — Alphabetisierung bis B1 (Komplettkurs)</p>
                    <p className="text-sm text-gray-500 mb-4">Kompletter Pfad: Vom Alphabet zur beruflichen Autonomie</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-navy">€497</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">4 Monate (2 × 2 Monate) · Einmalzahlung</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>48h Live-Gruppe</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Alpha → A1 → A2 → B1</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Alle Module Paket 1+2+3</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>DTZ-Prüfungsvorbereitung inklusive</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Zugang zu allen Skool-Ressourcen</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Exklusive frankophone Gemeinschaft</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-navy hover:bg-navy/90 text-white font-semibold rounded-full">
                    Dieses Paket buchen
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy/5 to-white rounded-3xl p-8 mb-12 border-2 border-navy/10">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4 text-center">
                  💡 Welches Paket passt zu mir?
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Paket 1</p>
                    <p className="text-sm text-gray-600">Ich kann das lateinische Alphabet nicht lesen/schreiben</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Paket 2</p>
                    <p className="text-sm text-gray-600">Ich kann lesen, möchte Deutsch für den Alltag lernen</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Paket 3</p>
                    <p className="text-sm text-gray-600">Ich habe A1/A2, brauche B1 für Arbeit/Integration</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Paket 4</p>
                    <p className="text-sm text-gray-600">Ich möchte den kompletten Weg vom Anfang bis B1 + DTZ</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-white rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Fragen zu den Paketen oder zum Integrationsprozess?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Buchen Sie eine kostenlose 20-minütige Beratung. Wir helfen Ihnen, das beste Paket für Ihre Situation zu wählen.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-full px-10 py-6 text-lg">
                    Kostenlose Beratung vereinbaren
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