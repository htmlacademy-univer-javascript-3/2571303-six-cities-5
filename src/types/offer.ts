type Host = {
  name: string;
  avatar: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  description: string;
  host: Host;
  features: string[];
  maxAdults: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export type Point = {
  title: string;
  lat: number;
  long: number;
};

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type OfferCoordinates = {
  city: string;
  points: Point[];
};
