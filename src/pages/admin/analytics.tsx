import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  DollarSign, 
  UserPlus,
  TrendingUp,
  Calendar,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

export default function Analytics() {
  const [period, setPeriod] = useState("7days");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");

  // Données exemple (vides par défaut)
  const kpis = {
    visits: 0,
    revenue: 0,
    leads: 0
  };

  const products: any[] = [];

  const applyCustomPeriod = () => {
    if (customStart && customEnd) {
      alert(`Période appliquée: du ${customStart} au ${customEnd}`);
    }
  };

  return (
    <>
      <SEO 
        title="Analytics - Admin PowerLingua"
        description="Analysez vos performances"
      />
      <Header />
      
      <main className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h1 className="text-4xl font-bold text-navy">Analytics</h1>
              
              {/* Period Selector */}
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <Button
                    onClick={() => setPeriod("7days")}
                    variant={period === "7days" ? "default" : "outline"}
                    className={period === "7days" 
                      ? "bg-navy hover:bg-navy/90 text-white" 
                      : "border-2 border-navy/20 hover:border-navy/40 text-navy"
                    }
                  >
                    7 derniers jours
                  </Button>
                  <Button
                    onClick={() => setPeriod("14days")}
                    variant={period === "14days" ? "default" : "outline"}
                    className={period === "14days" 
                      ? "bg-navy hover:bg-navy/90 text-white" 
                      : "border-2 border-navy/20 hover:border-navy/40 text-navy"
                    }
                  >
                    14 derniers jours
                  </Button>
                  <Button
                    onClick={() => setPeriod("custom")}
                    variant={period === "custom" ? "default" : "outline"}
                    className={period === "custom" 
                      ? "bg-navy hover:bg-navy/90 text-white" 
                      : "border-2 border-navy/20 hover:border-navy/40 text-navy"
                    }
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Plage personnalisée
                  </Button>
                </div>

                {/* Custom Date Range */}
                {period === "custom" && (
                  <div className="flex items-center gap-2 p-4 bg-white rounded-lg border-2 border-navy/10">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium text-navy/70">Du</label>
                      <input
                        type="date"
                        value={customStart}
                        onChange={(e) => setCustomStart(e.target.value)}
                        className="px-3 py-2 border-2 border-navy/10 rounded-lg focus:border-navy/30 focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium text-navy/70">Au</label>
                      <input
                        type="date"
                        value={customEnd}
                        onChange={(e) => setCustomEnd(e.target.value)}
                        className="px-3 py-2 border-2 border-navy/10 rounded-lg focus:border-navy/30 focus:outline-none"
                      />
                    </div>
                    <Button
                      onClick={applyCustomPeriod}
                      className="bg-gradient-to-r from-navy to-navy/90 hover:from-gold hover:to-gold/90 text-white"
                    >
                      Appliquer
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 border-2 border-blue-500/20 hover:border-blue-500/30 transition-colors bg-blue-50/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-700 text-sm font-medium">Visites boutique</span>
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <p className={`text-3xl font-bold ${kpis.visits === 0 ? 'text-blue-600/40' : 'text-blue-600'}`}>
                  {kpis.visits.toLocaleString()}
                </p>
              </Card>

              <Card className="p-6 border-2 border-emerald-500/20 hover:border-emerald-500/30 transition-colors bg-emerald-50/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-700 text-sm font-medium">Revenus totaux</span>
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                </div>
                <p className={`text-3xl font-bold ${kpis.revenue === 0 ? 'text-emerald-600/40' : 'text-emerald-600'}`}>
                  ${kpis.revenue.toFixed(2)}
                </p>
              </Card>

              <Card className="p-6 border-2 border-purple-500/20 hover:border-purple-500/30 transition-colors bg-purple-50/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-700 text-sm font-medium">Leads</span>
                  <UserPlus className="w-5 h-5 text-purple-600" />
                </div>
                <p className={`text-3xl font-bold ${kpis.leads === 0 ? 'text-purple-600/40' : 'text-purple-600'}`}>
                  {kpis.leads.toLocaleString()}
                </p>
              </Card>
            </div>

            {/* Geographic & Navigation Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* D'où viennent vos clients */}
              <Card className="p-6 border-2 border-navy/10">
                <h3 className="text-xl font-bold text-navy mb-4">D'où viennent vos clients ?</h3>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-navy/10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-navy/20" />
                    </div>
                    <p className="text-navy/40 text-sm">
                      Carte géographique disponible après les premières visites
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-navy/70">Pas encore de données</span>
                    <span className="text-sm font-semibold text-navy/40">0%</span>
                  </div>
                </div>
              </Card>

              {/* Où vont vos clients */}
              <Card className="p-6 border-2 border-navy/10">
                <h3 className="text-xl font-bold text-navy mb-4">Où vont vos clients ?</h3>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-navy/10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-8 h-8 text-navy/20" />
                    </div>
                    <p className="text-navy/40 text-sm">
                      Flux de navigation disponible après les premières visites
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between py-2 px-3 bg-slate-50 rounded-lg">
                    <span className="text-sm text-navy/70">Pas encore de données</span>
                    <span className="text-sm font-semibold text-navy/40">0</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Performance produits */}
          <Card className="border-2 border-navy/10">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-navy">Performance produits</h2>
              </div>

              {products.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="w-24 h-24 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-12 h-12 text-navy/20" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy/60 mb-2">
                    Aucune donnée disponible
                  </h3>
                  <p className="text-navy/40 mb-6">
                    Les statistiques apparaîtront après vos premières ventes
                  </p>
                  <a 
                    href="https://help.stan.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-gold transition-colors inline-flex items-center gap-2 font-medium"
                  >
                    Apprendre à améliorer vos métriques
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-navy/10">
                          <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Produit</th>
                          <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Vues</th>
                          <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Commandes</th>
                          <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Conversion %</th>
                          <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Revenus</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product, index) => (
                          <tr key={index} className="border-b border-navy/5 hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-4 text-sm font-medium text-navy">{product.name}</td>
                            <td className="py-4 px-4 text-sm text-navy/80">{product.views}</td>
                            <td className="py-4 px-4 text-sm text-navy/80">{product.orders}</td>
                            <td className="py-4 px-4 text-sm">
                              <span className={`font-semibold ${
                                product.conversion >= 5 ? 'text-emerald-600' :
                                product.conversion >= 2 ? 'text-amber-600' :
                                'text-red-600'
                              }`}>
                                {product.conversion}%
                              </span>
                            </td>
                            <td className="py-4 px-4 text-sm font-semibold text-navy">${product.revenue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 text-center">
                    <a 
                      href="https://help.stan.store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-gold transition-colors inline-flex items-center gap-2 font-medium"
                    >
                      Apprendre à améliorer vos métriques
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}