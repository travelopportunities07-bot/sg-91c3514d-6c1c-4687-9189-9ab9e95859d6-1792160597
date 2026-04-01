import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "Quelles langues enseignez-vous chez Vocalis Academy ?",
      answer: "Nous proposons des cours de Français, Anglais, Allemand, Espagnol et Chinois (Mandarin). Chaque programme est conçu pour tous les niveaux, du débutant (A1) au niveau avancé (C2), avec des formateurs natifs ou bilingues certifiés."
    },
    {
      question: "Comment se déroulent les cours en ligne ?",
      answer: "Nos cours se déroulent via des plateformes de visioconférence sécurisées (Zoom, Google Meet). Vous recevez des supports pédagogiques avant chaque session, et les cours sont interactifs avec exercices en temps réel, correction immédiate et enregistrements disponibles pour révision."
    },
    {
      question: "Proposez-vous un cours d'essai gratuit ?",
      answer: "Oui ! Nous offrons une séance d'évaluation gratuite de 30 minutes pour déterminer votre niveau actuel, comprendre vos objectifs et vous présenter notre méthode d'enseignement. C'est sans engagement et vous permet de rencontrer votre futur professeur."
    },
    {
      question: "Quelle est la durée et la fréquence des cours ?",
      answer: "Nos cours sont flexibles : sessions de 60 ou 90 minutes, 1 à 5 fois par semaine selon votre disponibilité. Vous choisissez votre planning et pouvez l'ajuster en fonction de vos contraintes professionnelles ou scolaires."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon la formule choisie (cours particuliers, forfaits mensuels, préparation aux certifications). Nous proposons des packages adaptés à tous les budgets, avec possibilité de paiement mensuel. Contactez-nous pour un devis personnalisé gratuit."
    },
    {
      question: "Puis-je préparer une certification internationale avec vous ?",
      answer: "Absolument ! Nous sommes spécialisés dans la préparation aux certifications : TOEFL, IELTS, DELF/DALF, TestDaF, Goethe-Zertifikat, DELE, HSK. Nos formateurs connaissent parfaitement les exigences de chaque test et vous préparent avec des examens blancs réguliers."
    },
    {
      question: "Comment puis-je payer mes cours ?",
      answer: "Nous acceptons plusieurs modes de paiement : virement bancaire international, PayPal, carte bancaire (paiement sécurisé) et Mobile Money pour nos étudiants en Afrique. Vous pouvez payer à la séance, au forfait mensuel ou trimestriel."
    },
    {
      question: "Puis-je changer de professeur si je ne suis pas satisfait ?",
      answer: "Oui, votre satisfaction est notre priorité. Si le courant ne passe pas avec votre professeur, nous vous proposons immédiatement un autre formateur mieux adapté à votre profil et à vos attentes, sans frais supplémentaires."
    },
    {
      question: "Proposez-vous des cours pour les enfants ?",
      answer: "Oui ! Nous proposons du soutien scolaire pour les élèves du primaire au lycée, avec des formateurs spécialisés dans la pédagogie enfantine. Les cours sont ludiques, interactifs et adaptés au programme scolaire de chaque pays (France, Afrique, Europe)."
    },
    {
      question: "Avez-vous des cours en groupe ou uniquement des cours particuliers ?",
      answer: "Nous proposons principalement des cours particuliers pour un accompagnement 100% personnalisé. Toutefois, nous organisons également des mini-groupes (2-4 personnes) pour ceux qui préfèrent apprendre en petit comité, à tarif réduit."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold mb-6">
              <HelpCircle className="w-8 h-8 text-navy" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos formations linguistiques
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-2xl px-6 data-[state=open]:border-gold transition-all"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-navy text-lg pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous avez d'autres questions ?
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold/80 transition-colors"
            >
              Contactez notre équipe
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}