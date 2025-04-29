
export interface Service {
  id: string;
  nameKey: string;
  descKey: string;
  price: number;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'interior',
    nameKey: 'interior',
    descKey: 'interiorDesc',
    price: 89,
    icon: 'car'
  },
  {
    id: 'exterior',
    nameKey: 'exterior',
    descKey: 'exteriorDesc',
    price: 69,
    icon: 'spray-can'
  },
  {
    id: 'complete',
    nameKey: 'complete',
    descKey: 'completeDesc',
    price: 149,
    icon: 'circle-check'
  }
];

export interface AdditionalOption {
  id: string;
  nameKey: string;
  price: number;
}

export const additionalOptions: AdditionalOption[] = [
  {
    id: 'waxing',
    nameKey: 'waxing',
    price: 30
  },
  {
    id: 'engine-cleaning',
    nameKey: 'engineCleaning',
    price: 45
  },
  {
    id: 'disinfection',
    nameKey: 'disinfection',
    price: 25
  }
];
