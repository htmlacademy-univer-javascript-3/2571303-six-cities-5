import {Offer} from '../../types/offer.ts';
import OfferCard from '../offer-card/offer-card.tsx';
import {useState} from 'react';

type OfferListProps = {
  offers : Offer[];
}

function OfferList ({offers} : OfferListProps) {

  //TODO: Состояние пригодится нам в дальнейшем
  // для реализации отображения маркеров предложений на карте
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          id={offer.id}
          imageSrc={offer.previewImage}
          name={offer.city.name}
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
