import React from 'react';

const FetchApi = () => {
  async function fetchWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=lisbon&cnt=10&units=metric&appid=8cc52cce77b83de5cc18604711baf5fd`,
    );
    const json = await response.json();
    return json;
  }

  async function weatherApp() {
    let weather = [];
    try {
      weather = await fetchWeather();
      return weather;
    } catch (e) {
      console.log(e);
    }
  }

  console.log(weather);

  return <div>{weather}</div>;
};

export default FetchApi;
