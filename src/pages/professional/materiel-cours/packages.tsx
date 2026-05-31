import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star, Download, Headphones, FileText, Award } from "lucide-react";

export default function MaterielCoursPackages() {
  return (
    <>
      <SEO
        title="Matériel de Cours - Nos Offres"
        description="Ressources d'apprentissage de l'allemand à partir de 15€. Fiches vocabulaire, glossaires médicaux, guides d'examen et bundles économiques."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-700">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Nos Ressources Pédagogiques
              </h1>
              <p className="text-xl text-white/90">
                Lernmaterial — Matériel de cours d'allemand
              </p>
              <p className="text-white/80 mt-2">
                À partir de 15 € · Téléchargement immédiat
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Ressources numériques (téléchargement immédiat)
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  Accès instantané à vos ressources au format PDF et MP3
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-amber-600 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-amber-600" />
                      <h3 className="text-lg font-heading font-bold text-navy">Fiches de vocabulaire A1–A2</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">PDF imprimable · 200 mots essentiels illustrés · thèmes quotidien, famille, chiffres</p>
                    <div className="text-3xl font-bold text-navy mb-4">15€</div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full">
                      Télécharger
                    </Button>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-amber-600 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-amber-600" />
                      <h3 className="text-lg font-heading font-bold text-navy">Pack grammaire A1–B1</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">PDF + exercices corrigés · Cas, verbes irréguliers, structure de phrase</p>
                    <div className="text-3xl font-bold text-navy mb-4">25€</div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full">
                      Télécharger
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-lg border-2 border-red-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-8 h-8 text-red-700" />
                      <h3 className="text-lg font-heading font-bold text-navy">Glossaire médical DE/FR</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">500 termes soins infirmiers · dialogues patients + documentation · PDF + audio</p>
                    <div className="text-3xl font-bold text-navy mb-4">35€</div>
                    <Button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full">
                      Télécharger
                    </Button>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-amber-600 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-8 h-8 text-amber-600" />
                      <h3 className="text-lg font-heading font-bold text-navy">Cahier d'exercices B1–B2</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">80 exercices thématiques avec corrigés · compréhension, production, vocabulaire</p>
                    <div className="text-3xl font-bold text-navy mb-4">29€</div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full">
                      Télécharger
                    </Button>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-amber-600 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <Headphones className="w-8 h-8 text-amber-600" />
                      <h3 className="text-lg font-heading font-bold text-navy">Pack audio — Dialogues</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">45 dialogues MP3 · A1 à B1 · téléchargement + écoute en ligne · transcriptions</p>
                    <div className="text-3xl font-bold text-navy mb-4">19€</div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full">
                      Télécharger
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-8 h-8 text-cyan-700" />
                      <h3 className="text-lg font-heading font-bold text-navy">Guide prép. FSP</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">PDF 60 pages · structure examen, exercices oraux/écrits, cas cliniques types</p>
                    <div className="text-3xl font-bold text-navy mb-4">39€</div>
                    <Button className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-full">
                      Télécharger
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Bundles matériel — Sparpakete
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  Économisez jusqu'à 27% avec nos packs complets
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-200">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy">Bundle Starter</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                        -24%
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">Einsteiger-Paket — A1/A2</p>
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl font-bold text-navy">45€</span>
                      <span className="text-xl text-gray-400 line-through">au lieu de 59€</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>Fiches vocabulaire A1–A2</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>Pack grammaire A1–B1</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>Pack audio dialogues</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-semibold text-blue-700">
                        <Star className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>-24% vs achat séparé</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full">
                      Acheter ce Bundle
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-red-700 to-red-900 rounded-3xl p-8 shadow-2xl text-white border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Meilleure Valeur
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-heading font-bold">Bundle Pflege</h3>
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                        -27%
                      </span>
                    </div>
                    <p className="text-white/80 mb-2">Pflege-Komplett-Paket — B1/B2</p>
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl font-bold">89€</span>
                      <span className="text-xl text-white/60 line-through">au lieu de 122€</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Glossaire médical DE/FR</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Cahier exercices B1–B2</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Guide prép. Fachsprachprüfung</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Pack audio dialogues</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm font-semibold">
                        <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>-27% vs achat séparé</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Acheter ce Bundle
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 mb-12 border-2 border-amber-100">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4 text-center">
                  💡 Quel matériel choisir ?
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Débutants (A1–A2)</p>
                    <p className="text-sm text-gray-600">→ Bundle Starter pour une base complète vocabulaire + grammaire + audio</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Professionnels de santé</p>
                    <p className="text-sm text-gray-600">→ Bundle Pflege avec glossaire médical + guide FSP spécialisé</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Préparation examen</p>
                    <p className="text-sm text-gray-600">→ Guide prép. Fachsprachprüfung + Cahier d'exercices B1–B2</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-navy mb-2">Compréhension orale</p>
                    <p className="text-sm text-gray-600">→ Pack audio dialogues + Glossaire médical avec audio</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-600 to-yellow-700 rounded-3xl p-12 text-center text-white">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Besoin de conseils personnalisés ?
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour savoir quelles ressources correspondent le mieux à votre niveau et vos objectifs.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-semibold rounded-full px-10 py-6 text-lg">
                    Demander Conseil
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