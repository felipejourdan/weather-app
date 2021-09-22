import React from 'react';
import Api from './Api';
import { FetchContext } from './FetchContext';

const SearchTeste = () => {
  const fetch = React.useContext(FetchContext);
  const [query, setQuery] = React.useState(null);

  const handleClick = () => {
    fetch.request(
      `${Api.base}forecast.json?key=${Api.key}&q=${query}&days=3&aqi=no&alerts=no`,
    );
    console.log(fetch.data);
  };

  return (
    <div className="app flex justify-center">
      <input
        className="search-box .search-bar"
        type="text"
        onChange={({ target }) => setQuery(target.value)}
      />
      <button onClick={handleClick}>Incluir</button>
    </div>
  );
};

export default SearchTeste;
