import React, { useState } from 'react';
import SommaireConseiller from './SommaireConseiller';
import InformationsDeContact from './InformationsDeContact';
import SituationEtExperience from './SituationEtExperience';
import Disponibilite from './Disponibilite';
import Motivation from './Motivation';
import EnResume from './EnResume';
import { useScrollToSection } from '../../hooks/useScrollToSection';


import '@gouvfr/dsfr/dist/component/form/form.min.css';
import '@gouvfr/dsfr/dist/component/input/input.min.css';
import '@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css';
import '@gouvfr/dsfr/dist/component/radio/radio.min.css';
import '@gouvfr/dsfr/dist/component/badge/badge.min.css';
import '@gouvfr/dsfr/dist/component/notice/notice.min.css';
import '@gouvfr/dsfr/dist/component/sidemenu/sidemenu.min.css';
import './CandidatureConseiller.css';
import dayjs from 'dayjs';

export default function CandidatureConseiller() {
  const [dateDisponibilite, setDateDisponibilite] = useState('');
  const [isSituationValid, setIsSituationValid] = useState(true);
  const minDateDuJour = dayjs().format('YYYY-MM-DD');

  useScrollToSection();

  const validerLaCandidature = event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const situations = formData.get('situations');

    if (situations === null) {
      setIsSituationValid(false);
      document.getElementById('situation-et-experience').scrollIntoView();
    } else {
      event.currentTarget.submit();
    }
  };

  return (
    <div className="fr-container fr-mt-5w fr-mb-5w">
      <div className="fr-grid-row">
        <div className="fr-col-12 fr-col-md-4">
          <SommaireConseiller />
        </div>
        <div className="fr-col-12 fr-col-md-8 fr-py-12v">
          <h1 className="cc-titre fr-mb-5w">Je veux devenir conseiller numérique</h1>
          <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
          <form aria-label="Candidature conseiller" onSubmit={validerLaCandidature}>
            <InformationsDeContact />
            <SituationEtExperience isSituationValid={isSituationValid} />
            <Disponibilite setDateDisponibilite={setDateDisponibilite} minDateDuJour={minDateDuJour}/>
            <Motivation />
            <EnResume dateDisponibilite={dateDisponibilite} />
            <button className="fr-btn cc-envoyer" type="submit">
              Envoyer votre candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
