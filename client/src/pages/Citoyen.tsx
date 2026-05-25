import React, { useState } from "react";
import { Shield, TrendingDown, Scale, CheckCircle2, AlertTriangle, ChevronRight, Calculator, Check, AlertCircle } from "lucide-react";

export default function Citoyen() {
  const [showNotification, setShowNotification] = useState(false);

  // États pour le simulateur de conformité des prix
  const [selectedRegion, setSelectedRegion] = useState("Bamako");
  const [selectedProduct, setSelectedProduct] = useState("Sucre local (kg)");
  const [userPrice, setUserPrice] = useState("");
  const [simulationResult, setSimulationResult] = useState<{ status: "conforme" | "abusif" | null, maxPrice: number | null }>({ status: null, maxPrice: null });

  const signalements = [
    { id: 1, titre: "Spéculation sur le prix du sucre", date: "Hier", statut: "En cours d'investigation" },
    { id: 2, titre: "Défaut d'affichage des prix (supérette)", date: "Il y a 3 jours", statut: "Résolu" },
    { id: 3, titre: "Produits périmés détectés en rayon", date: "Il y a 5 jours", statut: "Résolu" },
  ];

  const prixIndicatifs = [
    { produit: "Sucre local (kg)", prixMax: "650 FCFA", zone: "Bamako & environs", valeur: 650 },
    { produit: "Riz brisé importé (kg)", prixMax: "425 FCFA", zone: "National", valeur: 425 },
    { produit: "Huile de coton locale (litre)", prixMax: "900 FCFA", zone: "National", valeur: 900 },
    { produit: "Pain de 250g", prixMax: "250 FCFA", zone: "National", valeur: 250 },
  ];

  // Grille des prix par région pour le simulateur
  const grilleRegionale: Record<string, Record<string, number>> = {
    "Bamako": { "Sucre local (kg)": 650, "Riz brisé importé (kg)": 425, "Huile de coton locale (litre)": 900, "Pain de 250g": 250 },
    "Kayes": { "Sucre local (kg)": 675, "Riz brisé importé (kg)": 440, "Huile de coton locale (litre)": 925, "Pain de 250g": 250 },
    "Sikasso": { "Sucre local (kg)": 640, "Riz brisé importé (kg)": 420, "Huile de coton locale (litre)": 890, "Pain de 250g": 250 },
    "Mopti": { "Sucre local (kg)": 680, "Riz brisé importé (kg)": 450, "Huile de coton locale (litre)": 950, "Pain de 250g": 260 },
    "Tombouctou": { "Sucre local (kg)": 700, "Riz brisé importé (kg)": 475, "Huile de coton locale (litre)": 980, "Pain de 250g": 275 },
  };

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const limit = grilleRegionale[selectedRegion]?.[selectedProduct];
    const price = parseFloat(userPrice);
    if (limit && price) {
      if (price <= limit) {
        setSimulationResult({ status: "conforme", maxPrice: limit });
      } else {
        setSimulationResult({ status: "abusif", maxPrice: limit });
      }
    }
  };

  return (
    <div className="pb-16">
      {/* En-tête */}
      <section className="bg-primary/5 border-b border-border py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold">Espace Citoyen & Consommateur</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Votre espace d'information, de veille sur les prix réglementés et de signalement des abus commerciaux.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Simulateur de conformité des prix */}
        <section className="bg-white rounded-lg border border-border p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <Calculator className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-xl font-serif font-bold">Simulateur de Conformité des Prix</h2>
              <p className="text-xs text-muted-foreground">Vérifiez instantanément si le prix proposé par un commerçant respecte les plafonds réglementaires de votre région.</p>
            </div>
          </div>

          <form onSubmit={handleSimulate} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-xs">
            <div className="space-y-1">
              <label className="block text-xs font-bold text-primary">Votre Région / Ville</label>
              <select 
                value={selectedRegion} 
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 rounded border border-border bg-white font-semibold text-primary"
              >
                <option value="Bamako">Bamako & environs</option>
                <option value="Kayes">Région de Kayes</option>
                <option value="Sikasso">Région de Sikasso</option>
                <option value="Mopti">Région de Mopti</option>
                <option value="Tombouctou">Région de Tombouctou</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-primary">Produit de Première Nécessité</label>
              <select 
                value={selectedProduct} 
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full p-3 rounded border border-border bg-white font-semibold text-primary"
              >
                <option value="Sucre local (kg)">Sucre local (kg)</option>
                <option value="Riz brisé importé (kg)">Riz brisé importé (kg)</option>
                <option value="Huile de coton locale (litre)">Huile de coton locale (litre)</option>
                <option value="Pain de 250g">Pain de 250g</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-primary">Prix constaté en boutique (FCFA)</label>
              <input 
                type="number" 
                required 
                value={userPrice}
                onChange={(e) => setUserPrice(e.target.value)}
                placeholder="Ex: 700" 
                className="w-full p-3 rounded border border-border bg-white font-semibold text-primary"
              />
            </div>

            <button type="submit" className="w-full py-3.5 bg-primary text-white font-extrabold uppercase tracking-wider rounded hover:bg-primary/90 transition-colors shadow-sm">
              Vérifier le prix
            </button>
          </form>

          {/* Résultat de la simulation */}
          {simulationResult.status && (
            <div className={`p-5 rounded-lg flex items-start gap-4 text-xs ${
              simulationResult.status === "conforme" 
                ? "bg-green-50 border border-green-200 text-green-800" 
                : "bg-red-50 border border-red-200 text-red-800"
            }`}>
              {simulationResult.status === "conforme" ? (
                <Check className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="font-extrabold text-sm uppercase">
                  {simulationResult.status === "conforme" ? "Prix Conforme" : "Attention : Prix Abusif Détecté"}
                </p>
                <p className="leading-relaxed">
                  Le prix maximum réglementé pour le <strong>{selectedProduct}</strong> dans la zone <strong>{selectedRegion}</strong> est de <strong>{simulationResult.maxPrice} FCFA</strong>.
                  {simulationResult.status === "conforme" 
                    ? " Le commerçant respecte la réglementation officielle." 
                    : " Le prix constaté est supérieur au plafond légal. Nous vous invitons à signaler cet abus via le formulaire ci-dessous."}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Grille Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Colonne Gauche : Prix indicatifs & Plafonnés */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded border border-border p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                  <Scale className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-primary">Prix Plafonnés Indicatifs (Moyenne Nationale)</h3>
                  <p className="text-xs text-muted-foreground">Tarifs réglementés par la DGCC pour protéger le pouvoir d'achat.</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="py-3 px-4 font-bold text-primary">Produit</th>
                      <th className="py-3 px-4 font-bold text-primary">Prix Plafond</th>
                      <th className="py-3 px-4 font-bold text-primary">Zone d'application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {prixIndicatifs.map((p, idx) => (
                      <tr key={idx} className="hover:bg-muted/30">
                        <td className="py-3 px-4 font-semibold">{p.produit}</td>
                        <td className="py-3 px-4 text-primary font-bold">{p.prixMax}</td>
                        <td className="py-3 px-4 text-muted-foreground">{p.zone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Signalements récents */}
            <div className="bg-white rounded border border-border p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-primary">Signalements Citoyens Récents</h3>
                <span className="text-[10px] bg-secondary/20 text-secondary font-bold px-2 py-0.5 rounded">Transparence</span>
              </div>
              <div className="space-y-3">
                {signalements.map((sig) => (
                  <div key={sig.id} className="flex items-center justify-between p-4 bg-muted/30 rounded border border-border/50 text-xs">
                    <div className="space-y-1">
                      <p className="font-semibold text-primary">{sig.titre}</p>
                      <p className="text-[10px] text-muted-foreground">{sig.date}</p>
                    </div>
                    <span className={`px-2 py-1 rounded font-bold text-[10px] ${
                      sig.statut === "Résolu"
                        ? "bg-green-100 text-green-800"
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {sig.statut}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire de Signalement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-primary text-white rounded p-6 sm:p-8 border-b-4 border-secondary shadow-md space-y-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-secondary" />
                <h3 className="text-lg font-serif font-bold">Signaler un Abus Commercial</h3>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Vous constatez un dépassement des prix plafonnés, un refus de vente ou un produit non conforme ? Signalez-le directement à nos inspecteurs de la DGCC.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setShowNotification(true); }} className="space-y-4 text-foreground text-xs">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-white">Nom complet (Optionnel)</label>
                  <input type="text" placeholder="Ex: Amadou DIARRA" className="w-full p-2.5 rounded bg-white border-0 text-foreground" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-white">Téléphone</label>
                  <input type="tel" required placeholder="Ex: +223 70 00 00 00" className="w-full p-2.5 rounded bg-white border-0 text-foreground" />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-white">Type d'infraction</label>
                  <select required className="w-full p-2.5 rounded bg-white border-0 text-foreground">
                    <option value="prix">Dépassement de prix réglementé</option>
                    <option value="qualite">Défaut de qualité / Produit périmé</option>
                    <option value="refus">Refus de vente / Spéculation</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-white">Détails de l'abus</label>
                  <textarea required rows={3} placeholder="Précisez le nom du commerce, le lieu et les détails de l'infraction..." className="w-full p-2.5 rounded bg-white border-0 text-foreground" />
                </div>
                <button type="submit" className="w-full py-3 bg-secondary text-secondary-foreground font-extrabold uppercase tracking-wider rounded hover:bg-secondary/90 transition-colors">
                  Envoyer le signalement
                </button>
              </form>

              {showNotification && (
                <div className="bg-green-50 text-green-800 p-4 rounded flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Signalement enregistré !</p>
                    <p className="mt-1">Merci pour votre vigilance citoyenne. Nos services d'inspection (DGCC) vont analyser votre demande rapidement.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
