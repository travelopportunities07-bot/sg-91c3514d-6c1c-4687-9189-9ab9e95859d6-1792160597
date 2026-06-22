import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Download, FileText, Star, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ConfirmationEtudesAnglophone() {
  const router = useRouter();
  const { token } = router.query;
  
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [purchaseData, setPurchaseData] = useState<any>(null);

  useEffect(() => {
    if (token) {
      verifyDownload();
    } else {
      // Pas de token = accès direct depuis Stripe, afficher la page sans vérification
      setLoading(false);
      setVerified(false);
    }
  }, [token]);

  const verifyDownload = async () => {
    try {
      const response = await fetch("/api/verify-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
      });

      const data = await response.json();

      if (data.valid) {
        setVerified(true);
        setPurchaseData(data.purchase);
      } else {
        setError("Lien de téléchargement invalide ou expiré. Veuillez vérifier votre email.");
      }
    } catch (err) {
      setError("Erreur de vérification. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <SEO 
          title="Vérification en cours... | PowerLingua"
          description="Vérification de votre achat en cours"
        />
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-cream/30 to-white flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-16 h-16 text-gold animate-spin mx-auto mb-4" />
            <p className="text-xl text-navy/70">Vérification de votre achat...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Si pas de token, afficher message d'attente de l'email
  if (!token) {
    return (
      <>
        <SEO 
          title="Confirmation de Paiement - Guide Études Anglophone | PowerLingua"
          description="Votre paiement a été confirmé"
        />
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-cream/30 to-white">
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl mb-6">
                  <CheckCircle2 className="w-14 h-14 text-white" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl text-navy mb-4">
                  Paiement Confirmé !
                </h1>
                <p className="text-lg text-navy/70 mb-6">
                  Merci pour votre achat du guide "Comment Étudier Gratuitement aux USA, Australie, Canada et Royaume-Uni"
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy mb-3 flex items-center justify-center gap-2">
                    <FileText className="w-6 h-6 text-gold" />
                    Vérifiez Votre Email
                  </h3>
                  <p className="text-navy/70 mb-4">
                    Nous venons de vous envoyer un email contenant :
                  </p>
                  <ul className="text-left text-navy/70 space-y-2 mb-4">
                    <li>✅ Le lien de téléchargement direct de votre guide PDF</li>
                    <li>✅ Un lien sécurisé pour accéder à cette page</li>
                    <li>✅ Les instructions de téléchargement</li>
                  </ul>
                  <p className="text-sm text-navy/60 mt-4">
                    💡 Si vous ne voyez pas l'email, vérifiez vos spams ou le dossier "Promotions"
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !verified) {
    return (
      <>
        <SEO 
          title="Erreur de Vérification | PowerLingua"
          description="Erreur lors de la vérification de votre achat"
        />
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-cream/30 to-white">
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl mb-6">
                  <AlertCircle className="w-14 h-14 text-white" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl text-navy mb-4">
                  Lien Invalide
                </h1>
                <p className="text-lg text-navy/70 mb-6">
                  {error}
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-navy mb-3">Comment accéder à votre guide ?</h3>
                  <ul className="text-left text-navy/70 space-y-2">
                    <li>• Vérifiez l'email de confirmation que vous avez reçu</li>
                    <li>• Utilisez le lien de téléchargement dans cet email</li>
                    <li>• Si vous n'avez pas reçu l'email, vérifiez vos spams</li>
                    <li>• Contactez-nous si le problème persiste</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

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
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl mb-6">
                <CheckCircle2 className="w-14 h-14 text-white" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-navy mb-4">
                Paiement Confirmé !
              </h1>
              <p className="text-xl text-navy/70">
                Merci pour votre achat. Votre guide est prêt à être téléchargé.
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
                    {purchaseData?.productName || "Comment Étudier Gratuitement aux États-Unis, Australie, Canada et Royaume-Uni"}
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

              {/* Download Button - Only shown if verified */}
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-6 border-2 border-gold/30">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                  <div>
                    <h3 className="font-semibold text-lg text-navy">Votre Guide PDF</h3>
                    <p className="text-sm text-navy/60">Accès immédiat et illimité</p>
                  </div>
                </div>
                <a href={purchaseData?.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-navy to-navy/90 hover:from-gold hover:to-gold/90 text-white font-bold py-6 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger Mon Guide
                  </Button>
                </a>
              </div>
            </div>

            {/* What's Inside */}
            <div className="bg-gradient-to-br from-navy/5 to-gold/5 rounded-3xl p-8 mb-8">
              <h3 className="font-serif text-2xl text-navy mb-6 text-center">
                Ce Que Contient Votre Guide
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
                Prochaines Étapes
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Téléchargez votre guide</h4>
                    <p className="text-navy/70">Cliquez sur le bouton ci-dessus pour accéder à votre fichier PDF</p>
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

            {/* Support Note */}
            <div className="mt-8 text-center">
              <p className="text-navy/60">
                Vous avez également reçu un email avec le lien de téléchargement. Conservez-le pour accéder à votre guide à tout moment.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}