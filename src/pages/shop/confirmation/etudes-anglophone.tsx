import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Download, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConfirmationEtudesAnglophone() {
  const downloadUrl = "https://drive.google.com/file/d/1G7OHqdPXL03l8lgVwLvhgJa2GQkFd2y-/view?usp=drive_link";

  return (
    <>
      <SEO 
        title="Confirmation de Paiement - Guide Études Anglophone | PowerLingua"
        description="Téléchargez votre guide pour étudier gratuitement aux USA, UK, Canada et Australie"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-cream/30 to-white">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl mb-6 animate-bounce">
                <CheckCircle2 className="w-14 h-14 text-white" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                🎉 Paiement Confirmé !
              </h1>
              <p className="text-xl text-navy/70">
                Merci pour votre achat. Votre guide est prêt à être téléchargé immédiatement.
              </p>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-2 border-gold/20">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-48 h-48 flex-shrink-0">
                  <Image
                    src="/etudes-anglophone-500.png"
                    alt="Guide Études Anglophone"
                    width={192}
                    height={192}
                    className="object-contain w-full h-full rounded-2xl"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h2 className="font-serif text-2xl text-navy mb-3">
                    Comment Étudier Gratuitement aux États-Unis, Australie, Canada et Royaume-Uni
                  </h2>
                  <p className="text-navy/70 mb-4">
                    Le guide ultime pour accéder aux meilleures universités anglophones
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>
                    <span className="text-navy/60 text-sm">(150+ étudiants satisfaits)</span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-6 border-2 border-gold/30">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Votre Guide PDF</h3>
                    <p className="text-sm text-navy/60">Accès immédiat et illimité</p>
                  </div>
                </div>
                <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-navy to-navy/90 hover:from-gold hover:to-gold/90 text-white font-bold py-6 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger Mon Guide Maintenant
                  </Button>
                </a>
                <p className="text-xs text-navy/50 text-center mt-3">
                  Cliquez sur le bouton pour accéder à votre guide sur Google Drive
                </p>
              </div>
            </div>

            {/* What's Inside */}
            <div className="bg-gradient-to-br from-navy/5 to-gold/5 rounded-3xl p-8 mb-8">
              <h3 className="font-serif text-2xl text-navy mb-6 text-center">
                📚 Ce Que Contient Votre Guide
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "70+ programmes de bourses détaillés",
                  "Templates de personal statements",
                  "Préparation aux tests SAT/GRE/GMAT",
                  "Procédures visa F-1 et Tier 4",
                  "Top 100 universités avec critères",
                  "Budget réaliste par pays",
                  "Opportunités de travail sur campus",
                  "Calendrier complet 2026-2027"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-navy/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-navy/10">
              <h3 className="font-serif text-2xl text-navy mb-6 text-center">
                🚀 Prochaines Étapes
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Téléchargez votre guide</h4>
                    <p className="text-navy/70">Cliquez sur le bouton ci-dessus pour accéder à votre fichier PDF sur Google Drive</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Explorez les opportunités</h4>
                    <p className="text-navy/70">Découvrez toutes les bourses disponibles pour votre profil</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Préparez vos candidatures</h4>
                    <p className="text-navy/70">Utilisez les templates et stratégies pour maximiser vos chances</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Note */}
            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
              <p className="text-navy/70">
                📧 Un email de confirmation avec le lien de téléchargement vous sera également envoyé. <br/>
                Conservez cette page en favoris pour accéder à votre guide à tout moment.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}