
import React, { useEffect, useRef, useState } from 'react';
import { Agency } from '../data/agencies';
import { MapPin } from 'lucide-react';
import { agencyService } from '../services/api';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

const LocationMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null);
  const { toast } = useToast();
  
  // Fetch agencies using React Query
  const { data: agencies, isLoading, error } = useQuery({
    queryKey: ['agencies'],
    queryFn: agencyService.getAllAgencies,
    onError: () => {
      toast({
        title: "Erreur de chargement",
        description: "Impossible de charger les agences. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    }
  });
  
  useEffect(() => {
    // Placeholder for Google Maps initialization
    console.log('Map would initialize here with Google Maps API');
    
    // In a real implementation:
    // const map = new google.maps.Map(mapRef.current, {
    //   center: { lat: 46.603354, lng: 1.888334 }, // Center of France
    //   zoom: 6,
    // });
    //
    // Add markers for each agency
    // agencies?.forEach(agency => {
    //   const marker = new google.maps.Marker({
    //     position: { lat: agency.lat, lng: agency.lng },
    //     map: map,
    //     title: agency.city
    //   });
    //   
    //   marker.addListener('click', () => {
    //     setSelectedAgency(agency);
    //   });
    // });
  }, [agencies]);

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full h-full">
        <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6).fill(null).map((_, index) => (
            <Skeleton key={index} className="h-28 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full h-full">
        <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="text-center px-6 py-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 font-semibold">Erreur de chargement des agences</p>
            <p className="text-gray-600 mt-2">Veuillez actualiser la page ou réessayer plus tard.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {/* Placeholder for the map */}
      <div 
        ref={mapRef} 
        className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center">
          <div className="text-center px-4 py-2 rounded bg-white/80 shadow-md">
            <p className="font-semibold">Map Placeholder</p>
            <p className="text-sm">Google Maps API would be integrated here</p>
          </div>
        </div>
      </div>

      {/* List of agencies */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agencies?.map((agency) => (
          <div 
            key={agency.id}
            className={`p-4 rounded-lg shadow-md cursor-pointer transition-all 
            ${selectedAgency?.id === agency.id 
              ? 'bg-primary text-white' 
              : 'bg-white hover:bg-gray-50'}`}
            onClick={() => setSelectedAgency(agency)}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${selectedAgency?.id === agency.id ? 'bg-white/20' : 'bg-primary/10'}`}>
                <MapPin size={20} className={selectedAgency?.id === agency.id ? 'text-white' : 'text-primary'} />
              </div>
              <h3 className="ml-3 font-semibold text-lg">{agency.city}</h3>
            </div>
            
            {selectedAgency?.id === agency.id && (
              <div className="mt-3 space-y-2">
                <p>{agency.address}</p>
                <p>{agency.hours}</p>
                <div className="flex space-x-4 mt-2">
                  <a href={`tel:${agency.phone}`} className="text-white underline">{agency.phone}</a>
                  <a href={`mailto:${agency.email}`} className="text-white underline">{agency.email}</a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationMap;
