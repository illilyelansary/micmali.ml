import React from "react";
import { ministreBio } from "../data";
import { Award, BookOpen, Calendar, MapPin, Shield } from "lucide-react";

export default function LeMinistere() {
  return (
    <div className="pb-16 bg-slate-50">
      {/* En-tête de page */}
      <section className="bg-white border-b border-slate-200 py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-sans font-extrabold text-slate-900 uppercase tracking-tight">Le Ministère</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">Découvrez l'organisation du département ministériel et le parcours de son dirigeant.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Colonne de gauche : Portrait & Infos Rapides */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative w-full max-w-sm bg-white border border-slate-200 rounded-lg shadow-md p-3">
              <div className="relative aspect-[3/4] rounded overflow-hidden bg-slate-100">
                <img
                  src="/manus-storage/Ministrediallo.jpeg"
                  alt={ministreBio.nom}
                  className="w-full h-full object-cover object-top"
                />
                {/* Incrustation de l'armoirie en haut à gauche - Style Primature */}
                <div className="absolute top-3 left-3 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md border border-slate-100 flex items-center justify-center">
                  <img
                    src="/manus-storage/IMG_9586.PNG"
                    alt="Armoirie"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight font-sans">
                  {ministreBio.nom}
                </h3>
                <div className="flex h-[2px] w-20 mx-auto my-1.5 bg-[#5caae6]"></div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Ministre de l'Industrie et du Commerce
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xs font-black text-slate-900 border-b border-slate-100 pb-2 uppercase tracking-wider">Fiche d'identité</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4 text-[#5caae6] shrink-0" />
                  <span>Nomination : <strong>{ministreBio.dateNomination}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-[#5caae6] shrink-0" />
                  <span>Originaire de : <strong>Ségou, Mali</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Award className="w-4 h-4 text-[#5caae6] shrink-0" />
                  <span>Expertise : <strong>Finance Agricole & Économie</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite : Biographie & Missions globales */}
          <div className="lg:col-span-8 space-y-8 bg-white border border-slate-200 p-6 sm:p-8 rounded-lg shadow-sm">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 uppercase tracking-tight">Biographie du Ministre</h2>
              <div className="w-20 h-1 bg-[#5caae6] rounded"></div>
            </div>

            <div className="prose max-w-none text-xs sm:text-sm text-slate-600 space-y-6 leading-relaxed font-medium">
              {ministreBio.biographie.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Vision stratégique */}
            <div className="bg-[#1b2b4a] text-white p-8 rounded border-b-4 border-[#5caae6] space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-[#5caae6]">
                <Shield className="w-6 h-6" />
                <h3 className="text-sm font-black uppercase tracking-wider">Notre Engagement Républicain</h3>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                Sous la direction de M. Moussa Alassane DIALLO, le Ministère de l'Industrie et du Commerce s'engage à bâtir une économie forte, à protéger les acquis industriels du Mali, et à offrir un environnement propice à l'épanouissement de nos commerçants et entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
