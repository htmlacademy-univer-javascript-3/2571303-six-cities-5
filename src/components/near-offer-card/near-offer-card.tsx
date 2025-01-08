import { Offer } from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

type NearOfferCardProps = {
  offer: Offer;
};

function NearOfferCard({ offer }: NearOfferCardProps) {
  return (
    <article className="near-places__card place-card">
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Root}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Root}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default NearOfferCard;
