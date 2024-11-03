type Host = {
  name: string;
  avatar: string;
  isPro: boolean;
}

export type Offer = {
  id: number;
  name: string;
  type: 'Apartment' | 'Room';
  price: number;
  rating: number;
  isPremium: boolean;
  imageSrc: string;
  description: string;
  host: Host;
  features: string[];
  maxAdults: number;
  city: string;
}
