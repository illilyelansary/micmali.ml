export interface Actualite {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: "Industrie" | "Commerce" | "Hydrocarbures" | "Institutionnel";
  readTime: string;
}

export interface Structure {
  id: string;
  sigle: string;
  nom: string;
  description: string;
  missions: string[];
  contact?: string;
}

export interface OrganigrammeMembre {
  nom: string;
  poste: string;
  image: string;
}

export interface Projet {
  id: string;
  titre: string;
  description: string;
  statut: string;
  details: string[];
}

export const actualites: Actualite[] = [
  {
    id: "approvisionnement-hydrocarbures",
    title: "Approvisionnement du Mali en Hydrocarbures",
    excerpt: "Rencontre hebdomadaire du Ministre de l’Industrie et du Commerce avec les acteurs du secteur des hydrocarbures pour assurer la régularité sur le territoire national.",
    content: `Le Ministre de l’Industrie et du Commerce a présidé, ce jeudi 30 Octobre 2025, la troisième rencontre hebdomadaire avec les opérateurs du secteur des hydrocarbures, réunis au sein du Groupement Professionnel du Pétrole (GPP) et du Groupement Malien des Professionnels du Pétrole (GMPP).

Cette séance de travail a permis de faire le point sur la mise en œuvre des recommandations issues de la précédente réunion, de formuler de nouvelles instructions et de convenir des mesures à entreprendre pour assurer la continuité et la régularité de l’approvisionnement en produits pétroliers sur l’ensemble du territoire national.

De prime abord, le Ministre s’est félicité des améliorations constatées au cours de la semaine écoulée, résultat d’une coordination renforcée entre les services techniques du Ministère et les opérateurs du secteur ainsi que toutes les parties prenantes.

Il convient de rappeler que ces rencontres hebdomadaires constituent un cadre stratégique de concertation entre le Gouvernement et les professionnels du pétrole, garantissant un suivi rapproché et des réponses adaptées aux enjeux du moment.

Parmi les principales décisions annoncées, la désignation de stations-service dédiées aux urgences (ambulances, corbillards, taxis), afin d’assurer la continuité des services essentiels, l’ouverture des stations 24h/24 et 7j/7, conformément à un arrêté interministériel déjà signé, dont la diffusion interviendra très rapidement et enfin la mise en place de mesures d’urgence pour apporter une réponse rapide au déficit d’approvisionnement des hydrocarbures dans les régions de Ségou, Mopti, Koutiala et San qui seront très rapidement ravitaillé pour le plus grand bonheur des populations !`,
    date: "30 Octobre 2025",
    image: "/manus-storage/PHOTO-2025-07-20-18-34-42.jpg",
    category: "Hydrocarbures",
    readTime: "2 min"
  },
  {
    id: "journee-coton-rome",
    title: "Journée mondiale du Coton : Le Mali en première ligne à Rome pour défendre la filière",
    excerpt: "Le Ministre Moussa Alassane DIALLO, Coordinateur en exercice du Groupe C4+, a pris part à la célébration au siège de la FAO pour un avenir plus équitable.",
    content: `Le Ministre de l’Industrie et du Commerce M. Moussa Alassane DIALLO, Coordinateur en exercice du Groupe C4+, a pris part, ce mardi 7 octobre 2025, à la célébration de la Journée mondiale du coton, organisée au siège de la FAO à Rome, en Italie. Cette rencontre internationale de haut niveau a réuni décideurs, partenaires techniques, organisations internationales et acteurs de la filière autour d’un objectif commun : bâtir un avenir plus équitable et durable pour le coton.

La journée a démarré par une visite guidée de l’exposition consacrée à la diversité de la filière cotonnière mondiale, retraçant le parcours de la fibre, du champ à la mode, en compagnie de son homologue, Ministre en charge du commerce du Tchad, suivi de la cérémonie inaugurale.

Dans son allocution, le Ministre a salué l’engagement de la FAO et des organisations partenaires dans la promotion du coton africain, tout en rappelant la place stratégique de cette culture dans les économies des pays producteurs.

Pour le Mali, le coton représente près de 11,3 % des recettes d’exportation, 3,7 % du PIB, et fait vivre directement près de 4 millions de personnes.

Le Ministre a également lancé un appel appuyé aux membres de l’Organisation mondiale du commerce (OMC), afin que les engagements pris à Hong Kong, Bali et Nairobi soient enfin traduits en actes concret, notamment sur la question cruciale des soutiens internes qui faussent la compétitivité du coton africain.`,
    date: "7 Octobre 2025",
    image: "/manus-storage/PHOTO-2025-10-07-13-31-13.jpg",
    category: "Industrie",
    readTime: "2 min"
  },
  {
    id: "relance-usines-sucrieres",
    title: "Relance des usines sucrières : le Ministre rassure et s'engage",
    excerpt: "Mission de terrain du Ministre de l’Industrie et du Commerce aux usines sucrières de Dougabougou, Bewani et Siribala pour une reprise industrielle forte.",
    content: `Sous l’impulsion du Président de la Transition, Chef de l’État, S.E. le Général d’Armée Assimi GOÏTAS, le Ministre de l’Industrie et du Commerce a conduit, ce lundi 08 Septembre 2025, une mission de terrain aux usines sucrières à Dougabougou, Bewani et Siribala.

Cette visite s'inscrit dans la vision stratégique de reconquête de notre souveraineté industrielle et de valorisation de nos productions nationales. Le Ministre a pu échanger directement avec les équipes techniques et les travailleurs, réaffirmant le soutien indéfectible de l'État pour une reprise d'activité rapide et performante.

La relance de ces usines permettra non seulement de réduire notre dépendance aux importations de sucre, mais aussi de créer des milliers d'emplois directs et indirects pour les jeunes de ces régions, dynamisant ainsi l'économie locale et nationale.`,
    date: "8 Septembre 2025",
    image: "/manus-storage/PHOTO-2025-09-09-11-23-33.jpg",
    category: "Industrie",
    readTime: "1 min"
  },
  {
    id: "lancement-recensement-industriel",
    title: "Lancement du Recensement Industriel National au Mali",
    excerpt: "Le Ministère de l'Industrie et du Commerce pose les bases d'une industrie souveraine et planifiée à travers un recensement d'envergure.",
    content: `La Chambre de Commerce et d'Industrie du Mali (CCIM) a abrité le lancement officiel du Recensement Industriel National, présidé par le Ministre de l'Industrie et du Commerce, Moussa Alassane Diallo.

Cette initiative d'envergure nationale vise à cartographier avec précision l'ensemble du tissu industriel malien afin d'orienter au mieux les politiques publiques de soutien, de modernisation et de restructuration des entreprises.

"On ne peut piloter ce que l'on ne mesure pas", a rappelé le Ministre lors de son discours d'ouverture, soulignant que ce recensement est un outil indispensable pour consolider notre souveraineté économique et attirer des investissements stratégiques.`,
    date: "26 Janvier 2026",
    image: "/manus-storage/PHOTO-2025-07-20-21-38-47.jpg",
    category: "Industrie",
    readTime: "3 min"
  }
];

