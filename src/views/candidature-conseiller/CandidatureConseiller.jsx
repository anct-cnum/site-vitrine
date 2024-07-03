import React from 'react';
import Sommaire from './Sommaire';
import InformationsDeContact from './InformationsDeContact';
import SituationEtExperience from './SituationEtExperience';
import Disponibilite from './Disponibilite';
import Motivation from './Motivation';
import EnResume from './EnResume';
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
          <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
          <form aria-label="Candidature conseiller">
            <InformationsDeContact />
            <SituationEtExperience />
            <Disponibilite />
            <Motivation />
            <EnResume />
            <button className="fr-btn cc-envoyer" type="submit">
              Envoyer votre candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
