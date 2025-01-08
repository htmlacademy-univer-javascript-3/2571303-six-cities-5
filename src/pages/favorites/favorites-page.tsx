import { useEffect, useState } from 'react';
import { Offer } from '../../types/offer.ts';
import FavoriteLocationItem from '../../components/favorite-location-item/favorite-location-item.tsx';
import Header from '../../components/header/header.tsx';
import Footer from '../../components/footer/footer.tsx';
import { fetchFavoriteOffers } from '../../api/api.ts';
import Spinner from '../../components/spinner/spinner.tsx';

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

  useEffect(() => {
    const loadOffers = async () => {
      try {
        setIsLoading(true);
        const favoriteOffers = await fetchFavoriteOffers();
        setOffers(favoriteOffers);
      } finally {
        setIsLoading(false);
      }
    };

    loadOffers();
  }, []);

  const groupedOffers = groupOffersByCity(offers);

  if (isLoading) {
    return (
      <Spinner/>
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
