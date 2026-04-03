import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollingBanner } from "@/components/ScrollingBanner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Award, Target, BookOpen, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function PreparationCertifications() {
  return (
    <>
      <SEO
        title="Préparation aux Certifications - Vocalis Academy"
        description="Programmes intensifs pour réussir vos certifications TOEFL, DELF, TestDaF, DELE, HSK. Examens de langues, correction personnalisée et stratégies de réussite."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/800x800.png"
              alt="Préparation aux Certifications"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy/80"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Préparation aux Certifications Internationales
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Maximisez vos chances de réussite aux examens officiels avec nos programmes intensifs
              </p>
            </div>
          </div>
        </section>

        <ScrollingBanner />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                    Décrochez Votre Certification avec Confiance
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Les certifications internationales (TOEFL, DELF, TestDaF, DELE, HSK) sont des passeports indispensables pour vos études supérieures, votre mobilité internationale et votre carrière professionnelle.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Nos programmes de préparation sont conçus par des experts certifiés qui connaissent parfaitement les exigences et les pièges de chaque test. Nous vous donnons les outils, les techniques et la confiance nécessaires pour réussir brillamment.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
                      Demander une Évaluation Gratuite
                    </Button>
                  </Link>
                </div>
                
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/career-services.png"
                    alt="Préparation certifications"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Nos Programmes de Certification
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">🇬🇧</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold text-navy">TOEFL & IELTS</h4>
                        <p className="text-gray-600">Anglais Académique</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Compréhension orale et écrite intensive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Expression orale : fluidité et prononciation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Rédaction académique : essays et synthèses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Tests blancs chronométrés et corrigés</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">🇫🇷</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold text-navy">DELF & DALF</h4>
                        <p className="text-gray-600">Français Langue Étrangère</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Préparation A1 à C2 selon votre niveau</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Techniques de production orale et écrite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Compréhension de documents authentiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Entraînement aux épreuves officielles</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">🇩🇪</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold text-navy">TestDaF & Goethe</h4>
                        <p className="text-gray-600">Allemand Certification</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Niveaux A1 à C2 Goethe-Zertifikat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>TestDaF pour études universitaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Grammaire, vocabulaire et syntaxe allemande</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Simulations d'examen intensives</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gold">🇨🇳</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-heading font-bold text-navy">HSK</h4>
                        <p className="text-gray-600">Chinois Mandarin</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Préparation HSK 1 à HSK 6</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Caractères chinois et prononciation pinyin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Compréhension orale et écrite ciblée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span>Stratégies pour maximiser votre score</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Notre Méthode de Réussite
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Diagnostic Initial</h4>
                    <p className="text-white/80">
                      Test de niveau pour identifier vos forces et axes d'amélioration
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Programme Personnalisé</h4>
                    <p className="text-white/80">
                      Plan de formation adapté à votre niveau et à votre objectif de score
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Suivi et Optimisation</h4>
                    <p className="text-white/80">
                      Tests blancs réguliers et ajustements jusqu'à l'obtention de votre certification
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Ce Que Vous Obtenez
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Supports Officiels</h4>
                      <p className="text-gray-600">
                        Accès aux manuels et sujets d'examen authentiques
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Corrections Détaillées</h4>
                      <p className="text-gray-600">
                        Feedback personnalisé sur chaque production écrite et orale
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Coaching Mental</h4>
                      <p className="text-gray-600">
                        Techniques de gestion du stress et de concentration le jour J
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Garantie de Progression</h4>
                      <p className="text-gray-600">
                        Amélioration mesurable de votre niveau à chaque session
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Prêt à Décrocher Votre Certification ?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Commencez votre préparation dès aujourd'hui avec une évaluation gratuite de votre niveau actuel.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full px-10 py-6 text-lg shadow-xl">
                    Contactez-Nous Maintenant
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