import React, { useState } from 'react';
import SommaireConseiller from './SommaireConseiller';
import InformationsDeContact from './InformationsDeContact';
import SituationEtExperience from './SituationEtExperience';
import Disponibilite from './Disponibilite';
import Motivation from './Motivation';
import EnResume from './EnResume';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { useNavigate } from 'react-router-dom';

import '@gouvfr/dsfr/dist/component/form/form.min.css';
import '@gouvfr/dsfr/dist/component/input/input.min.css';
import '@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css';
import '@gouvfr/dsfr/dist/component/radio/radio.min.css';
import '@gouvfr/dsfr/dist/component/badge/badge.min.css';
import '@gouvfr/dsfr/dist/component/notice/notice.min.css';
import '@gouvfr/dsfr/dist/component/sidemenu/sidemenu.min.css';
import '@gouvfr/dsfr/dist/component/alert/alert.min.css';
import './CandidatureConseiller.css';
import { useApiAdmin } from './useApiAdmin';
import Alert from '../../components/commun/Alert';

export default function CandidatureConseiller() {
  const [dateDisponibilite, setDateDisponibilite] = useState('');
  const [isSituationValid, setIsSituationValid] = useState(true);
  const [validationError, setValidationError] = useState();
  const { buildConseillerData, creerCandidatureConseiller } = useApiAdmin();
  const navigate = useNavigate();
  useScrollToSection();

  const estSituationRemplie = formData => {
    const demandeurEmploi = formData.get('estDemandeurEmploi');
    const enEmploi = formData.get('estEnEmploi');
    const enFormation = formData.get('estEnFormation');
    const diplome = formData.get('estDiplomeMedNum');

    return demandeurEmploi || enEmploi || enFormation || diplome;
  };

  const validerLaCandidature = async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (!estSituationRemplie(formData)) {
      setIsSituationValid(false);
      document.getElementById('situation-et-experience').scrollIntoView();
    } else {
      const conseillerData = await buildConseillerData(formData);
      const resultatCreation = await creerCandidatureConseiller(conseillerData);
      if (resultatCreation.status >= 400) {
        const error = await resultatCreation.json();
        setValidationError(error.message);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/candidature-validee');
      }
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
          {validationError &&
            <div className="fr-pb-2w">
              <Alert titre="Erreur de validation">
                {validationError}
              </Alert>
            </div>
          }
          <form
            aria-label="Candidature conseiller"
            onSubmit={validerLaCandidature}
          >
            <InformationsDeContact />
            <SituationEtExperience isSituationValid={isSituationValid} />
            <Disponibilite setDateDisponibilite={setDateDisponibilite} />
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
