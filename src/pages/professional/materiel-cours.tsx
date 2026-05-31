import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, FileText, Headphones, Award, ArrowRight, Download, CheckCircle } from "lucide-react";

export default function MaterielCours() {
  return (
    <>
      <SEO
        title="Matériel de Cours d'Allemand - Ressources d'Apprentissage"
        description="Ressources numériques et physiques pour accompagner votre apprentissage de l'allemand. Fiches vocabulaire, glossaires médicaux, cahiers d'exercices et guides de préparation."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-700">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-amber-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Matériel de Cours d'Allemand
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Des ressources complètes pour accélérer votre apprentissage et réussir vos examens
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
                    Complétez Votre Formation avec Nos Ressources Pédagogiques
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Que vous suiviez nos cours ou que vous appreniez en autodidacte, nos ressources pédagogiques sont conçues pour renforcer vos compétences linguistiques et vous préparer efficacement aux examens et situations professionnelles.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Du vocabulaire illustré aux glossaires médicaux spécialisés, en passant par les guides de préparation aux examens et les dialogues audio, chaque ressource est créée par nos formateurs experts pour maximiser votre progression.
                  </p>
                  <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-amber-600">
                    <p className="font-semibold text-navy mb-2">💡 Pour qui ?</p>
                    <p className="text-gray-700">
                      Étudiants en allemand de tous niveaux, professionnels de santé préparant la Fachsprachprüfung, et toute personne souhaitant renforcer ses compétences linguistiques de manière autonome.
                    </p>
                  </div>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/services-overview.png"
                    alt="Matériel de cours"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Les Défis de l'Apprentissage en Autonomie
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Manque de Ressources Ciblées</h4>
                      <p className="text-gray-600">
                        Difficile de trouver du matériel pédagogique adapté à votre niveau et objectifs spécifiques (médical, business, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Perte de Temps</h4>
                      <p className="text-gray-600">
                        Des heures passées à chercher des ressources éparpillées sur internet sans garantie de qualité
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Préparation Insuffisante</h4>
                      <p className="text-gray-600">
                        Les manuels génériques ne préparent pas aux examens spécifiques comme la Fachsprachprüfung ou le Goethe B2
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Coût Élevé</h4>
                      <p className="text-gray-600">
                        L'achat séparé de multiples manuels et ressources revient rapidement très cher
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Notre Solution — Des Ressources Complètes et Ciblées
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-amber-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Matériel Structuré</h4>
                    <p className="text-white/80">
                      Fiches de vocabulaire, grammaire et exercices progressifs alignés sur le CECRL (A1 à C1)
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4">
                      <Headphones className="w-8 h-8 text-amber-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Audio Natif</h4>
                    <p className="text-white/80">
                      Dialogues enregistrés par des locuteurs natifs pour améliorer votre compréhension orale et prononciation
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-amber-600" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Préparation Examens</h4>
                    <p className="text-white/80">
                      Guides spécialisés Fachsprachprüfung, Goethe, telc avec simulations d'examen et conseils stratégiques
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Types de Ressources Disponibles
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center">
                        <FileText className="w-8 h-8 text-amber-600" />
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-navy">Ressources Numériques</h4>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Fiches de vocabulaire illustrées A1–B2</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Packs grammaire avec exercices corrigés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Cahiers d'exercices thématiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Téléchargement immédiat PDF</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center">
                        <Headphones className="w-8 h-8 text-amber-600" />
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-navy">Ressources Audio</h4>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Dialogues du quotidien A1–B1</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Prononciation et intonation natives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Transcriptions complètes incluses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Format MP3 compatible tous appareils</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 shadow-lg border-2 border-red-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                        <Award className="w-8 h-8 text-red-700" />
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-navy">Spécialisé Médical</h4>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Glossaire médical DE/FR 500+ termes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Dialogues patient–soignant avec audio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Documentation et anamnèse types</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />
                        <span>Guide prép. Fachsprachprüfung 60 pages</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border-2 border-blue-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                        <Download className="w-8 h-8 text-blue-700" />
                      </div>
                      <h4 className="text-2xl font-heading font-bold text-navy">Bundles Économiques</h4>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>Bundle Starter A1/A2 : -24%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>Bundle Pflege complet : -27%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>Tout le matériel nécessaire groupé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                        <span>Économie substantielle vs achat séparé</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-12 text-center mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Pourquoi Choisir Nos Ressources ?
                </h3>
                <div className="grid md:grid-cols-3 gap-8 mt-10">
                  <div>
                    <div className="text-4xl font-bold text-amber-600 mb-2">15€–89€</div>
                    <p className="text-gray-600">Des prix accessibles, jusqu'à 27% d'économie avec les bundles</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
                    <p className="text-gray-600">Créé par des formateurs experts, aligné sur vos besoins réels</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
                    <p className="text-gray-600">Accès illimité à vos ressources, apprenez à votre rythme</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-600 to-yellow-700 rounded-3xl p-12 text-center text-white">
                <h3 className="text-3xl font-heading font-bold mb-6">
                  Accélérez Votre Progression
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Découvrez nos ressources pédagogiques complètes et commencez à progresser dès aujourd'hui.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/professional/materiel-cours/packages">
                    <Button size="lg" className="bg-white hover:bg-gray-100 text-amber-900 font-semibold rounded-full px-12 py-6 text-lg shadow-xl group">
                      Voir les Offres
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold rounded-full px-12 py-6 text-lg">
                      Demander Conseil
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