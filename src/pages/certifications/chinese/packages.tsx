import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Shield } from "lucide-react";

export default function ChinesePackages() {
  return (
    <>
      <SEO
        title="中文课程包 - HSK认证"
        description="中文课程 A1, A2, B1, B2 小组或一对一。无限 Skool 资源和每周直播课程。"
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
                  我们的培训课程包
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  一次性付款 · 2个月时长 · Skool 资源 + 直播课程
                </p>
              </div>

              <div className="mb-20">
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  小组课程包（3-6人）
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-rose-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-rose-900">A1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">初学者</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-rose-600">€129</span>
                      </div>
                      <p className="text-sm text-gray-600">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每月12小时交流</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">无限 Skool A1 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每周3小时小组直播</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">法语社区</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-rose-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-rose-900">A2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">基础</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-rose-600">€149</span>
                      </div>
                      <p className="text-sm text-gray-600">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每月12小时交流</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">无限 Skool A2 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每周3小时小组直播</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">法语社区</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-rose-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-rose-900">B1</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">中级</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-rose-600">€179</span>
                      </div>
                      <p className="text-sm text-gray-600">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每月12小时交流</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">无限 Skool B1 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每周3小时小组直播</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">论坛访问 + 批改</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-rose-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-rose-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-rose-900">B2</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">独立</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-rose-600">€179</span>
                      </div>
                      <p className="text-sm text-gray-600">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每月12小时交流</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">无限 Skool B2 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每周3小时小组直播</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">HSK B2 备考</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-10 text-center">
                  一对一课程包（个人课程）
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-red-900">A1 · 一对一</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">初学者</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-red-600">€159</span>
                      </div>
                      <p className="text-sm text-gray-600">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每月12小时个人</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">无限 Skool A1 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每周3小时视频一对一</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">个性化计划</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-red-900">A2 · 一对一</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">基础</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-red-600">€159</span>
                      </div>
                      <p className="text-sm text-gray-600">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每月12小时个人</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">无限 Skool A2 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每周3小时视频一对一</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">个性化计划</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-6 shadow-2xl border-4 border-gold transform scale-105 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                      热门
                    </div>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-white">B1 · 一对一</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">中级</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-white">€189</span>
                      </div>
                      <p className="text-sm text-rose-100">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">每月12小时个人</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">无限 Skool B1 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">每周3小时视频一对一</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-white">包含书面批改</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-white hover:bg-gray-100 text-red-900 font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200 hover:border-red-500 transition-all">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold text-red-900">B2 · 一对一</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy mb-2">独立</h3>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-red-600">€199</span>
                      </div>
                      <p className="text-sm text-gray-600">一次性 · 约2个月</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每月12小时个人</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">无限 Skool B2 资源</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">每周3小时视频一对一</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-navy">HSK B2 备考</span>
                      </div>
                    </div>

                    <Link href="/#contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl py-4 text-sm shadow-lg">
                        选择此优惠
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 text-center">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                  安全支付和满意保证
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  我们所有的付款都是安全的。7天内满意保证或退款。
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