import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star, Award } from "lucide-react";

export default function DeutschPflegeberufePackages() {
  return (
    <>
      <SEO
        title="Deutsch für Pflegeberufe - Pakete"
        description="Wählen Sie Ihr Deutsch-für-Pflege-Paket. Von A2 bis B2 mit Fachsprachprüfung-Vorbereitung."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-red-700 via-red-800 to-red-900">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Unsere Pakete
              </h1>
              <p className="text-xl text-white/90">
                Deutsch für Pflegeberufe — Ihr Weg zur Anerkennung
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Parcours par niveau — Petit groupe (4–6 personnes)
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  Lernen Sie in kleinen Gruppen mit anderen frankophonen Pflegekräften
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-red-700 transition-all">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-3">A2→B1 Pflege</h3>
                      <p className="text-gray-600 mb-2">Bases de l'allemand infirmier</p>
                      <p className="text-sm text-gray-500 mb-4">Vocabulaire médical, consignes de soin, accueil patient</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€299</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-gray-400 line-through">400 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>3 h d'échanges live groupe / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Ressources Skool A2/B1 Pflege</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Dialogues patient–soignant</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Clé pour l'Allemagne</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-8 shadow-xl text-white border-2 border-red-700">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold mb-3">B1→B2 Pflege</h3>
                      <p className="text-white/80 mb-2">Allemand professionnel infirmier B2</p>
                      <p className="text-sm text-white/70 mb-4">Documentation soins, anamnèse, transmissions orales et écrites</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold">€379</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-white/50 line-through">550 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span>3 h d'échanges live groupe / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span>Ressources Skool B1/B2 Pflege</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span>Cas cliniques simulés</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span>Prép. Goethe B2 Beruf incluse</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-white hover:bg-gray-100 text-red-900 font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Parcours 1-to-1
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  Individuelle Betreuung für maximalen Lernfortschritt
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-red-700 transition-all">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-6 h-6 text-red-700" />
                        <h3 className="text-2xl font-heading font-bold text-navy">A2→B1 · 1-to-1</h3>
                      </div>
                      <p className="text-gray-600 mb-2">Bases allemand infirmier — Individuel</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€399</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-gray-400 line-through mb-2">1.200 € Marktpreis</p>
                      <span className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Meilleure valeur
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>3 h visio 1-to-1 / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Accès Skool A2/B1 Pflege illimité</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Personalisierter Lernplan</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl text-white border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Top
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold mb-3">B1→B2 · 1-to-1</h3>
                      <p className="text-white/80 mb-2">Allemand pro infirmier B2 — Individuel</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold">€549</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">Einmalzahlung · 2 Monate</p>
                      <p className="text-xs text-white/50 line-through">1.500 € Marktpreis</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3 h visio 1-to-1 / semaine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Accès Skool B1/B2 Pflege illimité</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Suivi de progression personnalisé</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Vorbereitung Fachsprachprüfung</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Dieses Paket buchen
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 mb-12 border-2 border-red-100">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4 text-center">
                  💡 Welches Paket ist für mich geeignet?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">A2→B1 Pflege</p>
                    <p className="text-sm text-gray-600">Für Sie, wenn Sie Grundkenntnisse haben und medizinisches Deutsch von Grund auf lernen möchten</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">B1→B2 Pflege</p>
                    <p className="text-sm text-gray-600">Für Sie, wenn Sie bereits B1 haben und die Fachsprachprüfung B2 vorbereiten</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">1-to-1 Pakete</p>
                    <p className="text-sm text-gray-600">Für Sie, wenn Sie flexibel lernen möchten und individuelle Betreuung bevorzugen</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Gruppenunterricht</p>
                    <p className="text-sm text-gray-600">Für Sie, wenn Sie vom Austausch mit anderen Pflegekräften profitieren möchten</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-12 text-center text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Noch Fragen zu den Paketen?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Buchen Sie eine kostenlose 20-minütige Beratung. Wir helfen Ihnen, das beste Paket für Ihre Situation zu wählen.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-red-900 font-semibold rounded-full px-10 py-6 text-lg">
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