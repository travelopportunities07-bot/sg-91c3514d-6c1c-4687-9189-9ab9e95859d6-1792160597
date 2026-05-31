import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Calendar, Clock, Award, Shield, Zap } from "lucide-react";

export default function ChinesePackages() {
  return (
    <>
      <SEO
        title="中文课程包 - HSK价格"
        description="选择您的中文认证备考课程包。标准版、高级版或VIP版，灵活付款计划。"
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-rose-50 to-red-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-rose-100 px-6 py-3 rounded-full mb-6">
                  <span className="text-2xl">🇨🇳</span>
                  <span className="text-rose-900 font-semibold">中文认证</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy mb-6">
                  选择您的课程包
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  所有课程包都包括个性化辅导、每周模拟测试和我们的成绩提升保证
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-rose-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
                      <Clock className="w-4 h-4 text-rose-600" />
                      <span className="text-sm font-semibold text-rose-900">标准版</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">标准课程包</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-rose-600">297€</span>
                    </div>
                    <p className="text-gray-600">适合专注的学习者</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">5周课程</p>
                        <p className="text-sm text-gray-600">完整备考周期</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">每周3小时</p>
                        <p className="text-sm text-gray-600">总共15小时辅导</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">每周模拟测试</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">包含学习材料</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">电邮支持</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      选择此优惠
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">安全支付</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-600 to-red-700 rounded-3xl p-8 shadow-2xl border-4 border-gold transform scale-105 relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                    最受欢迎
                  </div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <Award className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold text-white">高级版</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">高级课程包</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-white">397€</span>
                    </div>
                    <p className="text-rose-100">最佳性价比</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">6周课程</p>
                        <p className="text-sm text-rose-100">延长备考时间</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white">每周3小时</p>
                        <p className="text-sm text-rose-100">总共18小时辅导</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">每周测试 + 额外练习</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">高级学习材料</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">优先电邮和聊天支持</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-white">1节额外辅导课</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-white hover:bg-gray-100 text-rose-900 font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      选择此优惠
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-gold" />
                    <span className="text-sm text-rose-100">安全支付</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-rose-500 transition-all transform hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
                      <Zap className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-900">VIP</span>
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy mb-2">VIP课程包</h2>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-bold text-purple-600">497€</span>
                    </div>
                    <p className="text-gray-600">终极备考体验</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">8周课程</p>
                        <p className="text-sm text-gray-600">最大备考时间</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy">每周3小时</p>
                        <p className="text-sm text-gray-600">总共24小时辅导</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">无限模拟测试</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">VIP学习材料包</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">24/7微信支持</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">3节额外辅导课</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-navy">成绩保证或退款</span>
                    </div>
                  </div>

                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl py-6 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      选择此优惠
                    </Button>
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">安全支付</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-200 mb-16">
                <div className="text-center mb-8">
                  <Calendar className="w-16 h-16 text-rose-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                    预约咨询电话
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    不确定哪个课程包适合您？预约与我们专家顾问的30分钟免费咨询。
                  </p>
                  <Link href="/#contact">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      预约免费咨询
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-3xl p-8">
                <h3 className="text-2xl font-heading font-bold text-navy mb-6 text-center">
                  常见问题
                </h3>
                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">如果我需要重新安排课程怎么办？</h4>
                    <p className="text-gray-600">您可以在课程开始前24小时免费重新安排。</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">我可以稍后升级我的课程包吗？</h4>
                    <p className="text-gray-600">可以！您可以随时升级，只需支付差价。</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-navy mb-2">你们的退款政策是什么？</h4>
                    <p className="text-gray-600">如果您不满意，前7天内可全额退款。无需问任何问题。</p>
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