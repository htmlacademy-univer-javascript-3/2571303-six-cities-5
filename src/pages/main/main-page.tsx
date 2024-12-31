import {Offer} from '../../types/offer.ts';
import OfferList from '../../components/offer-list/offer-list.tsx';
import MapComponent from '../../components/map/map-component.tsx';
import OFFER_COORDINATES, {CITY} from '../../mocks/points.ts';
import React from 'react';

type MainPageProps = {
  offers : Offer[];
}

function MainPage ({offers}: MainPageProps) {
  return (
    <React.Fragment>
      <OfferList offers={offers}/>
      <header>
        <h1></h1>
      </header>
      <main>
        <div className="cities__map">
          <MapComponent city={CITY} points={OFFER_COORDINATES} selectedPoint={undefined}/>
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainPage;
