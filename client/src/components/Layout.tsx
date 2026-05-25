import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Facebook, Youtube, Linkedin } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Accueil", href: "/" },
    {
      name: "Le Ministère",
      href: "#",
      dropdown: [
        { name: "Le Ministre", href: "/le-ministre" },
        { name: "Organigramme", href: "/organigramme" },
        { name: "Structures Rattachées", href: "/structures" },
      ],
    },
    {
      name: "Réglementations",
      href: "#",
      dropdown: [
        { name: "Code des Investissements", href: "/code-des-investissements" },
      ],
    },
    { name: "Forum OCI-Afrique", href: "/forum-oci-afrique" },
    { name: "Projets en cours", href: "/projets-en-cours" },
    { name: "Espace Citoyen", href: "/citoyen" },
    { name: "Médiathèque", href: "/galerie" },
    { name: "Actualités", href: "/actualites" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top Header - Style Primature Strict */}
      <div className="bg-white py-4 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Bloc Gauche : Armoirie, République, Devise, Filet Tricolore, Titre */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src="/manus-storage/IMG_9586.PNG"
              alt="Armoirie du Mali"
              className="h-16 w-auto object-contain"
            />
            <div className="flex flex-col items-center sm:items-start">
              {/* République du Mali */}
              <span className="text-[11px] font-black tracking-widest text-slate-800 uppercase leading-none">
                RÉPUBLIQUE DU MALI
              </span>
              {/* Devise */}
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-0.5 leading-none">
                UN PEUPLE - UN BUT - UNE FOI
              </span>
              {/* Filet tricolore horizontal */}
              <div className="flex h-[3px] w-32 my-1.5">
                <div className="bg-[#009A44] w-1/3 h-full"></div>
                <div className="bg-[#FCD116] w-1/3 h-full"></div>
                <div className="bg-[#CE1126] w-1/3 h-full"></div>
              </div>
              {/* Titre de l'Institution */}
              <span className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight uppercase leading-none font-sans">
                MINISTÈRE DE L'INDUSTRIE ET DU COMMERCE
              </span>
            </div>
          </div>

          {/* Bloc Droite : Réseaux Sociaux Style Primature & PAG */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61550217756018"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-[#3b5998] text-white rounded shadow-sm hover:opacity-90 transition-opacity"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-[#ff0000] text-white rounded shadow-sm hover:opacity-90 transition-opacity"
            >
              <Youtube className="w-4 h-4 fill-current" />
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/CommerceMali"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-black text-white rounded shadow-sm hover:opacity-90 transition-opacity"
            >
              <span className="font-black text-xs">X</span>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/99864922/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center bg-[#0077b5] text-white rounded shadow-sm hover:opacity-90 transition-opacity"
            >
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
            {/* Bouton PAG */}
            <button className="h-8 px-4 bg-[#5caae6] text-white text-xs font-black uppercase rounded shadow-sm hover:bg-[#4b99d5] transition-colors">
              PAG
            </button>
          </div>
        </div>
      </div>

      {/* Barre de navigation - Bleu ciel uni style Primature */}
      <nav className="bg-[#5caae6] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            {/* Navigation Desktop (Affiche le menu complet à partir de lg) */}
            <div className="hidden lg:flex items-center gap-0.5 h-full">
              {navigation.map((item) => {
                const isDropdown = !!item.dropdown;
                const isDropdownActive = activeDropdown === item.name;
                const isActive =
                  location === item.href ||
                  (isDropdown && item.dropdown?.some((sub) => location === sub.href));

                return (
                  <div
                    key={item.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => isDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => isDropdown && setActiveDropdown(null)}
                  >
                    {isDropdown ? (
                      <button
                        onClick={() => setActiveDropdown(isDropdownActive ? null : item.name)}
                        className={`px-3 h-full text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                          isActive
                            ? "bg-[#3d8fc7]"
                            : "hover:bg-[#4b99d5]"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    ) : (
                      <Link href={item.href}>
                        <span className={`px-3 h-full flex items-center text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#3d8fc7]"
                            : "hover:bg-[#4b99d5]"
                        }`}>
                          {item.name}
                        </span>
                      </Link>
                    )}

                    {/* Menu déroulant */}
                    {isDropdown && isDropdownActive && (
                      <div className="absolute left-0 top-12 w-64 bg-white border border-slate-150 rounded-b-md shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        {item.dropdown?.map((subItem) => (
                          <Link key={subItem.name} href={subItem.href}>
                            <span className={`block px-4 py-2 text-xs font-bold uppercase text-slate-700 hover:bg-blue-50 hover:text-[#5caae6] transition-colors cursor-pointer ${
                              location === subItem.href ? "bg-blue-50 text-[#5caae6]" : ""
                            }`}>
                              {subItem.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Menu Mobile Button (S'affiche en dessous de lg) */}
            <div className="lg:hidden flex items-center justify-between w-full h-full">
              <span className="text-xs font-black uppercase tracking-wider">MENU</span>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 rounded hover:bg-[#4b99d5] focus:outline-none"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile (S'affiche en dessous de lg) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 py-2 px-4 space-y-1 shadow-inner text-slate-800">
            {navigation.map((item) => {
              const isDropdown = !!item.dropdown;
              const isDropdownActive = activeDropdown === item.name;
              const isActive =
                location === item.href ||
                (isDropdown && item.dropdown?.some((sub) => location === sub.href));

              return (
                <div key={item.name} className="space-y-1">
                  {isDropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(isDropdownActive ? null : item.name)}
                        className={`flex justify-between items-center w-full px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                          isActive ? "bg-blue-50 text-[#5caae6]" : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownActive ? "rotate-180" : ""}`} />
                      </button>
                      {isDropdownActive && (
                        <div className="pl-4 py-1 flex flex-col gap-1 bg-slate-50 rounded mt-1">
                          {item.dropdown?.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href}>
                              <span
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className={`block px-4 py-2 rounded text-xs font-bold uppercase cursor-pointer ${
                                  location === subItem.href ? "text-[#5caae6] font-extrabold" : "text-slate-600 hover:text-[#5caae6]"
                                }`}
                              >
                                {subItem.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href}>
                      <span
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                        className={`block px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                          isActive ? "bg-[#5caae6] text-white" : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </nav>

      {/* Contenu Principal */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Pied de page (Footer) - Style Primature Bleu Sombre */}
      <footer className="bg-[#1b2b4a] text-white border-t-4 border-[#FCD116]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Colonne 1 : À propos */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/manus-storage/IMG_9586.PNG"
                  alt="Armoirie du Mali"
                  className="h-14 w-auto brightness-0 invert"
                />
                <div className="font-serif">
                  <div className="text-xs font-extrabold text-[#5caae6] uppercase tracking-wider">MIC MALI</div>
                  <div className="text-sm font-extrabold uppercase">Ministère de l'Industrie et du Commerce</div>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Garant de la souveraineté économique nationale, de la promotion industrielle, de la régulation du commerce et de l'amélioration du climat des affaires en République du Mali.
              </p>
            </div>

            {/* Colonne 2 : Liens Rapides */}
            <div>
              <h3 className="text-xs font-extrabold text-[#5caae6] uppercase tracking-wider mb-4 font-sans">Liens Rapides</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/le-ministre">
                    <span className="hover:text-[#5caae6] flex items-center gap-1 transition-colors cursor-pointer text-gray-300">
                      Le Ministre
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/organigramme">
                    <span className="hover:text-[#5caae6] flex items-center gap-1 transition-colors cursor-pointer text-gray-300">
                      Organigramme
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/structures">
                    <span className="hover:text-[#5caae6] flex items-center gap-1 transition-colors cursor-pointer text-gray-300">
                      Structures Rattachées
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/code-des-investissements">
                    <span className="hover:text-[#5caae6] flex items-center gap-1 transition-colors cursor-pointer text-gray-300">
                      Code des Investissements
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 3 : Espaces Usagers */}
            <div>
              <h3 className="text-xs font-extrabold text-[#5caae6] uppercase tracking-wider mb-4 font-sans">Espaces Usagers</h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/citoyen">
                    <span className="hover:text-[#5caae6] flex items-center gap-1 transition-colors cursor-pointer text-gray-300">
                      Simulateur des Prix
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/projets-en-cours">
                    <span className="hover:text-[#5caae6] flex items-center gap-1 transition-colors cursor-pointer text-gray-300">
                      Projets en cours
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/galerie">
                    <span className="hover:text-[#5caae6] flex items-center gap-1 transition-colors cursor-pointer text-gray-300">
                      Médiathèque (Photos)
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 4 : Contacts */}
            <div className="space-y-3 text-xs">
              <h3 className="text-xs font-extrabold text-[#5caae6] uppercase tracking-wider mb-4 font-sans">Contact</h3>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#5caae6] shrink-0 mt-0.5" />
                <span>Bât. 08, 3ème Étage, Cité Administrative, Bamako, Mali</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#5caae6] shrink-0" />
                <a href="tel:+22320283211" className="hover:text-[#5caae6]">+223 20 28 32 11</a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-[#5caae6] shrink-0" />
                <a href="mailto:contact@micmali.ml" className="hover:text-[#5caae6]">contact@micmali.ml</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Ministère de l'Industrie et du Commerce du Mali. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61550217756018" target="_blank" rel="noopener noreferrer" className="hover:text-[#5caae6] transition-colors">Facebook</a>
              <a href="https://x.com/CommerceMali" target="_blank" rel="noopener noreferrer" className="hover:text-[#5caae6] transition-colors">X (Twitter)</a>
              <a href="https://www.linkedin.com/company/99864922/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5caae6] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
