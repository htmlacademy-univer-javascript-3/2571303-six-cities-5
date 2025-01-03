import {useState} from 'react';

function SortingComponent() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Popular');

  const options = [
    'Popular',
    'Price: low to high',
    'Price: high to low',
    'Top rated first',
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpened(false);
  };

  const toggleOptions = () => {
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={toggleOptions} tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {options.map((option) => (
            <li
              key={option}
              className={`places__option ${option === selectedOption ? 'places__option--active' : ''}`}
              onClick={() => handleOptionClick(option)}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SortingComponent;
