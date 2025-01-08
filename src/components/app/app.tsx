import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import {AppRoute} from '../../consts';
import NotFoundPage from '../../pages/not-found/not-found';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

function App() {
  const offers = useSelector((state: RootState) => state.offers.offers);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index element={<MainPage offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage/>}
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
