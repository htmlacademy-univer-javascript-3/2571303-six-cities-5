import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card.tsx';
import {Offer} from '../../types/offer.ts';

type FavoriteLocationItemProps = {
  location: string;
  offers: Offer[];
}

function FavoriteLocationItem({location, offers}: FavoriteLocationItemProps) {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{location}</span>
        </a>
      </div>
      <div className="favorites__places">
        {offers.map((offer: Offer) => (
          <FavoriteOfferCard key={offer.id} imageSrc={offer.imageSrc} price={offer.price} name={offer.name} placeType={offer.type} rating={`${offer.rating}`}/>
        ))}
      </div>
    </div>
  );
}

export default FavoriteLocationItem;

