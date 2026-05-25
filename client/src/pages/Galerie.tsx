import { Image, Calendar, Tag, ExternalLink } from "lucide-react";

interface PhotoItem {
  src: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export default function Galerie() {
  const photos: PhotoItem[] = [
    {
      src: "/manus-storage/PHOTO-2025-10-07-13-31-13.jpg",
      title: "Célébration de la Journée Mondiale du Coton",
      date: "7 Octobre 2025",
      category: "Événement International",
      description: "Le Ministre Moussa Alassane DIALLO au siège de la FAO à Rome pour la défense de la filière cotonnière malienne."
    },
    {
      src: "/manus-storage/PHOTO-2025-10-07-13-31-14.jpg",
      title: "Exposition Coton à Rome",
      date: "7 Octobre 2025",
      category: "Exposition",
      description: "Visite guidée de l'exposition consacrée à la diversité de la filière cotonnière mondiale."
    },
    {
      src: "/manus-storage/PHOTO-2025-10-07-13-31-142.jpg",
      title: "Délégation Malienne à la FAO",
      date: "7 Octobre 2025",
      category: "Diplomatie Économique",
      description: "Le Ministre et la délégation malienne lors de la Journée Mondiale du Coton."
    },
    {
      src: "/manus-storage/PHOTO-2025-10-07-13-31-145.jpg",
      title: "Rencontre avec les Partenaires de la FAO",
      date: "7 Octobre 2025",
      category: "Partenariats",
      description: "Séances de travail bilatérales pour le financement de la filière cotonnière."
    },
    {
      src: "/manus-storage/PHOTO-2025-09-09-11-23-33.jpg",
      title: "Visite des Usines Sucrières de Siribala",
      date: "8 Septembre 2025",
      category: "Souveraineté Industrielle",
      description: "Le Ministre sur le terrain pour évaluer l'état des machines et échanger avec les ouvriers."
    },
    {
      src: "/manus-storage/PHOTO-2025-09-09-11-23-32.jpg",
      title: "Relance Industrielle à Dougabougou",
      date: "8 Septembre 2025",
      category: "Souveraineté Industrielle",
      description: "Mission ministérielle pour la relance des usines sucrières nationales."
    },
    {
      src: "/manus-storage/PHOTO-2025-09-09-11-23-34.jpg",
      title: "Inspection Technique des Installations",
      date: "8 Septembre 2025",
      category: "Visite de Terrain",
      description: "Le Ministre et les ingénieurs lors de l'inspection des cuves de raffinage."
    },
    {
      src: "/manus-storage/PHOTO-2025-07-20-18-34-42.jpg",
      title: "Approvisionnement en Hydrocarbures",
      date: "30 Octobre 2025",
      category: "Régulation du Marché",
      description: "Réunion hebdomadaire stratégique avec les professionnels du pétrole (GPP et GMPP)."
    },
    {
      src: "/manus-storage/PHOTO-2025-07-20-21-38-47.jpg",
      title: "Lancement du Recensement Industriel",
      date: "26 Janvier 2026",
      category: "Planification Économique",
      description: "Le Ministre préside le lancement officiel du Recensement Industriel National à la CCIM."
    },
    {
      src: "/manus-storage/PHOTO-2025-07-20-21-38-48.jpg",
      title: "Conférence sur le Recensement National",
      date: "26 Janvier 2026",
      category: "Conférence",
      description: "Présentation de la méthodologie de cartographie du tissu industriel malien."
    },
    {
      src: "/manus-storage/PHOTO-2025-10-13-18-17-53.jpg",
      title: "Conseil des Ministres - Session Spéciale",
      date: "13 Octobre 2025",
      category: "Conseil",
      description: "Le Ministre Moussa Alassane DIALLO défendant les dossiers industriels au Conseil des Ministres."
    },
    {
      src: "/manus-storage/PHOTO-2025-10-13-18-17-54.jpg",
      title: "Présentation des Réformes Économiques",
      date: "13 Octobre 2025",
      category: "Gouvernance",
      description: "Session de travail sur les réformes du climat des affaires et de la concurrence."
    }
  ];

  return (
    <div className="container py-12 space-y-16">
      {/* En-tête de page */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
          <Image className="w-4 h-4" />
          <span>Médiathèque Officielle</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 font-serif">
          Le Ministère en Images
        </h1>
        <p className="text-lg text-slate-600">
          Retrouvez l'ensemble des reportages photographiques réels retraçant les activités, les visites de terrain et les grands événements du Ministère.
        </p>
      </div>

      {/* Grille de photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="aspect-video overflow-hidden relative bg-slate-100">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-blue-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {photo.category}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{photo.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {photo.description}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span>Visualiser en haute définition</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
