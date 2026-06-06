import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { CheckCircle2, Star, Users, TrendingUp, Clock, Shield, Award, ChevronRight, Quote, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function GuideSuisse() {
  const benefits = [
    "Toutes les démarches administratives détaillées étape par étape",
    "Les secteurs qui recrutent + salaires réels en Suisse",
    "Comment décrocher ton permis de travail rapidement",
    "Stratégies pour trouver un logement abordable",
    "Budget réaliste pour s'installer sereinement",
    "Les pièges à éviter absolument (économise des milliers)",
    "Intégration réussie : langue, culture, networking",
    "Bonus : Templates de CV & lettres de motivation suisses"
  ];

  const problems = [
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Procédures Complexes",
      description: "Les démarches administratives suisses sont un labyrinthe sans guide"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Perte de Temps",
      description: "Des mois perdus à chercher les bonnes informations éparpillées"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: "Coûts Cachés",
      description: "Des erreurs qui coûtent cher et retardent ton installation"
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
      title: "Roadmap Claire",
      description: "Un plan d'action étape par étape, validé par des expats installés"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Évite les Erreurs",
      description: "Les pièges à éviter pour ne pas perdre temps et argent"
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: "Stratégies Gagnantes",
      description: "Les méthodes qui fonctionnent vraiment pour s'installer rapidement"
    }
  ];

  const testimonials = [
    {
      name: "Fatou M.",
      role: "Infirmière à Genève",
      content: "Grâce à ce guide, j'ai décroché mon permis de travail en 3 mois ! Toutes les informations essentielles étaient là.",
      rating: 5
    },
    {
      name: "Amadou K.",
      role: "Ingénieur à Zurich",
      content: "Le meilleur investissement de ma vie. J'ai économisé des milliers d'euros en évitant les erreurs courantes.",
      rating: 5
    },
    {
      name: "Marie S.",
      role: "Manager à Lausanne",
      content: "Tout y est : de la recherche d'emploi au logement. Un guide complet et ultra-pratique !",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Est-ce que ce guide est à jour en 2026 ?",
      answer: "Absolument ! Ce guide contient les dernières informations sur les procédures, les salaires, et les opportunités en Suisse pour 2026. Toutes les informations sont vérifiées et actualisées."
    },
    {
      question: "Le guide convient-il à tous les profils professionnels ?",
      answer: "Oui ! Que tu sois dans la santé, l'ingénierie, l'hôtellerie, la finance ou autre, ce guide couvre les spécificités de chaque secteur avec des conseils adaptés."
    },
    {
      question: "Combien de temps faut-il pour s'installer en Suisse ?",
      answer: "Avec notre méthode structurée, la plupart de nos lecteurs obtiennent leur permis et trouvent un emploi en 3-6 mois. Le guide te montre comment accélérer chaque étape."
    },
    {
      question: "Quel est le format du guide ?",
      answer: "Le guide est en format PDF téléchargeable instantanément après l'achat. Tu peux le lire sur tous tes appareils et l'imprimer si besoin."
    },
    {
      question: "Y a-t-il une garantie ?",
      answer: "Oui ! Si le guide ne répond pas à tes attentes dans les 14 jours, nous te remboursons intégralement. Aucune question posée."
    },
    {
      question: "Le guide aide-t-il pour la reconnaissance des diplômes ?",
      answer: "Absolument ! Nous détaillons tout le processus de reconnaissance des diplômes selon ton domaine, avec les contacts des autorités compétentes et les délais réels."
    }
  ];

  const stats = [
    { value: "500+", label: "Lecteurs Satisfaits" },
    { value: "4.9/5", label: "Note Moyenne" },
    { value: "73%", label: "Obtiennent leur Visa" },
    { value: "3-6 mois", label: "Délai Moyen" }
  ];

  return (
    <>
      <SEO 
        title="Voyage et Opportunités pour la Suisse - Guide Complet 2026"
        description="Le guide ultime pour réussir ton installation en Suisse. Démarches, emploi, logement, intégration - Tout ce qu'il faut savoir !"
        image="/guide-suisse-hero.png"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white via-cream/20 to-white">
        {/* Hero Section avec Storytelling */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50/30 -z-10" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white border-0 text-sm font-bold px-4 py-2">
                    ⭐ NOUVEAU - Édition 2026
                  </Badge>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-tight">
                    Ton Pass pour une Vie Meilleure en{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                      Suisse
                    </span>
                  </h1>
                </div>

                <p className="text-xl md:text-2xl text-navy/80 leading-relaxed">
                  De la paperasse administrative au premier salaire suisse -{" "}
                  <span className="font-semibold text-navy">
                    Tout ce que tu dois savoir pour réussir ton installation
                  </span>{" "}
                  sans stress et sans erreurs coûteuses.
                </p>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-200 shadow-lg">
                  <p className="text-lg text-navy/70 italic leading-relaxed">
                    "J'ai perdu 6 mois et 3000€ en essayant seul. Ce guide m'aurait évité tous ces problèmes. Ne fais pas la même erreur."
                  </p>
                  <p className="text-sm text-navy/60 mt-3 font-semibold">
                    - Thomas, Développeur à Berne
                  </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-md border-2 border-red-100">
                      <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                      <div className="text-sm text-navy/60 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent z-10" />
                  <Image
                    src="/guide-suisse-hero.png"
                    alt="Guide Suisse 2026"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 to-red-500 text-white p-6 rounded-2xl shadow-2xl border-4 border-white transform rotate-3">
                  <div className="text-sm font-semibold">Promotion Limitée</div>
                  <div className="text-3xl font-bold">-35%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problèmes Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy/5 to-navy/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
                Tu te reconnais dans ces{" "}
                <span className="text-red-600">problèmes</span> ?
              </h2>
              <p className="text-xl text-navy/70 max-w-3xl mx-auto">
                La Suisse attire... mais le parcours est semé d'embûches
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {problems.map((problem, index) => (
                <Card key={index} className="p-8 bg-white border-3 border-red-200 hover:border-red-400 transition-all hover:shadow-xl">
                  <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    {problem.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-4">{problem.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{problem.description}</p>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-8 rounded-3xl text-center shadow-xl">
              <p className="text-2xl md:text-3xl font-serif mb-4">
                Et si tu pouvais éviter tous ces obstacles ?
              </p>
              <p className="text-lg text-white/90">
                C'est exactement ce que ce guide va faire pour toi ⬇️
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
                Voici comment nous{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">
                  résolvons
                </span>{" "}
                ces défis
              </h2>
              <p className="text-xl text-navy/70 max-w-3xl mx-auto">
                Un guide pratique qui transforme la complexité en simplicité
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-8 bg-gradient-to-br from-white to-emerald-50 border-3 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-xl">
                  <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-4">{solution.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{solution.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que tu obtiens */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold/5 to-gold/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
                Ce que tu obtiens dans ce guide
              </h2>
              <p className="text-xl text-navy/70">
                Plus de 150 pages d'informations stratégiques et actionnables
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gold/30 hover:border-gold transition-all hover:shadow-lg group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gold to-gold/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-navy font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preuve Sociale - Témoignages */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
                Ils ont réussi leur installation
              </h2>
              <p className="text-xl text-navy/70">
                Rejoins des centaines de lecteurs qui vivent déjà en Suisse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 bg-gradient-to-br from-white to-navy/5 border-2 border-navy/20 hover:border-navy/40 transition-all hover:shadow-xl relative">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-gold/20" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-navy/80 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t-2 border-gold/20 pt-4">
                    <p className="font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-navy/60">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offre Irrésistible */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 to-red-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          
          <div className="max-w-5xl mx-auto relative">
            <div className="text-center mb-12">
              <Badge className="bg-white text-red-600 border-0 text-sm font-bold px-6 py-3 mb-6">
                ⚡ OFFRE LIMITÉE - 72H SEULEMENT
              </Badge>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">
                Ton Investissement Aujourd'hui
              </h2>
              <p className="text-2xl text-white/90 mb-8">
                Moins que le coût d'une seule erreur administrative
              </p>
            </div>

            <div className="bg-white text-navy p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto border-8 border-white/20">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl text-navy/40 line-through">19 950 FCFA</span>
                  <Badge className="bg-emerald-500 text-white text-lg px-4 py-2">
                    -35% 🔥
                  </Badge>
                </div>
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 mb-2">
                  12 950 FCFA
                </div>
                <p className="text-2xl text-navy/70">
                  (19,74€ seulement)
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span>Accès immédiat au guide complet (PDF)</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span>Mises à jour gratuites à vie</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span>Garantie satisfait ou remboursé 14 jours</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span>Bonus : Templates de documents suisses</span>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold py-8 rounded-2xl text-xl shadow-xl hover:shadow-2xl transition-all group border-0"
              >
                J'assure mon pass pour la Suisse
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>

              <p className="text-center text-sm text-navy/60 mt-6">
                🔒 Paiement 100% sécurisé • Accès instantané • Support email inclus
              </p>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-white/90 mb-4">
                ⏰ Cette offre expire dans :
              </p>
              <div className="flex justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="text-4xl font-bold">23</div>
                  <div className="text-sm">Heures</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="text-4xl font-bold">47</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="text-4xl font-bold">12</div>
                  <div className="text-sm">Secondes</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-cream/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-navy/70">
                Tout ce que tu dois savoir avant de commencer
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border-2 border-gold/20 rounded-2xl px-6 hover:border-gold/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-navy hover:text-gold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy/70 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-12 shadow-2xl border-4 border-gold/30">
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                Prêt à Démarrer ton Aventure Suisse ?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Rejoins les centaines de personnes qui ont déjà transformé leur vie grâce à ce guide
              </p>
              
              <Button 
                className="bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold text-navy font-bold py-8 px-12 rounded-2xl text-xl shadow-xl hover:shadow-2xl transition-all group"
              >
                J'assure mon pass pour la Suisse - 12 950 FCFA
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>

              <p className="text-white/70 mt-6 text-sm">
                Garantie satisfait ou remboursé 14 jours • Accès immédiat
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}