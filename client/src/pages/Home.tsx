import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Shield, ChevronRight, FileText, Download, Calendar, ExternalLink, Award, Sparkles, HelpCircle } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/manus-storage/PHOTO-2025-10-07-13-31-13.jpg",
      title: "Journée Mondiale du Coton à la FAO (Rome)",
      desc: "Le Ministre Moussa Alassane DIALLO plaide pour le renforcement de la filière cotonnière malienne et le développement industriel.",
    },
    {
      image: "/manus-storage/PHOTO-2025-09-09-11-23-33.jpg",
      title: "Visite des usines sucrières de Siribala et Dougabougou",
      desc: "Inspection de terrain par le Ministre pour évaluer la souveraineté sucrière et le plan de relance industrielle nationale.",
    },
    {
      image: "/manus-storage/PHOTO-2025-07-20-21-38-47.jpg",
      title: "Lancement du Recensement Industriel National",
      date: "26 Janvier 2026",
      desc: "Une cartographie complète pour identifier le potentiel productif et structurer les réformes d'industrialisation du Mali.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const stats = [
    { value: "11.3%", label: "Contribution au PIB", desc: "Objectif de croissance industrielle d'ici 2028" },
    { value: "4 Millions", label: "Producteurs de Coton", desc: "Filière cotonnière, premier pilier social" },
    { value: "3.7%", label: "Taux de Croissance", desc: "Dynamisme commercial interne projeté" },
  ];

  const actualites = [
    {
      image: "/manus-storage/PHOTO-2025-10-07-13-31-14.jpg",
      title: "Célébration de la Journée Mondiale du Coton",
      date: "7 Octobre 2025",
      category: "Événement",
      desc: "Le Ministre de l'Industrie et du Commerce a représenté le Mali au siège de la FAO à Rome pour défendre la filière.",
    },
    {
      image: "/manus-storage/PHOTO-2025-09-09-11-23-32.jpg",
      title: "Mission ministérielle de relance sucrière",
      date: "8 Septembre 2025",
      category: "Industrie",
      desc: "Évaluation technique des complexes industriels sucriers de Siribala et Dougabougou pour assurer l'autosuffisance.",
    },
    {
      image: "/manus-storage/PHOTO-2025-07-20-18-34-42.jpg",
      title: "Régulation des Hydrocarbures au Mali",
      date: "30 Octobre 2025",
      category: "Commerce",
      desc: "Réunion de concertation hebdomadaire entre le Ministre et les groupements professionnels de pétrole (GPP).",
    },
  ];

  const communiques = [
    { title: "Arrêté Ministériel fixant le prix indicatif plafond du sucre et de l'huile", date: "15 Mai 2026", size: "2.4 Mo" },
    { title: "Guide de l'Investisseur au Mali - Édition Spéciale 2026", date: "12 Avril 2026", size: "4.1 Mo" },
    { title: "Rapport d'avancement du Recensement Industriel National", date: "28 Janvier 2026", size: "1.8 Mo" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Section Hero Asymétrique - Style Primature Strict */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Colonne Gauche : Portrait Officiel du Ministre avec l'armoirie incrustée */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-full max-w-sm bg-white border border-slate-200 rounded-lg shadow-md p-3">
                {/* Photo du Ministre */}
                <div className="relative aspect-[3/4] rounded overflow-hidden bg-slate-100">
                  <img
                    src="/manus-storage/Ministrediallo.jpeg"
                    alt="M. Moussa Alassane DIALLO"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Incrustation de l'armoirie en haut à gauche - Style Primature Strict */}
                  <div className="absolute top-3 left-3 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md border border-slate-100 flex items-center justify-center">
                    <img
                      src="/manus-storage/IMG_9586.PNG"
                      alt="Armoirie"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* Cartouche d'identification */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight font-sans">
                    M. Moussa Alassane DIALLO
                  </h3>
                  <div className="flex h-[2px] w-20 mx-auto my-1.5 bg-[#5caae6]"></div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Ministre de l'Industrie et du Commerce
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Diaporama des Activités Récentes (Carrousel) */}
            <div className="lg:col-span-8 relative rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-slate-900 flex flex-col">
              <div className="relative flex-grow h-96 lg:h-full overflow-hidden">
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 flex flex-col justify-end ${
                      idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                  >
                    {/* Image de fond */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay de dégradé sombre pour lisibilité du texte */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    {/* Contenu textuel */}
                    <div className="relative z-20 p-6 sm:p-8 space-y-3 text-white max-w-3xl">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#5caae6] text-white text-[10px] font-black uppercase tracking-wider">
                        Actualité à la Une
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase font-sans">
                        {slide.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Indicateurs du Carrousel */}
              <div className="absolute top-4 right-4 z-30 flex gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentSlide ? "bg-[#5caae6] w-6" : "bg-white/50"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reste de la page : Chiffres clés, Actualités, Communiqués, Vidéos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section Chiffres Clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <span className="text-3xl font-black text-[#5caae6]">{stat.value}</span>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-1">{stat.label}</h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Principale : Actualités & Communiqués */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Bloc Gauche : Actualités Récentes */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider font-sans flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#5caae6]" />
                Actualités Récentes
              </h3>
              <Link href="/actualites" className="text-xs font-bold text-[#5caae6] hover:underline flex items-center gap-1">
                Toutes les actualités <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {actualites.map((actu, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={actu.image} alt={actu.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-[#5caae6] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
                      {actu.category}
                    </span>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {actu.date}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug hover:text-[#5caae6] transition-colors">
                        {actu.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {actu.desc}
                      </p>
                    </div>
                    <Link href="/actualites">
                      <span className="text-xs font-bold text-[#5caae6] hover:underline inline-flex items-center gap-0.5 cursor-pointer">
                        Lire la suite <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bloc Droite : Communiqués & Publications */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center border-b border-slate-200 pb-3">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider font-sans flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#5caae6]" />
                Communiqués Officiels
              </h3>
            </div>
            
            <div className="space-y-4">
              {communiques.map((doc, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3">
                  <div className="p-2 bg-blue-50 text-[#5caae6] rounded shrink-0">
                    <Download className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-xs leading-snug hover:text-[#5caae6] transition-colors cursor-pointer">
                      {doc.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold">
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span>PDF ({doc.size})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section ORTM Vidéos */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-wider font-sans flex items-center gap-2">
              <Award className="w-5 h-5 text-[#5caae6]" />
              Le Ministère sur l'ORTM (Vidéos)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-900 relative shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="ORTM Reportage"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Reportage ORTM : Conseil National de Relance Sucrière</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Retour sur la visite d'inspection du Ministre de l'Industrie et du Commerce sur les sites de Siribala et Dougabougou pour la relance de la production sucrière nationale.
              </p>
            </div>
            <div className="space-y-3">
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-900 relative shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="ORTM Reportage 2"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Interview exclusive : Régulation des prix et lutte contre l'inflation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Le Ministre Moussa Alassane DIALLO détaille au micro de l'ORTM les mesures de plafonnement des prix des denrées de première nécessité et le rôle de la DGCC.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
