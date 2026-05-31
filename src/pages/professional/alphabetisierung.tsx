import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Home, Briefcase, CheckCircle, ArrowRight, Users, Globe, Heart } from "lucide-react";

export default function Alphabetisierung() {
  return (
    <>
      <SEO
        title="Alphabetisierung & Integration - Deutsch für Erwachsene in Deutschland"
        description="Alphabetisierung und Integration für frankophone Erwachsene in Deutschland. Vom Alphabet bis zur beruflichen Integration."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Alphabetisierung & Integration
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Ihr Weg zur Integration in Deutschland — Vom Alphabet bis zum Beruf
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                    Neue Heimat, neue Sprache, neue Chancen
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Sie sind nach Deutschland gekommen und möchten sich integrieren? Unsere spezialisierten Programme begleiten frankophone Erwachsene vom ersten Buchstaben bis zur beruflichen Integration.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Ob Sie das lateinische Alphabet lernen müssen, Ihre Deutschkenntnisse von Grund auf aufbauen oder sich auf das Leben und Arbeiten in Deutschland vorbereiten — wir haben das passende Programm für Sie.
                  </p>
                  <div className="bg-gold/10 rounded-2xl p-6 border-l-4 border-gold">
                    <p className="font-semibold text-navy mb-2">🎯 Für wen?</p>
                    <p className="text-gray-700">
                      Frankophone Erwachsene in Deutschland, die Deutsch lernen und sich integrieren möchten — unabhängig vom Ausgangsniveau.
                    </p>
                  </div>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/consultation.png"
                    alt="Alphabetisierung & Integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Herausforderungen der Integration
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Alphabetisierung</h4>
                      <p className="text-gray-600">
                        Schwierigkeiten mit dem lateinischen Alphabet oder dem Lesen/Schreiben
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Bürokratie</h4>
                      <p className="text-gray-600">
                        Verwaltungsformulare, Behördengänge und offizielle Kommunikation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Arbeitssuche</h4>
                      <p className="text-gray-600">
                        Fehlende Deutschkenntnisse erschweren den Zugang zum Arbeitsmarkt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👨‍👩‍👧</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Familienleben</h4>
                      <p className="text-gray-600">
                        Kommunikation mit Schule, Kinderarzt, Nachbarn und Gemeinde
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Unser Integrationsweg — Schritt für Schritt
                </h3>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Paket 1</h4>
                    <p className="text-white/80 text-sm">
                      Alphabetisierung — Lateinisches Alphabet lernen
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Home className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Paket 2</h4>
                    <p className="text-white/80 text-sm">
                      Alltag — A1→A2 für Einkäufe, Verwaltung, Gesundheit
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Paket 3</h4>
                    <p className="text-white/80 text-sm">
                      Integration — A2→B1 für Arbeit, Schule, Bürgerleben
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Paket 4</h4>
                    <p className="text-white/80 text-sm">
                      Vollpaket — Alpha→B1 + DTZ-Prüfung inklusive
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Erfolgsgeschichten
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👨</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Moussa K.</h4>
                        <p className="text-sm text-gray-600">Bauarbeiter, Frankfurt</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Ich konnte nicht lesen oder schreiben. Nach dem Vollpaket habe ich meinen DTZ-Test bestanden und jetzt einen festen Job auf dem Bau. Meine Kinder sind stolz auf mich!"
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">DTZ bestanden + Festanstellung</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👩</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Fatou S.</h4>
                        <p className="text-sm text-gray-600">Einzelhandel, Köln</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Das Integrations-Paket hat mir geholfen, mit den Lehrer*innen meiner Kinder zu kommunizieren und eine Arbeit im Supermarkt zu finden. Jetzt bin ich selbstständig in Deutschland!"
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">B1-Niveau + Arbeitsstelle</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl p-12 text-center mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Starten Sie Ihre Integration jetzt
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Neue Kohorte jeden Monat. Lernen Sie in einer frankophonen Gemeinschaft mit Teilnehmer*innen aus ganz Afrika und der französischsprachigen Welt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/professional/alphabetisierung/packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-full px-12 py-6 text-lg shadow-xl group">
                      Alle Pakete ansehen
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="border-2 border-navy text-navy font-semibold rounded-full px-12 py-6 text-lg">
                      Kostenlose Beratung
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">420+</div>
                  <p className="text-gray-600">Integrierte Teilnehmer*innen</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">88%</div>
                  <p className="text-gray-600">DTZ-Erfolgsquote</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">15+</div>
                  <p className="text-gray-600">Nationalitäten vertreten</p>
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