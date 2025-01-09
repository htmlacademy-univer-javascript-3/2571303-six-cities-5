import React from 'react';
import {useDispatch} from 'react-redux';
import {changeFavoriteStatus, fetchFavoriteOffers} from '../../api/api';
import {setFavoritesCount} from '../../store/slices';
import {AppDispatch} from '../../store';

type BookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  onToggleFavorite?: (isFavorite: boolean) => void;
};

function BookmarkButton({ offerId, isFavorite, onToggleFavorite }: BookmarkButtonProps) {
  const [favorite, setFavorite] = React.useState(isFavorite);
  const dispatch = useDispatch<AppDispatch>();


  const handleBookmarkClick = () => {
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
  );
}

export default BookmarkButton;
