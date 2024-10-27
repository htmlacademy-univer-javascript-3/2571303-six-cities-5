import MainPage from '../../pages/main/main-page.tsx';
import {placeData} from '../../store/place-data/place-data';
function App(): JSX.Element {
  return (
    <MainPage places={placeData}/>
  );
}

export default App;
