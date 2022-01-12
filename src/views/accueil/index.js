import React from 'react';
import Header from '../../components/Header';
import logoFR from '../../assets/brands/logo-france-relance-nb-min.svg';
import Themes from './Themes';

function Accueil() {

  const urlCartographie = process.env.REACT_APP_CARTOGRAPHIE_URL;

  return (
    <>
      <div className="accueil">
        <Header />
        <div className="presentationPart">
          <div className="yellowPart">
            <a className="fr-nav__link yellowTitle" href={urlCartographie} target="_self">
              Trouver un conseiller num&eacute;rique pr&egrave;s de chez moi
            </a>
          </div>
          <div className="logoPart">
            <img src={logoFR} width="70px" className="logoFR" />
          </div>
          <div className="bluePart">
            <p className="blueTitle">&Agrave; propos des conseillers num&eacute;riques</p>
          </div>
        </div>
      </div>
      <Themes />
    </>
  );
}

export default Accueil;
