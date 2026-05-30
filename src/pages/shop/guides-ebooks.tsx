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
      title: "Le Guide Stratégique Complet",
      subtitle: "Pour Africains et Européens qui veulent décrocher un emploi bien rémunéré dans les mines australiennes",
      description: "De zéro à ton premier shift FIFO",
      price: "8 997 FCFA",
      image: "/mine_austra.png",
      link: "/shop/guide-mines-australiennes",
      tag: "BESTSELLER"
    },
    {
      id: 2,
      title: "PASSEPORT AFRICAIN",
      subtitle: "Le Guide Ultime 2026 pour Immigrer, Trouver un Job et Réussir dans 15 Pays Stratégiques",
      description: "Stratégies, Secteurs Porteurs, Démarches Rapides & Conseils d'Expatriés",
      price: "6 997 FCFA",
      image: "/Screenshot_2026-05-30_03.05.02.png",
      link: "/shop/passeport-africain",
      tag: "NOUVEAU"
    },
    {
      id: 3,
      title: "Le Guide du Juriste Africain",
      subtitle: "vers l'Europe et le Canada",
      description: "GUIDE COMPLET & PRATIQUE • IMMIGRATION & CARRIÈRE INTERNATIONALE",
      price: "9 897 FCFA",
      image: "/Le_Juriste.png",
      link: "/shop/guide-juriste-africain",
      tag: "PREMIUM"
    }
  ];

  return (
    <>
      <SEO 
        title="Guides & Ebooks - PowerLingua Shop"
        description="Découvrez nos guides exclusifs pour booster votre carrière internationale"
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
              Des ressources éprouvées pour réussir votre mobilité internationale
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <div 
                  key={guide.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gold/30"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-4 py-2 bg-gold text-white text-xs font-bold rounded-full shadow-lg">
                        {guide.tag}
                      </span>
                    </div>
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <p className="text-navy/60 text-sm mb-6">
                      {guide.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gold">
                        {guide.price}
                      </span>
                    </div>

                    {/* CTA */}
                    <Link href={guide.link}>
                      <Button 
                        className="w-full bg-navy hover:bg-gold text-white font-semibold py-6 rounded-2xl group/btn transition-all duration-300"
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy/5">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8">
              Pourquoi choisir nos guides ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Expertise Avérée</h3>
                <p className="text-navy/70">
                  Rédigés par des experts de l'immigration et de la mobilité internationale
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="font-semibold text-xl text-navy mb-2">Contenu Actionable</h3>
                <p className="text-navy/70">
                  Des stratégies concrètes et des actions immédiates à mettre en place
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
      </main>

      <Footer />
    </>
  );
}