
import React from 'react';
import ServiceCard from './ServiceCard';
import { useQuery } from '@tanstack/react-query';
import { serviceService } from '../services/api';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

const ServiceCardList: React.FC = () => {
  const { toast } = useToast();
  
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: serviceService.getAllServices,
    onError: () => {
      toast({
        title: "Erreur de chargement",
        description: "Impossible de charger les services. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    }
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(3).fill(null).map((_, index) => (
          <Skeleton key={index} className="h-72 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p className="text-red-600 font-semibold">Erreur de chargement des services</p>
        <p className="text-gray-600 mt-2">Veuillez actualiser la page ou réessayer plus tard.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services?.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          nameKey={service.nameKey}
          descKey={service.descKey}
          price={service.price}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default ServiceCardList;
