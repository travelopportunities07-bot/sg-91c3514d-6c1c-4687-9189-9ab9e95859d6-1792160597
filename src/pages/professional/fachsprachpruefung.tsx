import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Award, CheckCircle, ArrowRight, Target, BookOpen, Users } from "lucide-react";

export default function Fachsprachpruefung() {
  return (
    <>
      <SEO
        title="Fachsprachprüfung Pflege B2 - Vorbereitung für Pflegekräfte"
        description="Bereiten Sie sich auf die obligatorische Fachsprachprüfung für die Anerkennung als Pflegekraft in Deutschland vor. Intensive Vorbereitung mit Praxissimulationen."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Fachsprachprüfung Pflege B2
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Sprachprüfung für Pflegekräfte — Obligatorisch für die berufliche Anerkennung in Deutschland
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
                    Die Fachsprachprüfung — Ihr Schlüssel zur Anerkennung
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Die Fachsprachprüfung ist eine spezialisierte B2-Prüfung für Gesundheitsberufe. Sie prüft Ihre Fähigkeit, in medizinischen Kontexten auf Deutsch zu kommunizieren — ein obligatorischer Schritt für die berufliche Anerkennung als Pflegekraft in Deutschland.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Anders als allgemeine Sprachprüfungen konzentriert sich die FSP auf pflegespezifische Situationen: Patientengespräche, Dokumentation, ärztliche Anweisungen und Teamkommunikation.
                  </p>
                  <div className="bg-gold/10 rounded-2xl p-6 border-l-4 border-gold">
                    <p className="font-semibold text-navy mb-2">🎯 Prüfungsformat</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Mündlich: Patient*innengespräch + Kolleg*innengespräch</li>
                      <li>• Schriftlich: Pflegedokumentation</li>
                      <li>• Dauer: ca. 60 Minuten</li>
                      <li>• Bestehen: 60% in jedem Teil</li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-services.png"
                    alt="Fachsprachprüfung Vorbereitung"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Typische Herausforderungen der Prüfung
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Prüfungsstress</h4>
                      <p className="text-gray-600">
                        Nervosität beim spontanen Gespräch mit Schauspieler*innen-Patient*innen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Dokumentationsformat</h4>
                      <p className="text-gray-600">
                        Unklarheit über erwartete Strukturen und Fachterminologie
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏱️</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Zeitdruck</h4>
                      <p className="text-gray-600">
                        Schwierigkeiten, unter Zeitlimit vollständige Antworten zu formulieren
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Unerwartete Fragen</h4>
                      <p className="text-gray-600">
                        Patient*innen stellen spontane Fragen zu Symptomen, Therapien, Ängsten
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Unsere bewährte Vorbereitungsmethode
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Prüfungssimulationen</h4>
                    <p className="text-white/80">
                      Realistische Übungsprüfungen unter echten Bedingungen mit detailliertem Feedback
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Fallbasiertes Lernen</h4>
                    <p className="text-white/80">
                      Authentische klinische Szenarien aus deutschen Krankenhäusern und Pflegeheimen
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Expert*innen-Coaching</h4>
                    <p className="text-white/80">
                      Begleitung durch erfahrene Prüfer*innen, die die Bewertungskriterien genau kennen
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
                        <span className="text-2xl">👨‍⚕️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Ibrahim M.</h4>
                        <p className="text-sm text-gray-600">Altenpfleger, Berlin</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Die Intensiv-Express-Vorbereitung hat mir genau das gegeben, was ich brauchte. Die Prüfungssimulationen waren fast identisch mit der echten Prüfung. Bestanden beim ersten Versuch!"
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">FSP bestanden: 78/100 Punkte</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👩‍⚕️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Sophie D.</h4>
                        <p className="text-sm text-gray-600">Krankenschwester, Hamburg</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Das vollständige Paket B2 Pflege + FSP war perfekt. Ich kam gut vorbereitet vom B1-Niveau und habe die Fachsprachprüfung direkt bestanden. Top Investition!"
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">Anerkennung nach 2 Monaten</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl p-12 text-center mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Nächste Prüfungstermine — Jetzt vorbereiten!
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Die Fachsprachprüfung findet monatlich statt. Bereiten Sie sich rechtzeitig vor und sichern Sie Ihre berufliche Zukunft in Deutschland.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/professional/fachsprachpruefung/packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-full px-12 py-6 text-lg shadow-xl group">
                      Alle Vorbereitungspakete
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
                  <div className="text-4xl font-bold text-navy mb-2">92%</div>
                  <p className="text-gray-600">Erfolgsquote beim 1. Versuch</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">150+</div>
                  <p className="text-gray-600">Erfolgreich vorbereitete Kandidat*innen</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">4.8/5</div>
                  <p className="text-gray-600">Durchschnittliche Bewertung</p>
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