export const structures: Structure[] = [
  {
    id: "dni",
    sigle: "DNI",
    nom: "Direction Nationale de l’Industrie",
    description: "Structure centrale chargée d'élaborer et de mettre en œuvre la politique industrielle nationale du Mali.",
    missions: [
      "Élaboration des éléments de la politique industrielle nationale",
      "Promotion et suivi des investissements industriels",
      "Instruction des dossiers d'agrément aux avantages du Code des Investissements",
      "Réalisation d'études sectorielles sur l'industrie malienne"
    ]
  },
  {
    id: "dgcc",
    sigle: "DGCC",
    nom: "Direction Générale du Commerce, de la Consommation et de la Concurrence",
    description: "Organe de régulation des activités commerciales, de protection des consommateurs et de surveillance du marché.",
    missions: [
      "Régulation du commerce intérieur et extérieur",
      "Veille au respect des règles de saine concurrence",
      "Protection des consommateurs et contrôle de la qualité des produits",
      "Suivi de l'approvisionnement du pays en produits de première nécessité"
    ]
  },
  {
    id: "api-mali",
    sigle: "API-Mali",
    nom: "Agence pour la Promotion des Investissements au Mali",
    description: "Guichet unique pour la création d'entreprises et l'attraction des investissements directs nationaux et étrangers.",
    missions: [
      "Facilitation des démarches administratives de création d'entreprises",
      "Promotion des opportunités d'investissement au Mali",
      "Accompagnement des investisseurs nationaux et internationaux",
      "Amélioration continue du climat des affaires"
    ]
  },
  {
    id: "apex-mali",
    sigle: "APEX-Mali",
    nom: "Agence pour la Promotion des Exportations du Mali",
    description: "Organisme public dédié au développement et à la diversification des exportations maliennes.",
    missions: [
      "Promotion du 'Made in Mali' sur les marchés internationaux",
      "Renforcement des capacités des entreprises exportatrices",
      "Recherche de débouchés et participation aux foires internationales",
      "Fourniture d'informations commerciales stratégiques"
    ]
  },
  {
    id: "amanorm",
    sigle: "AMANORM",
    nom: "Agence Malienne de Normalisation et de Promotion de la Qualité",
    description: "Établissement public chargé de la normalisation, de la certification et de la promotion de la culture qualité.",
    missions: [
      "Élaboration et diffusion des normes nationales",
      "Gestion du système national de certification",
      "Sensibilisation et formation des entreprises aux démarches qualité",
      "Représentation du Mali auprès des instances internationales de normalisation (ISO, etc.)"
    ]
  },
  {
    id: "ccim",
    sigle: "CCIM",
    nom: "Chambre de Commerce et d’Industrie du Mali",
    description: "Institution consulaire représentant les intérêts des secteurs du commerce, de l'industrie et des services.",
    missions: [
      "Représentation et défense des intérêts des opérateurs économiques",
      "Appui-conseil et formation des entreprises membres",
      "Gestion d'infrastructures d'intérêt public commercial ou industriel",
      "Facilitation du dialogue public-privé"
    ]
  }
];

