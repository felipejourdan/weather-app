import React from 'react';
import LocationTeste from './LocationTeste';
import SearchTeste from './SearchTeste';
import AppMount from './AppMount';
import { UseFetch } from './FetchContext';

function App() {
  return (
    <div className="app">
      <UseFetch>
        <SearchTeste />
        <LocationTeste />
        <AppMount />
      </UseFetch>
    </div>
  );
}

export default App;
