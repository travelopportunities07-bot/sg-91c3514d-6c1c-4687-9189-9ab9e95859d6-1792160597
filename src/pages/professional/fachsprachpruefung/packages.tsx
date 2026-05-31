import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star, Zap } from "lucide-react";

export default function FachsprachpruefungPackages() {
  return (
    <>
      <SEO
        title="Fachsprachprüfung Vorbereitung - Pakete"
        description="Wählen Sie Ihr FSP-Vorbereitungspaket. Intensiv-Express, vollständige Vorbereitung oder 1-to-1 Coaching bis zur bestandenen Prüfung."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Vorbereitungspakete FSP
              </h1>
              <p className="text-xl text-white/90">
                Vorbereitung auf die Fachsprachprüfung Pflege B2
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-12 text-center">
                  Unsere Vorbereitungsangebote
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-6 h-6 text-gold" />
                        <h3 className="text-2xl font-heading font-bold text-navy">Intensiv Express</h3>
                      </div>
                      <p className="text-gray-600 mb-4">Prép. éclair Fachsprachprüfung</p>
                      <p className="text-sm text-gray-500 mb-4">Für Kandidat*innen, die bereits B2 haben und sich auf die spezifische Prüfung vorbereiten wollen</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€149</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">Einmalzahlung · 10h über 2 Wochen</p>
                      <p className="text-xs text-gray-400 line-through mb-2">250 € Marktpreis</p>
                      <p className="text-xs text-gray-500 italic">(GFBM: 120 € / 10 UE)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>10h gezielte Schulung</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Mündliche Simulationen Patient/Kolleg*in</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Training schriftliche Dokumentation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Skool FSP-Ressourcen inklusive</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Empfohlen
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-3">Vollständige Vorbereitung</h3>
                      <p className="text-white/80 mb-4">B2 Pflege + Fachsprachprüfung</p>
                      <p className="text-sm text-white/70 mb-4">Vom B1-Niveau bis zur Beherrschung der Fachprüfung</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€349</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-white/50 line-through">700 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>24h Live-Gruppensessions</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Vollständige Skool B2 Pflege-Ressourcen</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>FSP-Module: oral + schriftlich + klinische Fälle</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Prüfungssimulationen inklusive</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Medizinisches Glossar FR/DE download</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-gold/10 to-white rounded-3xl p-8 shadow-lg border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Premium
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-3">Full Pack 1-to-1</h3>
                      <p className="text-gray-600 mb-4">Prép. FSP individuelle + coaching</p>
                      <p className="text-sm text-gray-500 mb-4">Maximale Begleitung bis zur Prüfung</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€397</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-gray-400 line-through">1.400 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>24h dedizierte 1-to-1 Video</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unbegrenzter Zugang Skool B2 Pflege + FSP</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3 Examens blancs + detaillierte Korrektur</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Begleitung bis zum Prüfungstag</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-navy hover:bg-navy/90 text-white font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy/5 to-white rounded-3xl p-8 mb-12 border-2 border-navy/10">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4 text-center">
                  💡 Welches Paket ist für mich geeignet?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Intensiv Express</p>
                    <p className="text-sm text-gray-600">Für Sie, wenn Sie bereits B2 haben und nur die FSP-spezifische Vorbereitung brauchen</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Vollständige Vorbereitung</p>
                    <p className="text-sm text-gray-600">Für Sie, wenn Sie von B1 kommen und alles in einem durchgehen wollen</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Full Pack 1-to-1</p>
                    <p className="text-sm text-gray-600">Für Sie, wenn Sie maximale Einzelbetreuung und Erfolgsgarantie wollen</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-white rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Noch Fragen zur Prüfung oder zur Vorbereitung?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Buchen Sie eine kostenlose 20-minütige Beratung. Wir beantworten alle Ihre Fragen zur FSP und empfehlen das beste Paket für Ihre Situation.
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