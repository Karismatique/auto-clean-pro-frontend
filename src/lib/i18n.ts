
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// French translations
const resourcesFr = {
  translation: {
    // Navbar
    home: 'Accueil',
    booking: 'Réservation',
    about: 'À Propos',
    reviews: 'Avis',
    blog: 'Blog',
    account: 'Compte',
    
    // Hero
    welcomeTitle: 'Bienvenue chez Auto Clean Pro',
    welcomeSubtitle: 'Le leader du nettoyage intérieur et extérieur en France',
    bookNow: 'Réserver Maintenant',
    
    // Services
    ourServices: 'Nos Services',
    interior: 'Intérieur',
    exterior: 'Extérieur',
    complete: 'Complet',
    interiorDesc: 'Nettoyage complet de l\'habitacle, des surfaces, des sièges et des tapis.',
    exteriorDesc: 'Lavage de la carrosserie, polissage et traitement de protection.',
    completeDesc: 'Combinaison du nettoyage intérieur et extérieur pour une finition parfaite.',
    
    // Locations
    ourLocations: 'Nos Agences',
    
    // Footer
    contactUs: 'Contactez-Nous',
    followUs: 'Suivez-Nous',
    copyright: '© 2025 Auto Clean Pro. Tous droits réservés.',
    
    // Booking
    selectAgency: 'Sélectionnez une agence',
    selectService: 'Sélectionnez un service',
    selectDate: 'Sélectionnez une date',
    additionalOptions: 'Options supplémentaires',
    waxing: 'Cirage',
    engineCleaning: 'Nettoyage moteur',
    disinfection: 'Désinfection',
    vehicleDetails: 'Détails du véhicule',
    make: 'Marque',
    model: 'Modèle',
    licensePlate: 'Plaque d\'immatriculation',
    vehicleType: 'Type de véhicule',
    sedan: 'Berline',
    suv: 'SUV',
    van: 'Camionnette',
    price: 'Prix Total:',
    payNow: 'Payer Maintenant',
    
    // About
    ourMission: 'Notre Mission',
    ourValues: 'Nos Valeurs',
    ourTeam: 'Notre Équipe',
    faq: 'Questions Fréquentes',
    
    // Reviews
    customerReviews: 'Avis Clients',
    writeReview: 'Écrire un Avis',
    
    // Blog
    latestArticles: 'Derniers Articles',
    readMore: 'Lire Plus',
    subscribe: 'S\'abonner à la Newsletter',
  }
};

// English translations
const resourcesEn = {
  translation: {
    // Navbar
    home: 'Home',
    booking: 'Booking',
    about: 'About',
    reviews: 'Reviews',
    blog: 'Blog',
    account: 'Account',
    
    // Hero
    welcomeTitle: 'Welcome to Auto Clean Pro',
    welcomeSubtitle: 'The leading interior and exterior car cleaning service in France',
    bookNow: 'Book Now',
    
    // Services
    ourServices: 'Our Services',
    interior: 'Interior',
    exterior: 'Exterior',
    complete: 'Complete',
    interiorDesc: 'Thorough cleaning of the cabin, surfaces, seats, and carpets.',
    exteriorDesc: 'Car wash, polishing, and protective treatment.',
    completeDesc: 'Combination of interior and exterior cleaning for a perfect finish.',
    
    // Locations
    ourLocations: 'Our Locations',
    
    // Footer
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    copyright: '© 2025 Auto Clean Pro. All rights reserved.',
    
    // Booking
    selectAgency: 'Select an agency',
    selectService: 'Select a service',
    selectDate: 'Select a date',
    additionalOptions: 'Additional options',
    waxing: 'Waxing',
    engineCleaning: 'Engine cleaning',
    disinfection: 'Disinfection',
    vehicleDetails: 'Vehicle Details',
    make: 'Make',
    model: 'Model',
    licensePlate: 'License Plate',
    vehicleType: 'Vehicle Type',
    sedan: 'Sedan',
    suv: 'SUV',
    van: 'Van',
    price: 'Total Price:',
    payNow: 'Pay Now',
    
    // About
    ourMission: 'Our Mission',
    ourValues: 'Our Values',
    ourTeam: 'Our Team',
    faq: 'Frequently Asked Questions',
    
    // Reviews
    customerReviews: 'Customer Reviews',
    writeReview: 'Write a Review',
    
    // Blog
    latestArticles: 'Latest Articles',
    readMore: 'Read More',
    subscribe: 'Subscribe to Newsletter',
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: resourcesFr,
      en: resourcesEn,
    },
    lng: 'fr', // Default language
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
