import PlaceCard from '../../components/place-card/place-card';
import {Place} from '../../types/place';

type MainPageProps = {
  places : Place[];
}

function MainPage ({places}: MainPageProps) {

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
