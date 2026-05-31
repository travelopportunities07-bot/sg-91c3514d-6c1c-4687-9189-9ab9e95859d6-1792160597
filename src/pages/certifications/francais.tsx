import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, CheckCircle, TrendingUp, Users, Star, Shield, Clock, Target } from "lucide-react";

export default function FrancaisCertification() {
  return (
    <>
      <SEO
        title="Programmes de Certification Français - Préparation DELF & DALF"
        description="Maîtrisez le français avec nos programmes intensifs de préparation DELF et DALF. Coaching expert, méthodes éprouvées, résultats garantis."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                <span className="text-3xl">🇫🇷</span>
                <span className="text-white font-semibold">Programmes de Certification Français</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Maîtrisez le Français.<br/>Ouvrez des Portes Mondiales.
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Votre passeport vers les universités francophones, l'évolution de carrière et les opportunités internationales commence ici.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="#packages">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-indigo-900 font-bold rounded-full px-10 py-7 text-lg shadow-2xl transform hover:scale-105 transition-all">
                    Voir les Packs de Cours
                  </Button>
                </Link>
                <Link href="#testimonials">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold rounded-full px-10 py-7 text-lg backdrop-blur-sm">
                    Témoignages de Réussite
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                  Le Défi Que Vous Rencontrez
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous comprenons vos frustrations avec les examens de certification français
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">😰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Anxiété d'Examen</h3>
                  <p className="text-gray-700">
                    Vous bloquez pendant l'oral. La pression du temps vous submerge. Les tests blancs semblent impossibles.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">📉</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Plafond de Score</h3>
                  <p className="text-gray-700">
                    Vous stagnez au même niveau. Les cours généraux ne fonctionnent pas. Vous ne savez pas ce qui vous bloque.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Pression des Délais</h3>
                  <p className="text-gray-700">
                    Candidatures universitaires qui ferment. Exigences de visa urgentes. Vous avez besoin de résultats MAINTENANT.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-12 text-white mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Notre Solution Éprouvée
                  </h2>
                  <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                    Une approche systématique qui transforme les candidats en experts confiants
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Diagnostic de Précision</h3>
                        <p className="text-indigo-100">
                          Nous identifions vos faiblesses exactes dès la première session. Plus de devinettes sur quoi étudier.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Formation Axée sur le Score</h3>
                        <p className="text-indigo-100">
                          Chaque leçon cible les techniques d'examen. Apprenez exactement ce que les examinateurs recherchent.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Conditions d'Examen Réelles</h3>
                        <p className="text-indigo-100">
                          Tests blancs chronométrés chaque semaine avec feedback détaillé. Vous entrerez dans l'examen réel déjà expérimenté.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Résultats Rapides</h3>
                        <p className="text-indigo-100">
                          La plupart des étudiants voient une amélioration d'un niveau complet en 5 semaines. Nous optimisons votre temps d'étude sans compromis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    À Qui S'Adresse Ce Programme
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Candidats Universitaires</h3>
                    <p className="text-gray-600">
                      Besoin du DELF B2 ou DALF C1 pour l'admission dans les programmes internationaux
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Professionnels en Carrière</h3>
                    <p className="text-gray-600">
                      Certification requise pour promotions, transferts internationaux ou immigration
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Candidats Récurrents</h3>
                    <p className="text-gray-600">
                      Frustrés par des scores stagnants et cherchant un accompagnement expert
                    </p>
                  </div>
                </div>
              </div>

              <div id="testimonials" className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    Résultats Réels d'Étudiants Réels
                  </h2>
                  <p className="text-xl text-gray-600">
                    Rejoignez des centaines qui ont atteint leurs objectifs
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "J'étais bloquée au DELF B1 depuis des mois. Après 6 semaines avec Vocalis Academy, j'ai obtenu mon B2 avec 85/100 ! Les stratégies de production orale m'ont fait gagner 15 points."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="font-bold text-indigo-600">SC</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">Sophie C.</p>
                        <p className="text-sm text-gray-600">DELF B1 → B2 85/100 | Étudiante à la Sorbonne</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "Les simulations étaient exactement comme le vrai DALF. Je suis entré confiant et j'ai obtenu mon C1 du premier coup. Meilleur investissement de ma carrière."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="font-bold text-indigo-600">MN</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">Marc N.</p>
                        <p className="text-sm text-gray-600">DALF C1 Réussi | Promotion Manager International</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-3xl p-12 text-navy mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Offre à Durée Limitée
                  </h2>
                  <p className="text-xl text-navy/80 max-w-3xl mx-auto">
                    Commencez ce mois-ci et recevez des bonus exclusifs d'une valeur de 200€
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Test Diagnostique Gratuit</h3>
                    <p className="text-sm text-gray-700">Simulation DELF/DALF complète avec rapport détaillé (valeur 80€)</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Supports d'Étude Premium</h3>
                    <p className="text-sm text-gray-700">Tests officiels et modèles exclusifs (valeur 70€)</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Support Email à Vie</h3>
                    <p className="text-sm text-gray-700">Réponses aux questions même après la fin du programme (valeur 50€)</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="#packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      Réclamez Vos Bonus Maintenant →
                    </Button>
                  </Link>
                  <p className="text-sm text-navy/70 mt-4">⏰ Offre expire dans 48 heures</p>
                </div>
              </div>

              <div id="packages" className="text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                  Choisissez Votre Parcours de Réussite
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                  Tous les packs incluent coaching personnalisé, tests blancs hebdomadaires et garantie de progression
                </p>
                <Link href="/certifications/francais/packages">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                    Voir les Packs de Cours →
                  </Button>
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