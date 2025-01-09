import FavoriteOfferCard from '../favorite-offer-card/favorite-offer-card.tsx';
import {Offer} from '../../types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

type FavoriteLocationItemProps = {
  location: string;
  offers: Offer[];
};

function FavoriteLocationItem({location, offers}: FavoriteLocationItemProps) {
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Root} className="locations__item-link">
            <span>{location}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer: Offer) => (
          <FavoriteOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </>
  );
}

export default FavoriteLocationItem;
