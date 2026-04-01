import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy text-2xl font-heading font-bold">V</span>
              </div>
              <span className="text-2xl font-heading font-semibold">Vocalis Academy</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Votre partenaire d'excellence pour l'apprentissage des langues. 
              Nous transformons votre potentiel linguistique en réussite professionnelle et académique.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-gold transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-gold transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-gold transition-colors">
                  Nos Prestations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Langues</h3>
            <ul className="space-y-3">
              <li className="text-white/70">Français</li>
              <li className="text-white/70">Anglais</li>
              <li className="text-white/70">Allemand</li>
              <li className="text-white/70">Espagnol</li>
              <li className="text-white/70">Chinois</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Vocalis Academy. Tous droits réservés.
            </p>
            
            <div className="flex gap-6 text-sm">
              <Link href="/legal" className="text-white/60 hover:text-gold transition-colors">
                Mentions Légales
              </Link>
              <Link href="/privacy" className="text-white/60 hover:text-gold transition-colors">
                Politique de Confidentialité (RGPD)
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-gold transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}