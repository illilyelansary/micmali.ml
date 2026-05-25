import React, { useState } from "react";
import { Link, useRoute } from "wouter";
import { actualites } from "../data";
import { Calendar, ChevronRight, Clock, Tag } from "lucide-react";

export default function Actualites() {
  const [match, params] = useRoute("/actualites/:id");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = ["Tous", "Industrie", "Commerce", "Hydrocarbures", "Institutionnel"];

  // Si on est sur la page de détail d'un article
  if (match && params?.id) {
    const act = actualites.find((a) => a.id === params.id);
    if (!act) {
      return <div className="text-center py-12 text-muted-foreground">Article introuvable.</div>;
    }

    return (
      <div className="pb-16">
        <section className="bg-primary/5 border-b border-border py-8 mb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Link href="/actualites"><span className="hover:text-primary cursor-pointer">Actualités</span></Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary font-medium line-clamp-1">{act.title}</span>
            </div>
            <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded mb-4">
              {act.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-serif text-primary leading-tight">{act.title}</h1>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-4">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-secondary" /> {act.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-secondary" /> {act.readTime} de lecture</span>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-md mb-8 border border-border">
            <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose max-w-none text-sm text-muted-foreground space-y-6 leading-relaxed">
            {act.content.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  // Filtrage des actualités
  const filteredActualites = selectedCategory === "Tous"
    ? actualites
    : actualites.filter((act) => act.category === selectedCategory);

  return (
    <div className="pb-16">
      {/* En-tête */}
      <section className="bg-primary/5 border-b border-border py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-serif">Actualités & Annonces</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Restez informé des décisions, missions de terrain et communiqués officiels du Ministère.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filtres par Catégorie */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-white text-muted-foreground border border-border hover:bg-muted hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Liste des actualités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredActualites.map((act) => (
            <article key={act.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border flex flex-col hover:shadow-md transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded">
                  {act.category}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase">{act.date} • {act.readTime} de lecture</span>
                  <h3 className="text-lg font-serif line-clamp-2 text-primary hover:text-secondary transition-colors">
                    <Link href={`/actualites/${act.id}`}>{act.title}</Link>
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{act.excerpt}</p>
                </div>
                <Link href={`/actualites/${act.id}`}>
                  <span className="inline-flex items-center text-xs font-bold text-primary hover:text-secondary transition-colors cursor-pointer">
                    Lire l'article <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
