import React from 'react';
import Sommaire from './Sommaire';
import InformationsDeContact from './InformationsDeContact';
import SituationEtExperience from './SituationEtExperience';
import Disponibilite from './Disponibilite';
import './CandidatureConseiller.css';

export default function CandidatureConseiller() {
  return (
    <div className="fr-container fr-mt-5w fr-mb-5w">
      <div className="fr-grid-row">
        <div className="fr-col-4">
          <Sommaire />
        </div>
        <div className="fr-col-8">
          <h1 className="cc-titre fr-mb-5w">Je veux devenir conseiller numérique</h1>
          <form aria-label="Candidature conseiller">
            <InformationsDeContact />
            <SituationEtExperience />
            <Disponibilite />
            <button className="fr-btn" type="submit">
              Envoyer votre candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
