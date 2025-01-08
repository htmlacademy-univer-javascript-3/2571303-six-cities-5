import { useState, useMemo } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import SortingComponent from '../sorting-component/sorting-component';

type OfferListProps = {
  offers: Offer[];
  activeCity: string;
  onOfferHover: (offerId: string | null) => void;
};

function OfferList({ offers, activeCity, onOfferHover }: OfferListProps) {
  const [sortOption, setSortOption] = useState<string>('Popular');

  const sortedOffers = useMemo(() => {
    switch (sortOption) {
      case 'Price: low to high':
        return [...offers].sort((a, b) => a.price - b.price);
      case 'Price: high to low':
        return [...offers].sort((a, b) => b.price - a.price);
      case 'Top rated first':
        return [...offers].sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }, [offers, sortOption]);

  const handleSortChange = (selectedOption: string) => {
    setSortOption(selectedOption);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortedOffers.length} places to stay in {activeCity}
      </b>
      <SortingComponent onSortChange={handleSortChange} />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onHover={onOfferHover}
          />
        ))}
      </div>
    </section>
  );
}

export default OfferList;
