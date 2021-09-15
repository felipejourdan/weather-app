import React from 'react';
import { LocationContext } from './LocationContext';

const Location = () => {
  const fetchUserLocalization = React.useContext(LocationContext)

  return (
    <div className="app flex justify-center">
      <section className="weatherLocation-box">
        {typeof fetchUserLocalization.weather.timezone != 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {fetchUserLocalization.city} {fetchUserLocalization.country}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.floor(fetchUserLocalization.weather.current.temp)}ºC</div>
              <div className="weather">{fetchUserLocalization.weather.current.weather[0].main}</div>
            </div>

            <div className="10days">
              <div className="date">
                {fetchUserLocalization.weather.daily.map((e) => {
                  const year = 1970 + Math.floor(e.dt / 31556926);
                  const month = Math.ceil((e.dt % 31556926) / 2629743.833333);
                  const day = Math.ceil(
                    ((e.dt % 31556926) % 2629743.833333) / 86400,
                  );
                  return (
                    <div className="flex justify-between">
                      <div key={e.dt}>
                        {day}/{month}/{year}
                      </div>
                      <div key={e.temp.day}>{e.temp.day}ºC</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </section>
    </div>
  );
};

export default Location;
