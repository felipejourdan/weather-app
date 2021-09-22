import React from 'react';
import Api from './Api';
import { FetchContext } from './FetchContext';

const LocationTeste = () => {
  const fetch = React.useContext(FetchContext);
  const [url, setUrl] = React.useState(null);
  let lat = '';
  let lon = '';

  const nav = navigator.geolocation.getCurrentPosition((pos) => {
    return pos;
  });

  console.log(url);

  React.useEffect(() => {
    if (nav === undefined) {
      setUrl(
        `${Api.base}forecast.json?key=${Api.key}&q=38.7259284,-9.137382&days=10&aqi=no&alerts=no`,
      );
    } else {
      console.log('teste');
    }
  }, [fetch.request]);

  React.useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        setUrl(
          `${Api.base}forecast.json?key=${Api.key}&q=${position.coords.latitude},${position.coords.longitude}&days=3&aqi=no&alerts=no`,
        );
      });
    } else {
      console.log('teste');
    }
  }, [fetch.request]);

  React.useEffect(() => {
    fetch.request(url);
  }, [url]);

  return <div></div>;
};

export default LocationTeste;
