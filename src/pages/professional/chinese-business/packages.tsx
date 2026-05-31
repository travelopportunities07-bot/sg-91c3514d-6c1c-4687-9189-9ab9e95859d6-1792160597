import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

export default function ChineseBusinessPackages() {
  return (
    <>
      <SEO
        title="Business Chinese Packages - Professional Training Programs"
        description="Choose your Business Chinese package. Small group or 1-to-1 coaching with live sessions, unlimited resources, and certification preparation."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                商务汉语 Business Chinese Packages
              </h1>
              <p className="text-xl text-white/90">
                One-time payment · 2 months duration · Skool content + live sessions included
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Small Group Package (4–6 people)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Learn with peers in interactive sessions
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Popular
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">B1 Pro</h3>
                      <p className="text-gray-600 mb-2">Business Chinese Basics</p>
                      <p className="text-sm text-gray-500 mb-4">Intermediate level</p>
                      <p className="text-xs text-gray-400 mb-4">Meetings, business emails, simple presentations</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€179</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">one-time payment · 2 months</p>
                      <p className="text-xs text-gray-400 line-through">€350 market price</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h live group sessions / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B1 Pro resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Meeting & negotiation vocabulary</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Training certificate</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Premium
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">B2 Pro</h3>
                      <p className="text-white/80 mb-2">Advanced Business Chinese</p>
                      <p className="text-sm text-white/70 mb-4">Independent level</p>
                      <p className="text-xs text-white/60 mb-4">Negotiation, reports, international conferences</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€297</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">one-time payment · 2 months</p>
                      <p className="text-xs text-white/50 line-through">€450 market price</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h live group sessions / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B2 Pro resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Meeting & pitch simulations</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>HSK 5 Business prep included</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">C1 Pro</h3>
                      <p className="text-gray-600 mb-2">Expert Business Chinese</p>
                      <p className="text-sm text-gray-500 mb-4">Leadership level</p>
                      <p className="text-xs text-gray-400 mb-4">Leadership, advanced writing, international representation</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€299</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">one-time payment · 2 months</p>
                      <p className="text-xs text-gray-400 line-through">€600 market price</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h live group sessions / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool C1 Pro resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Strategic communication coaching</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Professional certificate</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  1-to-1 Package (individual coaching)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Personalized training with dedicated expert coach
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-navy text-white px-4 py-1 rounded-full text-sm font-bold">
                        Best Value
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">B1 Pro · 1-to-1</h3>
                      <p className="text-gray-600 mb-4">Business Chinese Basics — Individual</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€349</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">one-time payment · 2 months</p>
                      <p className="text-xs text-gray-400 line-through">€1,100 market price</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h dedicated 1-to-1 video / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Custom-tailored plan</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B1 Pro access</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Top
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">B2 Pro · 1-to-1</h3>
                      <p className="text-white/80 mb-4">Advanced Business Chinese — Individual</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€449</span>
                      </div>
                      <p className="text-sm text-white/70 mb-1">one-time payment · 2 months</p>
                      <p className="text-xs text-white/50 line-through">€1,350 market price</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h dedicated 1-to-1 video / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Simulations & written corrections</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B2 Pro access</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">C1 Pro · 1-to-1</h3>
                      <p className="text-gray-600 mb-4">Expert Business Chinese — Individual</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€699</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">one-time payment · 2 months</p>
                      <p className="text-xs text-gray-400 line-through">€1,650 market price</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h dedicated 1-to-1 video / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Coaching & personalized feedback</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool C1 Pro access</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-white rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Not sure which package to choose?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Book a free 20-minute consultation to assess your current level and discuss your professional goals.
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-full px-10 py-6 text-lg">
                    Schedule Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}