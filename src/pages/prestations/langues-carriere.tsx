import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Globe, TrendingUp, Target, Users, MessageSquare } from "lucide-react";

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
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Langues & Carrière Professionnelle
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Maîtrisez les langues des affaires pour propulser votre carrière à l'international
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
                    Développez Votre Avantage Compétitif International
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Dans un monde professionnel globalisé, la maîtrise des langues étrangères est devenue un atout indispensable pour accéder aux meilleures opportunités de carrière, négocier avec des partenaires internationaux et évoluer dans des environnements multiculturels.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Nos formations professionnelles en Français, Anglais, Allemand, Espagnol et Chinois vous préparent à communiquer avec impact dans votre secteur d'activité, que vous soyez cadre, entrepreneur, consultant ou professionnel en reconversion.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
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
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Nos Programmes Professionnels par Langue
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl text-white">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center">
                        <span className="text-2xl font-bold text-navy">🇬🇧</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold">Business English</h4>
                        <p className="text-white/80">Langue des Affaires Internationales</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Vocabulaire financier, marketing, RH, juridique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Présentations et pitchs professionnels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Négociations commerciales et réunions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Emails, rapports et documents business</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">🇫🇷</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold text-navy">Français Professionnel</h4>
                        <p className="text-gray-600">Langue de Travail Internationale</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Français des affaires et de l'administration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Communication formelle et protocole</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Correspondance professionnelle impeccable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Insertion dans le marché du travail francophone</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">🇩🇪</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold text-navy">Deutsch für Beruf</h4>
                        <p className="text-gray-600">Allemand Professionnel</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Allemand technique et industriel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Culture d'entreprise allemande</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Préparation aux entretiens d'embauche</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Travailler en Allemagne, Autriche, Suisse</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">🇨🇳</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold text-navy">商务汉语 (Business Chinese)</h4>
                        <p className="text-gray-600">Chinois des Affaires</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Mandarin business et étiquette chinoise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Négociation et culture commerciale asiatique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Vocabulaire import-export et finance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0"></span>
                        <span>Opportunités professionnelles en Chine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Compétences Professionnelles Développées
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Communication Orale</h4>
                    <p className="text-gray-600">
                      Prise de parole en public, présentations convaincantes, négociations efficaces
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Rédaction Professionnelle</h4>
                    <p className="text-gray-600">
                      Emails impactants, CV/lettres de motivation, rapports et propositions commerciales
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-3">Intelligence Interculturelle</h4>
                    <p className="text-gray-600">
                      Codes culturels, étiquette business et soft skills internationaux
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Pourquoi Investir dans Vos Compétences Linguistiques ?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
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
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
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

              <div className="mt-16 text-center">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Prêt à Propulser Votre Carrière ?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Découvrez comment nos formations linguistiques professionnelles peuvent transformer votre trajectoire de carrière.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
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