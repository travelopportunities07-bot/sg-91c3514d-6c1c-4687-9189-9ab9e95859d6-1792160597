import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CGV() {
  return (
    <>
      <SEO 
        title="Conditions Générales de Vente - Vocalis Academy"
        description="Conditions générales de vente des cours de langues en ligne de Vocalis Academy"
      />
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Conditions Générales de Vente</h1>
          <p className="text-xl text-gray-600 mb-12">Les présentes conditions régissent la vente de cours de langues en ligne</p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 1 - Objet</h2>
            <p className="text-gray-700 mb-4">
              Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de cours de langues en ligne par Vocalis Academy.
            </p>
            <p className="text-gray-700">
              Vocalis Academy propose des formations linguistiques en Français, Anglais, Allemand, Espagnol et Chinois, sous forme de cours particuliers en ligne, de préparation aux certifications internationales et de soutien scolaire.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 2 - Inscription</h2>
            
            <h3 className="text-lg font-semibold text-navy mb-3">Validation de l'inscription</h3>
            <p className="text-gray-700 mb-4">
              L'inscription est validée après confirmation du paiement ou réception de l'acompte.
            </p>

            <h3 className="text-lg font-semibold text-navy mb-3">Confirmation</h3>
            <p className="text-gray-700 mb-4">
              Vous recevrez un email de confirmation avec les détails de votre parcours et vos identifiants de connexion.
            </p>

            <h3 className="text-lg font-semibold text-navy mb-3">Premier cours</h3>
            <p className="text-gray-700">
              Le premier cours doit être programmé dans les 7 jours suivant la confirmation de l'inscription.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 3 - Tarifs et Modalités de paiement</h2>
            
            <h3 className="text-lg font-semibold text-navy mb-3">Modes de paiement acceptés</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Virement bancaire international</li>
              <li>PayPal</li>
              <li>Carte bancaire (via paiement sécurisé)</li>
              <li>Mobile Money (Afrique)</li>
            </ul>

            <h3 className="text-lg font-semibold text-navy mb-3">Échéancier</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Paiement comptant pour les cours ponctuels</li>
              <li>Acompte de 30% pour les forfaits, solde avant le premier cours du mois</li>
              <li>Paiement mensuel pour les forfaits longue durée</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 4 - Annulation et Report</h2>
            
            <h3 className="text-lg font-semibold text-navy mb-3">Règle d'annulation</h3>
            <p className="text-gray-700 mb-4">
              Tout cours annulé moins de 24 heures à l'avance est considéré comme dû et ne pourra pas être reporté.
            </p>

            <h3 className="text-lg font-semibold text-navy mb-3">Report de cours</h3>
            <p className="text-gray-700">
              Tout cours annulé plus de 24 heures à l'avance peut être reporté à une autre date, sous réserve de disponibilité de l'enseignant.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 5 - Absences</h2>
            <p className="text-gray-700">
              En cas d'absence non signalée, le cours est considéré comme effectué et ne sera pas reporté. En cas d'absence justifiée (maladie avec certificat médical), le cours sera reporté.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 6 - Responsabilité</h2>
            
            <h3 className="text-lg font-semibold text-navy mb-3">Limitation de responsabilité</h3>
            <p className="text-gray-700 mb-4">
              Vocalis Academy s'engage à fournir un enseignement de qualité mais ne peut être tenue responsable de l'échec du candidat aux examens officiels (DELF, DALF, TOEFL, TestDaF, HSK, etc.).
            </p>
            <p className="text-gray-700">
              Nos formations visent à vous préparer au mieux aux examens, mais le succès dépend de votre assiduité, de votre travail personnel et de vos capacités individuelles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 7 - Garanties</h2>
            <p className="text-gray-700">
              Vocalis Academy garantit un enseignement dispensé par des enseignants qualifiés et certifiés. Nous nous engageons à remplacer tout enseignant qui ne répondrait pas à vos attentes après évaluation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 8 - Force Majeure</h2>
            <p className="text-gray-700">
              Aucune des parties ne sera tenue responsable de l'inexécution de ses obligations si cette inexécution résulte d'un cas de force majeure tel que défini par la jurisprudence française.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 9 - Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble des supports pédagogiques (cours, exercices, vidéos, documents) reste la propriété exclusive de Vocalis Academy. Toute reproduction ou diffusion est interdite sans autorisation écrite.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Article 10 - Règlement des litiges</h2>
            <p className="text-gray-700 mb-4">
              Les présentes CGV sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            <p className="text-gray-700">
              Conformément à la réglementation, vous pouvez recourir à la médiation de la consommation.
            </p>
          </section>

          <div className="bg-navy text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Vous avez des questions sur nos conditions ?</h3>
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