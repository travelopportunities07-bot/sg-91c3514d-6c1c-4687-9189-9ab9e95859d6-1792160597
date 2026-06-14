import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GuidesEbooks() {
  const guides = [
    {
      id: 1,
      title: "Voyage et Opportunités pour la Suisse",
      subtitle: "Ton Guide Complet pour Réussir ton Installation en Suisse",
      description: "Stratégies Pratiques, Démarches Administratives & Opportunités Professionnelles - Tout pour Réussir ton Projet Suisse",
      price: "9 826 FCFA",
      priceEur: "14,97€",
      originalPriceEur: "19,74€",
      originalPrice: "12 950 FCFA",
      image: "/guide-suisse-mobile.png",
      link: "/shop/guide-suisse",
      tag: "NOUVEAU",
      discount: "-24%"
    },
    {
      id: 2,
      title: "Opportunités et le travail dans les mines en Australie",
      subtitle: "Le Guide Stratégique Complet des Mines Australiennes",
      description: "De zéro à ton premier shift FIFO - Stratégies éprouvées pour décrocher un emploi bien rémunéré en Australie",
      price: "9 826 FCFA",
      priceEur: "14,97€",
      originalPriceEur: "19,74€",
      originalPrice: "12 950 FCFA",
      image: "/mine-your-future.png",
      link: "/shop/guide-mines-australiennes",
      tag: "BESTSELLER",
      discount: "-24%"
    },
    {
      id: 3,
      title: "Opportunités de travail dans 15 destinations européennes",
      subtitle: "Le Guide Ultime 2026 de l'Immigration Stratégique",
      description: "15 Pays, 50+ Visas Décryptés - Votre Feuille de Route Complète vers la Mobilité Internationale",
      price: "9 826 FCFA",
      priceEur: "14,97€",
      originalPriceEur: "19,74€",
      originalPrice: "12 950 FCFA",
      image: "/visa-pour-demain.png",
      link: "/shop/passeport-africain",
      tag: "POPULAIRE",
      discount: "-24%"
    },
    {
      id: 4,
      title: "Opportunités de travail pour juriste africain",
      subtitle: "Guide Complet & Pratique - Immigration & Carrière",
      description: "Stratégies d'Immigration, Reconnaissance des Diplômes & Opportunités de Carrière pour Juristes Africains",
      price: "9 826 FCFA",
      priceEur: "14,97€",
      originalPriceEur: "19,74€",
      originalPrice: "12 950 FCFA",
      image: "/guide-juriste-europe.png",
      link: "/shop/guide-juriste-africain",
      tag: "PREMIUM",
      discount: "-24%"
    },
    {
      id: 5,
      title: "Les 7 Habitudes Financières",
      subtitle: "Qui Transforment les Africains Ordinaires en Millionnaires",
      description: "Stratégies Éprouvées, Mindset Gagnant & Actions Concrètes pour Bâtir Votre Fortune",
      price: "9 826 FCFA",
      priceEur: "14,97€",
      originalPriceEur: "19,74€",
      originalPrice: "12 950 FCFA",
      image: "/habitudes-financieres.png",
      link: "/shop/habitudes-financieres",
      tag: "EXCLUSIF",
      discount: "-24%"
    }
  ];

  return (
    <>
      <SEO 
        title="Guides & Ebooks - PowerLingua Shop"
        description="Découvrez nos guides exclusifs pour booster votre carrière internationale et votre réussite financière"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-cream/30 to-white">
        {/* Hero Section with Video */}
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero_guide_ebooks.mp4" type="video/mp4" />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-gold font-semibold text-sm tracking-wide">SHOP EXCLUSIF</span>
              </div>
              
              <p className="text-3xl md:text-4xl lg:text-5xl text-sky-400 font-bold mb-6 leading-tight drop-shadow-lg">
                Transformez votre carrière avec nos guides stratégiques exclusifs
              </p>
              
              <p className="text-xl md:text-2xl text-sky-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Des ressources éprouvées pour réussir votre mobilité internationale et votre liberté financière
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {guides.map((guide) => (
                <div 
                  key={guide.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gold/20 hover:border-gold/50"
                >
                  {/* Image Container - 500x500px format */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5">
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1 bg-gradient-to-r from-gold to-gold/80 text-white text-xs font-bold rounded-full shadow-lg">
                        {guide.tag}
                      </span>
                    </div>
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-navy/70 mb-2 font-medium text-sm line-clamp-2">
                      {guide.subtitle}
                    </p>

                    {/* Price */}
                    <div className="mb-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-xl p-3 border-l-4 border-gold">
                      <div className="flex items-center gap-3 flex-wrap">
                        {guide.originalPriceEur && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-navy/40 line-through">
                              {guide.originalPriceEur}
                            </span>
                            {guide.discount && (
                              <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                                {guide.discount}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-gold">
                            {guide.priceEur}
                          </span>
                          <span className="text-xs text-navy/60">
                            ({guide.price})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href={guide.link}>
                      <Button 
                        className="w-full bg-gradient-to-r from-navy via-navy/95 to-navy/90 hover:from-gold hover:via-gold/95 hover:to-gold/90 text-white font-semibold py-5 rounded-xl group/btn transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-navy hover:border-gold"
                      >
                        Découvrir
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy/5 to-gold/5">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12">
              Pourquoi choisir nos guides ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-2 border-gold/20 hover:border-gold/40">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Expertise Avérée</h3>
                <p className="text-navy/70">
                  Rédigés par des experts de l'immigration et de la mobilité internationale
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-2 border-navy/20 hover:border-navy/40">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl text-white">📚</span>
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Contenu Actionable</h3>
                <p className="text-navy/70">
                  Des stratégies concrètes et des actions immédiates à mettre en place
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-2 border-gold/20 hover:border-gold/40">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Résultats Prouvés</h3>
                <p className="text-navy/70">
                  Des centaines de professionnels ont déjà réussi avec nos guides
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-12 shadow-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Prêt à Transformer Votre Avenir ?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Chaque guide est un investissement dans votre succès international
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gold hover:bg-gold/90 text-navy font-bold py-6 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Parcourir les Guides
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}