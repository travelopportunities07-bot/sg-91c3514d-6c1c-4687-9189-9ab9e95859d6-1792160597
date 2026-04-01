import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prêt à commencer votre parcours linguistique ? Notre équipe est à votre écoute
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Email</h3>
                  <p className="text-gray-600">contact@vocalisacademy.com</p>
                  <p className="text-gray-600">info@vocalisacademy.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Téléphone</h3>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                  <p className="text-gray-600">+237 6 XX XX XX XX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">Nos Bureaux</h3>
                  <p className="text-gray-600 mb-2">Paris, France</p>
                  <p className="text-gray-600">Douala, Cameroun</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Nom complet
                  </label>
                  <Input
                    placeholder="Votre nom"
                    className="h-12 rounded-xl border-gray-300 focus:border-gold focus:ring-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    className="h-12 rounded-xl border-gray-300 focus:border-gold focus:ring-gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows={5}
                    className="rounded-xl border-gray-300 focus:border-gold focus:ring-gold resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full py-6 text-base shadow-lg transform hover:scale-105 transition-all">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}