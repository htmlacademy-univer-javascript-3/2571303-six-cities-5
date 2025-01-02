import {Offer} from '../types/offer.ts';

export const offersData: Offer[] = [
  {
    id: '1',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5.0,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-01.jpg',
    description: 'A nice and cozy apartment in Amsterdam.',
    host: {
      name: 'Oliver Conner',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Washing machine', 'Coffee machine'],
    maxAdults: 2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    }
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
    rating: 4.0,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/room.jpg',
    description: 'A beautiful wood and stone room.',
    host: {
      name: 'Anna Smith',
      avatar: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    features: ['Towels', 'Heating'],
    maxAdults: 1,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
    }
  },
  {
    id: '3',
    title: 'White castle',
    type: 'Apartment',
    price: 180,
    rating: 5.0,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    description: 'A charming white castle in Cologne.',
    host: {
      name: 'John Doe',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    features: ['Kitchen', 'Cable TV', 'Dishwasher'],
    maxAdults: 4,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
    }
  },
  {
    id: '4',
    title: 'White castle',
    type: 'Apartment',
    price: 180,
    rating: 3.0,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-03.jpg',
    description: 'A charming white castle in Cologne.',
    host: {
      name: 'John Doe',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    features: ['Kitchen', 'Cable TV', 'Dishwasher'],
    maxAdults: 4,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
    }
  }
];
