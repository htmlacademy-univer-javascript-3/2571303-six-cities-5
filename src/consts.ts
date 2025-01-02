export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFround = '/not-fround',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';
export const API_URL = import.meta.env.SIX_CITIES_API_URL;
