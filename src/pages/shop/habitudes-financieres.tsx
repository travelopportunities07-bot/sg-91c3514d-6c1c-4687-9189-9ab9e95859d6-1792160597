import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Check, Star, TrendingUp, Target, Shield, Zap } from "lucide-react";

export default function HabitudesFinancieres() {
  const features = [
    "Mindset de millionnaire décrypté",
    "7 habitudes transformatrices expliquées",
    "Stratégies d'investissement adaptées au contexte africain",
    "Plan d'action sur 90 jours",
    "Études de cas de success stories africaines",
    "Outils de suivi et tableaux de bord financiers"
  ];

  const testimonials = [
    {
      name: "Amadou K.",
      location: "Dakar, Sénégal",
      text: "J'ai multiplié mes revenus par 3 en 18 mois en appliquant ces principes. Ce guide a littéralement changé ma vie.",
      rating: 5
    },
    {
      name: "Fatou D.",
      location: "Abidjan, Côte d'Ivoire",
      text: "Les stratégies sont adaptées à notre réalité africaine. Pas de théories abstraites, que du concret et du actionable.",
      rating: 5
    },
    {
      name: "Jean-Pierre M.",
      location: "Kinshasa, RDC",
      text: "Le meilleur investissement que j'ai fait. Les 7 habitudes sont simples mais puissantes quand on les applique vraiment.",
      rating: 5
    }
  ];

  const habits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vision Claire",
      description: "Définir des objectifs financiers précis et mesurables"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Mentalité de Croissance",
      description: "Passer de la pensée de survie à la pensée d'abondance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Discipline Financière",
      description: "Maîtriser l'art de l'épargne et de l'investissement intelligent"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Action Massive",
      description: "Passer de l'idée à l'exécution avec des systèmes éprouvés"
    }
  ];

  return (
    <>
      <SEO 
        title="Les 7 Habitudes Financières des Millionnaires Africains - PowerLingua"
        description="Découvrez les stratégies éprouvées qui transforment les Africains ordinaires en millionnaires. Mindset, actions concrètes et plan de route complet."
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-cream/30">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy/5 to-gold/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block px-6 py-2 bg-gold/20 rounded-full mb-6">
                  <span className="text-gold font-bold text-sm tracking-wide">GUIDE EXCLUSIF</span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl text-navy mb-6 leading-tight">
                  Les 7 Habitudes Financières
                  <span className="block text-gold mt-2">Qui Changent Tout</span>
                </h1>
                <p className="text-xl text-navy/70 mb-8 leading-relaxed">
                  Découvrez les stratégies mentales et pratiques qui séparent les Africains qui réussissent financièrement de ceux qui stagnent. Un guide actionable basé sur des success stories réelles.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-navy/70">150+ Pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-navy/70">PDF Téléchargeable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-navy/70">Outils Inclus</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold/70 border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{i}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-navy/60">500+ Africains transformés</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gold/20 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-navy/60">Prix</span>
                    <span className="text-3xl font-bold text-gold">9 897 FCFA</span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-navy to-navy/90 hover:from-gold hover:to-gold/90 text-white font-bold py-6 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all group"
                  >
                    Obtenir le Guide Maintenant
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-sm text-navy/60 mt-4">
                    💳 Paiement sécurisé • Accès immédiat
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/habitudes-financieres.png"
                    alt="Les 7 Habitudes Financières"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gold/20">
                  <div className="text-3xl font-bold text-gold mb-1">500+</div>
                  <div className="text-sm text-navy/70">Lecteurs Satisfaits</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gold/20">
                  <div className="text-3xl font-bold text-gold mb-1">4.9/5</div>
                  <div className="text-sm text-navy/70">Note Moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le Problème */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-12 text-center">
              La Réalité Que Personne Ne Dit
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <p className="text-xl text-navy/80 mb-6 leading-relaxed">
                Vous travaillez dur. Vous gagnez de l'argent. Mais à la fin du mois, il ne reste rien. 
              </p>
              <p className="text-xl text-navy/80 mb-6 leading-relaxed">
                Vous voyez d'autres Africains réussir — parfois avec moins de diplômes, moins d'expérience — et vous vous demandez : <span className="font-bold text-navy">"Quel est leur secret ?"</span>
              </p>
              <p className="text-xl text-navy/80 mb-6 leading-relaxed">
                La vérité ? Ce n'est pas une question de chance. Ni de connexions familiales. C'est une question d'<span className="font-bold text-gold">habitudes mentales et financières</span> que personne ne vous a jamais enseignées.
              </p>
              <div className="bg-navy/5 rounded-2xl p-6 border-l-4 border-gold">
                <p className="text-lg text-navy/70 italic">
                  "Les pauvres ont de mauvaises habitudes. Les riches ont d'excellentes habitudes. C'est aussi simple que cela." — T. Harv Eker
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Les 4 Piliers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4 text-center">
              Les 4 Piliers Fondamentaux
            </h2>
            <p className="text-xl text-navy/60 text-center mb-16 max-w-3xl mx-auto">
              Ce guide décompose les 7 habitudes en 4 domaines transformateurs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {habits.map((habit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-gold/30 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/70 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                    {habit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{habit.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{habit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenu du Guide */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy/5 to-gold/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4 text-center">
              Ce Que Vous Allez Découvrir
            </h2>
            <p className="text-xl text-navy/60 text-center mb-16">
              Un contenu dense, actionable et adapté au contexte africain
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-navy/80 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4 text-center">
              Ils L'ont Fait. Vous Pouvez Aussi.
            </h2>
            <p className="text-xl text-navy/60 text-center mb-16">
              Des transformations réelles de professionnels africains
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-navy/70 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-navy/60">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-12 shadow-2xl text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Prêt à Transformer Votre Vie Financière ?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Rejoignez les centaines d'Africains qui ont décidé de prendre en main leur avenir financier
              </p>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-8 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80">Prix du Guide</span>
                  <span className="text-4xl font-bold text-gold">9 897 FCFA</span>
                </div>
                <p className="text-white/60 text-sm">
                  Un investissement qui peut changer toute votre trajectoire
                </p>
              </div>
              <Button 
                className="bg-gold hover:bg-gold/90 text-navy font-bold py-6 px-12 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all group"
              >
                Obtenir le Guide Maintenant
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-white/60 mt-6 text-sm">
                ✓ Téléchargement immédiat • ✓ Paiement 100% sécurisé • ✓ Garantie satisfait ou remboursé 30 jours
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}