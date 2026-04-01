import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export function HeroSection() {
  const certifications = [
    {
      name: "DELF",
      language: "Français",
      color: "from-blue-600 to-blue-400",
      borderColor: "border-blue-500"
    },
    {
      name: "TOEFL",
      language: "Anglais",
      color: "from-red-600 to-red-400",
      borderColor: "border-red-500"
    },
    {
      name: "Goethe-Institut",
      language: "Allemand",
      color: "from-gray-800 to-gray-600",
      borderColor: "border-gray-700"
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
      color: "from-red-700 to-red-500",
      borderColor: "border-red-600"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[url('/team-hero.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 fade-in-up">
            Maîtrisez le Français, l'Anglais, l'Allemand, l'Espagnol et le Chinois avec des Experts
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 fade-in-up stagger-1 max-w-3xl mx-auto">
            Accompagnement personnalisé pour écoliers, étudiants et professionnels
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up stagger-2">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-2xl transform hover:scale-105 transition-all">
              Réserver un cours d'essai
            </Button>
          </div>
          
          <div className="fade-in-up stagger-3">
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
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}