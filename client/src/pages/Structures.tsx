import React, { useState } from "react";
import { structures, structuresRattacheesCompletes } from "../data";
import { Landmark, Search, Shield, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

export default function Structures() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStructures = structures.filter(
    (str) =>
      str.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      str.sigle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      str.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCompletes = structuresRattacheesCompletes.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pb-16 space-y-12">
      {/* En-tête */}
      <section className="bg-primary/5 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 mb-4">
            <Landmark className="w-3.5 h-3.5" />
            <span>Structures Rattachées</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
            Les Organismes & Structures Rattachées
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-3xl">
            Le Ministère fédère un ensemble complet de directions nationales, d'agences publiques, d'institutions consulaires et de cellules spécialisées au service de l'industrie, du commerce et du développement économique de la République du Mali.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Barre de recherche globale */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher une structure (ex: API, DNI, DGCC...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          />
        </div>

        {/* 1. Structures majeures détaillées */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-2">
            Structures Clés & Organismes Publics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStructures.map((str) => (
              <div
                key={str.id}
                className="bg-white rounded-xl border border-slate-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-sm">
                      {str.sigle}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-primary leading-tight">{str.nom}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{str.description}</p>

                  {/* Missions */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-amber-600 uppercase tracking-wider">Missions Principales</h4>
                    <ul className="space-y-1.5 text-xs text-slate-500">
                      {str.missions.map((mission, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Portail officiel de la Transition</span>
                  <span className="font-bold text-primary hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1">
                    Consulter les services <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Liste exhaustive officielle des 24 structures rattachées */}
        <div className="space-y-6 bg-slate-50/50 border border-slate-100 rounded-2xl p-6 sm:p-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              Nomenclature Officielle des Structures
            </h2>
            <p className="text-xs text-slate-500">
              Liste complète des directions, services, agences, projets et cellules rattachés au Ministère de l'Industrie et du Commerce du Mali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {filteredCompletes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-start gap-3 hover:border-primary/30 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-700 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {filteredCompletes.length === 0 && filteredStructures.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              Aucune structure ne correspond à votre recherche.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
