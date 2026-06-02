import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  Filter, 
  Settings, 
  TrendingUp,
  DollarSign,
  Clock,
  ExternalLink,
  Search
} from "lucide-react";
import { useState } from "react";

export default function MesRevenus() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Données exemple (vides par défaut)
  const kpis = {
    total: 0,
    disponible: 0,
    bientotDisponible: 0
  };

  const transactions: any[] = [];

  const handleExportCSV = () => {
    // Logique d'export CSV
    alert("Export CSV en cours...");
  };

  const handleWithdraw = () => {
    // Logique de retrait
    alert("Fonctionnalité de retrait à venir");
  };

  const handleSettings = () => {
    // Logique paramètres
    alert("Paramètres à venir");
  };

  return (
    <>
      <SEO 
        title="Mes Revenus - Admin PowerLingua"
        description="Gérez vos revenus et commandes"
      />
      <Header />
      
      <main className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-bold text-navy mb-2">Mes Revenus</h1>
                <a 
                  href="https://stan.store/kaywesdigital" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy/60 hover:text-gold transition-colors inline-flex items-center gap-2"
                >
                  stan.store/kaywesdigital
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={handleSettings}
                  variant="outline"
                  className="border-2 border-navy/20 hover:border-navy/40 text-navy"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </Button>
                <Button
                  onClick={handleWithdraw}
                  className="bg-gradient-to-r from-navy to-navy/90 hover:from-gold hover:to-gold/90 text-white"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Retirer
                </Button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="p-6 border-2 border-navy/10 hover:border-navy/20 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-navy/60 text-sm font-medium">Revenus totaux</span>
                  <DollarSign className="w-5 h-5 text-navy/40" />
                </div>
                <p className={`text-3xl font-bold ${kpis.total === 0 ? 'text-navy/30' : 'text-navy'}`}>
                  ${kpis.total.toFixed(2)}
                </p>
              </Card>

              <Card className="p-6 border-2 border-emerald-500/20 hover:border-emerald-500/30 transition-colors bg-emerald-50/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-700 text-sm font-medium">Disponible</span>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <p className={`text-3xl font-bold ${kpis.disponible === 0 ? 'text-emerald-600/40' : 'text-emerald-600'}`}>
                  ${kpis.disponible.toFixed(2)}
                </p>
              </Card>

              <Card className="p-6 border-2 border-amber-500/20 hover:border-amber-500/30 transition-colors bg-amber-50/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-amber-700 text-sm font-medium">Bientôt disponible</span>
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <p className={`text-3xl font-bold ${kpis.bientotDisponible === 0 ? 'text-amber-600/40' : 'text-amber-600'}`}>
                  ${kpis.bientotDisponible.toFixed(2)}
                </p>
              </Card>
            </div>

            <button 
              className="text-navy hover:text-gold transition-colors text-sm font-medium inline-flex items-center gap-1"
              onClick={() => alert("Détail des revenus à venir")}
            >
              Voir le détail
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Dernières commandes */}
          <Card className="border-2 border-navy/10">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-navy">Dernières commandes</h2>
                <div className="flex gap-3">
                  <Button
                    onClick={handleExportCSV}
                    variant="outline"
                    className="border-2 border-navy/20 hover:border-navy/40 text-navy"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    CSV
                  </Button>
                  <Button
                    onClick={() => setShowFilters(!showFilters)}
                    variant="outline"
                    className="border-2 border-navy/20 hover:border-navy/40 text-navy"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Filtres
                  </Button>
                </div>
              </div>

              {/* Filters Panel */}
              {showFilters && (
                <div className="mb-6 p-4 bg-slate-50 rounded-lg border-2 border-navy/10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Recherche</label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" />
                        <input
                          type="text"
                          placeholder="Email, produit..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border-2 border-navy/10 rounded-lg focus:border-navy/30 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Statut</label>
                      <select className="w-full px-4 py-2 border-2 border-navy/10 rounded-lg focus:border-navy/30 focus:outline-none">
                        <option value="">Tous</option>
                        <option value="completed">Complété</option>
                        <option value="pending">En attente</option>
                        <option value="refunded">Remboursé</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Période</label>
                      <select className="w-full px-4 py-2 border-2 border-navy/10 rounded-lg focus:border-navy/30 focus:outline-none">
                        <option value="">Toutes</option>
                        <option value="today">Aujourd'hui</option>
                        <option value="week">7 derniers jours</option>
                        <option value="month">30 derniers jours</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Table ou Empty State */}
              {transactions.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="w-24 h-24 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-12 h-12 text-navy/20" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy/60 mb-2">
                    Aucune transaction trouvée
                  </h3>
                  <p className="text-navy/40 mb-6">
                    Ajustez vos filtres ou attendez vos premières ventes
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-navy/20 hover:border-navy/40 text-navy"
                    onClick={() => setShowFilters(false)}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-navy/10">
                        <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Date & heure</th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Email</th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Produit</th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Montant</th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Code promo</th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Moyen de paiement</th>
                        <th className="text-left py-4 px-4 text-sm font-semibold text-navy/70">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index} className="border-b border-navy/5 hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-4 text-sm text-navy/80">{transaction.date}</td>
                          <td className="py-4 px-4 text-sm text-navy/80">{transaction.email}</td>
                          <td className="py-4 px-4 text-sm text-navy/80">{transaction.product}</td>
                          <td className="py-4 px-4 text-sm font-semibold text-navy">{transaction.amount}</td>
                          <td className="py-4 px-4 text-sm text-navy/80">{transaction.promoCode || '-'}</td>
                          <td className="py-4 px-4 text-sm text-navy/80">{transaction.paymentMethod}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              transaction.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                              transaction.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {transaction.status === 'completed' ? 'Complété' :
                               transaction.status === 'pending' ? 'En attente' : 'Remboursé'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}