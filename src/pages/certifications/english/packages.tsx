import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Calendar, Clock, Award, Shield, Zap } from "lucide-react";

export default function EnglishPackages() {
  return (
    <>
      <SEO
        title="English Course Packages - TOEFL & IELTS Pricing"
        description="Choose your English certification preparation package. Standard, Premium, or VIP options with flexible payment plans."
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
                  Choose Your Package
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  All packages include personalized coaching, weekly mock tests, and our score improvement guarantee
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-900">STANDARD</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">Standard Package</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-blue-600">€297</span>
                    </div>
                    <p className="text-gray-600">Perfect for focused learners</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">5 Weeks Program</p>
                        <p className="text-sm text-gray-600">Complete preparation cycle</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">3 Hours/Week</p>
                        <p className="text-sm text-gray-600">15 hours total coaching</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Weekly mock tests</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Study materials included</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Email support</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Get This Offer
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Secure Payment</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl border-4 border-gold transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    MOST POPULAR
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">PREMIUM</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">Premium Package</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-white">€397</span>
                    </div>
                    <p className="text-blue-100">Best value for serious students</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">6 Weeks Program</p>
                        <p className="text-sm text-blue-100">Extended preparation time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">3 Hours/Week</p>
                        <p className="text-sm text-blue-100">18 hours total coaching</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Weekly mock tests + bonus practice</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Premium study materials</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">Priority email & chat support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">1 extra coaching session</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Get This Offer
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="text-sm text-blue-100">Secure Payment</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-900">VIP</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">VIP Package</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-purple-600">€497</span>
                    </div>
                    <p className="text-gray-600">Ultimate preparation experience</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">8 Weeks Program</p>
                        <p className="text-sm text-gray-600">Maximum preparation time</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">3 Hours/Week</p>
                        <p className="text-sm text-gray-600">24 hours total coaching</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Unlimited mock tests</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">VIP study materials package</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">24/7 WhatsApp support</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">3 extra coaching sessions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">Score guarantee or money back</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      Get This Offer
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">Secure Payment</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-16">
                <div className="text-center mb-8">
                  <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                    Schedule a Consultation Call
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    Not sure which package is right for you? Book a free 30-minute consultation with our expert advisors.
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      Book Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <h3 className="text-2xl font-heading font-bold text-navy mb-6 text-center">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">What if I need to reschedule a session?</h4>
                    <p className="text-gray-600">You can reschedule up to 24 hours before the session at no charge.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">Can I upgrade my package later?</h4>
                    <p className="text-gray-600">Yes! You can upgrade anytime and pay only the difference.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">What's your refund policy?</h4>
                    <p className="text-gray-600">Full refund within first 7 days if you're not satisfied. No questions asked.</p>
                  </div>
                </div>
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