import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Heart, TrendingUp, Globe, CheckCircle, ArrowRight, Users, Target, MessageSquare } from "lucide-react";

export default function DeutschPflege() {
  return (
    <>
      <SEO
        title="Deutsch für Pflegeberufler - Allemand Professionnel Soins Infirmiers"
        description="Allemand professionnel pour infirmiers et aide-soignants visant l'Allemagne. Vocabulaire médical, documentation de soins, examen Goethe B2."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Deutsch für Pflegeberufler
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Ihr Weg zur Pflegekarriere in Deutschland
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
                    Ihre Pflegekarriere in Deutschland
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Deutschland sucht dringend qualifizierte Pflegekräfte. Mit über 100.000 offenen Stellen im Gesundheitswesen bietet Deutschland ausgezeichnete Gehälter, Arbeitsbedingungen und Karrieremöglichkeiten für Pflegepersonal.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Unsere Programme bereiten Sie gezielt auf die sprachlichen Anforderungen der Pflegearbeit in Deutschland vor — von der Patientenkommunikation bis zur Dokumentation.
                  </p>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/career-services.png"
                    alt="Deutsch für Pflegeberufler"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Die Herausforderungen, die Sie meistern müssen
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Fachsprachbarriere</h4>
                      <p className="text-gray-600">
                        Medizinisches Fachvokabular und Pflegedokumentation auf Deutsch sind komplex
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Patientenkommunikation</h4>
                      <p className="text-gray-600">
                        Schwierigkeiten, Patienten und Angehörige korrekt zu verstehen und zu beruhigen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Dokumentationsstress</h4>
                      <p className="text-gray-600">
                        Unsicherheit bei Pflegeberichten, Übergaben und medizinischen Notizen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Anerkennungsverfahren</h4>
                      <p className="text-gray-600">
                        Sprachliche Anforderungen (B2 Goethe Pflege) für die berufliche Anerkennung
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Unsere bewährte Lösung
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Pflegefachsprache</h4>
                    <p className="text-white/80">
                      Medizinisches Vokabular, Pflegebegriffe und klinische Redewendungen
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Praxisnahe Szenarien</h4>
                    <p className="text-white/80">
                      Patientengespräche, Übergaben, Notfallsituationen und Teamkommunikation
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Expert*innen-Coaching</h4>
                    <p className="text-white/80">
                      Trainer*innen mit Pflegeerfahrung im deutschen Gesundheitssystem
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
                        <h4 className="font-bold text-navy">Amadou S.</h4>
                        <p className="text-sm text-gray-600">Krankenpfleger, Stuttgart</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Nach 8 Wochen konnte ich sicher mit Patienten kommunizieren und die Pflegedokumentation selbstständig führen. Das Programm hat meine Anerkennung erst möglich gemacht."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Goethe B2 Pflege bestanden</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👩‍⚕️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Marie K.</h4>
                        <p className="text-sm text-gray-600">Altenpflegerin, München</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Das A2→B1 Programm war perfekt strukturiert. Heute arbeite ich in einem Top-Pflegeheim mit 3.200€ Brutto-Einstiegsgehalt und hervorragenden Arbeitsbedingungen."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Festanstellung nach 2 Monaten</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl p-12 text-center mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Zeitlich begrenztes Angebot — Nächste Kohorte
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Starten Sie diesen Monat mit Ihrer Gruppe. Nur 6 Plätze pro Gruppe für individuelle Betreuung und maximale Ergebnisse.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/professional/deutsch-pflege/packages">
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
                  <div className="text-4xl font-bold text-navy mb-2">95%</div>
                  <p className="text-gray-600">Erfolgreiche Anerkennungen</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">€3.200</div>
                  <p className="text-gray-600">Durchschnittliches Einstiegsgehalt</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">280+</div>
                  <p className="text-gray-600">Pflegekräfte geschult</p>
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