import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, CheckCircle, TrendingUp, Users, Star, Shield, Clock, Target } from "lucide-react";

export default function DeutschCertification() {
  return (
    <>
      <SEO
        title="Deutsche Zertifizierungsprogramme - TestDaF & Goethe Vorbereitung"
        description="Meistern Sie Deutsch mit unseren intensiven TestDaF- und Goethe-Vorbereitungsprogrammen. Expertencoaching, bewährte Methoden, garantierte Ergebnisse."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                <span className="text-3xl">🇩🇪</span>
                <span className="text-white font-semibold">Deutsche Zertifizierungsprogramme</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Deutsch Meistern.<br/>Globale Türen Öffnen.
              </h1>
              <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ihr Reisepass zu deutschen Universitäten, Karriereentwicklung und globalen Möglichkeiten beginnt hier.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="#packages">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-red-900 font-bold rounded-full px-10 py-7 text-lg shadow-2xl transform hover:scale-105 transition-all">
                    Kurspakete Ansehen
                  </Button>
                </Link>
                <Link href="#testimonials">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-900 font-bold rounded-full px-10 py-7 text-lg backdrop-blur-sm">
                    Erfolgsgeschichten
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                  Die Herausforderung, der Sie Gegenüberstehen
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Wir verstehen Ihre Frustrationen mit deutschen Zertifizierungsprüfungen
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">😰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Prüfungsangst</h3>
                  <p className="text-gray-700">
                    Sie blockieren während der mündlichen Prüfung. Zeitdruck überfordert Sie. Probetests scheinen unmöglich.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">📉</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Punkteplateau</h3>
                  <p className="text-gray-700">
                    Sie stagnieren auf demselben Niveau. Allgemeine Deutschkurse helfen nicht. Sie wissen nicht, was Sie zurückhält.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Zeitdruck</h3>
                  <p className="text-gray-700">
                    Universitätsbewerbungen schließen. Dringende Visumsanforderungen. Sie brauchen JETZT Ergebnisse.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-3xl p-12 text-white mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Unsere Bewährte Lösung
                  </h2>
                  <p className="text-xl text-red-100 max-w-3xl mx-auto">
                    Ein systematischer Ansatz, der Prüflinge in selbstbewusste Experten verwandelt
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Präzise Diagnose</h3>
                        <p className="text-red-100">
                          Wir identifizieren Ihre genauen Schwächen in der ersten Sitzung. Kein Raten mehr, was zu lernen ist.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Punkteorientiertes Training</h3>
                        <p className="text-red-100">
                          Jede Lektion zielt auf Prüfungstechniken ab. Lernen Sie genau, was Prüfer erwarten.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Echte Prüfungsbedingungen</h3>
                        <p className="text-red-100">
                          Wöchentliche zeitgesteuerte Probetests mit detailliertem Feedback. Sie betreten die echte Prüfung bereits erfahren.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Schnelle Ergebnisse</h3>
                        <p className="text-red-100">
                          Die meisten Studenten sehen innerhalb von 5 Wochen eine Verbesserung um eine ganze Stufe. Wir optimieren Ihre Lernzeit kompromisslos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    Für Wen Dieses Programm Ist
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Universitätsbewerber</h3>
                    <p className="text-gray-600">
                      Benötigen TestDaF oder Goethe B2/C1 für die Zulassung zu internationalen Programmen
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Berufstätige</h3>
                    <p className="text-gray-600">
                      Zertifizierung erforderlich für Beförderungen, internationale Versetzungen oder Einwanderung
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Wiederholungstestteilnehmer</h3>
                    <p className="text-gray-600">
                      Frustriert von Plateaupunkten und suchen Expertenberatung für den Durchbruch
                    </p>
                  </div>
                </div>
              </div>

              <div id="testimonials" className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    Echte Ergebnisse von Echten Studenten
                  </h2>
                  <p className="text-xl text-gray-600">
                    Schließen Sie sich Hunderten an, die ihre Ziele erreicht haben
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Ich steckte monatelang bei Goethe B1 fest. Nach 6 Wochen bei Vocalis Academy habe ich B2 mit 88/100 bestanden! Die mündlichen Strategien brachten mir allein 12 Punkte mehr."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="font-bold text-red-600">LM</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">Lars M.</p>
                        <p className="text-sm text-gray-600">Goethe B1 → B2 88/100 | Jetzt an der TU München</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Die Probetests waren genau wie der echte TestDaF. Ich ging selbstbewusst hinein und bekam TDN 5 in allen Bereichen. Beste Investition in meine Karriere."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="font-bold text-red-600">AK</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">Anna K.</p>
                        <p className="text-sm text-gray-600">TestDaF TDN 5 | Master in Deutschland</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-3xl p-12 text-navy mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Zeitlich Begrenztes Angebot
                  </h2>
                  <p className="text-xl text-navy/80 max-w-3xl mx-auto">
                    Starten Sie diesen Monat und erhalten Sie exklusive Boni im Wert von 200€
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Kostenloser Diagnosetest</h3>
                    <p className="text-sm text-gray-700">Vollständige TestDaF/Goethe-Simulation mit detailliertem Bericht (80€ Wert)</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Premium-Lernmaterialien</h3>
                    <p className="text-sm text-gray-700">Offizielle Übungstests und exklusive Vorlagen (70€ Wert)</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Lebenslanger E-Mail-Support</h3>
                    <p className="text-sm text-gray-700">Antworten auf Fragen auch nach Programmende (50€ Wert)</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="#packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      Boni Jetzt Sichern →
                    </Button>
                  </Link>
                  <p className="text-sm text-navy/70 mt-4">⏰ Angebot läuft in 48 Stunden ab</p>
                </div>
              </div>

              <div id="packages" className="text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                  Wählen Sie Ihren Erfolgsweg
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                  Alle Pakete beinhalten persönliches Coaching, wöchentliche Probetests und unsere Punktegarantie
                </p>
                <Link href="/certifications/deutsch/packages">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                    Kurspakete Ansehen →
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