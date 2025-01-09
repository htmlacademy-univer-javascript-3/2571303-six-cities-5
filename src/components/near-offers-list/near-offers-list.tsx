import {Offer} from '../../types';
import NearOfferCard from '../near-offer-card/near-offer-card.tsx';

type NearOffersListProps = {
  offers: Offer[];
};

function NearOffersList({ offers }: NearOffersListProps) {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <NearOfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

export default NearOffersList;
