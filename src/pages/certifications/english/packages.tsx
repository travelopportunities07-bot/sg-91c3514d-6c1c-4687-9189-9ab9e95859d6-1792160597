import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Shield } from "lucide-react";

export default function EnglishPackages() {
  return (
    <>
      <SEO
        title="English Packages - TOEFL & IELTS Certification"
        description="English courses A1, A2, B1, B2 in small groups or 1-on-1. Unlimited Skool resources and weekly live sessions."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-blue-900 font-semibold">English Certification</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
                  Our Training Packages
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  One-time payment · 2-month duration · Skool resources + live sessions included
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Small Group Package (3–6 people)
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-blue-900">A1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Beginner</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-blue-600">€129</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h exchange / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unlimited Skool A1 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live group / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Francophone community</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-blue-900">A2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Elementary</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-blue-600">€149</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h exchange / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unlimited Skool A2 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live group / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Francophone community</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-blue-900">B1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Intermediate</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-blue-600">€179</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h exchange / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unlimited Skool B1 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live group / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Forum access + corrections</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-blue-900">B2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Independent</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-blue-600">€179</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h exchange / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unlimited Skool B2 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h live group / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">TOEFL/IELTS prep</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  1-on-1 Package (Individual Course)
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-indigo-900">A1 · 1-on-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Beginner</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-indigo-600">€159</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h individual / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unlimited Skool A1 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h video 1-on-1 / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Personalized plan</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-indigo-900">A2 · 1-on-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Elementary</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-indigo-600">€159</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h individual / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unlimited Skool A2 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h video 1-on-1 / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Personalized plan</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-6 shadow-2xl border-4 border-gold transform scale-105 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                      POPULAR
                    </div>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-white">B1 · 1-on-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">Intermediate</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€189</span>
                      </div>
                      <p className="text-sm text-blue-100">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">12h individual / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">Unlimited Skool B1 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">3h video 1-on-1 / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">Written corrections included</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-white hover:bg-gray-100 text-indigo-900 font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-indigo-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-indigo-900">B2 · 1-on-1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">Independent</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-indigo-600">€199</span>
                      </div>
                      <p className="text-sm text-gray-600">one-shot · ~2 months</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">12h individual / month</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">Unlimited Skool B2 resources</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">3h video 1-on-1 / week</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">TOEFL/IELTS prep</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        Get This Offer
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 text-center">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  Secure Payment & Satisfaction Guarantee
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  All our payments are secure. Satisfaction guaranteed or money back within 7 days.
                </p>
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