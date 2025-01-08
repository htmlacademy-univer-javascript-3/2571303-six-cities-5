import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card.tsx';
import {Offer} from '../../types/offer.ts';

type FavoriteLocationItemProps = {
  location: string;
  offers: Offer[];
}

function FavoriteLocationItem({location, offers}: FavoriteLocationItemProps) {
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer: Offer) => (
          <FavoriteOfferCard id={offer.id} key={offer.id} imageSrc={offer.previewImage} price={offer.price} name={offer.title}
            placeType={offer.type} rating={`${offer.rating * 20}%`}
          />
        ))}
      </div>
    </>
  );
}

export default FavoriteLocationItem;

