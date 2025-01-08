import { useState } from 'react';
import { Link } from 'react-router-dom';
import { changeFavoriteStatus } from '../../api/api';

type OfferCardProps = {
  id: string;
  imageSrc: string;
  price: number;
  name: string;
  placeType: string;
  rating: string;
  premium?: boolean;
  onHover: (offerId: string | null) => void;
};

function OfferCard({ id, imageSrc, price, name, placeType, rating, premium, onHover }: OfferCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleMouseEnter = () => onHover(id);
  const handleMouseLeave = () => onHover(null);

  const handleBookmarkClick = async () => {
    const newStatus = isFavorite ? 0 : 1;
    await changeFavoriteStatus(id, newStatus);
    setIsFavorite(!isFavorite);
  };

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={imageSrc} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: rating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}

export default OfferCard;
