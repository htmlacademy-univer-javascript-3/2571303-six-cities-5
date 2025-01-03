import { Offer } from '../types/offer.ts';

export const OFFERS_DATA: Offer[] = [
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
    id: '5',
    title: 'Sunny studio in the heart of the city',
    type: 'Apartment',
    price: 150,
    rating: 4.5,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-04.jpg',
    description: 'A sunny studio located in the vibrant area of the city.',
    host: {
      name: 'Emily Brown',
      avatar: 'img/avatar-emily.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Air conditioning'],
    maxAdults: 2,
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.520007,
        longitude: 13.404954,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.520007,
      longitude: 13.404954,
    }
  },
  {
    id: '6',
    title: 'Charming country house',
    type: 'House',
    price: 250,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/house-01.jpg',
    description: 'A charming house surrounded by nature, perfect for families.',
    host: {
      name: 'Jake Williams',
      avatar: 'img/avatar-jake.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Free parking', 'Garden'],
    maxAdults: 6,
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.520007,
        longitude: 13.404954,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.520007,
      longitude: 13.404954,
    }
  },
  {
    id: '7',
    title: 'Modern loft with city view',
    type: 'Apartment',
    price: 220,
    rating: 5.0,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-05.jpg',
    description: 'Stylish loft with stunning city views.',
    host: {
      name: 'Sophia Johnson',
      avatar: 'img/avatar-sophia.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Balcony', 'Heating'],
    maxAdults: 2,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.376515,
        longitude: 4.904062,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.376515,
      longitude: 4.904062,
    }
  },
  {
    id: '8',
    title: 'Elegant room in a shared house',
    type: 'Room',
    price: 70,
    rating: 4.2,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/room-01.jpg',
    description: 'Cozy room available in a shared house with garden access.',
    host: {
      name: 'Oliver Green',
      avatar: 'img/avatar-oliver.jpg',
      isPro: false,
    },
    features: ['Shared kitchen', 'Garden'],
    maxAdults: 1,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.937531,
        longitude: 6.960279,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 50.937531,
      longitude: 6.960279,
    }
  },
  {
    id: '9',
    title: 'Luxury penthouse with rooftop pool',
    type: 'Apartment',
    price: 500,
    rating: 5.0,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-06.jpg',
    description: 'Exclusive penthouse with private rooftop pool and spectacular views.',
    host: {
      name: 'Anna White',
      avatar: 'img/avatar-anna.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Rooftop pool', 'Gym'],
    maxAdults: 4,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856613,
        longitude: 2.352222,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 48.856613,
      longitude: 2.352222,
    }
  },
  {
    id: '10',
    title: 'Stylish flat in trendy neighborhood',
    type: 'Apartment',
    price: 200,
    rating: 4.7,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-07.jpg',
    description: 'Trendy flat located in a hip neighborhood filled with cafes and shops.',
    host: {
      name: 'Jasmine Moore',
      avatar: 'img/avatar-jasmine.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Smart TV'],
    maxAdults: 3,
    city: {
      name: 'Berlin',
      location: {
        latitude: 52.501554,
        longitude: 13.366241,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.501554,
      longitude: 13.366241,
    }
  },
  {
    id: '11',
    title: 'Cozy cabin in the woods',
    type: 'House',
    price: 160,
    rating: 4.6,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/cabin-01.jpg',
    description: 'Perfect retreat in the woods, ideal for nature lovers.',
    host: {
      name: 'Ben Black',
      avatar: 'img/avatar-ben.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Fireplace', 'BBQ grill'],
    maxAdults: 4,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.5511,
        longitude: 9.993682,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 53.5511,
      longitude: 9.993682,
    }
  },
  {
    id: '12',
    title: 'Family-friendly villa with pool',
    type: 'House',
    price: 350,
    rating: 4.9,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/villa-01.jpg',
    description: 'Lap of luxury with a private pool, perfect for family vacations.',
    host: {
      name: 'Mia Smith',
      avatar: 'img/avatar-mia.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Swimming pool', 'Kitchen'],
    maxAdults: 6,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.385064,
        longitude: 2.173404,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 41.385064,
      longitude: 2.173404,
    }
  },
  {
    id: '13',
    title: 'Stylish studio with contemporary design',
    type: 'Apartment',
    price: 180,
    rating: 4.8,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/studio-01.jpg',
    description: 'Modern studio with stylish decor, located near attractions.',
    host: {
      name: 'Nathan Carter',
      avatar: 'img/avatar-nathan.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Kitchen', 'Air conditioning'],
    maxAdults: 2,
    city: {
      name: 'Madrid',
      location: {
        latitude: 40.416775,
        longitude: -3.703790,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 40.416775,
      longitude: -3.703790,
    }
  },
  {
    id: '14',
    title: 'Elegant suite with terrace',
    type: 'Apartment',
    price: 220,
    rating: 5.0,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/suite-01.jpg',
    description: 'Luxurious suite featuring a private terrace with stunning views.',
    host: {
      name: 'Liam Wilson',
      avatar: 'img/avatar-liam.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Terrace', 'Jacuzzi'],
    maxAdults: 3,
    city: {
      name: 'Florence',
      location: {
        latitude: 43.769562,
        longitude: 11.255814,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 43.769562,
      longitude: 11.255814,
    }
  },
  {
    id: '15',
    title: 'Sunny apartment near beach',
    type: 'Apartment',
    price: 300,
    rating: 4.4,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-08.jpg',
    description: 'Bright apartment just a few minutes walk from the beach!',
    host: {
      name: 'Olivia Martin',
      avatar: 'img/avatar-olivia.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Sea view', 'Balcony'],
    maxAdults: 5,
    city: {
      name: 'Nice',
      location: {
        latitude: 43.710172,
        longitude: 7.262673,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 43.710172,
      longitude: 7.262673,
    }
  },
  {
    id: '16',
    title: 'Rural retreat with stunning views',
    type: 'House',
    price: 220,
    rating: 4.7,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/house-02.jpg',
    description: 'Escape to the countryside with breathtaking panoramas.',
    host: {
      name: 'Charles King',
      avatar: 'img/avatar-charles.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Full kitchen', 'Nature trails'],
    maxAdults: 4,
    city: {
      name: 'Lisbon',
      location: {
        latitude: 38.722252,
        longitude: -9.139337,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 38.722252,
      longitude: -9.139337,
    }
  },
  {
    id: '17',
    title: 'Comfortable room in the heart of the city',
    type: 'Room',
    price: 90,
    rating: 4.3,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/room-02.jpg',
    description: 'Conveniently located room with easy access to public transport.',
    host: {
      name: 'Emma Howard',
      avatar: 'img/avatar-emma.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Microwave'],
    maxAdults: 2,
    city: {
      name: 'Vienna',
      location: {
        latitude: 48.208174,
        longitude: 16.373819,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 48.208174,
      longitude: 16.373819,
    }
  },
  {
    id: '18',
    title: 'Modern apartment with garden access',
    type: 'Apartment',
    price: 175,
    rating: 4.6,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-09.jpg',
    description: 'Chic space with exclusive access to a lovely garden.',
    host: {
      name: 'Sophia Turner',
      avatar: 'img/avatar-sophia.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Garden access', 'Cooking essentials'],
    maxAdults: 3,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.373216,
        longitude: 4.89066,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.373216,
      longitude: 4.89066,
    }
  },
  {
    id: '19',
    title: 'Artist loft in vibrant neighborhood',
    type: 'Apartment',
    price: 250,
    rating: 4.7,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-10.jpg',
    description: 'An artistic loft surrounded by galleries and eateries.',
    host: {
      name: 'David Lee',
      avatar: 'img/avatar-david.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Art supplies', 'Balcony'],
    maxAdults: 4,
    city: {
      name: 'San Francisco',
      location: {
        latitude: 37.774929,
        longitude: -122.419418,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 37.774929,
      longitude: -122.419418,
    }
  },
  {
    id: '20',
    title: 'Spacious flat with elegant decor',
    type: 'Apartment',
    price: 220,
    rating: 4.6,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-11.jpg',
    description: 'Elegantly designed flat near city center attractions.',
    host: {
      name: 'Lara Simons',
      avatar: 'img/avatar-lara.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Fully equipped kitchen'],
    maxAdults: 5,
    city: {
      name: 'Barcelona',
      location: {
        latitude: 41.385064,
        longitude: 2.173404,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 41.385064,
      longitude: 2.173404,
    }
  },
  {
    id: '21',
    title: 'Chic city apartment with balcony',
    type: 'Apartment',
    price: 195,
    rating: 4.8,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-12.jpg',
    description: 'Stylish city apartment featuring a private balcony.',
    host: {
      name: 'Oliver Scott',
      avatar: 'img/avatar-oliver.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Balcony'],
    maxAdults: 3,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.373216,
        longitude: 4.89066,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 52.373216,
      longitude: 4.89066,
    }
  },
  {
    id: '22',
    title: 'Unique cave house experience',
    type: 'House',
    price: 280,
    rating: 4.9,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/house-03.jpg',
    description: 'Experience a luxurious cave house with an extraordinary design.',
    host: {
      name: 'Mina Hayes',
      avatar: 'img/avatar-mina.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Unique design'],
    maxAdults: 2,
    city: {
      name: 'Helsinki',
      location: {
        latitude: 60.1699,
        longitude: 24.9384,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 60.1699,
      longitude: 24.9384,
    }
  },
  {
    id: '23',
    title: 'Charming townhouse near central park',
    type: 'House',
    price: 310,
    rating: 4.4,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/townhouse-01.jpg',
    description: 'Cozy townhouse just a short walk from central park.',
    host: {
      name: 'Lucas Foster',
      avatar: 'img/avatar-lucas.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Parking', 'Close to public transport'],
    maxAdults: 4,
    city: {
      name: 'New York',
      location: {
        latitude: 40.712776,
        longitude: -74.005974,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 40.712776,
      longitude: -74.005974,
    }
  },
  {
    id: '24',
    title: 'Modern apartment in vibrant locale',
    type: 'Apartment',
    price: 230,
    rating: 4.5,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-13.jpg',
    description: 'Modern apartment in a vibrant area with various dining options.',
    host: {
      name: 'Ella Reid',
      avatar: 'img/avatar-ella.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Air conditioning'],
    maxAdults: 3,
    city: {
      name: 'Seattle',
      location: {
        latitude: 47.606209,
        longitude: -122.332069,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 47.606209,
      longitude: -122.332069,
    }
  },
  {
    id: '25',
    title: 'Quaint cottage near the beach',
    type: 'House',
    price: 195,
    rating: 4.7,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/cottage-01.jpg',
    description: 'Charming cottage just minutes away from the beach.',
    host: {
      name: 'Leo Arnold',
      avatar: 'img/avatar-leo.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Patio', 'Outdoor grill'],
    maxAdults: 5,
    city: {
      name: 'San Diego',
      location: {
        latitude: 32.715736,
        longitude: -117.161087,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 32.715736,
      longitude: -117.161087,
    }
  },
  {
    id: '26',
    title: 'Affordable room with great location',
    type: 'Room',
    price: 70,
    rating: 4.0,
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/room-03.jpg',
    description: 'Budget-friendly room located in a bustling area.',
    host: {
      name: 'Max Lee',
      avatar: 'img/avatar-max.jpg',
      isPro: false,
    },
    features: ['Wi-Fi', 'Microwave'],
    maxAdults: 1,
    city: {
      name: 'Toronto',
      location: {
        latitude: 43.65107,
        longitude: -79.347015,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 43.65107,
      longitude: -79.347015,
    }
  },
  {
    id: '27',
    title: 'Amazing beach home with panoramic views',
    type: 'House',
    price: 450,
    rating: 5.0,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/house-04.jpg',
    description: 'Spectacular beach home perfect for sunset views.',
    host: {
      name: 'Rachel Green',
      avatar: 'img/avatar-rachel.jpg',
      isPro: true,
    },
    features: ['Wi-Fi', 'Ocean view', 'Private beach access'],
    maxAdults: 8,
    city: {
      name: 'Miami',
      location: {
        latitude: 25.7617,
        longitude: -80.1918,
        zoom: 10,
      }
    },
    coordinates: {
      latitude: 25.7617,
      longitude: -80.1918,
    }
  }
];
