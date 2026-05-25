import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Globe, CheckCircle2, Award, ArrowRight } from "lucide-react";

export default function ForumOci() {
  return (
    <div className="container py-12 space-y-16">
      {/* Hero d'événement */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 md:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/95 to-slate-900/80 z-10" />
        <div className="absolute inset-0 bg-[url('/manus-storage/PHOTO-2025-07-20-20-15-49.jpg')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <div className="relative z-20 max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
            Événement Majeur
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-serif leading-tight">
            Forum d’Investissement de l’OCI au Mali
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Sous le haut patronage de S.E. le Président de la Transition, Chef de l’État du Mali et du Secrétaire général de l’OCI, cet événement réunit décideurs et capitaux stratégiques pour stimuler l'économie malienne.
          </p>

          <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>02 au 04 Décembre 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Bamako, République du Mali</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber-400" />
              <span>International</span>
            </div>
          </div>
        </div>
      </div>

      {/* Objectifs du forum */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-serif">À propos du Forum</h2>
          <p className="text-slate-600 leading-relaxed">
            Ce forum stratégique de haut niveau réunira des décideurs clés, des investisseurs, des institutions financières de développement et des chefs d’entreprise du monde islamique pour connecter des projets d’envergure et des capitaux engagés, dans une dynamique concrète d’investissements durables.
          </p>
          
          <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">Objectifs Stratégiques</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <p className="text-sm text-slate-600">Présenter des projets bancables dans les secteurs clés (agriculture, énergie, infrastructures, mines).</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <p className="text-sm text-slate-600">Faciliter les contacts directs entre les opérateurs maliens et les investisseurs de l'OCI.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <p className="text-sm text-slate-600">Libérer des capitaux via les banques commerciales et les partenaires multilatéraux.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
              <p className="text-sm text-slate-600">Dialoguer sur l'amélioration continue de l'environnement des affaires au Mali.</p>
            </div>
          </div>
        </div>

        {/* Bloc d'informations d'inscription */}
        <Card className="border border-slate-200/80 shadow-xl overflow-hidden bg-slate-50">
          <CardHeader className="bg-blue-900 text-white p-6">
            <CardTitle className="text-lg font-bold font-serif">Inscriptions au Forum</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900">Statut des inscriptions :</h4>
              <span className="inline-flex px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-100">
                Clôturées
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Les inscriptions pour participer au Forum d'Investissement de l'OCI au Mali sont désormais closes. Pour toute demande d'information complémentaire, veuillez contacter le secrétariat technique du Ministère.
            </p>
            <div className="border-t border-slate-200 pt-4 space-y-2">
              <span className="text-xs text-slate-500 font-semibold block uppercase">Secrétariat technique :</span>
              <p className="text-sm font-medium text-slate-900">Cité Administrative, Bâtiment 8, Bamako</p>
              <p className="text-sm text-blue-700">contact@micmali.ml</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secteurs à fort potentiel */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center font-serif">Secteurs Prioritaires Présentés</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">01</div>
            <h3 className="font-bold text-slate-900">Agro-industrie</h3>
            <p className="text-xs text-slate-500">Valorisation du coton, des fruits, du bétail et de la viande.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">02</div>
            <h3 className="font-bold text-slate-900">Infrastructures</h3>
            <p className="text-xs text-slate-500">Routes, parcs industriels, logistique et zones franches.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">03</div>
            <h3 className="font-bold text-slate-900">Énergies</h3>
            <p className="text-xs text-slate-500">Centrales solaires d'envergure et solutions hors réseau.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">04</div>
            <h3 className="font-bold text-slate-900">Mines & TIC</h3>
            <p className="text-xs text-slate-500">Exploitation minière durable et transformation digitale de l'économie.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
