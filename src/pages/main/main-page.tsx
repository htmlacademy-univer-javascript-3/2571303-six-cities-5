import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchOffersByCity } from '../../store/action.ts';
import OfferList from '../../components/offer-list/offer-list';
import MapComponent from '../../components/map/map-component';
import CityList from '../../components/city-list/city-list';
import {City, Offer} from '../../types/offer.ts';
import { CITIES } from '../../consts.ts';
import { CITY } from '../../mocks/points.ts';


type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps) {
  const [activeCity, setActiveCity] = useState(CITIES[0]);

  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const cityObject: City = {
      name: activeCity,
      location: {
        latitude: offers.length ? offers[0].city.location.latitude : 48.8566,
        longitude: offers.length ? offers[0].city.location.longitude : 2.3522,
        zoom: 12
      }
    };
    dispatch(fetchOffersByCity(cityObject));
  }, [activeCity, dispatch, offers]);

  const offerCoordinates = offers.map((offer) => ({
    title: offer.title,
    lat: offer.city.location.latitude,
    long: offer.city.location.longitude
  }));

  return (
    <React.Fragment>
      <header>
        <h1>{offers.length} places to stay in {activeCity}</h1>
      </header>
      <main>
        <CityList cities={CITIES} activeCity={activeCity} onCityClick={handleCityClick} />
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList offers={offers} />
            <MapComponent city={CITY} points={offerCoordinates} selectedPoint={undefined} />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default MainPage;
