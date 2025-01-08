import { useEffect, useState } from 'react';
import { Offer } from '../../types/offer.ts';
import FavoriteLocationItem from '../../components/favorite-location-item/favorite-location-item.tsx';
import Header from '../../components/header/header.tsx';
import Footer from '../../components/footer/footer.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import { fetchFavoriteOffers } from '../../api/api.ts';
import { setFavoritesCount } from '../../store/slices/offers-slice.ts';
import { useDispatch } from 'react-redux';

type GroupedOffers = Record<string, Offer[]>;

function groupOffersByCity(offers: Offer[]): GroupedOffers {
  return offers.reduce((acc: GroupedOffers, offer: Offer) => {
    const { city } = offer;

    if (!acc[city.name]) {
      acc[city.name] = [];
    }

    acc[city.name].push(offer);
    return acc;
  }, {} as GroupedOffers);
}

function FavoritesPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadOffers = async () => {
      try {
        setIsLoading(true);
        const favoriteOffers = await fetchFavoriteOffers();
        setOffers(favoriteOffers);
        dispatch(setFavoritesCount(favoriteOffers.length));
      } finally {
        setIsLoading(false);
      }
    };

    loadOffers();
  }, [dispatch]);

  const groupedOffers = groupOffersByCity(offers);

  if (isLoading) {
    return <Spinner />;
  }

  if (offers.length === 0) {
    return (
      <div className="page page--favorites-empty">
        <Header />
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(groupedOffers).map(([city, cityOffers]) => (
                <li key={city} className="favorites__locations-items">
                  <FavoriteLocationItem location={city} offers={cityOffers} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
