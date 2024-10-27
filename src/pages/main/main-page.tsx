import PlaceCard from '../../components/place-card/place-card';

type Place = {
  imageSrc: string;
  name: string;
  placeType: string;
  price: number;
  rating: number;
  premium?: boolean;
};


const places: Place[] = [
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


function MainPage () {

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((place) => (
        <PlaceCard
          key={place.name}
          imageSrc={place.imageSrc}
          name={place.name}
          placeType={place.placeType}
          price={place.price}
          rating={`${place.rating}%`}
          premium={place.premium}
        />
      ))}
    </div>
  );
}

export default MainPage;
