import React from 'react';
import { FetchContext } from './FetchContext';

const AppMount = () => {
  const fetch = React.useContext(FetchContext);
  const arrayData = fetch.data;

  React.useEffect(() => {
    console.log(arrayData);
  }, [arrayData]);

  return (
    <div>
      <div className="flex justify-center">
        {arrayData.map(({ current, forecast, location }) => (
          <div
            className="flex align-column align-center weather-box"
            key={location.name}
          >
            <h1>
              {location.name}, {location.country}
            </h1>
            <div className="temp-box">{current.temp_c}ºC</div>
            <div>{current.condition.text}</div>
            <img src={current.condition.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppMount;
