
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';
import { reviews } from '../data/reviews';

const ReviewsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('customerReviews')}</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez ce que nos clients disent de nos services de nettoyage automobile professionnel.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">4.8</h3>
              <p className="text-gray-600">Note moyenne sur 5</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">15K+</h3>
              <p className="text-gray-600">Voitures nettoyées</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">80%</h3>
              <p className="text-gray-600">Clients réguliers</p>
            </div>
          </div>
        </div>

        {/* Write a Review Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{t('writeReview')}</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
