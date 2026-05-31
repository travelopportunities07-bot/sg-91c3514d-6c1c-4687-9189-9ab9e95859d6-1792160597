import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

export default function DeutschPflegePackages() {
  return (
    <>
      <SEO
        title="Deutsch für Pflegeberufler - Pakete"
        description="Wählen Sie Ihr Deutschpaket für Pflegeberufe. Kleingruppe oder 1-to-1 Coaching mit Live-Sessions, unbegrenzten Ressourcen und Prüfungsvorbereitung."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Pakete für Pflegeberufler
              </h1>
              <p className="text-xl text-white/90">
                Einmalzahlung · 2 Monate Dauer · Skool-Inhalte + Live-Sessions inklusive
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Kleingruppen-Paket (4–6 Personen)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Lernen Sie mit Kolleg*innen in interaktiven Sessions
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Schlüssel für Deutschland
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">A2→B1 Pflege</h3>
                      <p className="text-gray-600 mb-4">Grundlagen der Pflegesprache</p>
                      <p className="text-sm text-gray-500 mb-4">Medizinisches Vokabular, Pflegeanweisungen, Patientenaufnahme</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€299</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-gray-400 line-through">400 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h Live-Gruppensessions / Woche</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unbegrenzte Skool A2/B1 Pflege-Ressourcen</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Patient*innen-Pflegekraft-Dialoge</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">B1→B2 Pflege</h3>
                      <p className="text-white/80 mb-4">Professionelles Deutsch B2 für Pflege</p>
                      <p className="text-sm text-white/70 mb-4">Pflegedokumentation, Anamnese, mündliche und schriftliche Übergaben</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€379</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-white/50 line-through">550 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h Live-Gruppensessions / Woche</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unbegrenzte Skool B1/B2 Pflege-Ressourcen</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Simulierte klinische Fälle</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Vorbereitung Goethe B2 Beruf inklusive</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  1-to-1 Pakete (Einzelunterricht)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Personalisiertes Training mit dediziertem Expert*innen-Coach
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-bold">
                        Bester Wert
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">A2→B1 · 1-to-1</h3>
                      <p className="text-gray-600 mb-4">Grundlagen Pflegedeutsch — Individuell</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€399</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-gray-400 line-through">1.200 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h dedizierte 1-to-1 Video / Woche</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unbegrenzter Zugang Skool A2/B1 Pflege</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">B1→B2 · 1-to-1</h3>
                      <p className="text-white/80 mb-4">Professionelles Pflegedeutsch B2 — Individuell</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€549</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-white/50 line-through">1.500 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h dedizierte 1-to-1 Video / Woche</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unbegrenzter Zugang Skool B1/B2 Pflege</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Personalisierte Fortschrittsverfolgung</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-white rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Sie wissen nicht, welches Paket Sie wählen sollen?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Buchen Sie eine kostenlose 20-minütige Beratung, um Ihr aktuelles Niveau zu bewerten und Ihre beruflichen Ziele zu besprechen.
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