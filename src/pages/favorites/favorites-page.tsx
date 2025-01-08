import { Offer } from '../../types/offer.ts';
import FavoriteLocationItem from '../../components/favorite-location-item/favorite-location-item.tsx';
import Header from '../../components/header/header.tsx';

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

type FavoritesPageProps = {
  offers: Offer[];
}

function FavoritesPage({ offers }: FavoritesPageProps) {
  const groupedOffers = groupOffersByCity(offers);

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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
