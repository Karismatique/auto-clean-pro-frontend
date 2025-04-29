
import React, { useEffect, useRef, useState } from 'react';
import { agencies, Agency } from '../data/agencies';
import { MapPin } from 'lucide-react';

const LocationMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null);
  
  // This is a placeholder for Google Maps API integration
  // In a real implementation, you would use the Google Maps JS SDK
  
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
    // agencies.forEach(agency => {
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
  }, []);

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
        {agencies.map((agency) => (
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
