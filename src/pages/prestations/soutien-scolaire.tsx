import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, BookOpen, Target, TrendingUp, Clock, Users } from "lucide-react";

export default function SoutienScolaire() {
  return (
    <>
      <SEO
        title="Soutien Scolaire & Étudiants - Vocalis Academy"
        description="Accompagnement scolaire personnalisé pour la réussite aux examens. Aide aux devoirs, préparation BAC/Brevet et méthodologie d'apprentissage."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/diapo4.png"
              alt="Soutien Scolaire"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/80"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Soutien Scolaire & Étudiants
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Un accompagnement sur mesure pour exceller dans vos études et atteindre vos objectifs académiques
              </p>
            </div>
          </div>
        </section>

        <ScrollingBanner variant="blue" />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                    Transformez les Difficultés en Réussite
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Notre programme de soutien scolaire est conçu pour aider les élèves du primaire au lycée à renforcer leurs bases linguistiques, améliorer leurs notes et développer une méthodologie d'apprentissage efficace.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Que votre enfant ait besoin d'aide en Français, Anglais, Allemand, Espagnol ou Chinois, nos enseignants qualifiés adaptent leur pédagogie à son rythme et à ses besoins spécifiques.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
                      Réserver une Séance d'Essai
                    </Button>
                  </Link>
                </div>
                
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/services-overview.png"
                    alt="Soutien scolaire"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Nos Formules de Soutien
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                      <BookOpen className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-navy mb-4">
                      Aide aux Devoirs
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Explication des leçons incomprises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Correction et révision des exercices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Accompagnement régulier après l'école</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Renforcement des bases linguistiques</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl text-white transform scale-105">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold mb-4">
                      Préparation BAC/Brevet
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Révision intensive du programme</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Entraînement aux épreuves écrites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Préparation à l'oral (expression, argumentation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Stratégies de gestion du stress</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-navy mb-4">
                      Méthodologie d'Apprentissage
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Techniques de mémorisation efficaces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Organisation du travail personnel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Prise de notes optimisée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Développement de l'autonomie</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Pourquoi Choisir Notre Soutien Scolaire ?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Flexibilité Totale</h4>
                      <p className="text-gray-600">
                        Cours en ligne ou en présentiel, horaires adaptés aux emplois du temps scolaires et périscolaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Enseignants Qualifiés</h4>
                      <p className="text-gray-600">
                        Professeurs expérimentés, natifs ou bilingues, spécialisés dans l'accompagnement scolaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Suivi Personnalisé</h4>
                      <p className="text-gray-600">
                        Bilan régulier avec les parents, adaptation du programme selon les progrès et les besoins.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Résultats Garantis</h4>
                      <p className="text-gray-600">
                        95% de nos élèves progressent significativement dans les 3 premiers mois.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Prêt à Booster la Réussite Scolaire ?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Réservez une séance d'essai gratuite et découvrez comment nos enseignants peuvent transformer les difficultés en succès.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
                    Contactez-Nous Maintenant
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