export const ministreBio = {
  nom: "M. Moussa Alassane DIALLO",
  titre: "Ministre de l'Industrie et du Commerce",
  dateNomination: "1er Juillet 2023",
  image: "/manus-storage/ministre-diallo_3d034265.jpg",
  biographie: `Nommé Ministre de l’Industrie et du Commerce, le 1er Juillet 2023, M. Moussa Alassane Diallo incarne l’expertise, la rigueur et l’engagement au service du développement national. Originaire de Ségou, né le 20 avril 1957, il est l’un des visages les plus respectés de la finance agricole au Mali.

Diplômé en 1983 de l’Institut Polytechnique Rural de Katibougou en ingénierie du génie rural, il débute sa carrière en 1985 à la Banque Nationale de Développement Agricole (BNDA), institution dans laquelle il gravit patiemment tous les échelons, jusqu’à en devenir une figure emblématique. Sa trajectoire professionnelle épouse celle de cette banque qu’il a contribué à moderniser et à positionner comme un acteur stratégique du financement agricole.

Au fil des ans, il enrichit son profil à travers plusieurs formations spécialisées, notamment sur le financement des PME/PMI au Centre ouest-africain de formation de la BCEAO, la régulation des marchés céréaliers ou encore la gestion bancaire à l’Institut Technique de Banque du CNAM de Paris.

Homme de terrain autant que stratège, il a dirigé tour à tour l’agence BNDA de Fana (1990-1992), le service Exploitation (1992-1996), puis le département Réseau et Exploitation (1996-2006), avant d’accéder à la Direction générale de la Banque. Il occupera ensuite les fonctions d’Administrateur représentant l’État malien, de Président Directeur Général, puis de Président du Conseil d’administration à partir de 2017.

À la BNDA, son empreinte est visible : informatisation du traitement des crédits, pilotage du changement de système d’information (introduction du progiciel SAB), contribution active à tous les plans de développement de la banque, participation à des organes stratégiques comme le Comité de suivi du Projet Élevage Nord-Est ou encore le Fonds auto-renouvelable pour l’emploi.

Au-delà de la BNDA, Moussa Alassane Diallo s’est imposé comme une référence régionale. Il a présidé l’Association professionnelle des banques et établissements financiers du Mali, mais aussi celle de l’UEMOA. Il a été, à deux reprises, président de la zone Afrique de l’Ouest francophone de l’Association africaine de crédit rural et agricole, et vice-président du Conseil national du patronat du Mali.

Moussa Alassane DIALLO est un homme de dossiers, attaché à l’efficacité et à la souveraineté économique, qui entend mettre son expérience au service de la transformation structurelle du pays.`
};

