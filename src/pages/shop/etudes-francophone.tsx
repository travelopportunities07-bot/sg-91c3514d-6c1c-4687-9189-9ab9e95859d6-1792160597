import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Download, Star, Shield, Award, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function EtudesFrancophone() {
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

  const stripeLink = "https://buy.stripe.com/6oU00bfFZ3WO7h15Bl1sQ0q";

  return (
    <>
      <SEO 
        title="Comment Étudier Gratuitement en France, Belgique, Luxembourg, Suisse Romande et Canada - PowerLingua"
        description="Découvrez toutes les bourses et opportunités pour étudier gratuitement dans l'espace francophone"
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
                    src="/etudes-francophone-500.png"
                    alt="Guide Études Francophone"
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
                  Comment Étudier Gratuitement en France, Belgique, Luxembourg, Suisse Romande et Canada
                </h1>
                <p className="text-xl text-navy/70 mb-8">
                  Votre clé pour l'excellence académique dans l'espace francophone - Bourses, démarches et stratégies révélées
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-gold/20">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="text-navy font-semibold">200+ Étudiants</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-navy/20">
                    <Award className="w-5 h-5 text-navy" />
                    <span className="text-navy font-semibold">Guide Premium</span>
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
              La Francophonie Offre des Opportunités Exceptionnelles
            </h2>
            <div className="prose prose-lg max-w-none text-navy/80">
              <p className="text-lg leading-relaxed mb-6">
                De Paris à Montréal, en passant par Bruxelles et Genève, l'espace francophone regorge d'universités prestigieuses qui <span className="font-bold text-gold">accueillent les étudiants internationaux à bras ouverts</span>.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Ce guide compile <span className="font-bold text-navy">toutes les bourses d'excellence disponibles</span> dans les pays francophones : bourses d'État, bourses universitaires, programmes d'exemption de frais, et opportunités méconnues qui peuvent financer intégralement vos études.
              </p>
              <p className="text-lg leading-relaxed">
                Que vous visiez Sciences Po Paris, l'Université de Montréal, l'UCLouvain ou l'EPFL, ce guide vous donne les clés pour réussir votre candidature et obtenir le financement nécessaire.
              </p>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Les Défis Qui Bloquent Votre Parcours Académique
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Frais de scolarité élevés dans certaines institutions (jusqu'à 20 000€/an)",
                "Complexité des systèmes d'admission différents selon les pays",
                "Méconnaissance des bourses Campus France et autres programmes",
                "Difficulté à obtenir un visa étudiant Schengen ou canadien",
                "Coût de vie élevé à Paris, Genève ou Montréal",
                "Reconnaissance des diplômes africains parfois problématique",
                "Délais de candidature très stricts et variables",
                "Manque de stratégie pour maximiser ses chances de bourse"
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
              Tout Ce Dont Vous Avez Besoin Pour Réussir
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "60+ Programmes de Bourses",
                  description: "Bourses Eiffel, Campus France, bourses CROUS, programmes d'exemption, bourses universitaires complètes"
                },
                {
                  title: "Guide d'Admission par Pays",
                  description: "Procédures spécifiques France, Belgique, Luxembourg, Suisse et Canada détaillées"
                },
                {
                  title: "Stratégies de Candidature",
                  description: "Comment rédiger lettres de motivation et projets d'études qui séduisent les comités"
                },
                {
                  title: "Visa Schengen & Canada",
                  description: "Étapes détaillées pour obtenir votre visa étudiant sans stress"
                },
                {
                  title: "Universités Accessibles",
                  description: "Liste des établissements avec frais modérés ou gratuits pour étudiants internationaux"
                },
                {
                  title: "Budget Étudiant Réaliste",
                  description: "Coûts réels de vie et astuces pour économiser dans chaque ville"
                },
                {
                  title: "Reconnaissance de Diplômes",
                  description: "Procédures d'équivalence et validation de vos acquis académiques"
                },
                {
                  title: "Jobs Étudiants Autorisés",
                  description: "Opportunités de travail légal pour compléter vos revenus"
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
              Leurs Réussites Parlent pour le Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Fatou S.",
                  country: "Mali",
                  text: "Bourse Eiffel pour Sciences Po Paris ! Le guide m'a guidée à chaque étape. Je vis maintenant mon rêve parisien.",
                  rating: 5
                },
                {
                  name: "Jean-Claude M.",
                  country: "Bénin",
                  text: "Admission avec bourse complète à l'Université de Montréal. Les conseils sur le visa canadien étaient précieux !",
                  rating: 5
                },
                {
                  name: "Aïcha B.",
                  country: "Maroc",
                  text: "Grâce à ce guide, j'étudie maintenant à l'EPFL en Suisse avec une bourse d'excellence. Merci infiniment !",
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
              Une Expertise Reconnue
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  color: "from-blue-500 to-blue-600",
                  title: "Informations Officielles",
                  description: "Sources directes des ambassades, Campus France et universités"
                },
                {
                  icon: Users,
                  color: "from-green-500 to-green-600",
                  title: "200+ Étudiants Accompagnés",
                  description: "Des centaines d'étudiants admis dans les meilleures universités francophones"
                },
                {
                  icon: Globe,
                  color: "from-purple-500 to-purple-600",
                  title: "Expertise Francophonie",
                  description: "Rédigé par des consultants spécialistes de l'espace francophone"
                },
                {
                  icon: TrendingUp,
                  color: "from-gold to-gold/80",
                  title: "Taux de Réussite Élevé",
                  description: "Plus de 70% de nos utilisateurs obtiennent une bourse"
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

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Questions Fréquentes 💬
            </h2>
            <div className="space-y-4">
              {[
                {
                  emoji: "🇫🇷",
                  question: "La France offre-t-elle vraiment des études gratuites ?",
                  answer: "Oui ! Les universités publiques françaises ont des frais très accessibles (environ 170-600€/an). De plus, de nombreuses bourses Campus France, Eiffel et CROUS peuvent couvrir 100% de vos frais de vie et d'études."
                },
                {
                  emoji: "🍁",
                  question: "Le Canada est-il accessible aux étudiants africains ?",
                  answer: "Absolument ! Le Canada accueille des milliers d'étudiants africains chaque année. Le guide liste toutes les bourses disponibles et explique comment obtenir votre Study Permit facilement."
                },
                {
                  emoji: "📝",
                  question: "Comment passer par Campus France efficacement ?",
                  answer: "Le guide décode toute la procédure Campus France étape par étape : création du dossier, choix des formations, entretien pédagogique et demande de visa. Vous saurez exactement quoi faire et quand."
                },
                {
                  emoji: "💡",
                  question: "Quelles sont mes chances d'obtenir une bourse Eiffel ?",
                  answer: "Bien que compétitive, la bourse Eiffel est accessible avec une excellente candidature. Le guide vous donne les critères exacts de sélection et des stratégies pour vous démarquer des autres candidats."
                },
                {
                  emoji: "🏠",
                  question: "Comment trouver un logement abordable ?",
                  answer: "Le guide liste toutes les options de logement étudiant : résidences CROUS en France, logements universitaires au Canada, colocations à Bruxelles, etc. Avec des fourchettes de prix réalistes et conseils pratiques."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-gold/10 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gold/5 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{faq.emoji}</span>
                        <h3 className="font-semibold text-lg text-navy">{faq.question}</h3>
                      </div>
                      <span className="text-gold text-2xl group-open:rotate-180 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-navy/70 leading-relaxed pl-14">{faq.answer}</p>
                    </div>
                  </details>
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
                Rejoignez l'Excellence Académique Francophone
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Pour seulement 14,97€, accédez à toutes les ressources pour étudier gratuitement dans l'espace francophone
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
                <p className="text-white/90 font-semibold">⚡ Offre limitée - Rejoignez les 200+ étudiants qui ont réussi</p>
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