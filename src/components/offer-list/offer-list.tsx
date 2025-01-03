import {Offer} from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import SortingComponent from '../sorting/sorting-component.tsx';

type OfferListProps = {
  offers : Offer[];
  activeCity: string;
}

function OfferList ({offers, activeCity} : OfferListProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {activeCity}</b>
      <SortingComponent/>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            id={offer.id}
            imageSrc={offer.previewImage}
            name={offer.title}
            placeType={offer.type}
            price={offer.price}
            rating={`${offer.rating * 20}%`}
            premium={offer.isPremium}
          />
        ))}
      </div>
    </section>
  );
}

export default OfferList;
