import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="À Propos - Vocalis Academy"
        description="Découvrez Vocalis Academy, l'académie de référence pour l'apprentissage des langues en Afrique et en Europe."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Nos prestations chez Vocalis Academy
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                À Propos de Vocalis Academy
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/team-hero.png"
                      alt="Équipe Vocalis Academy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Vocalis Academy est née d'une volonté simple : <strong>briser les barrières linguistiques</strong> et offrir à chacun les clés de la réussite internationale.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                        Notre Objectif
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Permettre à nos apprenants de maîtriser les langues étrangères avec assurance, afin qu'ils puissent s'épanouir académiquement et professionnellement partout dans le monde.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                        Notre Engagement
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Nous nous engageons à fournir un accompagnement pédagogique de haute qualité, humain et personnalisé, adapté aux besoins spécifiques de chaque profil, de l'écolier au cadre dirigeant.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                        Notre Vision
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Devenir l'académie de référence pour l'apprentissage des langues en Afrique et en Europe, reconnue pour sa méthode innovante et ses résultats concrets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
                    Notre équipe
                  </h2>
                  <p className="text-2xl font-semibold text-gold mb-8 text-center">
                    Une Académie sans Frontières pour des Talents du Monde Entier
                  </p>
                  
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    Chez Vocalis Academy, nous croyons que l'apprentissage d'une langue ne se limite pas à la grammaire et au vocabulaire. C'est une porte ouverte sur une nouvelle culture, de nouvelles opportunités de carrière et une meilleure compréhension du monde.
                  </p>

                  <p className="text-lg text-white/90 mb-10 leading-relaxed">
                    Nos formateurs sont des experts passionnés, sélectionnés non seulement pour leurs compétences linguistiques, mais aussi pour leur capacité à transmettre et à motiver. Que ce soit en ligne ou en présentiel, nous créons un environnement stimulant où chaque question est une opportunité de progrès.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-navy" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Accompagnement multiculturel</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-navy" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Méthodes pédagogiques modernes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-navy" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Suivi de progression rigoureux</p>
                      </div>
                    </div>
                  </div>
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