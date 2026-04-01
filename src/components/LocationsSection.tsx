import Image from "next/image";
import { Search } from "lucide-react";

export function LocationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            
            <Image
              src="/carousel-image.jpg"
              alt="Vocalis Academy team in Paris office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-20 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span className="text-sm font-medium uppercase tracking-wider">3 / 3</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-4">
                Paris · Berlin · Londres · Shanghai
              </h2>
              
              <p className="text-lg text-white/90 max-w-2xl">
                Ouvrez les portes du monde avec Vocalis Academy
              </p>
            </div>
            
            <button className="absolute top-8 left-8 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}