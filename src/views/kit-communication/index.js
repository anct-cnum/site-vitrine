import React from 'react';
import Header from '../../components/Header';
import Sommaire from './Sommaire';
import Presentation from './Presentation';
import IdentiteVisuelle from './IdentiteVisuelle';
import Orthographe from './Orthographe';
import MentionsRequises from './MentionsRequises';
import CharteGraphique from './CharteGraphique';
import LogoTypes from './LogoTypes';
import Illustrations from './Illustrations';
import SupportCommunication from './SupportCommunication';
import PlaquettePresentation from './PlaquettePresentation';
import Gabarits from './Gabarits';
import ModelePresentation from './ModelePresentation';
import Affiche from './Affiche';
import Outils from './Outils';
import CartesVisite from './CartesVisite';
import Signature from './Signature';
import Etiquettes from './Etiquettes';

function KitCommunication() {

  return (
    <div className="kit-communication">
      <Header />
      <div className="fr-container fr-mt-15w fr-mb-15w">
        <div className="fr-grid-row fr-grid-row--gutter fr-grid-row--center">
          <div className="fr-col-1"></div>
          <div className="fr-col-10 fr-mb-9w">
            <h2 className="fr-h1 fr-mb-3w" style={{ marginTop: '0', textAlign: 'center' }}>
              Kit de communication Conseiller num&eacute;rique France Services
            </h2>
          </div>
        </div>
        <Sommaire />
        <Presentation />
        <IdentiteVisuelle />
        <Orthographe />
        <MentionsRequises />
        <CharteGraphique />
        <LogoTypes />
        <Illustrations />
        <SupportCommunication />
        <PlaquettePresentation />
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
