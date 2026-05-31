import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Heart, Stethoscope, Award, CheckCircle, ArrowRight, Target, Users, TrendingUp } from "lucide-react";

export default function DeutschPflegeberufe() {
  return (
    <>
      <SEO
        title="Deutsch für Pflegeberufe - Pflegekräfte-Sprachausbildung"
        description="Deutschkurse für frankophone Pflegekräfte. Medizinisches Vokabular, Patientenkommunikation und Fachsprachprüfung B2-Vorbereitung für die Arbeit in Deutschland."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-red-700" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Deutsch für Pflegeberufe
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Ihre berufliche Zukunft in der deutschen Gesundheitsbranche beginnt hier
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
                    Von Frankreich nach Deutschland — Ihr Weg in die Pflege
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Sie sind ausgebildete Pflegekraft aus einem französischsprachigen Land und möchten in Deutschland arbeiten? Die Sprache ist oft die größte Hürde — aber mit der richtigen Vorbereitung wird sie zu Ihrem Sprungbrett.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Unser spezialisiertes Programm „Deutsch für Pflegeberufe" bereitet Sie auf die sprachlichen Anforderungen des deutschen Gesundheitssystems vor: von der Patientenkommunikation über die Pflegedokumentation bis zur obligatorischen Fachsprachprüfung B2.
                  </p>
                  <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-700">
                    <p className="font-semibold text-navy mb-2">🎯 Für wen ist dieses Programm?</p>
                    <p className="text-gray-700">
                      Frankophone Krankenpfleger*innen, Altenpfleger*innen und Gesundheits- und Krankenpfleger*innen, die in Deutschland arbeiten möchten und das B2-Niveau mit Fachsprachprüfung für die berufliche Anerkennung benötigen.
                    </p>
                  </div>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/career-services.png"
                    alt="Deutsch für Pflegeberufe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Die Herausforderungen für frankophone Pflegekräfte
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😟</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Medizinisches Vokabular</h4>
                      <p className="text-gray-600">
                        Fachbegriffe, Abkürzungen und Anatomie auf Deutsch — weit über Alltagssprache hinaus
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Pflegedokumentation</h4>
                      <p className="text-gray-600">
                        Schriftliche Berichte, Anamnese, Pflegepläne — präzise Formulierung ist Pflicht
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Patientengespräche</h4>
                      <p className="text-gray-600">
                        Einfühlsame, klare Kommunikation mit älteren Patient*innen und Angehörigen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Fachsprachprüfung B2</h4>
                      <p className="text-gray-600">
                        Obligatorische Prüfung für die berufliche Anerkennung — viele scheitern beim ersten Versuch
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Unsere bewährte Methode — Von A2 bis zur FSP
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-8 h-8 text-red-700" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Praxisnah</h4>
                    <p className="text-white/80">
                      Echte klinische Szenarien, Rollenspiele mit Simulationspatient*innen, authentische Dokumentationsbeispiele
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-red-700" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Frankophone Community</h4>
                    <p className="text-white/80">
                      Lernen Sie gemeinsam mit anderen frankophonen Pflegekräften — gegenseitige Unterstützung inklusive
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-red-700" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">FSP-Vorbereitung inklusive</h4>
                    <p className="text-white/80">
                      Gezielte Prüfungsvorbereitung direkt im Kurs — erhöhen Sie Ihre Erfolgsquote beim ersten Versuch
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Erfolgsgeschichten unserer Absolvent*innen
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                        <span className="text-2xl">👨‍⚕️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Amadou K.</h4>
                        <p className="text-sm text-gray-600">Krankenpfleger, München</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Ich kam mit A2 aus dem Senegal. Nach 2 Monaten hatte ich B1, und nach weiteren 2 Monaten B2 + bestandene FSP. Jetzt arbeite ich in einer Münchner Klinik mit unbefristetem Vertrag!"
                    </p>
                    <div className="flex items-center gap-2 text-red-700">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">FSP bestanden: 72/100 Punkte</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                        <span className="text-2xl">👩‍⚕️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Élodie M.</h4>
                        <p className="text-sm text-gray-600">Altenpflegerin, Berlin</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Das B1→B2 Pflege-Paket war perfekt für mich. Die Simulationen haben mich auf die echte Arbeit vorbereitet. Heute verdiene ich 3.200€/Monat in einem Berliner Pflegeheim."
                    </p>
                    <div className="flex items-center gap-2 text-red-700">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">Anerkennung + Festanstellung</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 text-center mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Warum lohnt sich die Investition?
                </h3>
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                  <div>
                    <div className="text-4xl font-bold text-red-700 mb-2">2.800€+</div>
                    <p className="text-gray-600">Durchschnittliches Einstiegsgehalt für Pflegekräfte in Deutschland</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-red-700 mb-2">85%</div>
                    <p className="text-gray-600">Unserer Absolvent*innen finden innerhalb von 3 Monaten eine Anstellung</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-red-700 mb-2">4 Monate</div>
                    <p className="text-gray-600">Von A2 bis zur bestandenen Fachsprachprüfung B2</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-12 text-center text-white">
                <h3 className="text-3xl font-heading font-bold mb-6">
                  Starten Sie Ihre Karriere in Deutschland
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Mit unserem spezialisierten Deutsch-für-Pflege-Programm sind Sie optimal vorbereitet auf eine erfolgreiche berufliche Zukunft im deutschen Gesundheitssystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/professional/deutsch-pflegeberufe/packages">
                    <Button size="lg" className="bg-white hover:bg-gray-100 text-red-900 font-semibold rounded-full px-12 py-6 text-lg shadow-xl group">
                      Pakete für dieses Angebot sehen
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-900 font-semibold rounded-full px-12 py-6 text-lg">
                      Kostenlose Beratung
                    </Button>
                  </Link>
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