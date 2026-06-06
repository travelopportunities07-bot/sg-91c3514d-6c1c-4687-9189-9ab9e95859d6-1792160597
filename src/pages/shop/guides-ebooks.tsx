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
      price: "12 950 FCFA",
      priceEur: "19,74€",
      originalPrice: "19 950 FCFA",
      image: "/guide-suisse-mobile.png",
      link: "/shop/guide-suisse",
      tag: "NOUVEAU",
      discount: "-35%"
    },
    {
      id: 2,
      title: "Mine Your Future",
      subtitle: "Le Guide Stratégique Complet des Mines Australiennes",
      description: "De zéro à ton premier shift FIFO - Stratégies éprouvées pour décrocher un emploi bien rémunéré en Australie",
      price: "9 897 FCFA",
      priceEur: "15€",
      image: "/mine-your-future.png",
      link: "/shop/guide-mines-australiennes",
      tag: "BESTSELLER"
    },
    {
      id: 3,
      title: "Votre Visa pour Demain",
      subtitle: "Le Guide Ultime 2026 de l'Immigration Stratégique",
      description: "15 Pays, 50+ Visas Décryptés - Votre Feuille de Route Complète vers la Mobilité Internationale",
      price: "9 897 FCFA",
      priceEur: "15€",
      image: "/visa-pour-demain.png",
      link: "/shop/passeport-africain",
      tag: "POPULAIRE"
    },
    {
      id: 4,
      title: "Le Juriste en Europe",
      subtitle: "Guide Complet & Pratique - Immigration & Carrière",
      description: "Stratégies d'Immigration, Reconnaissance des Diplômes & Opportunités de Carrière pour Juristes Africains",
      price: "9 897 FCFA",
      priceEur: "15€",
      image: "/guide-juriste-europe.png",
      link: "/shop/guide-juriste-africain",
      tag: "PREMIUM"
    },
    {
      id: 5,
      title: "Les 7 Habitudes Financières",
      subtitle: "Qui Transforment les Africains Ordinaires en Millionnaires",
      description: "Stratégies Éprouvées, Mindset Gagnant & Actions Concrètes pour Bâtir Votre Fortune",
      price: "9 897 FCFA",
      priceEur: "15€",
      image: "/habitudes-financieres.png",
      link: "/shop/habitudes-financieres",
      tag: "EXCLUSIF"
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-gold/10 rounded-full mb-6">
              <span className="text-gold font-semibold text-sm tracking-wide">SHOP EXCLUSIF</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy mb-6 leading-tight">
              Guides & Ebooks
            </h1>
            <p className="text-xl md:text-2xl text-navy/70 max-w-3xl mx-auto mb-4">
              Transformez votre carrière avec nos guides stratégiques exclusifs
            </p>
            <p className="text-lg text-navy/60 max-w-2xl mx-auto">
              Des ressources éprouvées pour réussir votre mobilité internationale et votre liberté financière
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {guides.map((guide) => (
                <div 
                  key={guide.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gold/20 hover:border-gold/50"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-navy/5 to-gold/5">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-4 py-2 bg-gradient-to-r from-gold to-gold/80 text-white text-xs font-bold rounded-full shadow-lg">
                        {guide.tag}
                      </span>
                    </div>
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-navy mb-2 group-hover:text-gold transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-navy/70 mb-2 font-medium">
                      {guide.subtitle}
                    </p>
                    <p className="text-navy/60 text-sm mb-6 line-clamp-2">
                      {guide.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6 bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-4 border-l-4 border-gold">
                      <div className="flex items-baseline gap-3">
                        {guide.originalPrice && (
                          <div className="flex flex-col">
                            <span className="text-sm text-navy/40 line-through">
                              {guide.originalPrice}
                            </span>
                            {guide.discount && (
                              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full w-fit">
                                {guide.discount}
                              </span>
                            )}
                          </div>
                        )}
                        <span className="text-3xl font-bold text-gold">
                          {guide.price}
                        </span>
                        <span className="text-lg text-navy/60">
                          ({guide.priceEur})
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link href={guide.link}>
                      <Button 
                        className="w-full bg-gradient-to-r from-navy via-navy/95 to-navy/90 hover:from-gold hover:via-gold/95 hover:to-gold/90 text-white font-semibold py-6 rounded-2xl group/btn transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-navy hover:border-gold"
                      >
                        Découvrir
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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