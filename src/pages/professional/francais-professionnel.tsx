import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, TrendingUp, Globe, CheckCircle, ArrowRight, Users, Target, MessageSquare } from "lucide-react";

export default function FrancaisProfessionnel() {
  return (
    <>
      <SEO
        title="Français Professionnel - Langue de Travail Internationale"
        description="Maîtrisez le français des affaires pour votre carrière internationale. Réunions, négociations, présentations et communications professionnelles."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Français Professionnel
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                La Langue de Travail des Organisations Internationales
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                    Votre Passeport pour les Carrières Internationales
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Le français est la langue officielle de l'ONU, de l'UE, de l'OIF et de centaines d'organisations internationales. C'est la clé d'accès aux postes de direction dans la diplomatie, les ONG, et le commerce international.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Nos programmes transforment votre français académique en compétence professionnelle stratégique qui ouvre des portes dans 88 pays francophones.
                  </p>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-services.png"
                    alt="Français Professionnel"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Les Défis Que Vous Rencontrez
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Opportunités Manquées</h4>
                      <p className="text-gray-600">
                        Des postes à l'UNESCO, la Banque Mondiale, ou Médecins Sans Frontières vous échappent par manque de français professionnel
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Stress en Réunion</h4>
                      <p className="text-gray-600">
                        Difficulté à participer activement aux réunions multilatérales et à défendre vos positions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Correspondance Incertaine</h4>
                      <p className="text-gray-600">
                        Des heures perdues à reformuler des emails professionnels, incertain du registre et du protocole
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Négociations Délicates</h4>
                      <p className="text-gray-600">
                        Incapacité à négocier avec nuance et à comprendre les sous-entendus culturels français
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Notre Solution Éprouvée
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Vocabulaire Sectoriel</h4>
                    <p className="text-white/80">
                      Maîtrisez le lexique exact de la diplomatie, des ONG, du droit international et des affaires
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Scénarios Réels</h4>
                    <p className="text-white/80">
                      Simulations de négociations multilatérales, rédaction de rapports, gestion de conflits
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Coaching Expert</h4>
                    <p className="text-white/80">
                      Sessions hebdomadaires avec des formateurs ayant travaillé dans des institutions francophones
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Témoignages de Réussite
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👨‍💼</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Ahmed K.</h4>
                        <p className="text-sm text-gray-600">Chargé de Programme, ONU Genève</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Le module B2 Pro m'a permis de décrocher mon poste de rêve à l'ONU. En 8 semaines, j'ai acquis la fluidité nécessaire pour mener des réunions en français."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Poste International Obtenu</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👩‍💼</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Maria S.</h4>
                        <p className="text-sm text-gray-600">Consultante RH, Luxembourg</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "Grâce au programme C1 Pro, je dirige maintenant des formations en français pour des cadres européens. Mon chiffre d'affaires a triplé."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Revenus × 3</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl p-12 text-center mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Investissement Professionnel à Durée Limitée
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Rejoignez notre prochaine cohorte ce mois-ci. Seulement 6 places par groupe pour garantir un accompagnement personnalisé et des résultats maximaux.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/professional/francais-professionnel/packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-full px-12 py-6 text-lg shadow-xl group">
                      Voir Tous les Packs
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="border-2 border-navy text-navy font-semibold rounded-full px-12 py-6 text-lg">
                      Consultation Gratuite
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">92%</div>
                  <p className="text-gray-600">Évolution de carrière sous 6 mois</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">€38K</div>
                  <p className="text-gray-600">Augmentation salariale moyenne</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">400+</div>
                  <p className="text-gray-600">Professionnels Formés</p>
                </div>
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