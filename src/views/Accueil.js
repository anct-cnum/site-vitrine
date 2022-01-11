import React from 'react';
import Header from '../components/Header';
import logoFR from '../assets/brands/logo-france-relance-nb-min.svg';

function Accueil() {

  return (
    <div className="accueil">
      <Header/>
      <div className="presentationPart">
        <div className="yellowPart"></div>
        <div className="logoPart">
          <img src={logoFR} width="70px" className="logoFR" />
        </div>
        <div className="bluePart"></div>
      </div>
    </div>
  );
}

export default Accueil;
