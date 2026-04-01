import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="bg-navy text-white py-2 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC VOCALIS ACADEMY.</span>
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC VOCALIS ACADEMY.</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC VOCALIS ACADEMY.</span>
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC VOCALIS ACADEMY.</span>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-gold text-2xl font-heading font-bold">V</span>
            </div>
            <span className="text-xl font-heading font-semibold text-navy">Vocalis Academy</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-navy hover:text-gold transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/about" className="text-navy hover:text-gold transition-colors font-medium">
              À Propos
            </Link>
            <button className="flex items-center gap-1 text-navy hover:text-gold transition-colors font-medium group">
              Nos Prestations
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
          
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-8 shadow-lg">
            Contactez-Nous
          </Button>
        </div>
      </nav>
    </header>
  );
}