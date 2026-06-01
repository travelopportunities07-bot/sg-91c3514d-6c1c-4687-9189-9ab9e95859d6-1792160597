import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, TrendingUp, Users, Award, ArrowRight, Zap, DollarSign, MapPin, Clock } from "lucide-react";

export default function GuideMinesAustraliennes() {
  return (
    <>
      <SEO 
        title="Mine Your Future - PowerLingua Shop"
        description="Le guide complet pour décrocher un emploi bien rémunéré dans les mines australiennes"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-navy/95 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-slide-1.jpg')] opacity-10 bg-cover bg-center"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold to-amber-500 rounded-full shadow-lg">
                  <Zap className="w-4 h-4" />
                  <span className="font-bold text-sm text-navy">ÉDITION 2025 - GUIDE PREMIUM</span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
                  MINE YOUR <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">FUTURE</span>
                </h1>
                <h2 className="font-serif text-2xl md:text-3xl text-white/90">
                  Le Guide Stratégique Complet
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  Pour Africains et Européens qui veulent décrocher un emploi bien rémunéré dans les mines australiennes — de zéro à ton premier shift FIFO
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-gold/30 hover:border-gold/50 transition-colors">
                    <div className="text-4xl font-bold text-gold mb-1">25</div>
                    <div className="text-sm text-white/70">Chapitres</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-gold/30 hover:border-gold/50 transition-colors">
                    <div className="text-4xl font-bold text-gold mb-1">150+</div>
                    <div className="text-sm text-white/70">Agences</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-gold/30 hover:border-gold/50 transition-colors">
                    <div className="text-4xl font-bold text-gold mb-1">300+</div>
                    <div className="text-sm text-white/70">Employeurs</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold to-amber-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/50">
                  <Image
                    src="/mine-your-future.png"
                    alt="Mine Your Future"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-8 bg-gradient-to-r from-amber-500 via-gold to-amber-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="w-6 h-6" />
                <span className="font-bold text-lg">12-18k AUD/mois</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6" />
                <span className="font-bold text-lg">18 villes minières</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-6 h-6" />
                <span className="font-bold text-lg">Accès instantané</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="w-6 h-6" />
                <span className="font-bold text-lg">500+ téléchargements</span>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-navy to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-gold/20 rounded-full mb-4">
                <span className="text-gold font-semibold">IMAGINE TON FUTUR</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Dans 6 mois, ta vie aura changé...
              </h2>
            </div>
            <div className="space-y-8 text-lg text-white/90 leading-relaxed">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  Tu te réveilles dans ton camp minier ultra-moderne en Western Australia. Le soleil se lève sur le bush australien. Ton shift de 12 heures commence dans une heure.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  À la fin de ton roster de 2 semaines, tu touches <span className="text-gold font-bold text-2xl">12 000 à 18 000 AUD</span> — soit entre 5,4 et 8,1 millions de FCFA par mois. Pas d'impôts sur le revenu en dessous de 18 200 AUD. Logement payé. Nourriture fournie.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-2xl border-2 border-gold/50 text-center">
                <p className="text-2xl font-bold text-gold mb-2">
                  Pendant que tes collègues en Afrique ou en Europe gagnent 200 000 à 500 000 FCFA...
                </p>
                <p className="text-3xl font-bold">
                  Toi tu envoies 3 millions chez toi chaque mois.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  Ce n'est pas un rêve. C'est la réalité de milliers d'Africains et Européens qui ont franchi le pas. Et maintenant, c'est ton tour.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Les obstacles qui te bloquent
              </h2>
              <p className="text-xl text-navy/70">Mais que ce guide va éliminer</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Tu ne sais pas par où commencer",
                  desc: "Visa, CV australien, certifications requises... L'information est éparpillée et souvent contradictoire."
                },
                {
                  title: "Les arnaques sont partout",
                  desc: "Fausses promesses d'agences, visas frauduleux, frais cachés... Tu risques de perdre ton argent."
                },
                {
                  title: "Tu penses que c'est trop difficile",
                  desc: "Sans expérience en Australie, sans diplôme australien, sans connexions... Comment faire ?"
                },
                {
                  title: "Tu manques de temps et d'argent",
                  desc: "Faire tes propres recherches peut prendre des mois et te coûter des milliers d'euros en fausses pistes."
                }
              ].map((problem, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative p-8 bg-white rounded-2xl border-3 border-red-300 hover:border-red-400 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl border-2 border-red-200">
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

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-emerald-500 text-white rounded-full mb-4 font-bold">
                LA SOLUTION COMPLÈTE
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Ce que ce guide va t'apporter
              </h2>
              <p className="text-xl text-navy/70">Tout ce dont tu as besoin pour réussir</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "La roadmap exacte, étape par étape, du visa au premier salaire",
                "150+ agences de recrutement FIFO vérifiées avec leurs contacts directs",
                "300+ employeurs miniers qui recrutent activement des étrangers",
                "Les 18 villes minières stratégiques et leurs opportunités",
                "Comment créer un CV australien qui passe les ATS",
                "Les certifications exactes à obtenir (White Card, RIIWHS204D...)",
                "Comment négocier un salaire de 150k+ AUD par an",
                "Les erreurs fatales à éviter dans les candidatures",
                "Les templates d'email pour contacter les recruteurs",
                "Le réseau secret des groupes Facebook de mineurs FIFO"
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative flex items-start gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center border-2 border-emerald-300">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-navy/80 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Ils l'ont fait. Pourquoi pas toi ?
              </h2>
              <p className="text-xl text-navy/70">Témoignages vérifiés de nos clients</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  text: "Grâce à ce guide, j'ai décroché mon premier contrat FIFO en 4 mois. Je gagne maintenant 7 millions FCFA par mois comme opérateur de foreuse. Ma vie a changé.",
                  author: "Jean-Pierre K.",
                  location: "Cameroun → Perth"
                },
                {
                  text: "Les templates de CV et les contacts d'agences m'ont fait gagner 6 mois. J'ai économisé plus de 2 000 € en évitant les arnaques. Merci PowerLingua !",
                  author: "Thomas M.",
                  location: "France → Kalgoorlie"
                }
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold to-amber-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-navy/80 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-6 border-t border-navy/10">
                      <p className="font-bold text-navy text-lg">{testimonial.author}</p>
                      <p className="text-gold font-semibold">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-gold/5 to-amber-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-slide-2.png')] opacity-5 bg-cover bg-center"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full mb-8 font-bold text-lg shadow-lg animate-pulse">
              <Zap className="w-5 h-5" />
              OFFRE LIMITÉE
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-navy mb-6">
              Investis 9 897 FCFA aujourd'hui
            </h2>
            <p className="text-2xl text-gold font-bold mb-3">
              (≈15€)
            </p>
            <p className="text-3xl text-navy/70 mb-12 font-semibold">
              Pour potentiellement gagner 5 à 8 millions FCFA par mois
            </p>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-4 border-gold/30 hover:border-gold/50 transition-colors">
                <div className="mb-10">
                  <div className="inline-block">
                    <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                      9 897
                    </span>
                    <span className="text-3xl font-bold text-navy ml-2">FCFA</span>
                  </div>
                  <p className="text-gold font-bold text-xl mt-2">(≈15€)</p>
                  <p className="text-navy/60 mt-3 text-lg">Soit moins qu'un repas au restaurant</p>
                </div>

                <div className="space-y-5 text-left mb-10">
                  {[
                    "25 chapitres détaillés (250+ pages)",
                    "150+ contacts d'agences de recrutement",
                    "300+ employeurs qui recrutent",
                    "Templates de CV et emails",
                    "Accès immédiat au PDF",
                    "Mises à jour gratuites à vie"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-gold to-amber-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform border-2 border-gold/30">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-navy/80 text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-gold via-amber-500 to-gold hover:from-amber-600 hover:via-gold hover:to-amber-600 text-navy font-bold py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group border-3 border-amber-600/50 hover:border-amber-600">
                  Ajouter au Panier
                  <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>

                <div className="mt-8 flex justify-center">
                  <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 px-10 py-5 rounded-3xl border-3 border-emerald-300 shadow-xl">
                    <div className="flex items-center gap-5">
                      <Image
                        src="/secure-payment-badges.png"
                        alt="Paiement Sécurisé"
                        width={180}
                        height={60}
                        className="object-contain"
                      />
                      <div className="text-left">
                        <p className="text-lg font-bold text-emerald-700">Paiement 100% Sécurisé</p>
                        <p className="text-sm text-emerald-600 font-semibold">Avec Stripe</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-navy/60 mt-6 flex items-center justify-center gap-2">
                  🔒 Paiement sécurisé • ⚡ Accès instantané
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Award, title: "Garantie Satisfait", color: "from-emerald-500 to-teal-500" },
                { icon: Users, title: "500+ Clients", color: "from-blue-500 to-cyan-500" },
                { icon: TrendingUp, title: "Résultats Prouvés", color: "from-purple-500 to-pink-500" }
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-slate-800 to-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Ta vie peut changer en 6 mois
            </h2>
            <p className="text-2xl text-white/90 mb-6 font-semibold">
              Mais seulement si tu prends la décision aujourd'hui.
            </p>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Chaque jour qui passe, c'est un jour de moins pour commencer ta nouvelle vie en Australie. Chaque mois qui passe, c'est 5 à 8 millions FCFA que tu aurais pu gagner.
            </p>
            <Button className="bg-gradient-to-r from-gold via-amber-500 to-gold hover:from-amber-600 hover:via-gold hover:to-amber-600 text-navy font-bold py-7 px-14 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              Je veux commencer maintenant
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <div className="mt-8 flex justify-center">
              <div className="inline-block bg-gradient-to-r from-emerald-50 to-teal-50 px-10 py-5 rounded-3xl border-3 border-emerald-300 shadow-xl">
                <div className="flex items-center gap-5">
                  <Image
                    src="/secure-payment-badges.png"
                    alt="Paiement Sécurisé"
                    width={180}
                    height={60}
                    className="object-contain"
                  />
                  <div className="text-left">
                    <p className="text-lg font-bold text-emerald-700">Paiement 100% Sécurisé</p>
                    <p className="text-sm text-emerald-600 font-semibold">Avec Stripe</p>
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