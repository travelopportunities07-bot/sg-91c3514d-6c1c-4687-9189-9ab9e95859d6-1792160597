import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, Video, BookOpen, Award, Star } from "lucide-react";

export default function BusinessEnglishPackages() {
  return (
    <>
      <SEO
        title="Business English Packages - Professional Training Programs"
        description="Choose your Business English training package. Small group or 1-to-1 coaching with live sessions, unlimited resources, and certification preparation."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Business English Packages
              </h1>
              <p className="text-xl text-white/90">
                One-time payment · 2 months · Skool content + live sessions included
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-3xl font-heading font-bold text-navy mb-4 text-center">
                  Small Group Packages (3-6 people)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Learn with peers in interactive group sessions
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">A1</h3>
                      <p className="text-gray-600 mb-4">Beginner</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€129</span>
                      </div>
                      <p className="text-sm text-gray-500">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h live exchanges / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool A1 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h live group / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Francophone community</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">A2</h3>
                      <p className="text-gray-600 mb-4">Elementary</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€149</span>
                      </div>
                      <p className="text-sm text-gray-500">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h live exchanges / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool A2 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h live group / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Francophone community</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Popular
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">B1</h3>
                      <p className="text-gray-600 mb-4">Intermediate</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€179</span>
                      </div>
                      <p className="text-sm text-gray-500">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h live exchanges / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B1 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h live group / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Forum access + corrections</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-navy hover:bg-navy/90 text-white font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold transition-all">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">B2</h3>
                      <p className="text-gray-600 mb-4">Independent</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€179</span>
                      </div>
                      <p className="text-sm text-gray-500">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h live exchanges / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B2 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h live group / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>TOEFL/TOEIC prep included</span>
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
                  1-to-1 Packages (individual coaching)
                </h2>
                <p className="text-center text-gray-600 mb-12">
                  Personalized training with dedicated expert coach
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">A1</h3>
                      <p className="text-gray-600 mb-4">Beginner · 1-to-1</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€159</span>
                      </div>
                      <p className="text-sm text-gray-500">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h individual / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool A1 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h 1-to-1 video / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Personalized plan</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">A2</h3>
                      <p className="text-gray-600 mb-4">Elementary · 1-to-1</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€159</span>
                      </div>
                      <p className="text-sm text-gray-500">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h individual / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool A2 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h 1-to-1 video / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Personalized plan</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 shadow-xl border-2 border-gold relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-bold">
                        Popular
                      </span>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">B1</h3>
                      <p className="text-white/80 mb-4">Intermediate · 1-to-1</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€189</span>
                      </div>
                      <p className="text-sm text-white/70">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h individual / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B1 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h 1-to-1 video / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Written corrections included</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full">
                      Get This Package
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
                    <div className="mb-6">
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">B2</h3>
                      <p className="text-gray-600 mb-4">Independent · 1-to-1</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold text-navy">€199</span>
                      </div>
                      <p className="text-sm text-gray-500">one-shot (~2 months)</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>12h individual / month</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>Unlimited Skool B2 resources</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>3h 1-to-1 video / week</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span>TOEFL/TOEIC prep included</span>
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
                  Not Sure Which Package Is Right for You?
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Book a free 20-minute consultation to assess your current level and discuss your career goals.
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