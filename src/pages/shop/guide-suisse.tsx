import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Star, TrendingUp, Clock, Shield, Award, ChevronRight, Quote, AlertCircle, Sparkles, Target, Zap, MapPin, DollarSign, FileCheck } from "lucide-react";
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
      icon: <AlertCircle className="w-10 h-10" />,
      title: "Procédures Complexes",
      description: "Les démarches administratives suisses sont un labyrinthe sans guide",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Perte de Temps",
      description: "Des mois perdus à chercher les bonnes informations éparpillées",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Coûts Cachés",
      description: "Des erreurs qui coûtent cher et retardent ton installation",
      gradient: "from-red-600 to-red-500"
    }
  ];

  const solutions = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Roadmap Claire",
      description: "Un plan d'action étape par étape, validé par des expats installés",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Évite les Erreurs",
      description: "Les pièges à éviter pour ne pas perdre temps et argent",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Stratégies Gagnantes",
      description: "Les méthodes qui fonctionnent vraiment pour s'installer rapidement",
      gradient: "from-gold to-amber-500"
    }
  ];

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Roadmap Complète",
      description: "De A à Z en 12 étapes claires"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Documents Prêts",
      description: "Templates et checklists inclus"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accès Immédiat",
      description: "Téléchargement instantané"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Bonus Premium",
      description: "Ressources exclusives"
    }
  ];

  const testimonials = [
    {
      name: "Fatou M.",
      role: "Infirmière à Genève",
      content: "Grâce à ce guide, j'ai décroché mon permis de travail en 3 mois ! Toutes les informations essentielles étaient là.",
      rating: 5,
      image: "F"
    },
    {
      name: "Amadou K.",
      role: "Ingénieur à Zurich",
      content: "Le meilleur investissement de ma vie. J'ai économisé des milliers d'euros en évitant les erreurs courantes.",
      rating: 5,
      image: "A"
    },
    {
      name: "Marie S.",
      role: "Manager à Lausanne",
      content: "Tout y est : de la recherche d'emploi au logement. Un guide complet et ultra-pratique !",
      rating: 5,
      image: "M"
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
    { value: "500+", label: "Lecteurs Satisfaits", gradient: "from-red-500 to-pink-500" },
    { value: "4.9/5", label: "Note Moyenne", gradient: "from-emerald-500 to-teal-500" },
    { value: "73%", label: "Obtiennent leur Visa", gradient: "from-blue-500 to-cyan-500" },
    { value: "3-6 mois", label: "Délai Moyen", gradient: "from-gold to-amber-500" }
  ];

  return (
    <>
      <SEO 
        title="Voyage et Opportunités pour la Suisse - Guide Complet 2026"
        description="Le guide ultime pour réussir ton installation en Suisse. Démarches, emploi, logement, intégration - Tout ce qu'il faut savoir !"
        image="/guide-suisse-hero.png"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* Hero Section avec Vidéo */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)] -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] -z-10" />
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div className="space-y-8 lg:pr-8">
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-red-600 via-red-500 to-pink-500 text-white border-0 text-sm font-bold px-6 py-2.5 shadow-lg shadow-red-500/50 animate-pulse">
                    ⭐ NOUVEAU - Édition 2026
                  </Badge>
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.1]">
                    Ton Pass pour une Vie Meilleure en{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-pink-500 animate-gradient">
                      Suisse
                    </span>
                  </h1>
                </div>

                <p className="text-xl md:text-2xl text-navy/80 leading-relaxed font-light">
                  De la paperasse administrative au premier salaire suisse -{" "}
                  <span className="font-semibold text-navy bg-gradient-to-r from-yellow-200 to-yellow-100 px-2 py-1 rounded">
                    Tout ce que tu dois savoir pour réussir ton installation
                  </span>{" "}
                  sans stress et sans erreurs coûteuses.
                </p>

                <div className="relative bg-gradient-to-br from-red-50 via-white to-pink-50 p-8 rounded-3xl border-2 border-red-200 shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl" />
                  <Quote className="w-12 h-12 text-red-300 mb-4" />
                  <p className="text-lg text-navy/70 italic leading-relaxed relative">
                    "J'ai perdu 6 mois et 3000€ en essayant seul. Ce guide m'aurait évité tous ces problèmes. Ne fais pas la même erreur."
                  </p>
                  <p className="text-sm text-navy/60 mt-4 font-semibold">
                    - Thomas, Développeur à Berne
                  </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="group relative bg-white p-5 rounded-2xl shadow-lg border-2 border-transparent hover:border-red-200 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-navy/60 mt-1 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Vidéo */}
              <div className="relative lg:pl-8">
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-blue-600/20 z-10 pointer-events-none" />
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/vid_suis.mp4" type="video/mp4" />
                  </video>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-red-600 via-red-500 to-pink-500 text-white p-8 rounded-3xl shadow-2xl border-4 border-white transform rotate-3 hover:rotate-6 transition-transform">
                  <div className="text-sm font-semibold">Promotion Limitée</div>
                  <div className="text-4xl font-bold">-35%</div>
                </div>

                {/* Floating Features */}
                <div className="hidden lg:block absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border-2 border-emerald-200 transform -rotate-6 hover:rotate-0 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-navy">Accès Immédiat</div>
                      <div className="text-xs text-navy/60">PDF téléchargeable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Quick */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy via-navy/95 to-navy">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problèmes Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-red-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-red-100 text-red-700 border-2 border-red-300 px-4 py-2 mb-6">
                ⚠️ Les Défis Réels
              </Badge>
              <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6 leading-tight">
                Tu te reconnais dans ces{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
                  problèmes
                </span> ?
              </h2>
              <p className="text-xl text-navy/70 max-w-3xl mx-auto">
                La Suisse attire... mais le parcours est semé d'embûches
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {problems.map((problem, index) => (
                <Card key={index} className="group relative p-8 bg-white border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${problem.gradient}`} />
                  <div className={`w-20 h-20 bg-gradient-to-br ${problem.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {problem.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-4 font-bold">{problem.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{problem.description}</p>
                </Card>
              ))}
            </div>

            <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-pink-500 text-white p-12 rounded-3xl text-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
              <div className="relative">
                <Sparkles className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                <p className="text-3xl md:text-4xl font-serif mb-4 font-bold">
                  Et si tu pouvais éviter tous ces obstacles ?
                </p>
                <p className="text-xl text-white/90">
                  C'est exactement ce que ce guide va faire pour toi ⬇️
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/50 to-teal-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-emerald-100 text-emerald-700 border-2 border-emerald-300 px-4 py-2 mb-6">
                ✨ La Solution
              </Badge>
              <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6 leading-tight">
                Voici comment nous{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
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
                <Card key={index} className="group relative p-8 bg-white border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${solution.gradient}`} />
                  <div className={`w-20 h-20 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {solution.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-navy mb-4 font-bold">{solution.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{solution.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que tu obtiens */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold/5 via-amber-50/30 to-yellow-50/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gold/20 text-gold border-2 border-gold/30 px-4 py-2 mb-6">
                📚 Contenu Premium
              </Badge>
              <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6 leading-tight">
                Ce que tu obtiens dans ce guide
              </h2>
              <p className="text-xl text-navy/70">
                Plus de 150 pages d'informations stratégiques et actionnables
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-white rounded-2xl border-2 border-gold/20 hover:border-gold transition-all hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <p className="relative text-navy font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preuve Sociale - Témoignages */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-700 border-2 border-blue-300 px-4 py-2 mb-6">
                💬 Témoignages
              </Badge>
              <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6 leading-tight">
                Ils ont réussi leur installation
              </h2>
              <p className="text-xl text-navy/70">
                Rejoins des centaines de lecteurs qui vivent déjà en Suisse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative p-8 bg-white border-0 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/10" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-lg">{testimonial.name}</p>
                        <p className="text-sm text-navy/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-navy/80 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offre Irrésistible */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-red-500 to-pink-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl" />
          
          <div className="max-w-5xl mx-auto relative">
            <div className="text-center mb-12">
              <Badge className="bg-white text-red-600 border-0 text-base font-bold px-8 py-3 mb-8 shadow-xl">
                ⚡ OFFRE LIMITÉE - 72H SEULEMENT
              </Badge>
              <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
                Ton Investissement Aujourd'hui
              </h2>
              <p className="text-2xl text-white/90 mb-8">
                Moins que le coût d'une seule erreur administrative
              </p>
            </div>

            <div className="relative bg-white text-navy p-12 md:p-16 rounded-3xl shadow-2xl max-w-3xl mx-auto border-8 border-white/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-full blur-3xl" />
              
              <div className="relative text-center mb-10">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <span className="text-3xl text-navy/40 line-through font-light">19 950 FCFA</span>
                  <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg px-6 py-3 shadow-lg">
                    -35% 🔥
                  </Badge>
                </div>
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-500 blur-2xl opacity-30" />
                  <div className="relative text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-pink-500">
                    12 950 FCFA
                  </div>
                </div>
                <p className="text-2xl text-navy/70 mt-4 font-light">
                  (19,74€ seulement)
                </p>
              </div>

              <div className="space-y-5 mb-10">
                {[
                  "Accès immédiat au guide complet (PDF)",
                  "Mises à jour gratuites à vie",
                  "Garantie satisfait ou remboursé 14 jours",
                  "Bonus : Templates de documents suisses"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 text-lg bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://buy.stripe.com/28E14falFdxo0SD1l51sQ0i"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full bg-gradient-to-r from-red-600 via-red-500 to-pink-500 hover:from-red-700 hover:via-red-600 hover:to-pink-600 text-white font-bold py-8 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all group border-0 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    J'assure mon pass pour la Suisse
                    <ChevronRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </a>

              <p className="text-center text-sm text-navy/60 mt-6 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Paiement 100% sécurisé • Accès instantané • Support email inclus
              </p>
            </div>

            <div className="mt-16 text-center">
              <p className="text-2xl text-white/90 mb-6 font-light">
                ⏰ Cette offre expire dans :
              </p>
              <div className="flex justify-center gap-6">
                {[
                  { value: "23", label: "Heures" },
                  { value: "47", label: "Minutes" },
                  { value: "12", label: "Secondes" }
                ].map((time, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-md px-8 py-6 rounded-2xl border-2 border-white/30 shadow-xl">
                    <div className="text-5xl font-bold">{time.value}</div>
                    <div className="text-sm mt-2 font-medium">{time.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-purple-100 text-purple-700 border-2 border-purple-300 px-4 py-2 mb-6">
                ❓ FAQ
              </Badge>
              <h2 className="font-serif text-4xl md:text-6xl text-navy mb-6 leading-tight">
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
                  className="bg-white border-2 border-gold/30 rounded-2xl px-8 hover:border-gold transition-all shadow-md hover:shadow-xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-bold text-lg text-navy hover:text-gold py-6 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-navy/70 pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-navy via-navy/95 to-blue-900 rounded-3xl p-16 shadow-2xl border-4 border-gold/30 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
              <div className="relative">
                <Sparkles className="w-16 h-16 mx-auto mb-6 text-gold animate-pulse" />
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                  Prêt à Démarrer ton Aventure Suisse ?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Rejoins les centaines de personnes qui ont déjà transformé leur vie grâce à ce guide
                </p>
                
                <a 
                  href="https://buy.stripe.com/28E14falFdxo0SD1l51sQ0i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-gradient-to-r from-gold via-amber-500 to-yellow-500 hover:from-gold/90 hover:via-amber-400 hover:to-yellow-400 text-navy font-bold py-8 px-12 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all group border-0"
                  >
                    <span className="flex items-center gap-3">
                      J'assure mon pass pour la Suisse - 12 950 FCFA
                      <ChevronRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </a>

                <p className="text-white/70 mt-8 text-sm flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  Garantie satisfait ou remboursé 14 jours • Accès immédiat
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