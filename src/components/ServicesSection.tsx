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
      link: "/prestations/soutien-scolaire",
      gradient: "from-blue-600 to-blue-500",
      bgColor: "bg-gray-50"
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
      link: "/prestations/preparation-certifications",
      gradient: "from-blue-600 to-blue-500",
      bgColor: "bg-gray-50"
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
      link: "/prestations/langues-carriere",
      gradient: "from-blue-600 to-blue-500",
      bgColor: "bg-gray-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative">
      <div 
        className="absolute inset-0 bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: "url('/logo-large.png')",
          backgroundSize: "400px 400px"
        }}
      ></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Notre Expertise
          </h2>
          <p className="text-2xl font-semibold text-gold mb-2">
            Des Solutions sur Mesure
          </p>
          <p className="text-sm text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
            Maîtrisez le Français, l'Anglais, l'Allemand, l'Espagnol et le Chinois avec des Experts
          </p>
          <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
            Que vous soyez étudiant ou professionnel, nous avons le programme idéal pour transformer votre avenir.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group ${service.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-white`}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></span>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.link}>
                    <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold rounded-full py-6 text-base shadow-lg transform hover:scale-105 transition-all`}>
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