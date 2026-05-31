import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle, TrendingUp, Users, Star, Shield, Clock, Target } from "lucide-react";

export default function EnglishCertification() {
  return (
    <>
      <SEO
        title="English Certification Programs - TOEFL & IELTS Preparation"
        description="Master English with our intensive TOEFL and IELTS preparation programs. Expert coaching, proven methods, guaranteed results."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                <span className="text-3xl">🇬🇧</span>
                <span className="text-white font-semibold">English Certification Programs</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                Master English.<br/>Open Global Doors.
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Your passport to international universities, career advancement, and global opportunities starts here.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="#packages">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-full px-10 py-7 text-lg shadow-2xl transform hover:scale-105 transition-all">
                    View Course Packages
                  </Button>
                </Link>
                <Link href="#testimonials">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-full px-10 py-7 text-lg backdrop-blur-sm">
                    Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                  The Challenge You're Facing
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We understand your frustrations with English certification exams
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">😰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Test Anxiety</h3>
                  <p className="text-gray-700">
                    You freeze during speaking sections. Time pressure overwhelms you. Mock tests feel impossible.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">📉</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Plateau Effect</h3>
                  <p className="text-gray-700">
                    You're stuck at the same score. General English classes don't help. You don't know what's holding you back.
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Deadline Pressure</h3>
                  <p className="text-gray-700">
                    University applications closing. Visa requirements urgent. You need results NOW, not eventually.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Our Proven Solution
                  </h2>
                  <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    A systematic approach that transforms test-takers into confident high-scorers
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Diagnostic Precision</h3>
                        <p className="text-blue-100">
                          We pinpoint your exact weaknesses in the first session. No more guessing what to study.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Score-Focused Training</h3>
                        <p className="text-blue-100">
                          Every lesson targets exam techniques, not just language. Learn exactly what examiners want.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Real Exam Conditions</h3>
                        <p className="text-blue-100">
                          Weekly timed mock tests with detailed feedback. You'll walk into the real exam already experienced.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Rapid Results</h3>
                        <p className="text-blue-100">
                          Most students see 10-15 point improvement within 5 weeks. We optimize your study time ruthlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    Who This Program Is For
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">University Applicants</h3>
                    <p className="text-gray-600">
                      Need TOEFL 90+ or IELTS 7.0+ for admission to international programs
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Career Professionals</h3>
                    <p className="text-gray-600">
                      Require certification for job promotions, international transfers, or immigration
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">Repeat Test-Takers</h3>
                    <p className="text-gray-600">
                      Frustrated with plateau scores and seeking expert guidance to break through
                    </p>
                  </div>
                </div>
              </div>

              <div id="testimonials" className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    Real Results from Real Students
                  </h2>
                  <p className="text-xl text-gray-600">
                    Join hundreds who achieved their target scores
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "I was stuck at TOEFL 75 for months. After 6 weeks with Vocalis Academy, I scored 102! The speaking strategies alone boosted me 8 points."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="font-bold text-blue-600">AM</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">Aminata M.</p>
                        <p className="text-sm text-gray-600">TOEFL 75 → 102 | Now at MIT</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">
                      "The mock tests were exactly like the real IELTS. I went in confident and got 7.5 overall. Best investment in my career."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="font-bold text-blue-600">JK</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">Jean K.</p>
                        <p className="text-sm text-gray-600">IELTS 6.0 → 7.5 | Canada PR Approved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-3xl p-12 text-navy mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    Limited-Time Offer
                  </h2>
                  <p className="text-xl text-navy/80 max-w-3xl mx-auto">
                    Start this month and receive exclusive bonuses worth €200
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Free Diagnostic Test</h3>
                    <p className="text-sm text-gray-700">Complete TOEFL/IELTS simulation with detailed report (€80 value)</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Premium Study Materials</h3>
                    <p className="text-sm text-gray-700">Official practice tests and exclusive templates (€70 value)</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Lifetime Email Support</h3>
                    <p className="text-sm text-gray-700">Get answers to questions even after program ends (€50 value)</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="#packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      Claim Your Bonuses Now →
                    </Button>
                  </Link>
                  <p className="text-sm text-navy/70 mt-4">⏰ Offer expires in 48 hours</p>
                </div>
              </div>

              <div id="packages" className="text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                  Choose Your Success Path
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                  All packages include personalized coaching, weekly mock tests, and score guarantee
                </p>
                <Link href="/certifications/english/packages">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                    View Course Packages →
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