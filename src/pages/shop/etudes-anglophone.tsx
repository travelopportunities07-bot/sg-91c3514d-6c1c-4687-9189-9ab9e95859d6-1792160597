import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Download, Star, Shield, Award, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function EtudesAnglophone() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stripeLink = "https://buy.stripe.com/3cI7sDdxRfFw6cXgfZ1sQ0p";

  return (
    <>
      <SEO 
        title="Comment Étudier Gratuitement aux USA, Australie, Canada et Royaume-Uni - PowerLingua"
        description="Découvrez toutes les bourses et opportunités pour étudier gratuitement dans les pays anglophones de premier plan"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-cream/30 to-white">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30">
                  <Image
                    src="/etudes-anglophone-500.png"
                    alt="Guide Études Anglophone"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full bg-gradient-to-br from-navy/5 to-gold/5 p-4"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gold to-gold/80 text-white px-6 py-3 rounded-2xl shadow-xl">
                  <span className="font-bold text-lg">-24%</span>
                </div>
              </div>

              {/* Hero Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-gold/20 rounded-full mb-4">
                  <span className="text-gold font-semibold text-sm">GUIDE EXCLUSIF</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl text-navy mb-6 leading-tight">
                  Comment Étudier Gratuitement aux États-Unis, Australie, Canada et Royaume-Uni
                </h1>
                <p className="text-xl text-navy/70 mb-8">
                  Le guide ultime pour accéder aux meilleures universités anglophones avec des bourses complètes
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-gold/20">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="text-navy font-semibold">150+ Étudiants</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-navy/20">
                    <Award className="w-5 h-5 text-navy" />
                    <span className="text-navy font-semibold">Guide Certifié</span>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 mb-8">
                  <p className="text-white text-center font-semibold mb-3">⚡ Offre Limitée - Plus que :</p>
                  <div className="flex justify-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px]">
                      <div className="text-3xl font-bold text-white text-center">{timeLeft.hours.toString().padStart(2, '0')}</div>
                      <div className="text-xs text-white/80 text-center">Heures</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px]">
                      <div className="text-3xl font-bold text-white text-center">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                      <div className="text-xs text-white/80 text-center">Minutes</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[80px]">
                      <div className="text-3xl font-bold text-white text-center">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                      <div className="text-xs text-white/80 text-center">Secondes</div>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-6 border-2 border-gold/30">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-gold">14,97€</span>
                    <span className="text-xl text-navy/40 line-through">19,74€</span>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">-24%</span>
                  </div>
                  <a href={stripeLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-navy to-navy/90 hover:from-gold hover:to-gold/90 text-white font-bold py-6 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all">
                      <Download className="w-5 h-5 mr-2" />
                      Je Télécharge Mon Guide
                    </Button>
                  </a>
                  <p className="text-center text-sm text-navy/60 mt-3">Accès immédiat après paiement sécurisé</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy/5 to-gold/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8 text-center">
              Harvard, Stanford, Oxford... Ces Noms Ne Sont Plus Hors de Portée
            </h2>
            <div className="prose prose-lg max-w-none text-navy/80">
              <p className="text-lg leading-relaxed mb-6">
                Pendant des années, les universités prestigieuses des États-Unis, du Canada, d'Australie et du Royaume-Uni ont semblé être des rêves inaccessibles pour les étudiants africains. <span className="font-bold text-gold">Ce temps est révolu.</span>
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Ce guide révèle les <span className="font-bold text-navy">stratégies secrètes</span> que les étudiants internationaux utilisent pour obtenir des bourses complètes dans les meilleures universités anglophones. Des bourses Fulbright aux Commonwealth Scholarships, en passant par les programmes spécifiques de chaque université.
              </p>
              <p className="text-lg leading-relaxed">
                Que vous visiez un Bachelor, un Master ou un PhD, ce guide contient tout ce dont vous avez besoin pour transformer votre rêve en réalité.
              </p>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Ces Obstacles Vous Empêchent d'Accéder aux Meilleures Universités
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Frais de scolarité exorbitants (30 000$ - 60 000$ par an)",
                "Processus de candidature extrêmement complexe et compétitif",
                "Scores SAT/GRE/GMAT requis difficiles à obtenir",
                "Lettres de recommandation et personal statements intimidants",
                "Méconnaissance des bourses disponibles pour étudiants internationaux",
                "Délais de candidature stricts et difficiles à suivre",
                "Coûts de visa et d'assurance santé prohibitifs",
                "Difficulté à prouver les capacités financières pour le visa"
              ].map((problem, index) => (
                <div key={index} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-red-500">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">✗</span>
                  </div>
                  <p className="text-navy/80">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold/5 to-navy/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Découvrez Comment Réussir Votre Admission
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "70+ Programmes de Bourses",
                  description: "Liste complète des bourses Fulbright, Chevening, Commonwealth, et bourses universitaires spécifiques"
                },
                {
                  title: "Stratégies d'Application",
                  description: "Templates et techniques pour rédiger des personal statements qui impressionnent les comités"
                },
                {
                  title: "Préparation aux Tests",
                  description: "Ressources gratuites pour exceller au SAT, GRE, GMAT, TOEFL et IELTS"
                },
                {
                  title: "Guide Visa Étudiant",
                  description: "Procédures détaillées pour obtenir les visas F-1, Tier 4, et Study Permit"
                },
                {
                  title: "Top 100 Universités",
                  description: "Liste des meilleures universités avec leurs critères d'admission et bourses disponibles"
                },
                {
                  title: "Budget de Survie",
                  description: "Astuces pour vivre confortablement avec un budget étudiant dans chaque pays"
                },
                {
                  title: "Opportunités de Travail",
                  description: "Jobs sur campus et stages rémunérés pour financer vos études"
                },
                {
                  title: "Calendrier Complet",
                  description: "Timeline précis avec toutes les deadlines importantes à ne pas manquer"
                }
              ].map((solution, index) => (
                <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-xl shadow-lg border-2 border-gold/20 hover:border-gold/50 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy mb-2">{solution.title}</h3>
                    <p className="text-navy/70">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Ils Étudient Maintenant dans les Meilleures Universités
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Kwame A.",
                  country: "Ghana",
                  text: "Bourse Fulbright complète pour MIT ! Ce guide m'a donné toutes les stratégies nécessaires. Je vis mon rêve américain.",
                  rating: 5
                },
                {
                  name: "Sarah M.",
                  country: "Nigeria",
                  text: "Commonwealth Scholarship pour Oxford. Les templates de personal statement ont fait toute la différence !",
                  rating: 5
                },
                {
                  name: "David N.",
                  country: "Kenya",
                  text: "Maintenant étudiant en ingénierie à l'Université de Toronto avec bourse complète. Merci pour ce guide précieux !",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-navy/10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-navy/80 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-navy/10 pt-4">
                    <p className="font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-navy/60">{testimonial.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges Vertical */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy/5 to-gold/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-navy mb-12 text-center">
              Votre Garantie de Qualité
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  color: "from-blue-500 to-blue-600",
                  title: "Sources Officielles",
                  description: "Informations directement des sites des universités et organisations de bourses"
                },
                {
                  icon: Users,
                  color: "from-green-500 to-green-600",
                  title: "150+ Succès Confirmés",
                  description: "Des centaines d'étudiants admis dans les top universités"
                },
                {
                  icon: Globe,
                  color: "from-purple-500 to-purple-600",
                  title: "Expertise Internationale",
                  description: "Conseils d'anciens étudiants de Harvard, Oxford, Stanford et autres"
                },
                {
                  icon: TrendingUp,
                  color: "from-gold to-gold/80",
                  title: "Mis à Jour 2026",
                  description: "Toutes les informations sont actualisées pour l'année académique 2026-2027"
                }
              ].map((badge, index) => (
                <div key={index} className="flex gap-6 items-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gold/20">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <badge.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-navy mb-2">{badge.title}</h3>
                    <p className="text-navy/70">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-12 shadow-2xl text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                Votre Avenir aux USA, UK, Canada ou Australie Commence Ici
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Investissez 14,97€ aujourd'hui et économisez des dizaines de milliers d'euros en frais de scolarité
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <div className="flex justify-center gap-4 mb-4">
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[80px]">
                    <div className="text-3xl font-bold text-white text-center">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-white/80 text-center">Heures</div>
                  </div>
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[80px]">
                    <div className="text-3xl font-bold text-white text-center">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-white/80 text-center">Minutes</div>
                  </div>
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[80px]">
                    <div className="text-3xl font-bold text-white text-center">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs text-white/80 text-center">Secondes</div>
                  </div>
                </div>
                <p className="text-white/90 font-semibold">⚡ Offre limitée - Rejoignez les 150+ étudiants qui ont réussi</p>
              </div>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-4xl font-bold text-gold">14,97€</span>
                <span className="text-2xl text-white/60 line-through">19,74€</span>
              </div>

              <a href={stripeLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gold hover:bg-gold/90 text-navy font-bold py-6 px-12 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Je Télécharge Mon Guide
                </Button>
              </a>
              <p className="text-white/60 mt-4">Paiement sécurisé par Stripe - Accès immédiat</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}