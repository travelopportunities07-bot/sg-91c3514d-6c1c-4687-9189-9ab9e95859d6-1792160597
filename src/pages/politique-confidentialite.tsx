import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO 
        title="Politique de Confidentialité - Vocalis Academy"
        description="Notre politique de confidentialité et protection des données personnelles (RGPD)"
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
              <Shield className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Politique de Confidentialité</h1>
            <p className="text-xl text-gray-600">Comment nous protégeons vos données personnelles (RGPD)</p>
          </div>
          
          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Nous prenons la protection de vos données personnelles très au sérieux. Les données collectées sur ce site sont traitées de manière confidentielle et conformément aux dispositions légales du RGPD (Règlement Général sur la Protection des Données).
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-gold" />
              Collecte des données sur notre site
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Formulaires (Tally)</h3>
                <p className="text-gray-700 mb-4">
                  Lorsque vous remplissez un formulaire de contact ou d'inscription, nous collectons :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Votre nom</li>
                  <li>Votre adresse email</li>
                  <li>Les détails de votre demande</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Ces données sont utilisées uniquement pour traiter votre inscription et vous répondre.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Traitement (Make.com)</h3>
                <p className="text-gray-700">
                  Vos données transitent par un outil d'automatisation sécurisé (Make.com) pour être organisées dans notre base de données interne. Ce traitement est entièrement sécurisé et conforme aux standards RGPD.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Stockage (Google Sheets)</h3>
                <p className="text-gray-700">
                  Vos données sont stockées sur des serveurs sécurisés certifiés conformes au RGPD. L'accès à ces données est restreint et protégé.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-gold" />
              Base légale du traitement
            </h2>
            <p className="text-gray-700 mb-4">Le traitement de vos données personnelles repose sur :</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-navy">Votre consentement :</strong> vous avez accepté de fournir vos données via nos formulaires</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-navy">L'exécution d'un contrat :</strong> pour la fourniture des services linguistiques que vous avez demandés</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span><strong className="text-navy">Notre intérêt légitime :</strong> pour améliorer nos services et répondre à vos demandes</span>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-gold" />
              Vos droits
            </h2>
            <p className="text-gray-700 mb-6">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-semibold text-navy mb-2">Droit d'accès</h3>
                <p className="text-gray-700">
                  Vous pouvez obtenir des informations sur l'origine, le destinataire et la finalité de vos données personnelles stockées.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-semibold text-navy mb-2">Droit de rectification</h3>
                <p className="text-gray-700">
                  Vous pouvez demander la correction de données inexactes ou incomplètes.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-semibold text-navy mb-2">Droit à l'effacement</h3>
                <p className="text-gray-700">
                  Vous pouvez demander la suppression de vos données dans certains cas.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-semibold text-navy mb-2">Droit d'opposition</h3>
                <p className="text-gray-700">
                  Vous pouvez vous opposer au traitement de vos données.
                </p>
              </div>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold p-6 mt-8 rounded-r-xl">
              <p className="text-navy font-semibold flex items-start gap-3">
                <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Important : Ces droits peuvent être exercés à tout moment et gratuitement en nous contactant à l'adresse : <a href="mailto:contact@vocalis-academy.com" className="text-gold hover:underline">contact@vocalis-academy.com</a></span>
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6">Cookies</h2>
            <p className="text-gray-700">
              Ce site n'utilise pas de cookies de tracking ou de publicité. Nous utilisons uniquement des cookies techniques nécessaires au bon fonctionnement du site.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6">Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à :
            </p>
            <p className="text-gold font-semibold text-lg mb-6">
              <a href="mailto:contact@vocalis-academy.com" className="hover:underline">contact@vocalis-academy.com</a>
            </p>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <p className="text-gray-600">
                Cette politique de confidentialité peut être mise à jour à tout moment. La dernière date de mise à jour est indiquée ci-dessous.
              </p>
              <p className="text-gray-600 mt-3">
                <strong className="text-navy">Dernière mise à jour :</strong> Mars 2026
              </p>
            </div>
          </section>

          <div className="bg-navy text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Vous avez des questions concernant vos données ?</h3>
            <a 
              href="/#contact" 
              className="inline-block bg-gold hover:bg-gold/90 text-navy px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}