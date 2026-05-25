import { projects } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, CheckCircle2, Award, Clock } from "lucide-react";

export default function ProjetsPage() {
  return (
    <div className="container py-12 space-y-16">
      {/* En-tête de page */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
          <Cpu className="w-4 h-4" />
          <span>Modernisation de l'État</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">
          Projets Stratégiques en Cours
        </h1>
        <p className="text-lg text-slate-600">
          Découvrez les grands chantiers de digitalisation et de transformation menés par le Ministère pour simplifier les démarches et stimuler la compétitivité.
        </p>
      </div>

      {/* Liste des projets */}
      <div className="max-w-4xl mx-auto space-y-8">
        {projects.map((projet) => (
          <Card key={projet.id} className="border border-slate-200/80 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <CardTitle className="text-xl md:text-2xl font-bold font-serif">{projet.titre}</CardTitle>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold border border-blue-400/30">
                  <Clock className="w-3.5 h-4" />
                  {projet.statut}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-6">
              <p className="text-slate-600 leading-relaxed text-base">
                {projet.description}
              </p>

              <div className="border-t border-slate-100 pt-6">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-700" />
                  Principaux Chantiers & Réalisations :
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projet.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
