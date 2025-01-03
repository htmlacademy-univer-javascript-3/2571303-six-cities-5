import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { Offer } from '../../types/offer';
import CommentForm from '../../components/comment-form/comment-form';
import HostInfo from '../../components/host-info/host-info';
import { CITY, OFFER_COORDINATES } from '../../mocks/points';
import MapComponent from '../../components/map/map-component';
import ReviewList from '../../components/reviews-list/reviews-list.tsx';
import { REVIEWS } from '../../mocks/reviews';

type OfferPageProps = {
  offers: Offer[];
};

const handleCommentSubmit = (comment: string, rating: number) => {
  console.log(`New comment: ${comment} with rating: ${rating}`);
};

function OfferPage({ offers }: OfferPageProps) {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((p) => p.id === id);

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const features = offer.features || [];
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div key={offer.id} className="offer__image-wrapper">
                <img className="offer__image" src={offer.previewImage} alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">3 Bedrooms</li>
                <li className="offer__feature offer__feature--adults">Max {offer.maxAdults} adults</li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {features.map((feature) => (
                    <li key={feature} className="offer__inside-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <HostInfo host={offer.host} description={offer.description} />
              </div>
              <section className="offer__reviews reviews">
                <ReviewList reviews={REVIEWS} />
                <CommentForm onSubmit={handleCommentSubmit} />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <MapComponent city={CITY} points={OFFER_COORDINATES} selectedPoint={undefined} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
