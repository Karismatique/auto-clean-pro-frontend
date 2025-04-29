
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Combien de temps dure un nettoyage complet ?",
    answer: "Un nettoyage complet dure généralement entre 2 et 3 heures, selon l'état du véhicule et les options choisies. Pour les véhicules très sales ou de grande taille, le temps peut être légèrement plus long."
  },
  {
    id: 2,
    question: "Puis-je attendre pendant le nettoyage de ma voiture ?",
    answer: "Oui, toutes nos agences disposent d'espaces d'attente confortables avec Wi-Fi gratuit, café et magazines. Vous pouvez également quitter l'agence et revenir à l'heure convenue pour récupérer votre véhicule."
  },
  {
    id: 3,
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements par carte bancaire, espèces, et via notre application mobile. Certaines agences acceptent également les chèques. Pour les entreprises, nous proposons des facturations mensuelles."
  },
  {
    id: 4,
    question: "Faut-il prendre rendez-vous à l'avance ?",
    answer: "Bien que nous acceptions les clients sans rendez-vous, nous recommandons fortement de réserver à l'avance, surtout pendant les périodes de forte affluence comme le weekend. Vous pouvez réserver facilement via notre site web ou par téléphone."
  },
  {
    id: 5,
    question: "Utilisez-vous des produits écologiques ?",
    answer: "Oui, Auto Clean Pro s'engage pour l'environnement. Nous utilisons des produits biodégradables et des techniques économes en eau. Notre gamme 'Éco-Clean' est spécialement conçue pour être efficace tout en respectant l'environnement."
  },
  {
    id: 6,
    question: "Proposez-vous des forfaits pour les entreprises ?",
    answer: "Absolument, nous offrons des forfaits spéciaux pour les flottes d'entreprises avec des tarifs dégressifs selon le nombre de véhicules. Contactez notre service commercial pour obtenir un devis personnalisé."
  },
  {
    id: 7,
    question: "Que faire si je ne suis pas satisfait du service ?",
    answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas entièrement satisfait, veuillez nous en informer immédiatement et nous remédierons à la situation sans frais supplémentaires. Nous offrons une garantie de satisfaction sur tous nos services."
  },
  {
    id: 8,
    question: "Nettoyez-vous aussi les motos et camping-cars ?",
    answer: "Oui, en plus des voitures, nous nettoyons également les motos, les camping-cars et même les bateaux dans certaines de nos agences. Les tarifs varient en fonction du type et de la taille du véhicule."
  }
];
