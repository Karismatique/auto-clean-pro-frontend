
export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  serviceType: string;
  imageUrl?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    date: '15/04/2025',
    rating: 5,
    comment: 'Service excellent ! Ma voiture semble neuve, je recommande vivement le nettoyage complet.',
    serviceType: 'complete',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=300'
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    date: '03/04/2025',
    rating: 4,
    comment: 'Très satisfait du service extérieur, rapide et efficace. Le personnel est professionnel.',
    serviceType: 'exterior'
  },
  {
    id: 3,
    name: 'Marie Leroy',
    date: '28/03/2025',
    rating: 5,
    comment: 'Parfait ! L\'intérieur de ma voiture n\'a jamais été aussi propre. Service impeccable.',
    serviceType: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1636358961706-94af8e2529ad?q=80&w=300'
  },
  {
    id: 4,
    name: 'Pierre Moreau',
    date: '15/03/2025',
    rating: 5,
    comment: 'Service de qualité supérieure. L\'option de désinfection vaut vraiment le coup !',
    serviceType: 'complete'
  },
  {
    id: 5,
    name: 'Isabelle Blanc',
    date: '10/03/2025',
    rating: 4,
    comment: 'Bon rapport qualité-prix. Personnel attentif aux détails.',
    serviceType: 'exterior'
  },
  {
    id: 6,
    name: 'Jean Dupont',
    date: '02/03/2025',
    rating: 5,
    comment: 'Je suis impressionné par l\'efficacité et la qualité du service. À recommander !',
    serviceType: 'complete',
    imageUrl: 'https://images.unsplash.com/photo-1616447614651-2958741508c9?q=80&w=300'
  },
];
