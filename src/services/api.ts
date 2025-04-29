
import { Agency } from '../data/agencies';
import { Service, AdditionalOption } from '../data/services';

// Base API URL - would come from environment in production
const API_BASE_URL = 'http://localhost:3000/api';

// Generic fetch function with error handling
async function fetchFromAPI<T>(endpoint: string, options = {}): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

// Agencies
export const agencyService = {
  getAllAgencies: async (): Promise<Agency[]> => {
    return fetchFromAPI<Agency[]>('/agencies');
  },
  
  getAgencyById: async (id: number): Promise<Agency> => {
    return fetchFromAPI<Agency>(`/agencies/${id}`);
  }
};

// Services
export const serviceService = {
  getAllServices: async (): Promise<Service[]> => {
    return fetchFromAPI<Service[]>('/services');
  },
  
  getServiceById: async (id: string): Promise<Service> => {
    return fetchFromAPI<Service>(`/services/${id}`);
  },
  
  getAdditionalOptions: async (): Promise<AdditionalOption[]> => {
    return fetchFromAPI<AdditionalOption[]>('/services/options');
  }
};

// Bookings
export const bookingService = {
  createBooking: async (bookingData: any): Promise<any> => {
    return fetchFromAPI('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData)
    });
  },
  
  getUserBookings: async (userId: number): Promise<any[]> => {
    return fetchFromAPI<any[]>(`/users/${userId}/bookings`);
  }
};

