
export interface Agency {
  id: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
}

export const agencies: Agency[] = [
  {
    id: 1,
    city: 'Paris',
    address: '15 Rue de Rivoli, 75001 Paris',
    phone: '01 23 45 67 89',
    email: 'paris@autocleanpro.fr',
    hours: 'Lun-Sam: 8h-19h, Dim: 10h-16h',
    lat: 48.856614,
    lng: 2.352222
  },
  {
    id: 2,
    city: 'Lyon',
    address: '22 Rue de la République, 69002 Lyon',
    phone: '04 56 78 90 12',
    email: 'lyon@autocleanpro.fr',
    hours: 'Lun-Sam: 8h-19h, Dim: Fermé',
    lat: 45.764043,
    lng: 4.835659
  },
  {
    id: 3,
    city: 'Marseille',
    address: '45 La Canebière, 13001 Marseille',
    phone: '04 91 23 45 67',
    email: 'marseille@autocleanpro.fr',
    hours: 'Lun-Sam: 8h30-19h, Dim: Fermé',
    lat: 43.296482,
    lng: 5.369780
  },
  {
    id: 4,
    city: 'Bordeaux',
    address: '12 Cours de l\'Intendance, 33000 Bordeaux',
    phone: '05 56 78 90 12',
    email: 'bordeaux@autocleanpro.fr',
    hours: 'Lun-Sam: 9h-18h30, Dim: Fermé',
    lat: 44.837789,
    lng: -0.579180
  },
  {
    id: 5,
    city: 'Toulouse',
    address: '31 Rue du Taur, 31000 Toulouse',
    phone: '05 61 23 45 67',
    email: 'toulouse@autocleanpro.fr',
    hours: 'Lun-Sam: 8h-19h, Dim: Fermé',
    lat: 43.604652,
    lng: 1.444209
  },
  {
    id: 6,
    city: 'Nantes',
    address: '4 Rue Crébillon, 44000 Nantes',
    phone: '02 40 12 34 56',
    email: 'nantes@autocleanpro.fr',
    hours: 'Lun-Sam: 8h30-19h, Dim: Fermé',
    lat: 47.218371,
    lng: -1.553621
  },
  {
    id: 7,
    city: 'Rennes',
    address: '8 Rue Le Bastard, 35000 Rennes',
    phone: '02 99 12 34 56',
    email: 'rennes@autocleanpro.fr',
    hours: 'Lun-Sam: 9h-18h, Dim: Fermé',
    lat: 48.117266,
    lng: -1.677793
  },
  {
    id: 8,
    city: 'Rouen',
    address: '24 Rue du Gros-Horloge, 76000 Rouen',
    phone: '02 35 12 34 56',
    email: 'rouen@autocleanpro.fr',
    hours: 'Lun-Sam: 9h-18h30, Dim: Fermé',
    lat: 49.443232,
    lng: 1.099971
  },
  {
    id: 9,
    city: 'Brest',
    address: '65 Rue Jean Jaurès, 29200 Brest',
    phone: '02 98 12 34 56',
    email: 'brest@autocleanpro.fr',
    hours: 'Lun-Sam: 9h-18h, Dim: Fermé',
    lat: 48.390394,
    lng: -4.486076
  },
  {
    id: 10,
    city: 'Monaco',
    address: '15 Boulevard des Moulins, 98000 Monaco',
    phone: '+377 97 12 34 56',
    email: 'monaco@autocleanpro.fr',
    hours: 'Lun-Sam: 9h-19h, Dim: 10h-17h',
    lat: 43.738418,
    lng: 7.424616
  }
];
