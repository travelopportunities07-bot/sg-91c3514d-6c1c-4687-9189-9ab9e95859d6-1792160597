import { Button } from "@/components/ui/button";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/hero-slide-1.jpg",
    "/hero-slide-2.png",
    "/hero-slide-3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-dark">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-30" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative z-10 text-center">
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Accompagnement personnalisé pour écoliers, étudiants et professionnels.
            </p>
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-gold/50 transition-all hover:scale-105"
            >
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