import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, TrendingUp, Globe, CheckCircle, ArrowRight, Users, Target, MessageSquare } from "lucide-react";

export default function BusinessEnglish() {
  return (
    <>
      <SEO
        title="Business English - Professional English for Career Success"
        description="Master Business English for international career opportunities. Financial vocabulary, presentations, negotiations, and professional communications."
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-navy to-navy-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-navy" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
                Business English Mastery
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                The Global Language of International Business Success
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
                    Your Competitive Advantage in Global Markets
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    In today's interconnected business world, English isn't just a language—it's the key to unlocking international opportunities, negotiating deals across borders, and leading global teams with confidence.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Our Business English programs transform professionals into confident communicators who can navigate boardrooms, close deals, and build lasting international partnerships.
                  </p>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/professional-services.png"
                    alt="Business English"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  The Challenge You're Facing
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Lost Opportunities</h4>
                      <p className="text-gray-600">
                        Missing out on promotions, international projects, and lucrative contracts because of language barriers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😰</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Presentation Anxiety</h4>
                      <p className="text-gray-600">
                        Struggling to deliver confident presentations and pitches to international stakeholders
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Email Uncertainty</h4>
                      <p className="text-gray-600">
                        Spending hours crafting professional emails, unsure if your tone and message are appropriate
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy mb-2">Negotiation Struggles</h4>
                      <p className="text-gray-600">
                        Unable to express your value proposition clearly during critical business negotiations
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
                      Master the exact terminology used in Finance, Marketing, HR, Legal, and Tech sectors
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Real-World Scenarios</h4>
                    <p className="text-white/80">
                      Practice with actual business cases: boardroom presentations, client meetings, contract negotiations
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Live Expert Coaching</h4>
                    <p className="text-white/80">
                      Weekly interactive sessions with business English specialists who've worked in Fortune 500 companies
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  Success Stories That Prove It Works
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👨‍💼</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Jean-Paul M.</h4>
                        <p className="text-sm text-gray-600">Marketing Director, Paris</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "After 8 weeks of Business English training, I confidently led a €2M pitch to our London office. The investment paid for itself 100x over."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Promoted to Regional Director</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-2xl">👩‍💼</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Fatima K.</h4>
                        <p className="text-sm text-gray-600">Financial Analyst, Dubai</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "The financial English module transformed how I present quarterly reports. Now I lead international investor calls with zero anxiety."
                    </p>
                    <div className="flex items-center gap-2 text-gold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">30% Salary Increase</span>
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
                  <Link href="/professional/business-english/packages">
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
                  <div className="text-4xl font-bold text-navy mb-2">95%</div>
                  <p className="text-gray-600">Career Advancement within 6 months</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">€45K</div>
                  <p className="text-gray-600">Average Salary Increase</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl font-bold text-navy mb-2">500+</div>
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