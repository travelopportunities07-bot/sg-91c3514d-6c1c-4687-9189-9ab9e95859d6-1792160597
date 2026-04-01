import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO 
        title="Politique de Confidentialité - Vocalis Academy"
        description="Notre politique de confidentialité et protection des données personnelles (RGPD)"
      />
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Politique de Confidentialité</h1>
          <p className="text-xl text-gray-600 mb-12">Comment nous protégeons vos données personnelles (RGPD)</p>
          
          <section className="mb-12">
            <p className="text-gray-700 mb-6">
              Nous prenons la protection de vos données personnelles très au sérieux. Les données collectées sur ce site sont traitées de manière confidentielle et conformément aux dispositions légales du RGPD (Règlement Général sur la Protection des Données).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Collecte des données sur notre site</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3">Formulaires (Tally)</h3>
            <p className="text-gray-700 mb-4">
              Lorsque vous remplissez un formulaire de contact ou d'inscription, nous collectons :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
              <li>Votre nom</li>
              <li>Votre adresse email</li>
              <li>Les détails de votre demande</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Ces données sont utilisées uniquement pour traiter votre inscription et vous répondre.
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3">Traitement (Make.com)</h3>
            <p className="text-gray-700 mb-6">
              Vos données transitent par un outil d'automatisation sécurisé (Make.com) pour être organisées dans notre base de données interne. Ce traitement est entièrement sécurisé et conforme aux standards RGPD.
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3">Stockage (Google Sheets)</h3>
            <p className="text-gray-700 mb-6">
              Vos données sont stockées sur des serveurs sécurisés certifiés conformes au RGPD. L'accès à ces données est restreint et protégé.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Base légale du traitement</h2>
            <p className="text-gray-700 mb-4">Le traitement de vos données personnelles repose sur :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Votre consentement :</strong> vous avez accepté de fournir vos données via nos formulaires</li>
              <li><strong>L'exécution d'un contrat :</strong> pour la fourniture des services linguistiques que vous avez demandés</li>
              <li><strong>Notre intérêt légitime :</strong> pour améliorer nos services et répondre à vos demandes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Vos droits</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Droit d'accès</h3>
                <p className="text-gray-700">
                  Vous pouvez obtenir des informations sur l'origine, le destinataire et la finalité de vos données personnelles stockées.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Droit de rectification</h3>
                <p className="text-gray-700">
                  Vous pouvez demander la correction de données inexactes ou incomplètes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Droit à l'effacement</h3>
                <p className="text-gray-700">
                  Vous pouvez demander la suppression de vos données dans certains cas.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Droit d'opposition</h3>
                <p className="text-gray-700">
                  Vous pouvez vous opposer au traitement de vos données.
                </p>
              </div>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold p-6 mt-6">
              <p className="text-navy font-semibold">
                Important : Ces droits peuvent être exercés à tout moment et gratuitement en nous contactant à l'adresse : contact@vocalis-academy.com
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Cookies</h2>
            <p className="text-gray-700">
              Ce site n'utilise pas de cookies de tracking ou de publicité. Nous utilisons uniquement des cookies techniques nécessaires au bon fonctionnement du site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Contact</h2>
            <p className="text-gray-700 mb-4">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à :
            </p>
            <p className="text-gold font-semibold text-lg">contact@vocalis-academy.com</p>
            <p className="text-gray-600 mt-6">
              Cette politique de confidentialité peut être mise à jour à tout moment. La dernière date de mise à jour est indiquée ci-dessous.
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Dernière mise à jour :</strong> Mars 2026
            </p>
          </section>

          <div className="bg-navy text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Vous avez des questions concernant vos données ?</h3>
            <Link href="/#contact">
              <Button variant="secondary" size="lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}