import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeFavoriteStatus, fetchFavoriteOffers } from '../../api/api';
import { setFavoritesCount } from '../../store/slices';
import { AppDispatch, RootState } from '../../store';
import {AppRoute} from '../../consts.ts';

type BookmarkButtonBigProps = {
  offerId: string;
  isFavorite: boolean;
  onToggleFavorite?: (isFavorite: boolean) => void;
};

function BookmarkButtonBig({ offerId, isFavorite, onToggleFavorite }: BookmarkButtonBigProps) {
  const [favorite, setFavorite] = React.useState(isFavorite);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const authorizationStatus = useSelector((state: RootState) => state.auth.authorizationStatus);

  const handleBookmarkClick = () => {
    if (!authorizationStatus) {
      navigate(AppRoute.Login);
      return;
    }

    void (async () => {
      const newStatus = favorite ? 0 : 1;

      await changeFavoriteStatus(offerId, newStatus);

      const favoriteOffers = await fetchFavoriteOffers();
      dispatch(setFavoritesCount(favoriteOffers.length));

      setFavorite(!favorite);

      if (onToggleFavorite) {
        onToggleFavorite(!favorite);
      }
    })();
  };

  return (
    <button
      className={`offer__bookmark-button button ${
        favorite ? 'offer__bookmark-button--active' : ''
      }`}
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg className="offer__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {favorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default BookmarkButtonBig;
