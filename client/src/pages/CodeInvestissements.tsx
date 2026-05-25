import { codeInvestissements } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, Shield, CheckCircle2, Landmark, DollarSign, Lightbulb } from "lucide-react";

export default function CodeInvestissementsPage() {
  const icons = [Landmark, DollarSign, Lightbulb, Shield];

  return (
    <div className="container py-12 space-y-16">
      {/* En-tête de page */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
          <FileText className="w-4 h-4" />
          <span>Cadre Réglementaire</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">
          Code des Investissements
        </h1>
        <p className="text-lg text-slate-600">
          {codeInvestissements.description}
        </p>
      </div>

      {/* Avantages généraux */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-serif">Pourquoi investir au Mali ?</h2>
          <p className="text-slate-600 leading-relaxed">
            Le Mali s'est doté d'un Code des Investissements extrêmement incitatif afin de favoriser la transformation industrielle de ses matières premières locales, d'encourager la création d'emplois durables et d'accroître la compétitivité de son économie.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Égalité de traitement</h4>
                <p className="text-sm text-slate-600">Les investisseurs étrangers bénéficient des mêmes droits et protections que les nationaux.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Garantie de transfert</h4>
                <p className="text-sm text-slate-600">Liberté totale de transfert des capitaux et des bénéfices générés par les investissements.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Guichet Unique API-Mali</h4>
                <p className="text-sm text-slate-600">Simplification et centralisation de toutes les démarches administratives de création et d'agrément.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-slate-900 font-serif flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Régimes d'Exonérations Fiscale & Douanière
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200/60">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase">Régime A</span>
              <h4 className="font-bold text-slate-900 mt-2">Investissements inférieurs à 1 milliard FCFA</h4>
              <p className="text-sm text-slate-600 mt-1">Exonération de l'impôt sur les bénéfices industriels et commerciaux pendant 5 à 8 ans selon la zone géographique.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/60">
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full uppercase">Régime B</span>
              <h4 className="font-bold text-slate-900 mt-2">Investissements supérieurs à 1 milliard FCFA</h4>
              <p className="text-sm text-slate-600 mt-1">Avantages douaniers étendus à l'importation d'équipements de production et exonérations fiscales prolongées jusqu'à 10 ans.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secteurs clés */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-slate-900 font-serif">Incitations par Secteurs Stratégiques</h2>
          <p className="text-slate-500">Des conditions sur-mesure pour stimuler la souveraineté économique.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codeInvestissements.secteurs.map((secteur, idx) => {
            const IconComponent = icons[idx] || Landmark;
            return (
              <Card key={idx} className="border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 font-serif">{secteur.titre}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{secteur.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
