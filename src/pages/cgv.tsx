import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FileText, CheckCircle2 } from "lucide-react";

export default function CGV() {
  return (
    <>
      <SEO 
        title="Conditions Générales de Vente - PowerLingua"
        description="Conditions générales de vente des cours de langues en ligne de PowerLingua"
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
              <FileText className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Conditions Générales de Vente</h1>
            <p className="text-xl text-gray-600">Les présentes conditions régissent la vente de cours de langues en ligne</p>
          </div>
          
          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">1</span>
              Article 1 - Objet
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente de cours de langues en ligne par PowerLingua.
            </p>
            <p className="text-gray-700 leading-relaxed">
              PowerLingua propose des formations linguistiques en Français, Anglais, Allemand, Espagnol et Chinois, sous forme de cours particuliers en ligne, de préparation aux certifications internationales et de soutien scolaire.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">2</span>
              Article 2 - Inscription
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Validation de l'inscription</h3>
                  <p className="text-gray-700">
                    L'inscription est validée après confirmation du paiement ou réception de l'acompte.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Confirmation</h3>
                  <p className="text-gray-700">
                    Vous recevrez un email de confirmation avec les détails de votre parcours et vos identifiants de connexion.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Premier cours</h3>
                  <p className="text-gray-700">
                    Le premier cours doit être programmé dans les 7 jours suivant la confirmation de l'inscription.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">3</span>
              Article 3 - Tarifs et Modalités de paiement
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">Modes de paiement acceptés</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    Virement bancaire international
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    PayPal
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    Carte bancaire (via paiement sécurisé)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    Mobile Money (Afrique)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">Échéancier</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    Paiement comptant pour les cours ponctuels
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    Acompte de 30% pour les forfaits, solde avant le premier cours du mois
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    Paiement mensuel pour les forfaits longue durée
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">4</span>
              Article 4 - Annulation et Report
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-lg font-semibold text-navy mb-2">Règle d'annulation</h3>
                <p className="text-gray-700">
                  Tout cours annulé moins de 24 heures à l'avance est considéré comme dû et ne pourra pas être reporté.
                </p>
              </div>

              <div className="border-l-4 border-navy/20 pl-6">
                <h3 className="text-lg font-semibold text-navy mb-2">Report de cours</h3>
                <p className="text-gray-700">
                  Tout cours annulé plus de 24 heures à l'avance peut être reporté à une autre date, sous réserve de disponibilité de l'enseignant.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">5</span>
              Article 5 - Absences
            </h2>
            <p className="text-gray-700 leading-relaxed">
              En cas d'absence non signalée, le cours est considéré comme effectué et ne sera pas reporté. En cas d'absence justifiée (maladie avec certificat médical), le cours sera reporté.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">6</span>
              Article 6 - Responsabilité
            </h2>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-4">
              <h3 className="text-lg font-semibold text-navy mb-3">Limitation de responsabilité</h3>
              <p className="text-gray-700 mb-3">
                PowerLingua s'engage à fournir un enseignement de qualité mais ne peut être tenue responsable de l'échec du candidat aux examens officiels (DELF, DALF, TOEFL, TestDaF, HSK, etc.).
              </p>
              <p className="text-gray-700">
                Nos formations visent à vous préparer au mieux aux examens, mais le succès dépend de votre assiduité, de votre travail personnel et de vos capacités individuelles.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">7</span>
              Article 7 - Garanties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              PowerLingua garantit un enseignement dispensé par des enseignants qualifiés et certifiés. Nous nous engageons à remplacer tout enseignant qui ne répondrait pas à vos attentes après évaluation.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">8</span>
              Article 8 - Force Majeure
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Aucune des parties ne sera tenue responsable de l'inexécution de ses obligations si cette inexécution résulte d'un cas de force majeure tel que défini par la jurisprudence française.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">9</span>
              Article 9 - Propriété intellectuelle
            </h2>
            <p className="text-gray-700 leading-relaxed">
              L'ensemble des supports pédagogiques (cours, exercices, vidéos, documents) reste la propriété exclusive de PowerLingua. Toute reproduction ou diffusion est interdite sans autorisation écrite.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-gold/10 rounded-full text-gold text-sm font-bold">10</span>
              Article 10 - Règlement des litiges
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les présentes CGV sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Conformément à la réglementation, vous pouvez recourir à la médiation de la consommation.
            </p>
          </section>

          <div className="bg-navy text-white p-8 rounded-2xl text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Vous avez des questions sur nos conditions ?</h3>
            <a 
              href="/contact" 
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