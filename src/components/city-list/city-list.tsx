import { Link } from 'react-router-dom';

type CityListProps = {
  cities: string[];
  activeCity: string;
  onCityClick: (city: string) => void;
};

function CityList({ cities, activeCity, onCityClick }: CityListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <Link
                className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
                to="#"
                onClick={(event) => {
                  event.preventDefault();
                  onCityClick(city);
                }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
