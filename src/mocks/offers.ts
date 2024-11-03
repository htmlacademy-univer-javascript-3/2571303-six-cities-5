import {Offer} from '../types/offer.ts';

export const offersData : Offer[] = [
  {
    id: 1,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5.0,
    isPremium: true,
    images: ['img/apartment-small-03.jpg'],
    description: 'A nice and cozy apartment in Amsterdam.',
    host: {
      name: 'Oliver Conner',
      avatar: 'img/avatar-host.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Washing machine', 'Coffee machine'],
    maxAdults: 2,
    city: 'Amsterdam',
  },
  {
    id: 2,
    name: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 4.0,
    isPremium: false,
    images: ['img/room-small.jpg'],
    description: 'A beautiful wood and stone room.',
    host: {
      name: 'Anna Smith',
      avatar: 'img/avatar-guest.jpg',
      isPro: false,
    },
    features: ['Towels', 'Heating'],
    maxAdults: 1,
    city: 'Amsterdam',
  },
  {
    id: 3,
    name: 'White castle',
    type: 'Apartment',
    price: 180,
    rating: 5.0,
    isPremium: false,
    images: ['img/apartment-small-04.jpg'],
    description: 'A charming white castle in Cologne.',
    host: {
      name: 'John Doe',
      avatar: 'img/avatar-host.jpg',
      isPro: true,
    },
    features: ['Kitchen', 'Cable TV', 'Dishwasher'],
    maxAdults: 4,
    city: 'Cologne',
  }
];
