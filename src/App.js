import React, { useState } from 'react';
import { LocationStorage } from './LocationContext';
import { SearchStorage } from './SearchContext';
import Location from './Location';
import Search from './Search';

function App() {
  return (
    <div>
      <SearchStorage>
      <Search />
      </SearchStorage>

      <LocationStorage>
      <Location />
      </LocationStorage>
    </div>
  );
}

export default App;
