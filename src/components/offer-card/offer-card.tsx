import {useState} from 'react';
import {Link} from 'react-router-dom';
import {changeFavoriteStatus, fetchFavoriteOffers} from '../../api/api';
import {Offer} from '../../types';
import {useDispatch} from 'react-redux';
import {setFavoritesCount} from '../../store/slices';
import {AppDispatch} from '../../store';

type OfferCardProps = {
  offer: Offer;
  onHover: (offerId: string | null) => void;
};

function OfferCard({ offer, onHover }: OfferCardProps) {
  const { id, previewImage, price, title, type, rating, isPremium, isFavorite } = offer;
  const [favorite, setFavorite] = useState(isFavorite);
  const dispatch = useDispatch<AppDispatch>();
  const handleMouseEnter = () => onHover(id);
  const handleMouseLeave = () => onHover(null);
  const handleBookmarkClick = () => {
    void (async () => {
      const newStatus = favorite ? 0 : 1;
      await changeFavoriteStatus(id, newStatus);

      const offers = await fetchFavoriteOffers();
      dispatch(setFavoritesCount(offers.length));

      setFavorite(!favorite);
    })();
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={`${title} image`}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              favorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {favorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
