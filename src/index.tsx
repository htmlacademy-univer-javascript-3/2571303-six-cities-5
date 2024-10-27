import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import {placeData} from './store/place-data/place-data.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={placeData}/>
  </React.StrictMode>
);
