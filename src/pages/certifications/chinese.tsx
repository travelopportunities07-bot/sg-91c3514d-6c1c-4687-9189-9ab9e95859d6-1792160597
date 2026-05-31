import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, CheckCircle, TrendingUp, Users, Star, Shield, Clock, Target } from "lucide-react";

export default function ChineseCertification() {
  return (
    <>
      <SEO
        title="中文认证课程 - HSK备考"
        description="通过我们的强化HSK备考课程掌握中文。专家指导，经过验证的方法，保证成果。"
        image="/og-image.png"
      />
      <Header />
      <main>
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-rose-900 via-rose-800 to-red-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                <span className="text-3xl">🇨🇳</span>
                <span className="text-white font-semibold">中文认证课程</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                掌握中文。<br/>开启全球之门。
              </h1>
              <p className="text-xl md:text-2xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                您通往国际大学、职业发展和全球机会的护照从这里开始。
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="#packages">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-rose-900 font-bold rounded-full px-10 py-7 text-lg shadow-2xl transform hover:scale-105 transition-all">
                    查看课程包
                  </Button>
                </Link>
                <Link href="#testimonials">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-rose-900 font-bold rounded-full px-10 py-7 text-lg backdrop-blur-sm">
                    成功案例
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
                  您面临的挑战
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  我们理解您在HSK考试中遇到的困难
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">😰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">考试焦虑</h3>
                  <p className="text-gray-700">
                    口语部分紧张。时间压力让您不知所措。模拟考试感觉不可能完成。
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">📉</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">成绩瓶颈</h3>
                  <p className="text-gray-700">
                    您停滞在相同水平。普通中文课程不起作用。您不知道是什么阻碍了您。
                  </p>
                </div>

                <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-100">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">截止日期压力</h3>
                  <p className="text-gray-700">
                    大学申请截止在即。紧急签证要求。您现在就需要结果，而不是最终。
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-600 to-red-700 rounded-3xl p-12 text-white mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    我们经过验证的解决方案
                  </h2>
                  <p className="text-xl text-rose-100 max-w-3xl mx-auto">
                    一个系统化的方法，将考生转变为自信的高分者
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">精确诊断</h3>
                        <p className="text-rose-100">
                          我们在第一节课就精确定位您的弱点。不再猜测要学什么。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">专注分数的培训</h3>
                        <p className="text-rose-100">
                          每节课都针对考试技巧。准确学习考官想要什么。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">真实考试条件</h3>
                        <p className="text-rose-100">
                          每周定时模拟测试并提供详细反馈。您将带着经验走进真实考试。
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-rose-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">快速成果</h3>
                        <p className="text-rose-100">
                          大多数学生在5周内看到提升一个完整等级。我们无情地优化您的学习时间。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    适合谁参加此课程
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">大学申请者</h3>
                    <p className="text-gray-600">
                      需要HSK 4级或5级才能进入国际课程
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">职业专业人士</h3>
                    <p className="text-gray-600">
                      需要认证以获得晋升、国际调动或移民
                    </p>
                  </div>

                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-10 h-10 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">重复考生</h3>
                    <p className="text-gray-600">
                      对停滞的分数感到沮丧，寻求专家指导突破瓶颈
                    </p>
                  </div>
                </div>
              </div>

              <div id="testimonials" className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                    真实学生的真实成果
                  </h2>
                  <p className="text-xl text-gray-600">
                    加入数百名达到目标分数的学生
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
                      "我在HSK 4级停滞了几个月。在Vocalis Academy学习6周后，我通过了HSK 5级，得了260分！口语策略让我提高了20分。"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <span className="font-bold text-rose-600">LW</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">李伟</p>
                        <p className="text-sm text-gray-600">HSK 4级 → 5级 260分 | 现在北京大学</p>
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
                      "模拟测试和真实HSK完全一样。我自信地参加了考试并通过了HSK 6级。这是对我职业生涯最好的投资。"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                        <span className="font-bold text-rose-600">ZM</span>
                      </div>
                      <div>
                        <p className="font-bold text-navy">张敏</p>
                        <p className="text-sm text-gray-600">HSK 6级通过 | 国际经理</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-3xl p-12 text-navy mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                    限时优惠
                  </h2>
                  <p className="text-xl text-navy/80 max-w-3xl mx-auto">
                    本月开始并获得价值200欧元的独家奖励
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">免费诊断测试</h3>
                    <p className="text-sm text-gray-700">完整HSK模拟考试并附详细报告（价值80欧元）</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">高级学习材料</h3>
                    <p className="text-sm text-gray-700">官方练习测试和独家模板（价值70欧元）</p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">终身电邮支持</h3>
                    <p className="text-sm text-gray-700">即使课程结束后也能获得问题解答（价值50欧元）</p>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="#packages">
                    <Button size="lg" className="bg-navy hover:bg-navy/90 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                      立即领取您的奖励 →
                    </Button>
                  </Link>
                  <p className="text-sm text-navy/70 mt-4">⏰ 优惠48小时后到期</p>
                </div>
              </div>

              <div id="packages" className="text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
                  选择您的成功之路
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                  所有课程包都包括个性化辅导、每周模拟测试和成绩保证
                </p>
                <Link href="/certifications/chinese/packages">
                  <Button size="lg" className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold rounded-full px-12 py-7 text-xl shadow-2xl transform hover:scale-105 transition-all">
                    查看课程包 →
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