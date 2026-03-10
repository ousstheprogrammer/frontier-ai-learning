export interface Section {
  id: string;
  title: string;
  children?: Section[];
}

export const curriculum: Section[] = [
  {
    id: "nlp",
    title: "Natural Language Processing",
    children: [
      { id: "nlp-roadmap", title: "Roadmap" },
      { id: "nlp-resources", title: "Ressources & E-books" },
      { id: "nlp-projects", title: "Projets Pratiques" },
      { id: "nlp-exercises", title: "Banque d'Exercices" },
      { id: "nlp-veille", title: "Veille Technologique" },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    children: [
      { id: "cv-roadmap", title: "Roadmap" },
      { id: "cv-resources", title: "Ressources & E-books" },
      { id: "cv-projects", title: "Projets Pratiques" },
      { id: "cv-exercises", title: "Banque d'Exercices" },
      { id: "cv-veille", title: "Veille Technologique" },
    ],
  },
];
