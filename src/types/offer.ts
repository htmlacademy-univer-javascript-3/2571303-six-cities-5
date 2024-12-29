
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
  coordinates: [number, number];
}

export type Point = {
  title: string;
  lat: number;
  long: number;
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type OfferCoordinates = {
  city: string;
  points: Point[];
}
