import React from 'react';

function PriseRDV() {

  const urlCartographie = process.env.REACT_APP_CARTOGRAPHIE_URL;

  return (
    <div className="priseRDV fr-mt-8w">
      <h4 className="fr-h4 titleRDV">
        Je veux prendre rendez-vous avec un Conseiller num&eacute;rique France Services d&egrave;s maintenant
      </h4>
      <a href={urlCartographie} className="fr-btn btnCustom">
        Trouver un conseiller num&eacute;rique pr&egrave;s de chez moi
      </a>
    </div>
  );
}

export default PriseRDV;
