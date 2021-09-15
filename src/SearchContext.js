import React from "react";
import Api from './Api';

export const SearchContext = React.createContext()

export const SearchStorage = ({children}) => {
  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState({});
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');

  function weatherSearch(evt) {
    if (evt.key === 'Enter') {
      fetch(
        `http://api.positionstack.com/v1/forward?access_key=1da5d4e94e07bb4e790da23e90522736&query=${query}&region=${query}`,
      )
        .then((res) => res.json())
        .then((result) => {
          const lat = result.data[0].latitude;
          const lng = result.data[0].longitude;
          const locality = result.data[0].locality;
          const country = result.data[0].country;
          setCity(locality);
          setCountry(country);
          console.log(result, lat, lng);
          fetch(
            `${Api.base}onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&units=metric&APPID=${Api.key}`,
          )
            .then((res) => res.json())
            .then((result) => {
              setWeather(result);
              setQuery('');
              console.log(result);
            });
        });
    }
  }

  return <SearchContext.Provider value={{query, setQuery, weather, setWeather, city, setCity, country, setCountry, weatherSearch}}>{children}</SearchContext.Provider>

}