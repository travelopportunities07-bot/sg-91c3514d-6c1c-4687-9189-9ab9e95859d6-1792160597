import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Calendar, Clock, Award, Shield, Zap } from "lucide-react";

export default function FrancaisPackages() {
  return (
    <>
      <SEO
        title="Packs de Cours Français - Tarifs DELF & DALF"
        description="Choisissez votre pack de préparation aux certifications françaises. Options Standard, Premium ou VIP avec plans de paiement flexibles."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-indigo-100 px-6 py-3 rounded-full mb-6">
                  <span className="text-2xl">🇫🇷</span>
                  <span className="text-indigo-900 font-semibold">Certification Français</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
                  Choisissez Votre Pack
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tous les packs incluent coaching personnalisé, tests blancs hebdomadaires et notre garantie d'amélioration
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-semibold text-indigo-900">STANDARD</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">Pack Standard</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-indigo-600">297€</span>
                    </div>
                    <p className="text-gray-600">Parfait pour apprenants concentrés</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">Programme 5 Semaines</p>
                        <p className="text-sm text-gray-600">Cycle de préparation complet</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">3 Heures/Semaine</p>
                        <p className="text-sm text-gray-600">15 heures coaching total</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Tests blancs hebdomadaires</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Supports d'étude inclus</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Support par email</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Prendre cette Offre
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Paiement Sécurisé</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 shadow-2xl border-4 border-gold transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    PLUS POPULAIRE
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">PREMIUM</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Pack Premium</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-white">397€</span>
                    </div>
                    <p className="text-indigo-100">Meilleur rapport qualité-prix</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">Programme 6 Semaines</p>
                        <p className="text-sm text-indigo-100">Temps de préparation étendu</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">3 Heures/Semaine</p>
                        <p className="text-sm text-indigo-100">18 heures coaching total</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Tests blancs + pratique bonus</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Supports d'étude premium</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Support prioritaire email & chat</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">1 session coaching supplémentaire</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-white hover:bg-gray-100 text-indigo-900 font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Prendre cette Offre
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="text-sm text-indigo-100">Paiement Sécurisé</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-900">VIP</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">Pack VIP</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-purple-600">497€</span>
                    </div>
                    <p className="text-gray-600">Expérience de préparation ultime</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">Programme 8 Semaines</p>
                        <p className="text-sm text-gray-600">Temps de préparation maximum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">3 Heures/Semaine</p>
                        <p className="text-sm text-gray-600">24 heures coaching total</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Tests blancs illimités</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Package supports d'étude VIP</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Support WhatsApp 24/7</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">3 sessions coaching supplémentaires</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Garantie de score ou remboursement</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Prendre cette Offre
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Paiement Sécurisé</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-16">
                <div className="text-center mb-8">
                  <Calendar className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                    Planifier un Appel de Consultation
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Vous ne savez pas quel pack vous convient ? Réservez une consultation gratuite de 30 minutes avec nos conseillers experts.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      Réserver une Consultation Gratuite
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8">
                <h3 className="text-2xl font-heading font-bold text-navy mb-6 text-center">
                  Questions Fréquemment Posées
                </h3>
                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">Et si je dois reprogrammer une session ?</h4>
                    <p className="text-gray-600">Vous pouvez reprogrammer jusqu'à 24 heures avant la session sans frais.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">Puis-je passer à un pack supérieur plus tard ?</h4>
                    <p className="text-gray-600">Oui ! Vous pouvez passer à un niveau supérieur à tout moment et payer uniquement la différence.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">Quelle est votre politique de remboursement ?</h4>
                    <p className="text-gray-600">Remboursement complet dans les 7 premiers jours si vous n'êtes pas satisfait. Sans questions.</p>
                  </div>
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