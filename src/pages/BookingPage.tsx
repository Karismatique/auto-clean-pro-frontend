
import React from 'react';
import { useTranslation } from 'react-i18next';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('booking')}</h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Réservez votre nettoyage auto dans l'une de nos 10 agences en France. Service professionnel avec des produits de qualité supérieure.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
          <BookingForm />
        </div>
        
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-primary/5 rounded-lg">
          <h2 className="font-bold text-xl mb-4">Informations Importantes</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Veuillez arriver 5-10 minutes avant votre rendez-vous.</li>
            <li>Nous acceptons les paiements par carte bancaire, espèces ou virement bancaire.</li>
            <li>Pour annuler ou modifier votre réservation, veuillez nous contacter au moins 24h à l'avance.</li>
            <li>Certaines options supplémentaires peuvent prolonger le temps de service.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
