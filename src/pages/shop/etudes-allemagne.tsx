import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Download, Star, Shield, Award, TrendingUp, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function EtudesAllemagne() {
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

  const stripeLink = "https://buy.stripe.com/5kQ3cn2TdctkatdbZJ1sQ0o";

  return (
    <>
      <SEO 
        title="Comment Étudier Gratuitement en Allemagne, Suisse, Autriche et Luxembourg - PowerLingua"
        description="Découvrez toutes les bourses et opportunités pour étudier gratuitement dans les pays germanophones"
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
                    src="/etudes-allemagne-500.png"
                    alt="Guide Études Allemagne"
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
                  Comment Étudier Gratuitement en Allemagne, Suisse, Autriche et Luxembourg
                </h1>
                <p className="text-xl text-navy/70 mb-8">
                  Votre passeport pour l'excellence académique dans les pays germanophones - Bourses, démarches et stratégies d'admission révélées
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-gold/20">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="text-navy font-semibold">100+ Étudiants</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md border border-navy/20">
                    <Award className="w-5 h-5 text-navy" />
                    <span className="text-navy font-semibold">Guide Vérifié</span>
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
              Votre Rêve d'Étudier en Europe n'a Jamais Été Aussi Proche
            </h2>
            <div className="prose prose-lg max-w-none text-navy/80">
              <p className="text-lg leading-relaxed mb-6">
                Imaginez-vous dans une université allemande de renommée mondiale, bénéficiant d'une éducation de qualité supérieure <span className="font-bold text-gold">sans payer de frais de scolarité</span>. Imaginez vivre en Suisse, pays aux opportunités infinies, tout en poursuivant vos études gratuitement.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Ce guide est le fruit de <span className="font-bold text-navy">centaines d'heures de recherche</span> et d'expériences réelles d'étudiants qui ont réussi à décrocher des bourses complètes dans les pays germanophones. Il contient toutes les informations que les universités ne vous disent pas.
              </p>
              <p className="text-lg leading-relaxed">
                Que vous soyez bachelier, étudiant en cours d'études ou professionnel en reconversion, ce guide vous ouvre les portes de l'excellence académique européenne.
              </p>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Les Obstacles Qui Vous Empêchent de Réussir
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Manque d'informations fiables sur les bourses disponibles",
                "Procédures d'admission complexes et décourageantes",
                "Barrière de la langue allemande qui semble insurmontable",
                "Coûts élevés perçus pour vivre en Europe",
                "Difficulté à identifier les universités qui acceptent les étudiants internationaux",
                "Absence de guidance sur les démarches de visa étudiant",
                "Méconnaissance des délais de candidature critiques",
                "Manque de stratégie pour maximiser ses chances d'admission"
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
              Ce Que Vous Allez Découvrir Dans Ce Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Liste Exhaustive des Bourses",
                  description: "Plus de 50 programmes de bourses décryptés avec critères d'éligibilité et montants"
                },
                {
                  title: "Stratégies d'Admission Gagnantes",
                  description: "Techniques éprouvées pour rédiger des lettres de motivation qui convertissent"
                },
                {
                  title: "Guide Complet des Démarches",
                  description: "Procédures pas-à-pas de candidature, visa et installation"
                },
                {
                  title: "Calendrier des Deadlines",
                  description: "Tous les délais importants pour ne manquer aucune opportunité"
                },
                {
                  title: "Coûts de Vie Réels",
                  description: "Budgets détaillés et astuces pour vivre confortablement avec peu"
                },
                {
                  title: "Universités Sans Frais",
                  description: "Liste complète des établissements gratuits ou à coûts minimaux"
                },
                {
                  title: "Apprentissage de l'Allemand",
                  description: "Ressources gratuites et stratégies pour maîtriser la langue rapidement"
                },
                {
                  title: "Travail Étudiant Autorisé",
                  description: "Opportunités de jobs étudiants pour financer vos études"
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
              Ils Ont Réussi Grâce à Ce Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Aminata K.",
                  country: "Sénégal",
                  text: "J'ai obtenu une bourse DAAD complète pour un Master en Ingénierie à Munich. Ce guide m'a tout expliqué étape par étape !",
                  rating: 5
                },
                {
                  name: "Ibrahim D.",
                  country: "Côte d'Ivoire",
                  text: "Grâce aux stratégies de ce guide, j'étudie maintenant en Suisse sans payer de frais de scolarité. Incroyable !",
                  rating: 5
                },
                {
                  name: "Marie T.",
                  country: "Cameroun",
                  text: "Les informations sur les bourses autrichiennes étaient exactement ce dont j'avais besoin. Je suis maintenant à Vienne.",
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
              Pourquoi Nous Faire Confiance ?
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  color: "from-blue-500 to-blue-600",
                  title: "Informations Vérifiées",
                  description: "Toutes nos sources sont officielles et à jour pour 2026"
                },
                {
                  icon: Users,
                  color: "from-green-500 to-green-600",
                  title: "100+ Étudiants Accompagnés",
                  description: "Des centaines d'étudiants ont déjà réussi avec nos guides"
                },
                {
                  icon: Globe,
                  color: "from-purple-500 to-purple-600",
                  title: "Expertise Internationale",
                  description: "Rédigé par des experts de l'éducation internationale"
                },
                {
                  icon: TrendingUp,
                  color: "from-gold to-gold/80",
                  title: "Résultats Prouvés",
                  description: "Taux de succès élevé dans l'obtention de bourses"
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
                  emoji: "🎓",
                  question: "Puis-je vraiment étudier gratuitement en Allemagne ?",
                  answer: "Oui ! La majorité des universités publiques allemandes ne facturent pas de frais de scolarité, même pour les étudiants internationaux. Vous ne payez qu'une contribution semestrielle (environ 300€) qui inclut le transport public."
                },
                {
                  emoji: "💰",
                  question: "Combien coûte la vie étudiante dans ces pays ?",
                  answer: "Le budget mensuel varie selon les pays : Allemagne 850-1000€, Suisse 1200-1500€, Autriche 800-950€, Luxembourg 1000-1200€. Le guide détaille comment réduire ces coûts et liste les bourses qui couvrent les frais de vie."
                },
                {
                  emoji: "🗣️",
                  question: "Dois-je parler allemand pour étudier dans ces pays ?",
                  answer: "Pas forcément ! De nombreux programmes de Master et PhD sont proposés entièrement en anglais. Le guide liste ces programmes et vous donne des ressources pour apprendre l'allemand gratuitement si nécessaire."
                },
                {
                  emoji: "⏰",
                  question: "Quand dois-je commencer mes démarches ?",
                  answer: "Idéalement 12-18 mois avant la rentrée souhaitée. Le guide contient un calendrier complet avec toutes les deadlines importantes pour chaque pays et chaque type de bourse."
                },
                {
                  emoji: "📄",
                  question: "Mon diplôme africain sera-t-il reconnu ?",
                  answer: "Oui, la plupart des diplômes africains sont reconnus, mais certains nécessitent une évaluation d'équivalence. Le guide explique précisément les procédures de reconnaissance pour chaque pays et établissement."
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
                Commencez Votre Aventure Académique Dès Aujourd'hui
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Pour seulement 14,97€, accédez à toutes les informations qui vous mèneront vers l'excellence académique
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
                <p className="text-white/90 font-semibold">⚡ Offre limitée - Ne manquez pas cette opportunité</p>
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