export const organigramme: OrganigrammeMembre[] = [
  { nom: "M. Moussa Alassane DIALLO", poste: "Le Ministre", image: "/manus-storage/ministre-diallo_3d034265.jpg" },
  { nom: "Ibrahima dit Fefe KONE", poste: "Chef de Cabinet", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Aliou AG MOSSA", poste: "Chargé de Mission", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Tabara KEITA", poste: "Chargé de Mission", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Soungalo SANOGO", poste: "Chargé de Mission", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Lassine COULIBALY", poste: "Chargé de Mission", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Ibrahim Ahmadou TOURE", poste: "Chargé de Mission", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Boubacar BALLO", poste: "Conseiller Technique", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Demba TOUNKARA", poste: "Conseiller Technique", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Dr Mohamed SIBY", poste: "Conseiller Technique", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Mme DIARRAH Assa SYLLA", poste: "Conseiller Technique", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Mme MAIGA Mariam MAIGA", poste: "Conseiller Technique", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Bakary KONE", poste: "Attaché de Cabinet", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Massama SIDIBE", poste: "Secrétariat particulier", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Alassane OUEDRAGO", poste: "Chef de service Courrier", image: "/manus-storage/IMG_9586.PNG" },
  { nom: "Mme FOMBA Mahaicha", poste: "Secrétariat particulier", image: "/manus-storage/IMG_9586.PNG" }
];

export const projects: Projet[] = [
  {
    id: "digitalisation",
    titre: "Initiatives de Digitalisation de l'Administration",
    description: "Modernisation des services du Ministère de l'Industrie et du Commerce pour faciliter l'accès des citoyens et des entreprises aux services publics.",
    statut: "En cours",
    details: [
      "Dématérialisation complète des demandes d'agrément industriel.",
      "Mise en place d'une plateforme d'information sur les prix des denrées de première nécessité (DGCC).",
      "Système de suivi numérique des importations et des exportations pour lutter contre la fraude.",
      "Portail d'orientation pour les investisseurs industriels nationaux et internationaux."
    ]
  }
];

export const codeInvestissements = {
  description: "Le Code des Investissements de la République du Mali offre un cadre attractif, transparent et sécurisé pour tous les investisseurs nationaux et étrangers.",
  secteurs: [
    {
      titre: "Agriculture et Agro-industrie",
      description: "Exonérations fiscales majeures pour les projets de transformation des produits agricoles locaux (coton, mangue, bétail-viande, céréales)."
    },
    {
      titre: "Banques et Services Financiers",
      description: "Facilités de transfert de capitaux et garanties de sécurité pour les investissements dans le secteur bancaire et de la microfinance."
    },
    {
      titre: "Énergie et Infrastructures",
      description: "Incitations spéciales pour le développement des énergies renouvelables (solaire, biomasse) et des infrastructures logistiques industrielles."
    },
    {
      titre: "Institutions et Garanties",
      description: "Protection contre la nationalisation, égalité de traitement entre investisseurs nationaux et étrangers, et recours à l'arbitrage international (CCIM, CIRDI)."
    }
  ]
};

export const structuresRattacheesCompletes = [
  "La Direction Nationale de l’Industrie (DNI)",
  "La Directeur Général du Commerce, de la Consommation et de la Concurrence (DGCC)",
  "La Direction Générale l’Agence pour la Promotion des Investissements au Mali (API / MALI)",
  "La Direction Générale de l’Agence pour la Promotion des Exportations (APEX-Mali)",
  "La Direction Générale de l’Agence Malienne de Normalisation Promotion de la Qualité (AMANORM)",
  "La Direction Nationale des Petites et Moyennes Entreprises (DNPME)",
  "La Bureau de Restructuration et de Mise à Niveau des Entreprises industrielles (BRMN)",
  "L'Observatoire National de l’Industrie (ONI)",
  "La Direction de l’Agence pour l’Aménagement et la Gestion des Zones Industrielles (AZI-SA)",
  "La Direction des Ressources Humaines du secteur du Développement Economique et des Finances (DRH)",
  "La Direction des Finances et du Matériel (DFM-MIC)",
  "Le Centre Malien de Promotion de la Propriété Industrielle (CEMAPI)",
  "Le Centre de Promotion et d’Appui des Systèmes Financiers Décentralisés (CPA/SFD)",
  "La Cellule de Planification et de Statistique (CPS-SICAEPIP)",
  "La Cellule Technique des Reformes du Climat des Affaires (CTRCA)",
  "Le Secrétariat Technique Permanent du Conseil Supérieur du Secteur Privé (STP/CSSP)",
  "L’Unité de Mise en Œuvre du Cadre Intégré (UMOCI)",
  "Le Mécanisme de Refinancement des Systèmes Financiers Décentralisés (MEREF-SFD)",
  "La Cellule d’Appui à l’Aménagement et à la Gestion des Marchés (CAAGM)",
  "L’Agence Malienne de Métrologie (AMAM)",
  "Le Projet d'appui à l'opérationnalisation du Prog pour le Dev à l'Exportation de la Viande du Mali (PRODEVIM)",
  "La Cellule d’Appui à la Décentralisation et à la Déconcentration (CADD)",
  "Le Centre pour le Développement du secteur Agroalimentaire (CDA)",
  "La Chambre de Commerce et d’Industrie du Mali (CCIM)"
];
