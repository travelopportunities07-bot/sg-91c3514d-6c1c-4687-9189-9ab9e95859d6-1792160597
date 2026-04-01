import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Briefcase } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Soutien Scolaire & Étudiants",
      description: "Focus sur la réussite aux examens et le renforcement des bases académiques pour tous les niveaux.",
      icon: GraduationCap,
      features: [
        "Aide aux devoirs",
        "Préparation BAC/Brevet",
        "Méthodologie d'apprentissage"
      ],
      link: "/prestations/soutien-scolaire"
    },
    {
      title: "Préparation aux Certifications",
      description: "Maximisez vos chances de réussite au TOEFL, DELF, TestDaF, HSK avec nos programmes intensifs.",
      icon: Award,
      features: [
        "Examens de langues",
        "Correction personnalisée",
        "Stratégies de réussite"
      ],
      link: "/prestations/preparation-certifications"
    },
    {
      title: "Langues & Carrière Professionnelle",
      description: "Anglais, Allemand et Chinois des affaires pour booster votre profil international.",
      icon: Briefcase,
      features: [
        "Vocabulaire métier",
        "Prise de parole en public",
        "Rédaction emails/CV"
      ],
      link: "/prestations/langues-carriere"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Notre Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des Solutions sur Mesure
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Que vous soyez étudiant ou professionnel, nous avons le programme idéal pour transformer votre avenir.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-navy" />
                  </div>
                  
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
                  
                  <Link href={service.link}>
                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full py-6 text-base shadow-lg transform hover:scale-105 transition-all">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}