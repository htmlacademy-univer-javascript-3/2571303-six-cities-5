import {Place} from '../../types/place';

export const placeData: Place[] = [
  {
    imageSrc: 'img/apartment-01.jpg',
    name: 'Beautiful & luxurious apartment at great location',
    placeType: 'Apartment',
    price: 120,
    rating: 100,
    premium: true
  },
  {
    imageSrc: 'img/room.jpg',
    name: 'Wood and stone place',
    placeType: 'Room',
    price: 80,
    rating: 80
  },
  {
    imageSrc: 'img/apartment-02.jpg',
    name: 'Canal View Prinsengracht',
    placeType: 'Apartment',
    price: 132,
    rating: 80
  },
  {
    imageSrc: 'img/apartment-03.jpg',
    name: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
    price: 180,
    rating: 100,
    premium: true
  },
  {
    imageSrc: 'img/room.jpg',
    name: 'Wood and stone place',
    placeType: 'Room',
    price: 80,
    rating: 80
  },
];


export const offersData = [
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
