import Link from "next/link";
import Image from "next/image";
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

  const certifications = [
    {
      name: "DELF",
      language: "Français",
      color: "from-amber-600 to-amber-400",
      borderColor: "border-amber-500"
    },
    {
      name: "TOEFL",
      language: "Anglais",
      color: "from-amber-600 to-amber-400",
      borderColor: "border-amber-500"
    },
    {
      name: "Goethe-Institut",
      language: "Allemand",
      color: "from-amber-600 to-amber-400",
      borderColor: "border-amber-500"
    },
    {
      name: "DELE",
      language: "Espagnol",
      color: "from-amber-600 to-amber-400",
      borderColor: "border-amber-500"
    },
    {
      name: "HSK",
      language: "Chinois",
      color: "from-amber-600 to-amber-400",
      borderColor: "border-amber-500"
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
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <Image
                src="/logo-large.png"
                alt="PowerLingua Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
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
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        <div className="mt-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="w-6 h-6 text-gold" />
            <p className="text-gold font-semibold text-lg uppercase tracking-wider">
              Nos Certifications
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-2xl p-6 ${cert.borderColor} border-2 hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-gold/50 min-w-[140px]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 rounded-2xl`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-navy font-bold text-lg mb-1">{cert.name}</p>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.language}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}