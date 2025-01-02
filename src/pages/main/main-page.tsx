import React, { useState } from 'react';
import { Offer } from '../../types/offer.ts';
import OfferList from '../../components/offer-list/offer-list.tsx';
import MapComponent from '../../components/map/map-component.tsx';
import CityList from '../../components/city-list/city-list.tsx';
import OFFER_COORDINATES, { CITY } from '../../mocks/points.ts';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({ offers }: MainPageProps) {
  //TODO: Для теста компонента CityList
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const [activeCity, setActiveCity] = useState(cities[0]);
  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };

  return (
    <React.Fragment>
      <header>
        <h1></h1>
      </header>
      <main>
        <CityList
          cities={cities}
          activeCity={activeCity}
          onCityClick={handleCityClick}
        />
        <OfferList offers={offers} />
        <div className="cities__map">
          <MapComponent city={CITY} points={OFFER_COORDINATES} selectedPoint={undefined} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainPage;
