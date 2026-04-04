import Image from "next/image";

export function ExpertiseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-gold/10 border-2 border-gold/30 rounded-full text-gold font-semibold text-sm tracking-wider mb-6">
              VOCALIS ACADEMY
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6">
              Notre Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment nos méthodes éprouvées et notre équipe d'experts vous accompagnent vers la maîtrise linguistique
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Méthodes Éprouvées
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Des programmes d'apprentissage basés sur les dernières recherches en linguistique appliquée, adaptés à votre niveau et vos objectifs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Experts Qualifiés
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Une équipe internationale de professeurs natifs certifiés, passionnés par l'enseignement et votre réussite.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Présence Internationale
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Des bureaux à Paris, Berlin, Londres et Shanghai pour vous accompagner partout dans le monde.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/nos_services.png"
                  alt="Notre expertise - Vocalis Academy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold text-navy px-8 py-6 rounded-2xl shadow-xl">
                <p className="text-4xl font-heading font-bold mb-1">10,000+</p>
                <p className="text-sm font-semibold">Étudiants Satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}