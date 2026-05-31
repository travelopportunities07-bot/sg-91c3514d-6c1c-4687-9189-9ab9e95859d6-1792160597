import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, TrendingUp, Globe, CheckCircle, ArrowRight, Users, Target, MessageSquare } from "lucide-react";

export default function ChineseBusiness() {
  return (
    <>
      <SEO
        title="商务汉语 - Business Chinese for Career Success"
        description="Master Business Chinese for career opportunities in China and Asia. Business vocabulary, negotiations, presentations, and professional communications in Mandarin."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                商务汉语 Business Chinese
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Your Gateway to China's Business World
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-heading font-bold text-navy mb-6">
                    Unlock China's Economic Powerhouse
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    China is the world's second-largest economy and a critical business partner for companies worldwide. Business Chinese is your competitive advantage in manufacturing, tech, finance, and international trade.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our programs transform basic Mandarin into professional fluency that opens doors to partnerships, negotiations, and career advancement across Asia.
                  </p>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-services.png"
                    alt="Business Chinese"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  The Challenges You Face
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Lost Deals</h4>
                      <p className="text-gray-600">
                        Missing crucial business opportunities in China due to language and cultural barriers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Meeting Anxiety</h4>
                      <p className="text-gray-600">
                        Struggling to understand business discussions and cultural nuances during negotiations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Communication Gaps</h4>
                      <p className="text-gray-600">
                        Relying on translators for all business correspondence, slowing down operations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Cultural Missteps</h4>
                      <p className="text-gray-600">
                        Missing business etiquette cues and relationship-building (关系) opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-12 text-white mb-16">
                <h3 className="text-3xl font-heading font-bold mb-10 text-center">
                  Our Proven Solution
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Industry-Specific Vocabulary</h4>
                    <p className="text-white/80">
                      Master business terminology for manufacturing, tech, finance, and trade sectors
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Real Business Scenarios</h4>
                    <p className="text-white/80">
                      Practice with actual cases: factory visits, contract negotiations, business dinners
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Native Expert Coaching</h4>
                    <p className="text-white/80">
                      Weekly sessions with business Chinese specialists who've worked in Chinese corporations
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Success Stories
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👨‍💼</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Marcus T.</h4>
                        <p className="text-sm text-gray-600">Supply Chain Manager, Germany</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "After 8 weeks of Business Chinese training, I successfully negotiated a ¥5M contract directly with our Shenzhen supplier. No translator needed."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">15% Cost Reduction Achieved</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👩‍💼</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Sarah L.</h4>
                        <p className="text-sm text-gray-600">Tech Sales Director, Singapore</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "The B2 program helped me build relationships (关系) with Chinese enterprise clients. My sales in Greater China increased by 200%."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Regional Promotion</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl p-12 text-center mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-6">
                  Limited-Time Professional Investment
                </h3>
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Join our next cohort starting this month. Only 6 spots available per group to ensure personalized attention and maximum results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/professional/chinese-business/packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-semibold rounded-full px-12 py-6 text-lg shadow-xl group">
                      View All Packages
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline" className="border-2 border-navy text-navy font-semibold rounded-full px-12 py-6 text-lg">
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">88%</div>
                  <p className="text-gray-600">Career Growth within 6 months</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">$52K</div>
                  <p className="text-gray-600">Average Salary Increase</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">350+</div>
                  <p className="text-gray-600">Professionals Trained</p>
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