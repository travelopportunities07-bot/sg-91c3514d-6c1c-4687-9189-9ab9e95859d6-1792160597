import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Globe, TrendingUp, Target, Users, MessageSquare, ArrowRight, BookOpen } from "lucide-react";

export default function LanguesCarriere() {
  return (
    <>
      <SEO
        title="Langues & Carrière Professionnelle - Vocalis Academy"
        description="Formations en Français, Anglais, Allemand, Espagnol et Chinois des affaires pour booster votre carrière internationale. Vocabulaire métier, prise de parole et rédaction professionnelle."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy-dark to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.05),transparent_50%)]"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-gold/30">
                <Briefcase className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 bg-clip-text">
                Langues & Carrière Professionnelle
              </h1>
              <p className="text-xl md:text-2xl text-gold/90 leading-relaxed font-medium">
                Maîtrisez les langues des affaires pour propulser votre carrière à l'international
              </p>
            </div>
          </div>
        </section>

        <ScrollingBanner />

        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6 leading-tight">
                    Développez Votre Avantage Compétitif International
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Dans un monde professionnel globalisé, la maîtrise des langues étrangères est devenue un atout indispensable pour accéder aux meilleures opportunités de carrière, négocier avec des partenaires internationaux et évoluer dans des environnements multiculturels.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Nos formations professionnelles en Français, Anglais, Allemand et Chinois vous préparent à communiquer avec impact dans votre secteur d'activité, que vous soyez cadre, entrepreneur, consultant ou professionnel en reconversion.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-600 hover:from-gold/90 hover:to-yellow-600/90 text-navy font-bold rounded-full px-10 py-6 text-lg shadow-xl shadow-gold/20">
                      Évaluer Mes Besoins Professionnels
                    </Button>
                  </Link>
                </div>
                
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-services.png"
                    alt="Langues et carrière"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-4xl font-heading font-bold text-navy mb-12 text-center">
                  Nos Programmes Professionnels par Langue
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <span className="text-3xl">🇬🇧</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">Business English</h4>
                        <p className="text-white/90 text-sm">Langue des Affaires Internationales</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Vocabulaire financier, marketing, RH, juridique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Présentations et pitchs professionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Négociations commerciales et réunions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Emails, rapports et documents business</span>
                      </li>
                    </ul>
                    <Link href="/professional/business-english">
                      <Button className="w-full bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-full group shadow-lg">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <span className="text-3xl">🇫🇷</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">Français Professionnel</h4>
                        <p className="text-white/90 text-sm">Langue de Travail Internationale</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Français des affaires et de l'administration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Communication formelle et protocole</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Correspondance professionnelle impeccable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Insertion dans le marché du travail francophone</span>
                      </li>
                    </ul>
                    <Link href="/professional/francais-professionnel">
                      <Button className="w-full bg-white hover:bg-gray-100 text-purple-900 font-bold rounded-full group shadow-lg">
                        En savoir Plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <span className="text-3xl">🇩🇪</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">Deutsch für Pflegeberufe</h4>
                        <p className="text-white/90 text-sm">Allemand pour Soins Infirmiers</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Vocabulaire médical et soins infirmiers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Documentation et transmissions médicales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Préparation Fachsprachprüfung B2</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Travailler en Allemagne dans le secteur santé</span>
                      </li>
                    </ul>
                    <Link href="/professional/deutsch-pflegeberufe">
                      <Button className="w-full bg-white hover:bg-gray-100 text-red-900 font-bold rounded-full group shadow-lg">
                        Mehr wissen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-orange-600 via-red-600 to-red-800 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <span className="text-3xl">🇨🇳</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">商务汉语</h4>
                        <p className="text-white/90 text-sm">Business Chinese</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Mandarin business et étiquette chinoise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Négociation et culture commerciale asiatique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Vocabulaire import-export et finance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Opportunités professionnelles en Chine</span>
                      </li>
                    </ul>
                    <Link href="/professional/chinese-business">
                      <Button className="w-full bg-white hover:bg-gray-100 text-red-900 font-bold rounded-full group shadow-lg">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <span className="text-3xl">📋</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">Fachsprachprüfung</h4>
                        <p className="text-white/90 text-sm">Examen Langue Spécialisée B2</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Préparation intensive à l'examen FSP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Simulations orales et écrites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Cas cliniques et documentation médicale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Reconnaissance professionnelle en Allemagne</span>
                      </li>
                    </ul>
                    <Link href="/professional/fachsprachpruefung">
                      <Button className="w-full bg-white hover:bg-gray-100 text-cyan-900 font-bold rounded-full group shadow-lg">
                        Mehr wissen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <span className="text-3xl">✏️</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">Alphabetisierung & Integration</h4>
                        <p className="text-white/90 text-sm">Alphabétisation en Allemand</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Apprentissage alphabet latin et lecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Allemand quotidien et administratif</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Intégration professionnelle en Allemagne</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0 shadow-lg shadow-gold/50"></span>
                        <span>Préparation test DTZ (A1 à B1)</span>
                      </li>
                    </ul>
                    <Link href="/professional/alphabetisierung">
                      <Button className="w-full bg-white hover:bg-gray-100 text-emerald-900 font-bold rounded-full group shadow-lg">
                        Mehr wissen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-700 rounded-3xl p-8 shadow-2xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-white/20">
                        <BookOpen className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">Matériel de Cours</h4>
                        <p className="text-white/90 text-sm">Ressources d'Apprentissage</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0 shadow-lg shadow-white/50"></span>
                        <span>Fiches de vocabulaire et grammaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0 shadow-lg shadow-white/50"></span>
                        <span>Glossaires spécialisés (médical, business)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0 shadow-lg shadow-white/50"></span>
                        <span>Cahiers d'exercices et audio dialogues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0 shadow-lg shadow-white/50"></span>
                        <span>Guides de préparation aux examens</span>
                      </li>
                    </ul>
                    <Link href="/professional/materiel-cours">
                      <Button className="w-full bg-white hover:bg-gray-100 text-amber-900 font-bold rounded-full group shadow-lg">
                        En savoir Plus
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Compétences Professionnelles Développées
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold/30">
                      <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Communication Orale</h4>
                    <p className="text-gray-700">
                      Prise de parole en public, présentations convaincantes, négociations efficaces
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold/30">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Rédaction Professionnelle</h4>
                    <p className="text-gray-700">
                      Emails impactants, CV/lettres de motivation, rapports et propositions commerciales
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold/30">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Intelligence Interculturelle</h4>
                    <p className="text-gray-700">
                      Codes culturels, étiquette business et soft skills internationaux
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy via-navy-dark to-black rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                    Pourquoi Investir dans Vos Compétences Linguistiques ?
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/30">
                        <Globe className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Accès aux Marchés Internationaux</h4>
                        <p className="text-white/80">
                          Élargissez vos opportunités professionnelles au-delà de votre pays d'origine
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/30">
                        <TrendingUp className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Évolution de Carrière Accélérée</h4>
                        <p className="text-white/80">
                          Les professionnels multilingues gagnent en moyenne 10-15% de plus
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/30">
                        <Briefcase className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Compétitivité Renforcée</h4>
                        <p className="text-white/80">
                          Démarquez-vous sur le marché de l'emploi avec un profil international
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/30">
                        <Users className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Réseau Professionnel Élargi</h4>
                        <p className="text-white/80">
                          Connectez-vous avec des partenaires et clients du monde entier
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-gold/10 to-yellow-600/10 rounded-3xl p-12">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
                  Prêt à Propulser Votre Carrière ?
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Découvrez comment nos formations linguistiques professionnelles peuvent transformer votre trajectoire de carrière.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-600 hover:from-gold/90 hover:to-yellow-600/90 text-navy font-bold rounded-full px-12 py-7 text-lg shadow-2xl shadow-gold/30">
                    Demander une Consultation Gratuite
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