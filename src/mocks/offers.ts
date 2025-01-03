import { Offer } from '../types/offer.ts';

export const OFFERS_DATA: Offer[] = [
  {
    'id': '1',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'Apartment',
    'price': 180,
    'rating': 5.0,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A nice and cozy apartment in Amsterdam.',
    'host': {
      'name': 'Oliver Conner',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'Washing machine', 'Coffee machine'],
    'maxAdults': 2,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.390955,
        'longitude': 4.853097,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 52.390955,
      'longitude': 4.853097
    }
  },
  {
    'id': '2',
    'title': 'Stylish studio in the heart of Paris',
    'type': 'Apartment',
    'price': 250,
    'rating': 4.8,
    'isPremium': true,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A stylish studio located in Central Paris.',
    'host': {
      'name': 'Marie Dupont',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Air conditioning', 'Kitchen'],
    'maxAdults': 2,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.8566,
        'longitude': 2.3522,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 48.8566,
      'longitude': 2.3522
    }
  },
  {
    'id': '3',
    'title': 'Charming flat near Cologne Cathedral',
    'type': 'Apartment',
    'price': 150,
    'rating': 4.5,
    'isPremium': false,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A charming flat in the heart of Cologne.',
    'host': {
      'name': 'Hans Müller',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'Dryer', 'TV'],
    'maxAdults': 3,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.9375,
        'longitude': 6.9603,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.9375,
      'longitude': 6.9603
    }
  },
  {
    'id': '4',
    'title': 'Luxury apartment with a view in Brussels',
    'type': 'Apartment',
    'price': 300,
    'rating': 4.9,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Luxury apartment with an amazing view in Brussels.',
    'host': {
      'name': 'Pierre Moreau',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'Elevator', 'Dishwasher'],
    'maxAdults': 4,
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.8503,
        'longitude': 4.3517,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.8503,
      'longitude': 4.3517
    }
  },
  {
    'id': '5',
    'title': 'Modern apartment in the center of Hamburg',
    'type': 'Apartment',
    'price': 220,
    'rating': 4.7,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A modern apartment in the heart of Hamburg.',
    'host': {
      'name': 'Anna Schmidt',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Coffee machine', 'Parking', 'Gym'],
    'maxAdults': 3,
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.5511,
        'longitude': 9.9937,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 53.5511,
      'longitude': 9.9937
    }
  },
  {
    'id': '6',
    'title': 'Elegant studio in Düsseldorf',
    'type': 'Apartment',
    'price': 175,
    'rating': 4.6,
    'isPremium': false,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'An elegant studio near the center of Düsseldorf.',
    'host': {
      'name': 'Julia Fischer',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Air conditioning', 'Balcony'],
    'maxAdults': 2,
    'city': {
      'name': 'Düsseldorf',
      'location': {
        'latitude': 51.2277,
        'longitude': 6.7735,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 51.2277,
      'longitude': 6.7735
    }
  },
  {
    'id': '7',
    'title': 'Rustic cottage near Amsterdam',
    'type': 'Apartment',
    'price': 135,
    'rating': 4.4,
    'isPremium': false,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A cozy rustic cottage just outside of Amsterdam.',
    'host': {
      'name': 'Liam Johnson',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Garden'],
    'maxAdults': 2,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.4000,
        'longitude': 4.8000,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 52.4000,
      'longitude': 4.8000
    }
  },
  {
    'id': '8',
    'title': 'Beautiful flat in central Brussels',
    'type': 'Apartment',
    'price': 210,
    'rating': 4.8,
    'isPremium': true,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A beautiful flat located in central Brussels.',
    'host': {
      'name': 'Sophie Laurent',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'Smart TV', 'Kitchen'],
    'maxAdults': 4,
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.8503,
        'longitude': 4.3517,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.8503,
      'longitude': 4.3517
    }
  },
  {
    'id': '9',
    'title': 'Sunny studio in Hamburg',
    'type': 'Apartment',
    'price': 160,
    'rating': 4.5,
    'isPremium': false,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A sunny studio apartment in Hamburg.',
    'host': {
      'name': 'Maximilian Becker',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Kitchenette'],
    'maxAdults': 2,
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.5511,
        'longitude': 9.9937,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 53.5511,
      'longitude': 9.9937
    }
  },
  {
    'id': '10',
    'title': 'Gorgeous loft in Düsseldorf',
    'type': 'Apartment',
    'price': 295,
    'rating': 4.9,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A gorgeous loft apartment in Düsseldorf.',
    'host': {
      'name': 'Clara Schneider',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'Fireplace', 'Washer'],
    'maxAdults': 3,
    'city': {
      'name': 'Düsseldorf',
      'location': {
        'latitude': 51.2277,
        'longitude': 6.7735,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 51.2277,
      'longitude': 6.7735
    }
  },
  {
    'id': '11',
    'title': 'Cozy room in Cologne',
    'type': 'Room',
    'price': 90,
    'rating': 4.6,
    'isPremium': false,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Cozy room in a shared house in Cologne.',
    'host': {
      'name': 'Markus Klein',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi'],
    'maxAdults': 1,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.9375,
        'longitude': 6.9603,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.9375,
      'longitude': 6.9603
    }
  },
  {
    'id': '12',
    'title': 'Bright apartment in beautiful Hamburg',
    'type': 'Apartment',
    'price': 210,
    'rating': 4.8,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Bright and spacious apartment in Hamburg.',
    'host': {
      'name': 'Hans Meinert',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'TV', 'Garden'],
    'maxAdults': 2,
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.5511,
        'longitude': 9.9937,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 53.5511,
      'longitude': 9.9937
    }
  },
  {
    'id': '13',
    'title': 'Amazing apartment in Brussels',
    'type': 'Apartment',
    'price': 240,
    'rating': 4.7,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Amazing apartment in a quiet area of Brussels.',
    'host': {
      'name': 'Juliette Lefevre',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Balcony', 'Kitchen'],
    'maxAdults': 4,
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.8503,
        'longitude': 4.3517,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.8503,
      'longitude': 4.3517
    }
  },
  {
    'id': '14',
    'title': 'Spacious flat in Paris',
    'type': 'Apartment',
    'price': 290,
    'rating': 4.8,
    'isPremium': true,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Spacious and beautiful flat in Paris.',
    'host': {
      'name': 'Gabrielle Martin',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'Laundry', 'Smart TV'],
    'maxAdults': 3,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.8566,
        'longitude': 2.3522,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 48.8566,
      'longitude': 2.3522
    }
  },
  {
    'id': '15',
    'title': 'Luxurious cabin near Cologne',
    'type': 'Apartment',
    'price': 320,
    'rating': 5.0,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Luxurious cabin in nature near Cologne.',
    'host': {
      'name': 'Chloe Wagner',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'BBQ', 'Fireplace'],
    'maxAdults': 5,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.9375,
        'longitude': 6.9603,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.9375,
      'longitude': 6.9603
    }
  },
  {
    'id': '16',
    'title': 'Comfy apartment in Amsterdam',
    'type': 'Apartment',
    'price': 155,
    'rating': 4.4,
    'isPremium': false,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Comfy apartment located near the city center.',
    'host': {
      'name': 'Jasper Veenstra',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Kitchen', 'Smart TV'],
    'maxAdults': 2,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3784,
        'longitude': 4.9009,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 52.3784,
      'longitude': 4.9009
    }
  },
  {
    'id': '17',
    'title': 'Cozy loft in Hamburg',
    'type': 'Apartment',
    'price': 200,
    'rating': 4.6,
    'isPremium': false,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A cozy loft apartment in Hamburg.',
    'host': {
      'name': 'Finn Braun',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'TV'],
    'maxAdults': 2,
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.5511,
        'longitude': 9.9937,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 53.5511,
      'longitude': 9.9937
    }
  },
  {
    'id': '18',
    'title': 'Modern studio in Düsseldorf',
    'type': 'Apartment',
    'price': 190,
    'rating': 4.3,
    'isPremium': false,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Modern studio with all amenities in Düsseldorf.',
    'host': {
      'name': 'Rita Hoffmann',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi', 'Microwave', 'Coffee machine'],
    'maxAdults': 2,
    'city': {
      'name': 'Düsseldorf',
      'location': {
        'latitude': 51.2277,
        'longitude': 6.7735,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 51.2277,
      'longitude': 6.7735
    }
  },
  {
    'id': '19',
    'title': 'Elegant apartment in Brussels',
    'type': 'Apartment',
    'price': 260,
    'rating': 4.9,
    'isPremium': true,
    'isFavorite': false,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Elegant and sophisticated apartment in Brussels.',
    'host': {
      'name': 'Alain Dupuis',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': true
    },
    'features': ['Wi-Fi', 'Terrace'],
    'maxAdults': 3,
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.8503,
        'longitude': 4.3517,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.8503,
      'longitude': 4.3517
    }
  },
  {
    'id': '20',
    'title': 'Charming room in Cologne',
    'type': 'Room',
    'price': 75,
    'rating': 4.6,
    'isPremium': false,
    'isFavorite': true,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'Charming room in a lovely shared apartment.',
    'host': {
      'name': 'Lena Schmitt',
      'avatar': 'img/avatar-angelina.jpg',
      'isPro': false
    },
    'features': ['Wi-Fi'],
    'maxAdults': 1,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.9375,
        'longitude': 6.9603,
        'zoom': 10
      }
    },
    'coordinates': {
      'latitude': 50.9375,
      'longitude': 6.9603
    }
  }
];
