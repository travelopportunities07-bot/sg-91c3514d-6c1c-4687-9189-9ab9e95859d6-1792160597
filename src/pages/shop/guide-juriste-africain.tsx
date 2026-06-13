import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, Scale, Briefcase, GraduationCap, ArrowRight, BookOpen, Trophy, Zap, Globe2 } from "lucide-react";
import Link from "next/link";

export default function GuideJuristeAfricain() {
  return (
    <>
      <SEO 
        title="Le Juriste en Europe - PowerLingua Shop"
        description="Le guide complet et pratique pour les juristes africains vers l'Europe et le Canada"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/about-hero.jpg')] opacity-10 bg-cover bg-center"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/20 backdrop-blur-sm rounded-full border-2 border-gold/30 hover:border-gold/50 transition-colors">
                  <Scale className="w-4 h-4 text-gold" />
                  <span className="font-bold text-sm text-gold">GUIDE DU JURISTE AFRICAIN • IMMIGRATION & CARRIÈRE</span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
                  Le Juriste en <span className="bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent">Europe</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-white/90 leading-relaxed">
                  Guide Complet & Pratique — Immigration & Carrière
                </h2>
                <p className="text-xl text-gold font-semibold">
                  POUR JURISTES AFRICAINS
                </p>
                <p className="text-lg text-white/80">
                  Comment obtenir un emploi qualifié, immigrer légalement et construire une carrière internationale durable
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["DROIT", "IMMIGRATION", "EMPLOI", "CARRIÈRE"].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-gold/10 backdrop-blur-sm rounded-xl border-2 border-gold/20 hover:border-gold/40 transition-colors">
                      <div className="text-xl font-bold text-gold">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold to-amber-500 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/50">
                  <Image
                    src="/guide-juriste-europe.png"
                    alt="Le Juriste en Europe"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-8 bg-gradient-to-r from-slate-800 via-navy to-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div className="flex items-center justify-center gap-2">
                <Globe2 className="w-6 h-6 text-gold" />
                <span className="font-bold text-lg">6 Pays couverts</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="w-6 h-6 text-gold" />
                <span className="font-bold text-lg">350+ pages</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6 text-gold" />
                <span className="font-bold text-lg">5 voies d'accès</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 text-gold" />
                <span className="font-bold text-lg">Accès immédiat</span>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-gold/20 rounded-full mb-4">
                <span className="text-gold font-semibold">LA VÉRITÉ QUE PERSONNE NE TE DIT</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Ton diplôme de droit vaut de l'or... mais pas en Afrique
              </h2>
            </div>
            <div className="space-y-8 text-lg text-white/90 leading-relaxed">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  Tu as étudié 5 à 7 ans. Tu as décroché ton Master en Droit. Tu rêvais de grandes plaidoiries, de dossiers complexes, d'une carrière prestigieuse.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  La réalité ? Un salaire de <span className="text-gold font-bold text-xl">150 000 à 400 000 FCFA</span> au mieux. Des clients qui ne paient pas. Des concours de magistrature saturés. Une profession encombrée.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-2xl border-2 border-gold/50 text-center">
                <p className="text-2xl font-bold text-gold mb-3">
                  En Europe et au Canada, les cabinets cherchent désespérément des juristes
                </p>
                <p className="text-4xl font-bold">
                  Salaire de départ : 2,5 à 5 millions FCFA/mois
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p>
                  Le problème ? Ton diplôme africain n'est pas reconnu automatiquement. Les équivalences sont complexes. Les chemins d'accès sont obscurs.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <p className="text-xl font-semibold text-center text-gold">
                  Mais il existe des voies. Des programmes. Des passerelles. Ce guide te les révèle toutes.
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
                Les obstacles spécifiques aux juristes
              </h2>
              <p className="text-xl text-navy/70">Pourquoi c'est plus complexe pour toi</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Diplôme non reconnu",
                  desc: "Ton Master africain ne suffit pas. Il faut des équivalences, des validations, des examens complémentaires... Mais lesquels ?"
                },
                {
                  title: "Système juridique différent",
                  desc: "Civil law vs Common law, codes différents, procédures différentes... Comment naviguer ?"
                },
                {
                  title: "Ordre des avocats fermé",
                  desc: "Plaider devant les tribunaux européens ou canadiens exige une admission au barreau local. Le processus est long et complexe."
                },
                {
                  title: "Zéro réseau international",
                  desc: "Les cabinets recrutent par réseau. Sans connexions en Europe/Canada, comment décrocher un poste ?"
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

        {/* Solutions - 6 Countries */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-gold/5 to-amber-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-slate-700 to-navy text-white rounded-full mb-4 font-bold">
                6 DESTINATIONS STRATÉGIQUES
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Les opportunités par pays
              </h2>
              <p className="text-xl text-navy/70">Salaires, voies d'accès et opportunités</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { flag: "🇩🇪", country: "Allemagne", salary: "3-6M FCFA", color: "from-red-500 to-amber-500" },
                { flag: "🇫🇷", country: "France", salary: "2,5-5M FCFA", color: "from-blue-600 to-red-600" },
                { flag: "🇧🇪", country: "Belgique", salary: "2,8-5,5M FCFA", color: "from-amber-500 to-red-600" },
                { flag: "🇱🇺", country: "Luxembourg", salary: "4-8M FCFA", color: "from-blue-500 to-sky-400" },
                { flag: "🇨🇦", country: "Canada", salary: "3-7M FCFA", color: "from-red-600 to-red-700" },
                { flag: "🇨🇭", country: "Suisse", salary: "5-10M FCFA", color: "from-red-600 to-white" }
              ].map((dest, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${dest.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300`}></div>
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gold/20">
                    <div className="text-5xl mb-4">{dest.flag}</div>
                    <div className="text-2xl font-bold text-navy mb-2">{dest.country}</div>
                    <div className="text-gold font-bold text-lg">{dest.salary}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-3xl text-navy mb-10 text-center">
              Ce que contient le guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Comment faire reconnaître ton diplôme africain (procédures détaillées)",
                "Les passerelles LLM et LL.B. pour juristes africains",
                "Les 5 voies d'accès aux barreaux européens et canadiens",
                "Les examens d'équivalence pays par pays (NCA Canada, EQE Europe)",
                "Comment trouver un stage en cabinet international depuis l'Afrique",
                "Les cabinets qui recrutent activement des juristes étrangers",
                "Les postes juridiques accessibles sans admission au barreau",
                "Les programmes de bourses pour juristes africains",
                "Comment rédiger un CV juridique qui passe les ATS",
                "Les compétences à mettre en avant (bilinguisme, droit africain, OHADA)",
                "Les secteurs porteurs : droit des affaires, arbitrage, droit international",
                "Comment se préparer aux entretiens dans les cabinets anglo-saxons"
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gold to-amber-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                  <div className="relative flex items-start gap-3 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gold to-amber-500 rounded-full flex items-center justify-center">
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
                Ils ont réussi avec ce guide
              </h2>
              <p className="text-xl text-navy/70">Juristes africains en Europe et au Canada</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  text: "J'ai suivi la voie LLM en Allemagne grâce à ce guide. En 18 mois, j'ai validé mon admission au barreau de Berlin. Je gagne maintenant 4,2 millions FCFA/mois en cabinet.",
                  author: "Maître Kouadio A.",
                  location: "Côte d'Ivoire → Berlin"
                },
                {
                  text: "Sans plaider, j'ai décroché un poste de Legal Counsel dans une multinationale au Canada. 3,8 millions FCFA/mois. Ce guide m'a montré les alternatives au barreau.",
                  author: "Me Diallo M.",
                  location: "Sénégal → Toronto"
                }
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-navy rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
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

        {/* Offer */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-navy/5 to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-slide-1.jpg')] opacity-5 bg-cover bg-center"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-slate-700 to-navy text-white rounded-full mb-8 font-bold text-lg shadow-lg">
              <Scale className="w-5 h-5" />
              OFFRE SPÉCIALE JURISTES
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-navy mb-6">
              9 826 FCFA
            </h2>
            <p className="text-2xl text-navy font-bold mb-3">
              (≈14,97€)
            </p>
            <p className="text-3xl text-navy/70 mb-12 font-semibold">
              Le prix d'une plaidoirie... pour transformer ta carrière
            </p>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-4 border-gold/30 hover:border-gold/40 transition-colors">
                <div className="mb-10">
                  <div className="inline-block">
                    <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-slate-700 via-navy to-slate-700 bg-clip-text text-transparent">
                      9 826
                    </span>
                    <span className="text-3xl font-bold text-navy ml-2">FCFA</span>
                  </div>
                  <p className="text-gold font-bold text-xl mt-2">(≈14,97€)</p>
                  <p className="text-navy/60 mt-3 text-lg">Investissement unique, impact à vie</p>
                </div>

                <div className="space-y-5 text-left mb-10">
                  {[
                    "Guide complet 6 destinations (350+ pages)",
                    "Procédures d'équivalence détaillées",
                    "Liste de cabinets recruteurs internationaux",
                    "Templates CV et lettres juridiques",
                    "Guide des bourses et financements",
                    "Mises à jour juridiques 2026"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-navy rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform border-2 border-navy/30">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-navy/80 text-lg font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://buy.stripe.com/7sY8wH1P964W0SD0h11sQ0l"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-gradient-to-r from-slate-700 via-navy to-slate-700 hover:from-navy hover:via-slate-700 hover:to-navy text-white font-bold py-8 text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group border-3 border-navy/50 hover:border-navy">
                    Ajouter au Panier
                    <ArrowRight className="w-7 h-7 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>

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
                  🔒 Paiement sécurisé • ⚡ Accès immédiat au PDF
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Scale, title: "Expertise Juridique", color: "from-slate-700 to-navy" },
                { icon: Briefcase, title: "Carrière Internationale", color: "from-gold to-amber-500" },
                { icon: GraduationCap, title: "Équivalences Diplômes", color: "from-emerald-500 to-teal-500" }
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-navy to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">
              Ta carrière juridique mérite l'international
            </h2>
            <p className="text-2xl text-white/90 mb-6 font-semibold">
              Ne laisse pas ton diplôme dormir dans un marché saturé.
            </p>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Ton expertise vaut 10× plus ailleurs. Les cabinets européens et canadiens cherchent des juristes africains bilingues, formés au droit civil et au droit OHADA.
            </p>
            <a 
              href="https://buy.stripe.com/7sY8wH1P964W0SD0h11sQ0l"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-gradient-to-r from-gold via-amber-500 to-gold hover:from-amber-600 hover:via-gold hover:to-amber-600 text-navy font-bold py-7 px-14 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                Je lance ma carrière internationale
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
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