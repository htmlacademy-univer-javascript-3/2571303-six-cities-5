import {Route, Routes, BrowserRouter} from 'react-router-dom';

import MainPage from '../../pages/main/main-page';
import {AppRoute} from '../../consts';
import {Place} from '../../types/place';
import NotFoundPage from '../../pages/not-found/not-found';
import LoginPage from '../../pages/login/login-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import OfferPage from '../../pages/offer/offer-page';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';

type AppProps = {
  places: Place[];
  offers: Offer[];
}

function App({places, offers}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index element={<MainPage places={places}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage offers={offers}/>}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
