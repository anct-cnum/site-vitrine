import React from 'react';
import imageConseiller from '../../assets/images/conseiller-pied-de-page-min.svg';
import imageConseillere from '../../assets/images/conseillere-pied-de-page-min.svg';
import imageCartographie from '../../assets/images/cartographie-cnfs-min.svg';

function PriseRDV() {

  const urlCartographie = process.env.REACT_APP_CARTOGRAPHIE_URL;

  return (
    <div className="priseRDV">
      <div className="contentColumn">
        <div className="contentImage">
          <img src={imageConseillere} alt="Conseill&egrave;re" className="image" />
        </div>
        <div className="contentRow">
          <h4 className="fr-h4 titleRDV fr-mb-4w">
            Je veux prendre rendez-vous avec un conseiller num&eacute;rique France Services d&egrave;s maintenant
          </h4>
          <a href={urlCartographie} className="fr-btn btnCustom fr-mb-3w">
            Trouver un conseiller num&eacute;rique pr&egrave;s de chez moi
          </a>
          <a href={urlCartographie} id="cartographie" className="fr-mb-6w"><img src={imageCartographie} alt="Cartographie" /></a>
        </div>
        <div className="contentImage">
          <img src={imageConseiller} alt="Conseiller" className="image" />
        </div>
      </div>
    </div>
  );
}

export default PriseRDV;
