import React from 'react';

const Header = () => {
  return (
    <div className="container">
      <h1 className="flex justify-center city-name">Vila Chã</h1>
      <span className="flex justify-center">Parcialmente nublado</span>
      <div className="flex justify-center celcius">19º</div>
      <span className="flex justify-center">H: 23º L:17º</span>
    </div>
  );
};

export default Header;
