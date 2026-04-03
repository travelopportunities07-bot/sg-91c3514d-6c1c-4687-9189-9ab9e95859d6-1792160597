import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen, Globe, Target } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "5 Méthodes Efficaces pour Apprendre une Langue Rapidement",
      excerpt: "Découvrez les techniques prouvées scientifiquement pour accélérer votre apprentissage linguistique et atteindre vos objectifs plus rapidement.",
      category: "Méthodologie",
      date: "15 Mars 2026",
      author: "Dr. Marie Dubois",
      icon: Target,
      gradient: "from-blue-600 to-blue-500",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Comment Préparer le TOEFL : Guide Complet 2026",
      excerpt: "Stratégies éprouvées, ressources essentielles et conseils d'experts pour maximiser votre score au TOEFL et réussir votre certification.",
      category: "Certifications",
      date: "10 Mars 2026",
      author: "Prof. John Smith",
      icon: BookOpen,
      gradient: "from-blue-600 to-blue-500",
      readTime: "12 min"
    },
    {
      id: 3,
      title: "L'Immersion Linguistique : Créer un Environnement Multilingue",
      excerpt: "Transformez votre quotidien en une immersion linguistique totale, même depuis chez vous. Techniques pratiques et outils numériques.",
      category: "Pratique",
      date: "5 Mars 2026",
      author: "Sophie Martin",
      icon: Globe,
      gradient: "from-blue-600 to-blue-500",
      readTime: "10 min"
    },
    {
      id: 4,
      title: "DELF B2 : Les Erreurs à Éviter Absolument",
      excerpt: "Les pièges les plus fréquents lors de l'examen DELF B2 et comment les éviter pour maximiser vos chances de réussite.",
      category: "Certifications",
      date: "1 Mars 2026",
      author: "Dr. Marie Dubois",
      icon: BookOpen,
      gradient: "from-blue-600 to-blue-500",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Apprendre le Chinois : Par Où Commencer ?",
      excerpt: "Guide complet pour débutants : les caractères, la prononciation, les tons et les ressources indispensables pour bien démarrer.",
      category: "Langues",
      date: "25 Février 2026",
      author: "Li Wei",
      icon: Globe,
      gradient: "from-blue-600 to-blue-500",
      readTime: "15 min"
    },
    {
      id: 6,
      title: "10 Applications Gratuites pour Pratiquer Votre Anglais",
      excerpt: "Sélection des meilleures applications mobiles pour améliorer votre anglais au quotidien, testées et approuvées par nos experts.",
      category: "Ressources",
      date: "20 Février 2026",
      author: "Prof. John Smith",
      icon: Target,
      gradient: "from-blue-600 to-blue-500",
      readTime: "6 min"
    }
  ];

  return (
    <>
      <SEO
        title="Blog - PowerLingua | Conseils d'Apprentissage des Langues"
        description="Découvrez nos articles, conseils et stratégies pour apprendre efficacement les langues étrangères. Guides, astuces et ressources par nos experts."
        image="/og-image.png"
      />
      <Header />
      <main className="pt-32">
        <section className="py-20 bg-gradient-to-br from-navy via-navy to-navy-dark text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-6 py-2 mb-6">
                <BookOpen className="w-5 h-5 text-gold" />
                <span className="text-gold font-semibold uppercase tracking-wider text-sm">Blog</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Conseils d'Apprentissage des Langues
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Découvrez nos articles, guides pratiques et stratégies éprouvées pour maîtriser les langues étrangères plus rapidement et efficacement.
              </p>
            </div>
          </div>
        </section>

        <ScrollingBanner />

        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => {
                const Icon = article.icon;
                return (
                  <article
                    key={article.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-white hover:border-gold/20"
                  >
                    <div className={`h-2 bg-gradient-to-r ${article.gradient}`}></div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent`}>
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-heading font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{article.date}</span>
                            </div>
                            <span>•</span>
                            <span>{article.readTime} de lecture</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <button className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r ${article.gradient} hover:opacity-90 text-white font-semibold rounded-full py-3 px-6 transition-all group-hover:gap-4`}>
                          Lire l'article
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex flex-col items-center gap-4 bg-white rounded-3xl p-8 shadow-xl border-2 border-gold/20">
                <BookOpen className="w-16 h-16 text-gold" />
                <h3 className="text-2xl font-heading font-bold text-navy">
                  Plus d'Articles à Venir
                </h3>
                <p className="text-gray-700 max-w-md">
                  Nous publions régulièrement de nouveaux conseils et stratégies pour vous aider dans votre parcours d'apprentissage.
                </p>
                <Link href="/#contact">
                  <button className="bg-gradient-to-r from-gold to-amber-500 hover:opacity-90 text-white font-semibold rounded-full py-4 px-8 transition-all shadow-lg">
                    Recevoir les Nouveautés
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}