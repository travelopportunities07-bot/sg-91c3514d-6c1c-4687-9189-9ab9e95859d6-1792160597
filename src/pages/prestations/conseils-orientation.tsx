import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Compass, Target, BookOpen, TrendingUp, CheckCircle, Lightbulb, Users, Award } from "lucide-react";

export default function ConseilsOrientation() {
  return (
    <>
      <SEO
        title="Conseils en Orientation - Vocalis Academy"
        description="Accompagnement personnalisé pour définir votre projet professionnel et réussir votre orientation académique et professionnelle."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <Compass className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Conseils en Orientation Professionnelle
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Définissez votre projet avec clarté et concrétisez vos ambitions académiques et professionnelles
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
                    Trouvez Votre Voie avec des Experts
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    L'orientation scolaire et professionnelle est une étape cruciale qui détermine votre avenir. Chez Vocalis Academy, nous vous accompagnons dans cette démarche avec une approche personnalisée qui tient compte de vos aspirations, de vos compétences linguistiques et des opportunités internationales.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Que vous soyez lycéen hésitant sur votre choix d'études, étudiant souhaitant poursuivre à l'étranger, ou professionnel en reconversion, nos conseillers vous guident à chaque étape pour construire un projet cohérent et réaliste.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
                      Réserver une Séance de Conseil
                    </Button>
                  </Link>
                </div>
                
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/consultation.png"
                    alt="Conseils en orientation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Nos Services d'Orientation
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-navy mb-4">
                      Orientation Scolaire
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Choix de filière post-bac (université, classes prépa, écoles spécialisées)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Aide à la construction du projet Parcoursup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Identification des établissements adaptés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Accompagnement à la rédaction de lettres de motivation</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl text-white transform scale-105">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mb-6">
                      <Lightbulb className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold mb-4">
                      Études à l'Étranger
                    </h4>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Sélection des pays et universités selon votre profil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Dossiers de candidature et lettres de recommandation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Préparation aux entretiens d'admission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Aide à la recherche de bourses et financements</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-navy mb-4">
                      Reconversion Professionnelle
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Bilan de compétences personnalisé</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Exploration de nouvelles carrières internationales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Stratégie de formation linguistique ciblée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Accompagnement à la transition de carrière</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                      <Award className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-2xl font-heading font-bold text-navy mb-4">
                      Insertion Professionnelle
                    </h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Optimisation du CV et profil LinkedIn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Préparation aux entretiens d'embauche en langues étrangères</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Stratégies de recherche d'emploi à l'international</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Networking et développement professionnel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Notre Méthode d'Accompagnement
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Entretien Individuel</h4>
                    <p className="text-gray-600">
                      Bilan approfondi de votre parcours, vos motivations et vos objectifs personnels et professionnels
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Plan d'Action Personnalisé</h4>
                    <p className="text-gray-600">
                      Construction d'une feuille de route claire avec étapes concrètes et échéances réalistes
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Suivi Continu</h4>
                    <p className="text-gray-600">
                      Points d'étape réguliers pour ajuster votre stratégie et vous accompagner jusqu'à la réussite
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Pourquoi Choisir Notre Service d'Orientation ?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Expertise Internationale</h4>
                      <p className="text-white/80">
                        Connaissance approfondie des systèmes éducatifs français, allemands, anglo-saxons et asiatiques
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Approche Multiculturelle</h4>
                      <p className="text-white/80">
                        Compréhension des enjeux spécifiques aux profils africains, européens et internationaux
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Réseau Étendu</h4>
                      <p className="text-white/80">
                        Contacts avec universités, écoles et entreprises pour faciliter votre intégration
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Accompagnement Linguistique</h4>
                      <p className="text-white/80">
                        Formation linguistique intégrée pour préparer votre projet dans les meilleures conditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Prêt à Construire Votre Avenir ?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Prenez rendez-vous avec l'un de nos conseillers en orientation pour définir ensemble votre projet académique ou professionnel.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
                    Réserver une Consultation Gratuite
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