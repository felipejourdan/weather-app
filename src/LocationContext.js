import React from "react";
import Api from './Api';

export const LocationContext = React.createContext()

export const LocationStorage = ({children}) => {
  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState({});
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');

  React.useEffect(() => {
    function fetchAPi(a, b) {
      fetch(
        `${Api.base}onecall?lat=${a}&lon=${b}&exclude=minutely,hourly&units=metric&APPID=${Api.key}`,
      )
        .then((res) => res.json())
        .then((result) => {
          const lat = result.lat;
          const lng = result.lon;
          fetch(
            `http://api.positionstack.com/v1/reverse?access_key=1da5d4e94e07bb4e790da23e90522736&query=${lat},${lng}`,
          )
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              const locality = result.data[0].locality;
              const country = result.data[0].country;
              setCity(locality);
              setCountry(country);
            });

          setWeather(result);
          setQuery('');
          console.log(result, lat, lng);
        });
    }
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchAPi(latitude, longitude);
      });
    } else {
      fetchAPi('38.7259284', '-9.137382');
    }
  }, [])



  return <LocationContext.Provider value={{query, setQuery, weather, setWeather, city, setCity, country, setCountry}}>{children}</LocationContext.Provider>

}



