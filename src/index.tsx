import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


import {placeData} from './mocks/places';
import {offersData} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={placeData} offers={offersData}/>
  </React.StrictMode>
);
