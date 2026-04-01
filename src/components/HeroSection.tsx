import { Button } from "@/components/ui/button";

export function HeroSection() {
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
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">
              Nos Certifications
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-white font-semibold text-lg">DELF</p>
                <p className="text-white/70 text-sm">Français</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-white font-semibold text-lg">TOEFL</p>
                <p className="text-white/70 text-sm">Anglais</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-white font-semibold text-lg">Goethe-Institut</p>
                <p className="text-white/70 text-sm">Allemand</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-white font-semibold text-lg">DELE</p>
                <p className="text-white/70 text-sm">Espagnol</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 hover:bg-white/20 transition-all">
                <p className="text-white font-semibold text-lg">HSK</p>
                <p className="text-white/70 text-sm">Chinois</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}