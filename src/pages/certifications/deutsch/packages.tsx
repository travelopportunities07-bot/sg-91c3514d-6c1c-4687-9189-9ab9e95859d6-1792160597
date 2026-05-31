import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Calendar, Clock, Award, Shield, Zap } from "lucide-react";

export default function DeutschPackages() {
  return (
    <>
      <SEO
        title="Deutsche Kurspakete - TestDaF & Goethe Preise"
        description="Wählen Sie Ihr deutsches Zertifizierungsvorbereitungspaket. Standard-, Premium- oder VIP-Optionen mit flexiblen Zahlungsplänen."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-red-100 px-6 py-3 rounded-full mb-6">
                  <span className="text-2xl">🇩🇪</span>
                  <span className="text-red-900 font-semibold">Deutsche Zertifizierung</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
                  Wählen Sie Ihr Paket
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Alle Pakete beinhalten persönliches Coaching, wöchentliche Probetests und unsere Verbesserungsgarantie
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-semibold text-red-900">STANDARD</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">Standard Paket</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-red-600">297€</span>
                    </div>
                    <p className="text-gray-600">Perfekt für fokussierte Lerner</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">5 Wochen Programm</p>
                        <p className="text-sm text-gray-600">Vollständiger Vorbereitungszyklus</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">3 Stunden/Woche</p>
                        <p className="text-sm text-gray-600">15 Stunden Gesamt-Coaching</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Wöchentliche Probetests</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Lernmaterialien inklusive</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">E-Mail-Support</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Dieses Angebot Nehmen
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Sichere Zahlung</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-8 shadow-2xl border-4 border-gold transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    AM BELIEBTESTEN
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">PREMIUM</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Premium Paket</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-white">397€</span>
                    </div>
                    <p className="text-red-100">Bestes Preis-Leistungs-Verhältnis</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">6 Wochen Programm</p>
                        <p className="text-sm text-red-100">Erweiterte Vorbereitungszeit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">3 Stunden/Woche</p>
                        <p className="text-sm text-red-100">18 Stunden Gesamt-Coaching</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Wöchentliche Tests + Bonuspraxis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Premium-Lernmaterialien</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Prioritäts-E-Mail- & Chat-Support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">1 zusätzliche Coaching-Sitzung</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-white hover:bg-gray-100 text-red-900 font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Dieses Angebot Nehmen
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="text-sm text-red-100">Sichere Zahlung</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-900">VIP</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">VIP Paket</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-purple-600">497€</span>
                    </div>
                    <p className="text-gray-600">Ultimative Vorbereitungserfahrung</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">8 Wochen Programm</p>
                        <p className="text-sm text-gray-600">Maximale Vorbereitungszeit</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">3 Stunden/Woche</p>
                        <p className="text-sm text-gray-600">24 Stunden Gesamt-Coaching</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Unbegrenzte Probetests</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">VIP-Lernmaterialienpaket</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">24/7 WhatsApp-Support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">3 zusätzliche Coaching-Sitzungen</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Punktegarantie oder Geld zurück</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Dieses Angebot Nehmen
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Sichere Zahlung</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-16">
                <div className="text-center mb-8">
                  <Calendar className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                    Beratungsgespräch Vereinbaren
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Sie sind sich nicht sicher, welches Paket für Sie geeignet ist? Buchen Sie eine kostenlose 30-minütige Beratung mit unseren Expertenberatern.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      Kostenlose Beratung Buchen
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8">
                <h3 className="text-2xl font-heading font-bold text-navy mb-6 text-center">
                  Häufig Gestellte Fragen
                </h3>
                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">Was ist, wenn ich eine Sitzung verschieben muss?</h4>
                    <p className="text-gray-600">Sie können bis 24 Stunden vor der Sitzung kostenlos verschieben.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">Kann ich mein Paket später upgraden?</h4>
                    <p className="text-gray-600">Ja! Sie können jederzeit upgraden und zahlen nur die Differenz.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">Was ist Ihre Rückerstattungsrichtlinie?</h4>
                    <p className="text-gray-600">Vollständige Rückerstattung innerhalb der ersten 7 Tage, wenn Sie nicht zufrieden sind. Keine Fragen gestellt.</p>
                  </div>
                </div>
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