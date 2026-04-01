import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Soutien Scolaire & Étudiants",
      description: "Accompagnement personnalisé pour la réussite aux examens et l'excellence académique. Nos experts vous préparent aux défis scolaires et universitaires.",
      image: "/services-overview.png",
      icon: GraduationCap,
      features: [
        "Cours individuels et en petits groupes",
        "Préparation aux examens (Bac, Brevet, etc.)",
        "Méthodologie et techniques d'apprentissage",
        "Suivi personnalisé et bilans réguliers"
      ]
    },
    {
      title: "Préparation aux Certifications Internationales",
      description: "Formation intensive et ciblée pour obtenir vos certifications linguistiques reconnues mondialement : TOEFL, DELF, TestDaF, DELE, HSK.",
      image: "/career-services.png",
      icon: Award,
      features: [
        "Entraînement aux épreuves officielles",
        "Stratégies et techniques d'examen",
        "Tests blancs et corrections détaillées",
        "Garantie de résultats"
      ]
    },
    {
      title: "Langues & Carrière Professionnelle",
      description: "Développez vos compétences linguistiques professionnelles en Français, Anglais, Allemand, Espagnol et Chinois. Incluant conseil et orientation professionnelle.",
      image: "/professional-services.png",
      icon: Briefcase,
      features: [
        "Business English/Français professionnel",
        "Communication interculturelle",
        "Préparation aux entretiens",
        "Conseil et orientation de carrière"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Nos Prestations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions sur-mesure pour tous vos besoins en apprentissage des langues
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-navy" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full py-6 text-base shadow-lg transform hover:scale-105 transition-all">
                    En savoir plus
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}