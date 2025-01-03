import { useState, useMemo } from 'react';
import { Offer } from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import SortingComponent from '../sorting/sorting-component.tsx';

type OfferListProps = {
  offers: Offer[];
  activeCity: string;
}

function OfferList({ offers, activeCity }: OfferListProps) {
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
      <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
      <SortingComponent onSortChange={handleSortChange} />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
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
