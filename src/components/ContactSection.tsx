import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/consultation.png"
                alt="Équipe Vocalis Academy en consultation"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-navy mb-2">Téléphone</h3>
                  <p className="text-lg text-gray-700 font-medium">+44 7537 10 6060</p>
                  <p className="text-sm text-gray-500 mt-1">(uniquement joignable via WhatsApp)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-navy mb-2">Email</h3>
                  <a 
                    href="mailto:contact@vocalis-academy.com"
                    className="text-lg text-gray-700 font-medium hover:text-gold transition-colors"
                  >
                    contact@vocalis-academy.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-navy mb-2">Siège Social</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    71-75, Shelton Street, Covent Garden,<br />
                    WC2H 9JQ, Londres, Royaume-Uni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}