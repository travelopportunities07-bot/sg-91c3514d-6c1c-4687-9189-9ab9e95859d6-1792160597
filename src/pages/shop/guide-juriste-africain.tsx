import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star, Scale, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

export default function GuideJuristeAfricain() {
  return (
    <>
      <SEO 
        title="Guide du Juriste Africain - PowerLingua Shop"
        description="Le guide complet et pratique pour les juristes africains vers l'Europe et le Canada"
      />
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy/5 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
                  <span className="text-gold font-semibold text-sm">GUIDE DU JURISTE AFRICAIN • IMMIGRATION & CARRIÈRE INTERNATIONALE</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6 leading-tight">
                  Le Guide du <span className="text-gold">Juriste Africain</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-navy/80 mb-6">
                  vers l'Europe et le Canada
                </h2>
                <p className="text-xl text-navy/70 mb-8">
                  GUIDE COMPLET & PRATIQUE
                </p>
                <p className="text-lg text-navy/70 mb-8">
                  Comment obtenir un emploi qualifié, immigrer légalement et construire une carrière internationale durable
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-gold/5 rounded-xl">
                    <div className="text-2xl font-bold text-gold">DROIT</div>
                  </div>
                  <div className="text-center p-4 bg-gold/5 rounded-xl">
                    <div className="text-2xl font-bold text-gold">IMMIGRATION</div>
                  </div>
                  <div className="text-center p-4 bg-gold/5 rounded-xl">
                    <div className="text-2xl font-bold text-gold">EMPLOI</div>
                  </div>
                  <div className="text-center p-4 bg-gold/5 rounded-xl">
                    <div className="text-2xl font-bold text-gold">CARRIÈRE</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Le_Juriste.png"
                  alt="Le Guide du Juriste Africain"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">
              Ton diplôme de droit vaut de l'or... mais pas en Afrique
            </h2>
            <div className="space-y-6 text-lg text-white/90">
              <p>
                Tu as étudié 5 à 7 ans. Tu as décroché ton Master en Droit. Tu rêvais de grandes plaidoiries, de dossiers complexes, d'une carrière prestigieuse.
              </p>
              <p>
                La réalité ? Un salaire de <span className="text-gold font-bold">150 000 à 400 000 FCFA</span> au mieux. Des clients qui ne paient pas. Des concours de magistrature saturés. Une profession encombrée.
              </p>
              <p className="text-xl font-semibold text-gold">
                Pendant ce temps, en Europe et au Canada, les cabinets cherchent désespérément des juristes. Salaire de départ : 2,5 à 5 millions FCFA/mois.
              </p>
              <p>
                Le problème ? Ton diplôme africain n'est pas reconnu automatiquement. Les équivalences sont complexes. Les chemins d'accès sont obscurs.
              </p>
              <p className="text-white/90">
                Mais il existe des voies. Des programmes. Des passerelles. Ce guide te les révèle toutes.
              </p>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Les obstacles spécifiques aux juristes africains
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Diplôme non reconnu</h3>
                <p className="text-navy/70">
                  Ton Master africain ne suffit pas. Il faut des équivalences, des validations, des examens complémentaires... Mais lesquels ?
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Système juridique différent</h3>
                <p className="text-navy/70">
                  Civil law vs Common law, codes différents, procédures différentes... Comment naviguer ?
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Ordre des avocats fermé</h3>
                <p className="text-navy/70">
                  Plaider devant les tribunaux européens ou canadiens exige une admission au barreau local. Le processus est long et complexe.
                </p>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
                <h3 className="font-bold text-xl text-navy mb-3">❌ Zéro réseau international</h3>
                <p className="text-navy/70">
                  Les cabinets recrutent par réseau. Sans connexions en Europe/Canada, comment décrocher un poste ?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold/5 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Les 6 destinations couvertes et leurs opportunités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { country: "🇩🇪 Allemagne", detail: "Salaire : 3-6M FCFA" },
                { country: "🇫🇷 France", detail: "Salaire : 2,5-5M FCFA" },
                { country: "🇧🇪 Belgique", detail: "Salaire : 2,8-5,5M FCFA" },
                { country: "🇱🇺 Luxembourg", detail: "Salaire : 4-8M FCFA" },
                { country: "🇨🇦 Canada", detail: "Salaire : 3-7M FCFA" },
                { country: "🇨🇭 Suisse", detail: "Salaire : 5-10M FCFA" }
              ].map((dest, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-gold/20">
                  <div className="text-2xl mb-2">{dest.country}</div>
                  <div className="text-gold font-semibold">{dest.detail}</div>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-2xl text-navy mb-8 text-center">
              Ce que tu vas découvrir
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Comment faire reconnaître ton diplôme africain (procédures détaillées)",
                "Les passerelles LLM et LL.B. pour juristes africains",
                "Les 5 voies d'accès aux barreaux européens et canadiens",
                "Les examens d'équivalence pays par pays (NCA Canada, EQE Europe)",
                "Comment trouver un stage en cabinet international depuis l'Afrique",
                "Les cabinets qui recrutent activement des juristes étrangers",
                "Les postes juridiques accessibles sans admission au barreau (juriste d'entreprise, compliance, droit international)",
                "Les programmes de bourses pour juristes africains",
                "Comment rédiger un CV juridique qui passe les ATS",
                "Les compétences à mettre en avant (bilinguisme, droit africain, droit OHADA)",
                "Les secteurs porteurs : droit des affaires, droit international, arbitrage commercial",
                "Comment se préparer aux entretiens dans les cabinets anglo-saxons"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-navy/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-12 text-center">
              Ils ont réussi avec ce guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy/80 mb-4 italic">
                  "J'ai suivi la voie LLM en Allemagne grâce à ce guide. En 18 mois, j'ai validé mon admission au barreau de Berlin. Je gagne maintenant 4,2 millions FCFA/mois en cabinet."
                </p>
                <p className="font-semibold text-navy">— Maître Kouadio A., Côte d'Ivoire → Berlin</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-navy/80 mb-4 italic">
                  "Sans plaider, j'ai décroché un poste de Legal Counsel dans une multinationale au Canada. 3,8 millions FCFA/mois. Ce guide m'a montré les alternatives au barreau."
                </p>
                <p className="font-semibold text-navy">— Me Diallo M., Sénégal → Toronto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gold/10 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-2 bg-gold text-white rounded-full mb-6 font-bold">
              OFFRE SPÉCIALE JURISTES
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-6">
              9 897 FCFA
            </h2>
            <p className="text-2xl text-navy/70 mb-8">
              Le prix d'une plaidoirie... pour transformer ta carrière
            </p>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <div className="mb-8">
                <span className="text-6xl font-bold text-gold">9 897 FCFA</span>
                <p className="text-navy/60 mt-2">Investissement unique, impact à vie</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Guide complet 6 destinations (350+ pages)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Procédures d'équivalence détaillées</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Liste de cabinets recruteurs internationaux</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Templates CV et lettres juridiques</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Guide des bourses et financements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy/80">Mises à jour juridiques 2026</span>
                </div>
              </div>

              <Button className="w-full bg-gold hover:bg-gold/90 text-white font-bold py-8 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Ajouter au Panier
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-navy/60 mt-4">
                🔒 Paiement sécurisé • Accès immédiat au PDF
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <Scale className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">Expertise Juridique</p>
              </div>
              <div className="p-6">
                <Briefcase className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">Carrière Internationale</p>
              </div>
              <div className="p-6">
                <GraduationCap className="w-12 h-12 text-gold mx-auto mb-3" />
                <p className="font-semibold text-navy">Équivalences Diplômes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Ta carrière juridique mérite l'international
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ne laisse pas ton diplôme dormir dans un marché saturé. Ton expertise vaut 10× plus ailleurs.
            </p>
            <Button className="bg-gold hover:bg-gold/90 text-white font-bold py-6 px-12 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Je lance ma carrière internationale
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}