
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CarFront, SprayCanIcon, CircleCheckIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  nameKey: string;
  descKey: string;
  price: number;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, nameKey, descKey, price, icon }) => {
  const { t } = useTranslation();

  const getIcon = () => {
    switch (icon) {
      case 'car':
        return <CarFront size={36} className="text-primary" />;
      case 'spray-can':
        return <SprayCanIcon size={36} className="text-primary" />;
      case 'circle-check':
        return <CircleCheckIcon size={36} className="text-primary" />;
      default:
        return <CarFront size={36} className="text-primary" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold text-center mb-2">{t(nameKey)}</h3>
      <p className="text-gray-600 text-center mb-4">{t(descKey)}</p>
      <div className="text-center font-bold text-lg text-primary mb-4">{price} €</div>
      <Link 
        to={`/booking?service=${id}`} 
        className="block w-full bg-primary hover:bg-primary/90 text-white text-center py-2 rounded transition-colors"
      >
        {t('bookNow')}
      </Link>
    </div>
  );
};

export default ServiceCard;
