import {Offer} from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type OfferListProps = {
  offers : Offer[];
}

function OfferList ({offers} : OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          imageSrc={offer.imageSrc}
          name={offer.name}
          placeType={offer.type}
          price={offer.price}
          rating={`${offer.rating * 20}%`}
          premium={offer.isPremium}
        />
      ))}
    </div>
  );
}

export default OfferList;
