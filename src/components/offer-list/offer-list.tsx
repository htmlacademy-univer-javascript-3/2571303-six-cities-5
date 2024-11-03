import {Offer} from '../../types/offer.ts';
import PlaceCard from '../place-card/place-card.tsx';

type OfferListProps = {
  offers : Offer[];
}

function OfferList ({offers} : OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          imageSrc={offer.imageSrc}
          name={offer.name}
          placeType={offer.type}
          price={offer.price}
          rating={`${offer.rating}%`}
          premium={offer.isPremium}
        />
      ))}
    </div>
  );
}

export default OfferList;
