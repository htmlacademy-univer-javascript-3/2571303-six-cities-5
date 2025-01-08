import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import OfferList from '../../components/offer-list/offer-list';
import MapComponent from '../../components/map/map-component';
import CityList from '../../components/city-list/city-list';
import { City, Offer } from '../../types/offer';
import { CITIES } from '../../consts';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';
import { fetchOffersByCity } from '../../store/actions';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({ offers }: MainPageProps) {
  const [activeCity, setActiveCity] = useState(CITIES[0]);
  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.offers.loading);

  const handleCityClick = (city: string) => {
    setActiveCity(city);
  };

  const handleOfferHover = (offerId: string | null) => {
    setHoveredOfferId(offerId);
  };

  useEffect(() => {
    const cityObject: City = {
      name: activeCity,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 12,
      },
    };

    dispatch(fetchOffersByCity(cityObject));
  }, [activeCity, dispatch]);

  const offerCoordinates = offers.map((offer) => ({
    title: offer.title,
    lat: offer.location.latitude,
    long: offer.location.longitude,
    id: offer.id,
  }));

  const selectedPoint = offerCoordinates.find((point) => point.id === hoveredOfferId);

  const cityForMap: City = {
    name: activeCity,
    location: {
      latitude: offers.length ? offers[0].city.location.latitude : 0,
      longitude: offers.length ? offers[0].city.location.longitude : 0,
      zoom: 12,
    },
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <main className="page__main page__main--index">
          <CityList cities={CITIES} activeCity={activeCity} onCityClick={handleCityClick} />
          <div className="cities">
            <div className="cities__places-container container">
              <OfferList offers={offers} activeCity={activeCity} onOfferHover={handleOfferHover} />
              <div className="cities__right-section">
                <section className="cities__map map">
                  <MapComponent city={cityForMap} points={offerCoordinates} selectedPoint={selectedPoint} />
                </section>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default MainPage;
