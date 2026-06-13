import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ConfirmationGuideMines() {
  const downloadLink = "https://drive.google.com/file/d/1mvOld5MYe7F2lqu2paGRajPrdTSeKelu/view?usp=drive_link";

  return (
    <>
      <SEO 
        title="Confirmation - Guide Mines Australiennes | PowerLingua"
        description="Téléchargez votre guide complet pour travailler dans les mines en Australie"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-cream/30 to-white">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mb-6 shadow-2xl">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Paiement Confirmé !
              </h1>
              <p className="text-xl text-navy/70 mb-2">
                Merci pour votre achat
              </p>
              <p className="text-lg text-navy/60">
                Votre guide est maintenant disponible au téléchargement
              </p>
            </div>

            {/* Download Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-gold/20 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-serif text-3xl text-navy mb-4">
                  Guide Opportunités et Travail dans les Mines en Australie
                </h2>
                <p className="text-navy/70 mb-8 max-w-2xl">
                  Le Guide Stratégique Complet des Mines Australiennes - De zéro à ton premier shift FIFO
                </p>
                
                <a 
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md"
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-navy via-navy/95 to-navy/90 hover:from-gold hover:via-gold/95 hover:to-gold/90 text-white font-bold py-6 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-navy hover:border-gold"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger Maintenant
                  </Button>
                </a>

                <p className="text-sm text-navy/60 mt-4">
                  Le téléchargement s'ouvrira dans Google Drive
                </p>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-br from-navy/5 to-gold/5 rounded-3xl p-8 mb-8">
              <h3 className="font-serif text-2xl text-navy mb-6 text-center">
                Et Maintenant ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="text-4xl mb-3">📖</div>
                  <h4 className="font-semibold text-navy mb-2">1. Lisez le Guide</h4>
                  <p className="text-sm text-navy/70">
                    Prenez le temps de parcourir toutes les sections
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="text-4xl mb-3">✍️</div>
                  <h4 className="font-semibold text-navy mb-2">2. Prenez des Notes</h4>
                  <p className="text-sm text-navy/70">
                    Notez les actions importantes à entreprendre
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-semibold text-navy mb-2">3. Passez à l'Action</h4>
                  <p className="text-sm text-navy/70">
                    Mettez en pratique les stratégies du guide
                  </p>
                </div>
              </div>
            </div>

            {/* Other Guides */}
            <div className="text-center">
              <h3 className="font-serif text-2xl text-navy mb-4">
                Découvrez Nos Autres Guides
              </h3>
              <Link href="/shop/guides-ebooks">
                <Button 
                  className="bg-gold hover:bg-gold/90 text-navy font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  Voir Tous les Guides
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}