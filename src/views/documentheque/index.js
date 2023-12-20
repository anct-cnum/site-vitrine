import React from 'react';
import Header from '../../components/Header';
import Accompagnement from './Accompagnement';
import Ami from './Ami';
import Cadrage from './Cadrage';
import KitCommunication from './kitCommunication';
import Recrutement from './Recrutement';
import Sommaire from './Sommaire';
import Financement from './Financement';
import Formation from './Formation';

function Documentheque() {

  return (
    <div className="kit-communication">
      <Header />
      <div className="fr-container fr-mt-15w fr-mb-15w">
        <div className="fr-grid-row fr-grid-row--gutter fr-grid-row--center">
          <div className="fr-col-1"></div>
          <div className="fr-col-xs-12 fr-col-sm-10 fr-mb-9w">
            <h2 className="fr-h1 fr-mb-3w" style={{ marginTop: '0', textAlign: 'center' }}>
              Documenth&egrave;que Conseiller num&eacute;rique France Services
            </h2>
          </div>
        </div>
        <Sommaire />
        <Ami />
        <Financement />
        <Formation />
        <Cadrage />
        <Recrutement />
        <Accompagnement />
        <KitCommunication />
      </div>
    </div>
  );
}

export default Documentheque;
