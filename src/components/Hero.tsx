import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8 fade-in-up stagger-1">
            <div className="w-2 h-2 rounded-full bg-gold"></div>
            <span className="text-sm font-medium text-navy uppercase tracking-wider">VOCALIS ACADEMY</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-navy mb-6 leading-tight fade-in-up stagger-2">
            Maîtrisez le Français, l&apos;Anglais, l&apos;Allemand et le Chinois{" "}
            <span className="text-gold italic">avec des Experts</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-text max-w-3xl mx-auto mb-10 leading-relaxed fade-in-up stagger-3">
            Accompagnement personnalisé pour écoliers, étudiants et professionnels en Afrique et en Europe.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up stagger-4">
            <Button size="lg" className="bg-navy hover:bg-navy/90 text-white rounded-full px-8 py-6 text-base group">
              Réserver un cours d&apos;essai
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-navy text-navy hover:bg-navy hover:text-white">
              Découvrir nos méthodes
            </Button>
          </div>
          
          <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.jpg"
              alt="Students learning at Vocalis Academy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}