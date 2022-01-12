import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Sommaire from './Sommaire';
import Presentation from './Presentation';
import IdentiteVisuelle from './IdentiteVisuelle';
import CharteGraphique from './CharteGraphique';
import LogoTypes from './LogoTypes';
import Illustrations from './Illustrations';
import SupportAffichage from './SupportAffichage';
import Gabarits from './Gabarits';
import ModelePresentation from './ModelePresentation';
import Affiche from './Affiche';
import Outils from './Outils';
import CartesVisite from './CartesVisite';
import Signature from './Signature';
import Etiquettes from './Etiquettes';

function KitCommunication() {

  //Effet de scroll car cette vue est accessible via le footer
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return (
    <div className="kit-communication">
      <Header />
      <div className="fr-container fr-mt-15w fr-mb-15w">
        <div className="fr-grid-row fr-grid-row--gutter fr-grid-row--center">
          <div className="fr-col-1"></div>
          <div className="fr-col-10 fr-mb-9w">
            <h2 className="fr-h1 fr-mb-9w" style={{ marginTop: '0', textAlign: 'center' }}>
              Kit de communication Conseiller num&eacute;rique France Services
            </h2>
          </div>
        </div>
        <Sommaire />
        <Presentation />
        <IdentiteVisuelle />
        <CharteGraphique />
        <LogoTypes />
        <Illustrations />
        <SupportAffichage />
        <Gabarits />
        <ModelePresentation />
        <Affiche />
        <Outils />
        <CartesVisite />
        <Signature />
        <Etiquettes />
      </div>
    </div>
  );
}

export default KitCommunication;
