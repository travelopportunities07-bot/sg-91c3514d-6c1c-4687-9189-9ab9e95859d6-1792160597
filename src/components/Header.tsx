import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);

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
            <Link href="/#contact" className="text-navy hover:text-gold transition-colors font-medium">
              Contactez-Nous
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="px-4 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium rounded-lg"
                >
                  Nos Prestations
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link 
                      href="/prestations/soutien-scolaire"
                      className="px-4 py-2 text-navy hover:bg-gold/10 hover:text-gold transition-colors rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Soutien Scolaire
                    </Link>
                    <Link 
                      href="/prestations/preparation-certifications"
                      className="px-4 py-2 text-navy hover:bg-gold/10 hover:text-gold transition-colors rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Préparation Certifications
                    </Link>
                    <Link 
                      href="/prestations/langues-carriere"
                      className="px-4 py-2 text-navy hover:bg-gold/10 hover:text-gold transition-colors rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Langues & Carrière
                    </Link>
                    <Link 
                      href="/prestations/conseils-orientation"
                      className="px-4 py-2 text-navy hover:bg-gold/10 hover:text-gold transition-colors rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Conseils en Orientation
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium rounded-lg"
                >
                  Shop
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileShopOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileShopOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link 
                      href="/shop/guides-ebooks"
                      className="px-4 py-2 text-navy hover:bg-gold/10 hover:text-gold transition-colors rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Guides & eBooks
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/blog" 
                className="px-4 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/#contact" 
                className="px-4 py-3 text-navy hover:bg-gold/10 hover:text-gold transition-colors font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contactez-Nous
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}