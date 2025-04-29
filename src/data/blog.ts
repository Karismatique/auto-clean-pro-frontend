
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Comment garder votre voiture propre entre deux lavages",
    excerpt: "Découvrez nos astuces pour maintenir la propreté de votre véhicule au quotidien.",
    date: "21/04/2025",
    author: "Michel Blanc",
    category: "Conseils",
    imageUrl: "https://images.unsplash.com/photo-1669908800693-85d5df01e217?q=80&w=500",
    slug: "garder-voiture-propre"
  },
  {
    id: 2,
    title: "Les meilleurs produits pour un intérieur impeccable",
    excerpt: "Notre sélection de produits professionnels pour nettoyer l'habitacle de votre véhicule.",
    date: "15/04/2025",
    author: "Sophie Martin",
    category: "Produits",
    imageUrl: "https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=500",
    slug: "meilleurs-produits-interieur"
  },
  {
    id: 3,
    title: "Pourquoi choisir un lavage écologique ?",
    excerpt: "Les avantages environnementaux et économiques du lavage écologique pour votre véhicule.",
    date: "10/04/2025",
    author: "Jean Dupont",
    category: "Écologie",
    imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=500",
    slug: "lavage-ecologique"
  },
  {
    id: 4,
    title: "Comment protéger la peinture de votre voiture",
    excerpt: "Techniques professionnelles pour préserver l'éclat de la carrosserie de votre véhicule.",
    date: "05/04/2025",
    author: "Thomas Dubois",
    category: "Conseils",
    imageUrl: "https://images.unsplash.com/photo-1507833423370-a126b89d394b?q=80&w=500",
    slug: "proteger-peinture-voiture"
  },
  {
    id: 5,
    title: "Les erreurs à éviter lors du nettoyage de votre voiture",
    excerpt: "Ne commettez plus ces erreurs courantes qui peuvent endommager votre véhicule.",
    date: "01/04/2025",
    author: "Marie Leroy",
    category: "Conseils",
    imageUrl: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=500",
    slug: "erreurs-nettoyage-voiture"
  },
  {
    id: 6,
    title: "Nettoyage de printemps : préparez votre voiture pour la belle saison",
    excerpt: "Guide complet pour un nettoyage approfondi après l'hiver.",
    date: "25/03/2025",
    author: "Pierre Moreau",
    category: "Saisonnier",
    imageUrl: "https://images.unsplash.com/photo-1605615923013-16de7cb2c65c?q=80&w=500",
    slug: "nettoyage-printemps"
  }
];
