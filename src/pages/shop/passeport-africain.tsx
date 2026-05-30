import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, Globe, Target, Shield, ArrowRight, Plane, Briefcase, Heart, Zap } from "lucide-react";

export default function PasseportAfricain() {
  return (
    <>
      <SEO 
        title="Passeport Africain - PowerLingua Shop"
        description="Le guide ultime 2026 pour immigrer, trouver un job et réussir dans 15 pays stratégiques"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-slide-3.png')] opacity-10 bg-cover bg-center"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <Globe className="w-4 h-4" />
                  <span className="font-bold text-sm">📘 GUIDE OFFICIEL IMMIGRATION AFRIQUE</span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
                  PASSEPORT <span className="bg-gradient-to-r from-amber-300 via-gold to-amber-300 bg-clip-text text-transparent">AFRICAIN</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-white/90 leading-relaxed">
                  Le Guide Ultime 2026 pour Immigrer, Trouver un Job et Réussir dans 15 Pays Stratégiques
                </h2>
                <p className="text-lg text-white/80">
                  Stratégies, Secteurs Porteurs, Démarches Rapides & Conseils d'Expatriés
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-amber-300 mb-1">15</div>
                    <div className="text-sm text-white/70">Pays</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-amber-300 mb-1">75M</div>
                    <div className="text-sm text-white/70">Postes</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-4xl font-bold text-amber-300 mb-1">10×</div>
                    <div className="text-sm text-white/70">Salaire</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-gold rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300/50">
                  <Image
                    src="/Screenshot_2026-05-30_03.05.02.png"
                    alt="Passeport Africain"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div className="flex items-center justify-center gap-2">
                <Plane className="w-6 h-6" />
                <span className="font-bold text-lg">15 Destinations</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Briefcase className="w-6 h-6" />
                <span className="font-bold text-lg">300+ pages</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-6 h-6" />
                <span className="font-bold text-lg">Anti-Arnaques</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-6 h-6" />
                <span className="font-bold text-lg">Accès immédiat</span>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-amber-500/20 rounded-full mb-4">
                <span className="text-amber-300 font-semibold">LE PARADOXE AFRICAIN</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                1,4 milliard d'habitants, 60% ont moins de 25 ans
              </h2>
            </div>
            <div className="space-y-8 text-lg text-white/90 leading-relaxed">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  Le chômage des jeunes atteint <span className="text-amber-300 font-bold text-xl">30% en moyenne</span>. Pendant ce temps, l'Europe, le Canada, l'Australie vieillissent et manquent de 75 millions de travailleurs qualifiés.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  Le paradoxe ? Pendant que l'Afrique exporte ses matières premières, elle pourrait exporter ses talents vers des opportunités 10× mieux rémunérées.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-r from-amber-500/20 to-gold/20 rounded-2xl border-2 border-amber-400/50 text-center">
                <p className="text-2xl font-bold text-amber-300 mb-2">
                  Un infirmier au Sénégal gagne 150 000 FCFA
                </p>
                <p className="text-3xl font-bold">
                  Au Canada, il gagne 2,5 millions FCFA
                </p>
                <p className="text-lg text-white/80 mt-4">
                  Même profil. Même compétence. Juste un passeport différent.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-xl font-semibold text-center">
                  Ce guide, c'est ton nouveau passeport. Celui qui transforme ta compétence africaine en salaire européen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Pourquoi tant d'Africains échouent
              </h2>
              <p className="text-xl text-navy/70">Ces erreurs te coûtent des années et des millions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Information fragmentée",
                  desc: "Tu passes 6 mois sur Google, YouTube, forums... pour avoir des infos contradictoires et périmées."
                },
                {
                  title: "Arnaques d'agences",
                  desc: "Tu paies 500 000 à 2 millions FCFA à une 'agence' qui disparaît après avoir pris ton argent."
                },
                {
                  title: "Mauvais pays ciblé",
                  desc: "Tu choisis le Canada parce que 'tout le monde y va'... sans savoir que l'Allemagne recrute 10× plus dans ton secteur."
                },
                {
                  title: "Refus de visa",
                  desc: "Ton dossier est rejeté 3 fois parce que tu ne connais pas les codes et exigences réelles des consulats."
                }
              ].map((problem, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative p-8 bg-white rounded-2xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl">
                        ❌
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-navy mb-3">{problem.title}</h3>
                        <p className="text-navy/70 leading-relaxed">{problem.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full mb-4 font-bold">
                TON PLAN D'ACTION COMPLET
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Ce que tu vas découvrir
              </h2>
              <p className="text-xl text-navy/70">15 destinations, des centaines de stratégies</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Les 15 pays les plus accessibles pour les Africains en 2026",
                "Les secteurs qui recrutent massivement (santé, tech, BTP, logistique...)",
                "Comment choisir LE bon pays selon ton profil",
                "Les démarches visa étape par étape pour chaque pays",
                "Les pièges à éviter (frais cachés, faux recruteurs, arnaques)",
                "Comment faire reconnaître ton diplôme africain",
                "Les programmes d'immigration express (Canada, Australie, Allemagne)",
                "Comment trouver un employeur sponsor depuis l'Afrique",
                "Les templates de CV et lettres de motivation qui marchent",
                "Le coût RÉEL de l'immigration (budget pays par pays)",
                "Les aides financières et bourses disponibles",
                "Comment s'intégrer rapidement (langue, culture, réseau)"
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative flex items-start gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-navy/80 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Des résultats concrets
              </h2>
              <p className="text-xl text-navy/70">Témoignages vérifiés d'expatriés africains</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  text: "J'ai choisi l'Allemagne grâce à ce guide au lieu du Canada. En 8 mois, j'ai mon visa et un job d'infirmière à 2,8 millions FCFA/mois. Meilleur investissement de ma vie.",
                  author: "Fatoumata D.",
                  location: "Côte d'Ivoire → Berlin"
                },
                {
                  text: "Les templates de CV et la liste des recruteurs m'ont fait gagner 1 an. J'ai évité 3 arnaques et économisé 800 000 FCFA. Merci PowerLingua !",
                  author: "Amadou S.",
                  location: "Mali → Montréal"
                }
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-navy/80 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-6 border-t border-navy/10">
                      <p className="font-bold text-navy text-lg">{testimonial.author}</p>
                      <p className="text-indigo-600 font-semibold">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offer */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-slide-1.jpg')] opacity-5 bg-cover bg-center"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-full mb-8 font-bold text-lg shadow-lg animate-pulse">
              <Zap className="w-5 h-5" />
              PRIX DE LANCEMENT
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-navy mb-6">
              6 997 FCFA seulement
            </h2>
            <p className="text-3xl text-navy/70 mb-12 font-semibold">
              Moins que le prix d'une "consultation" avec une agence douteuse
            </p>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-4 border-indigo-200">
                <div className="mb-10">
                  <div className="inline-block">
                    <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      6 997
                    </span>
                    <span className="text-3xl font-bold text-navy ml-2">FCFA</span>
                  </div>
                  <p className="text-navy/60 mt-3 text-lg line-through">Au lieu de 15 000 FCFA</p>
                </div>

                <div className="space-y-5 text-left mb-10">
                  {[
                    "Guide complet 15 pays (300+ pages)",
                    "Checklists visa pays par pays",
                    "Templates CV et lettres de motivation",
                    "Liste de recruteurs internationaux",
                    "Budget détaillé par destination",
                    "Accès immédiat + mises à jour 2026"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-navy/80 text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-indigo-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                  Ajouter au Panier
                  <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>

                <div className="mt-6 flex justify-center">
                  <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-3 rounded-2xl border-2 border-emerald-200 shadow-md">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/secure-payment-badges.png"
                        alt="Paiement Sécurisé"
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                      <div className="text-left">
                        <p className="text-sm font-bold text-emerald-700">Paiement 100% Sécurisé</p>
                        <p className="text-xs text-emerald-600">Avec Stripe</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-navy/60 mt-6 flex items-center justify-center gap-2">
                  🔒 Paiement sécurisé • ⚡ Téléchargement instantané
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Globe, title: "15 Destinations", color: "from-blue-500 to-cyan-500" },
                { icon: Target, title: "Stratégies Éprouvées", color: "from-indigo-500 to-purple-500" },
                { icon: Shield, title: "Anti-Arnaques", color: "from-emerald-500 to-teal-500" }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300`}></div>
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <item.icon className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${item.color} text-white p-3 rounded-xl`} />
                    <p className="font-bold text-navy text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              2026 sera ton année ou celle d'un autre
            </h2>
            <p className="text-2xl text-white/90 mb-6 font-semibold">
              Les 75 millions de postes vacants en Europe et au Canada ne vont pas t'attendre.
            </p>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Chaque jour sans action, c'est un jour de plus à 200 000 FCFA au lieu de 2,5 millions.
            </p>
            <Button className="bg-gradient-to-r from-amber-400 via-gold to-amber-400 hover:from-gold hover:via-amber-500 hover:to-gold text-navy font-bold py-7 px-14 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              Je démarre mon projet d'immigration
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <div className="mt-6 flex justify-center">
              <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-3 rounded-2xl border-2 border-emerald-200 shadow-md">
                <div className="flex items-center gap-3">
                  <Image
                    src="/secure-payment-badges.png"
                    alt="Paiement Sécurisé"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                  <div className="text-left">
                    <p className="text-sm font-bold text-emerald-700">Paiement 100% Sécurisé</p>
                    <p className="text-xs text-emerald-600">Avec Stripe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}