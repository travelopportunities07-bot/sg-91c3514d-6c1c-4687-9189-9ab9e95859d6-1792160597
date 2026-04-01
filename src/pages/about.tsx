import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { Award, Users, Globe, Target } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO
        title="À Propos - Vocalis Academy"
        description="Découvrez l'histoire et la mission de Vocalis Academy, votre partenaire pour l'apprentissage des langues étrangères."
        image="/og-image.png"
      />
      <Header />
      <main className="pt-32">
        <section className="py-20 bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-6 py-2 mb-6">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold uppercase tracking-wider text-sm">Notre Histoire</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                À Propos de Vocalis Academy
              </h1>
              <p className="text-xl text-white/90">
                Votre partenaire de confiance pour maîtriser les langues étrangères et réussir vos certifications internationales.
              </p>
            </div>
          </div>
        </section>

        <ScrollingBanner variant="blue" />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6 text-center">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chez Vocalis Academy, nous croyons que l'apprentissage des langues ouvre des portes vers de nouvelles opportunités professionnelles et personnelles. Notre mission est de rendre l'apprentissage des langues accessible, efficace et agréable pour tous.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous proposons des cours personnalisés de Français, Anglais, Allemand, Espagnol et Chinois, adaptés à tous les niveaux et tous les objectifs, qu'il s'agisse de réussir un examen, de progresser dans sa carrière ou simplement de découvrir une nouvelle culture.
              </p>
            </div>
          </div>
        </section>

        <ScrollingBanner variant="blue" />

        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-12 text-center">
              Nos Valeurs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Des enseignants qualifiés et des méthodes éprouvées"
                },
                {
                  icon: Users,
                  title: "Personnalisation",
                  description: "Des cours adaptés à vos besoins et objectifs"
                },
                {
                  icon: Globe,
                  title: "Diversité",
                  description: "5 langues enseignées par des experts natifs"
                },
                {
                  icon: Target,
                  title: "Résultats",
                  description: "Un accompagnement vers la réussite de vos certifications"
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-navy mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ScrollingBanner variant="blue" />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
                Pourquoi Choisir Vocalis Academy ?
              </h2>
              <div className="space-y-6 text-left">
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <strong className="text-navy">Expertise multilingue :</strong> Nos enseignants sont des experts natifs ou bilingues dans leur langue d'enseignement
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <strong className="text-navy">Flexibilité :</strong> Cours en ligne adaptés à votre emploi du temps
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <strong className="text-navy">Préparation aux certifications :</strong> DELF, TOEFL, Goethe-Institut, DELE, HSK et bien d'autres
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    <strong className="text-navy">Accompagnement personnalisé :</strong> Suivi individuel et conseils en orientation professionnelle
                  </p>
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