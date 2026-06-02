import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="bg-navy text-white py-2 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC POWERLINGUA.</span>
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC POWERLINGUA.</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC POWERLINGUA.</span>
            <span className="text-sm uppercase tracking-wider">PARLEZ AVEC ASSURANCE. APPRENEZ AVEC MÉTHODE. RÉUSSISSEZ AVEC POWERLINGUA.</span>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo-large.png"
                alt="PowerLingua Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-heading font-semibold text-navy">PowerLingua</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-navy hover:text-gold transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/about" className="text-navy hover:text-gold transition-colors font-medium">
              À Propos
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-navy hover:text-gold transition-colors font-medium group">
                Nos Prestations
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="/prestations/soutien-scolaire"
                    className="block px-6 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium"
                  >
                    Soutien Scolaire
                  </Link>
                  <Link 
                    href="/prestations/preparation-certifications"
                    className="block px-6 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium"
                  >
                    Préparation Certifications
                  </Link>
                  <Link 
                    href="/prestations/langues-carriere"
                    className="block px-6 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium"
                  >
                    Langues & Carrière
                  </Link>
                  <Link 
                    href="/prestations/conseils-orientation"
                    className="block px-6 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium"
                  >
                    Conseils en Orientation
                  </Link>
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button className="flex items-center gap-1 text-navy hover:text-gold transition-colors font-medium group">
                Shop
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              
              {isShopOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="/shop/guides-ebooks"
                    className="block px-6 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium"
                  >
                    Guides & eBooks
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blog" className="text-navy hover:text-gold transition-colors font-medium">
              Blog
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsAdminOpen(true)}
              onMouseLeave={() => setIsAdminOpen(false)}
            >
              <button className="flex items-center gap-1 text-navy hover:text-gold transition-colors font-medium group">
                Admin
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              
              {isAdminOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="/admin/revenus"
                    className="block px-6 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium"
                  >
                    Mes Revenus
                  </Link>
                  <Link 
                    href="/admin/analytics"
                    className="block px-6 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium"
                  >
                    Analytics
                  </Link>
                </div>
              )}
            </div>
            <Link href="/#contact" className="text-navy hover:text-gold transition-colors font-medium">
              Contactez-Nous
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}