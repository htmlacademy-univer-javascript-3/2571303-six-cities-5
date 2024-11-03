import {Offer} from '../../types/offer.ts';
import OfferList from '../../components/offer-list/offer-list.tsx';

type MainPageProps = {
  offers : Offer[];
}

function MainPage ({offers}: MainPageProps) {
  return (
    <OfferList offers={offers}/>
  );
}

export default MainPage;
