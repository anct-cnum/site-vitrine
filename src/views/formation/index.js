import React from 'react';
import Header from '../../components/Header';
import Introduction from './Introduction';
import ParcoursFormation from './ParcoursFormation';
import FormationInitiale from './FormationInitiale';
import FormationContinue from './FormationContinue';
import PassageTitreREMN from './PassageTitreREMN';
import Question from './Question';

function Formation() {

  return (
    <>
      <Header/>
      <div className="formation">
        <div className="fr-container fr-mb-10w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <Introduction />
            <ParcoursFormation />
            <FormationInitiale />
            <FormationContinue />
            <PassageTitreREMN />
            <Question />
          </div>
        </div>
      </div>
    </>
  );
}

export default Formation;
