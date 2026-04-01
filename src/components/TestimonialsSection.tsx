import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mamadou Diop",
      status: "Ingénieur Civil (Dakar, Sénégal)",
      text: "Grâce à Vocalis Academy, j'ai pu atteindre le niveau B2 en Allemand en seulement 6 mois. L'accompagnement personnalisé était exceptionnel. Aujourd'hui, je travaille à Berlin. Je recommande à 100% !",
      rating: 4
    },
    {
      name: "Léa Dubois",
      status: "Étudiante en Droit (Lyon, France)",
      text: "Les cours de TOEFL étaient parfaits. J'ai obtenu un score bien supérieur à mes attentes, ce qui m'a ouvert les portes d'un Master aux États-Unis. Merci à toute l'équipe de Vocalis.",
      rating: 4
    },
    {
      name: "Aïsha Kone",
      status: "Maman de Kevin, 12 ans (Abidjan, Côte d'Ivoire)",
      text: "Le soutien scolaire en Anglais pour mon fils a fait des miracles. Ses notes ont explosé et il a repris confiance en lui. Le professeur était très pédagogue et patient.",
      rating: 5
    },
    {
      name: "Thomas Müller",
      status: "Étudiant en Médecine (Munich, Allemagne)",
      text: "J'avais besoin de maîtriser le Français pour un stage à Paris. Vocalis m'a aidé à perfectionner ma prononciation et ma grammaire de manière très professionnelle. Une expérience très enrichissante.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Ce Que Disent Nos <span className="text-gold">Étudiants</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont transformé leur parcours linguistique avec Vocalis Academy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 relative"
            >
              <div className="absolute top-6 right-6 text-gold/20">
                <Quote size={48} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < testimonial.rating ? "text-gold" : "text-slate-200"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-slate-700 text-base leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-slate-100 pt-4">
                  <h4 className="font-bold text-navy text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg">
            Rejoignez des milliers d'étudiants qui ont fait confiance à{" "}
            <span className="font-semibold text-navy">Vocalis Academy</span>
          </p>
        </div>
      </div>
    </section>
  );
}