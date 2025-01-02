import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import { fetchOffersByCity } from '../../store/action.ts';
import OfferList from '../../components/offer-list/offer-list';
import MapComponent from '../../components/map/map-component';
import CityList from '../../components/city-list/city-list';
import OFFER_COORDINATES, { CITY } from '../../mocks/points.ts';
import {City} from '../../types/offer.ts';
import {CITIES} from '../../consts.ts';

function MainPage() {

  const [activeCity, setActiveCity] = useState(CITIES[0]);
  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };

  const dispatch: AppDispatch = useDispatch();
  const offers = useSelector((state: RootState) => state.offers.offers);
  const loading = useSelector((state: RootState) => state.offers.loading);
  const error = useSelector((state: RootState) => state.offers.error);

  useEffect(() => {
    const activeCityLocation = {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12
    };
    const cityObject : City = { name: activeCity, location: activeCityLocation };
    dispatch(fetchOffersByCity(cityObject));
  }, [activeCity, dispatch]);
  return (
    <React.Fragment>
      <header>
        <h1></h1>
      </header>
      <main>
        <CityList cities={CITIES} activeCity={activeCity} onCityClick={handleCityClick} />
        {loading && <p>Loading offers...</p>}
        {error && <p>{error}</p>}
        <OfferList offers={offers} />
        <div className="cities__map">
          <MapComponent city={CITY} points={OFFER_COORDINATES} selectedPoint={undefined} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainPage;
