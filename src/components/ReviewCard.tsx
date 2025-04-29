
import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../data/reviews';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const { name, date, rating, comment, serviceType, imageUrl } = review;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i}
          size={18}
          fill={i <= rating ? "#FFD700" : "none"}
          color={i <= rating ? "#FFD700" : "#D1D5DB"}
          className="inline-block"
        />
      );
    }
    return stars;
  };

  const getServiceLabel = () => {
    switch (serviceType) {
      case 'interior':
        return 'Nettoyage Intérieur';
      case 'exterior':
        return 'Nettoyage Extérieur';
      case 'complete':
        return 'Nettoyage Complet';
      default:
        return serviceType;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="flex space-x-1 my-1">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
          {getServiceLabel()}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{comment}</p>
      
      {imageUrl && (
        <div className="mt-2">
          <img 
            src={imageUrl} 
            alt={`Review by ${name}`} 
            className="w-full h-40 object-cover rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
