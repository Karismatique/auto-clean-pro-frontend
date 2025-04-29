
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Check, ChevronDown } from 'lucide-react';
import { agencies } from '../data/agencies';
import { services, additionalOptions } from '../data/services';

const BookingForm: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  
  const initialServiceId = searchParams.get('service') || 'interior';
  
  // Form state
  const [selectedAgency, setSelectedAgency] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>(initialServiceId);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [vehicleMake, setVehicleMake] = useState<string>('');
  const [vehicleModel, setVehicleModel] = useState<string>('');
  const [licensePlate, setLicensePlate] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('sedan');
  
  // Calculated price
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  // Time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];
  
  // Calculate total price whenever selections change
  useEffect(() => {
    let price = 0;
    
    // Add service price
    const service = services.find(s => s.id === selectedService);
    if (service) {
      price += service.price;
    }
    
    // Add options price
    selectedOptions.forEach(optionId => {
      const option = additionalOptions.find(o => o.id === optionId);
      if (option) {
        price += option.price;
      }
    });
    
    // Vehicle type adjustment
    if (vehicleType === 'suv') {
      price += 20; // Additional charge for SUVs
    } else if (vehicleType === 'van') {
      price += 40; // Additional charge for vans
    }
    
    setTotalPrice(price);
  }, [selectedService, selectedOptions, vehicleType]);
  
  const handleOptionToggle = (optionId: string) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter(id => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to an API
    console.log({
      agency: selectedAgency,
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      options: selectedOptions,
      vehicle: {
        make: vehicleMake,
        model: vehicleModel,
        licensePlate,
        type: vehicleType
      },
      price: totalPrice
    });
    
    // Display a confirmation message or redirect
    alert('Booking submitted successfully! Total: €' + totalPrice);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Agency Selection */}
      <div className="space-y-2">
        <label className="block text-lg font-medium">{t('selectAgency')}</label>
        <div className="relative">
          <select
            value={selectedAgency}
            onChange={(e) => setSelectedAgency(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          >
            <option value="" disabled>
              {t('selectAgency')}
            </option>
            {agencies.map((agency) => (
              <option key={agency.id} value={agency.id.toString()}>
                {agency.city}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-2">
        <label className="block text-lg font-medium">{t('selectService')}</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedService === service.id
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-gray-200 hover:border-primary/50'
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{t(service.nameKey)}</h4>
                  <p className="text-primary font-bold">{service.price} €</p>
                </div>
                {selectedService === service.id && (
                  <div className="bg-primary rounded-full p-1">
                    <Check className="text-white" size={16} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="space-y-2">
        <label className="block text-lg font-medium">{t('selectDate')}</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
          </div>
          
          <div className="relative">
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Sélectionnez une heure
              </option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
          </div>
        </div>
      </div>

      {/* Additional Options */}
      <div className="space-y-2">
        <label className="block text-lg font-medium">{t('additionalOptions')}</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {additionalOptions.map((option) => (
            <div
              key={option.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedOptions.includes(option.id)
                  ? 'border-primary bg-primary/10 shadow-md'
                  : 'border-gray-200 hover:border-primary/50'
              }`}
              onClick={() => handleOptionToggle(option.id)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{t(option.nameKey)}</h4>
                  <p className="text-primary font-bold">+{option.price} €</p>
                </div>
                {selectedOptions.includes(option.id) && (
                  <div className="bg-primary rounded-full p-1">
                    <Check className="text-white" size={16} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">{t('vehicleDetails')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">{t('make')}</label>
            <input
              type="text"
              value={vehicleMake}
              onChange={(e) => setVehicleMake(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">{t('model')}</label>
            <input
              type="text"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">{t('licensePlate')}</label>
            <input
              type="text"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">{t('vehicleType')}</label>
            <div className="relative">
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="sedan">{t('sedan')}</option>
                <option value="suv">{t('suv')}</option>
                <option value="van">{t('van')}</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">{t('price')}</span>
          <span className="text-2xl font-bold text-primary">{totalPrice} €</span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors w-full md:w-auto"
        >
          {t('payNow')}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
