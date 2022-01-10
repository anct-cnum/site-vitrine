import React from 'react';
import logoFR from '../assets/brands/logo-france-relance-nb-min.svg';

function Accueil() {

  return (
    <div className="accueil">
      <div className="yellowPart"></div>
      <img src={logoFR} width="4%" className="logoFR" />
      <div className="bluePart"></div>
    </div>
  );
}

export default Accueil;
