import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { Offer } from '../../types/offer';
import CommentForm from '../../components/comment-form/comment-form';
import HostInfo from '../../components/host-info/host-info';
import { CITY, OFFER_COORDINATES } from '../../mocks/points';
import MapComponent from '../../components/map/map-component';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Header from '../../components/header/header';
import NearOffersList from '../../components/near-offers-list/near-offers-list';
import { fetchComments, fetchNearbyOffers, fetchOfferById } from '../../api/api';
import { Comment } from '../../types/comment.ts';
import Spinner from '../../components/spinner/spinner';
import PhotoGallery from '../../components/photo-gallery/photo-gallery.tsx';

const handleCommentSubmit = (comment: string, rating: number) => {
  console.log(`New comment: ${comment} with rating: ${rating}`);
};

function OfferPage() {
  const { id } = useParams<{ id: string }>();
  const [offer, setOffer] = useState<Offer | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [nearbyOffers, setNearbyOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);

      fetchOfferById(id)
        .then((data) => {
          setOffer(data);
        })
        .catch(() => {
          setError('Could not fetch the offer details.');
        })
        .finally(() => {
          setLoading(false);
        });

      fetchComments(id)
        .then((data) => {
          setComments(data);
        });

      fetchNearbyOffers(id)
        .then((data) => {
          setNearbyOffers(data);
        });
    }
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error || !offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const features = offer.goods || [];
  const images = offer.images || [];
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <PhotoGallery images={images} />
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
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
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
                <ReviewsList comments={comments} />
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
            <NearOffersList offers={nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
