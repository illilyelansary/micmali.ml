import { organigramme } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Award, Briefcase, ChevronRight } from "lucide-react";

export default function Organigramme() {
  const ministre = organigramme.find((m) => m.poste === "Le Ministre");
  const cabinet = organigramme.filter(
    (m) => m.poste.includes("Cabinet") || m.poste.includes("Chef de Cabinet")
  );
  const conseillers = organigramme.filter((m) => m.poste.includes("Conseiller"));
  const chargesMission = organigramme.filter((m) => m.poste.includes("Chargé de Mission"));
  const autres = organigramme.filter(
    (m) =>
      m.poste !== "Le Ministre" &&
      !cabinet.includes(m) &&
      !conseillers.includes(m) &&
      !chargesMission.includes(m)
  );

  return (
    <div className="container py-12 space-y-16">
      {/* En-tête de page */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
          <Users className="w-4 h-4" />
          <span>Structure Humaine Officielle</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">
          Organigramme du Cabinet
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Découvrez les femmes et les hommes qui œuvrent quotidiennement au sein du Cabinet pour la souveraineté industrielle et commerciale du Mali.
        </p>
      </div>

      {/* Section Le Ministre */}
      {ministre && (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 font-serif uppercase tracking-wider text-sm border-b-2 border-amber-500 pb-2">
            <Shield className="w-5 h-5 text-amber-500" />
            L'Autorité Ministérielle
          </h2>
          <Card className="w-full max-w-md border border-amber-300 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
              <img
                src={ministre.image}
                alt={ministre.nom}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-extrabold px-3 py-1.5 uppercase tracking-widest rounded-bl-lg">
                Président du Cabinet
              </div>
            </div>
            <CardContent className="p-6 text-center space-y-2 bg-gradient-to-b from-amber-50/10 to-white">
              <h3 className="text-2xl font-bold text-slate-900 font-serif">{ministre.nom}</h3>
              <p className="text-xs font-extrabold text-amber-700 uppercase tracking-widest">
                {ministre.poste}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Structure Hiérarchique */}
      <div className="space-y-16 max-w-5xl mx-auto">
        {/* Section Cabinet */}
        <div className="space-y-8">
          <h2 className="text-lg font-bold text-slate-900 text-center flex items-center justify-center gap-2 font-serif uppercase tracking-wider border-b border-slate-100 pb-3">
            <Briefcase className="w-5 h-5 text-blue-700" />
            Le Cabinet du Ministre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cabinet.map((membre, idx) => (
              <Card
                key={idx}
                className="border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-white"
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-50 border-2 border-blue-100 shrink-0">
                    <img
                      src={membre.image}
                      alt={membre.nom}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-serif text-base">{membre.nom}</h3>
                    <p className="text-xs text-blue-700 font-extrabold uppercase tracking-wider">{membre.poste}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Conseillers Techniques */}
        <div className="space-y-8">
          <h2 className="text-lg font-bold text-slate-900 text-center flex items-center justify-center gap-2 font-serif uppercase tracking-wider border-b border-slate-100 pb-3">
            <Award className="w-5 h-5 text-blue-700" />
            Les Conseillers Techniques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conseillers.map((membre, idx) => (
              <Card
                key={idx}
                className="border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    <img
                      src={membre.image}
                      alt={membre.nom}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-serif">{membre.nom}</h3>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">
                      {membre.poste}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Chargés de Mission */}
        <div className="space-y-8">
          <h2 className="text-lg font-bold text-slate-900 text-center flex items-center justify-center gap-2 font-serif uppercase tracking-wider border-b border-slate-100 pb-3">
            <Users className="w-5 h-5 text-blue-700" />
            Les Chargés de Mission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chargesMission.map((membre, idx) => (
              <Card
                key={idx}
                className="border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    <img
                      src={membre.image}
                      alt={membre.nom}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-serif">{membre.nom}</h3>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">
                      {membre.poste}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Secrétariat & Courrier */}
        <div className="space-y-8">
          <h2 className="text-lg font-bold text-slate-900 text-center flex items-center justify-center gap-2 font-serif uppercase tracking-wider border-b border-slate-100 pb-3">
            <Briefcase className="w-5 h-5 text-blue-700" />
            Secrétariat & Services de Soutien
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {autres.map((membre, idx) => (
              <Card
                key={idx}
                className="border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    <img
                      src={membre.image}
                      alt={membre.nom}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-serif">{membre.nom}</h3>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">
                      {membre.poste}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
