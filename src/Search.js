import React from 'react';
import { SearchContext } from './SearchContext';

const Search = () => {
  const fetchSearch = React.useContext(SearchContext);

  return (
    <div className="app flex justify-center">
      <section className="box-search">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => fetchSearch.setQuery(e.target.value)}
            value={fetchSearch.query}
            onKeyPress={fetchSearch.weatherSearch}
          />
          <button onClick={fetchSearch.weatherSearch}>Enviar</button>
        </div>
      </section>
      {typeof fetchSearch.weather.current != 'undefined' ? (
        <div className="app flex justify-center">
          <section className="weatherLocation-box">
            <div>
              <div className="location-box">
                <div className="location">{fetchSearch.city}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.floor(fetchSearch.weather.current.temp)}ºC
                </div>
                <div className="weather">
                  {fetchSearch.weather.current.weather[0].main}
                </div>
              </div>

              <div className="10days">
                <div className="date">
                  {fetchSearch.weather.daily.map((e) => {
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
          </section>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
