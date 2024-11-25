import React, { useEffect, useState } from 'react';
import SommaireCoordinateur from './SommaireCoordinateur';
import InformationsDeContact from '../candidature-structure/InformationsDeContact';
import InformationsDeStructure from '../candidature-structure/InformationsDeStructure';
import BesoinEnCoordinateur from './BesoinEnCoordinateur';
import Motivation from './Motivation';
import Engagement from './Engagement';
import Alert from '../../components/commun/Alert';
import Captcha from '../../components/commun/Captcha';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { useNavigate } from 'react-router-dom';
import { useApiAdmin } from '../candidature-conseiller/useApiAdmin';

import '@gouvfr/dsfr/dist/component/form/form.min.css';
import '@gouvfr/dsfr/dist/component/input/input.min.css';
import '@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css';
import '@gouvfr/dsfr/dist/component/radio/radio.min.css';
import '@gouvfr/dsfr/dist/component/badge/badge.min.css';
import '@gouvfr/dsfr/dist/component/notice/notice.min.css';
import '@gouvfr/dsfr/dist/component/sidemenu/sidemenu.min.css';
import '@gouvfr/dsfr/dist/component/alert/alert.min.css';
import '../candidature-conseiller/CandidatureConseiller.css';

export default function CandidatureCoordinateur() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [validationError, setValidationError] = useState('');
  const [widgetId, setWidgetId] = useState(null);
  const [codeCommune, setCodeCommune] = useState('');
  const navigate = useNavigate();
  const { buildCoordinateurData, creerCandidatureCoordinateur } = useApiAdmin();
  useScrollToSection();

  useEffect(() => {
    document.title = 'Conseiller numérique - Devenir coordinateur de conseillers numériques';
  }, []);

  const validerLaCandidature = async event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const coordinateurData = await buildCoordinateurData(formData, geoLocation, codeCommune);
    const resultatCreation = await creerCandidatureCoordinateur(coordinateurData);
    if (resultatCreation?.status >= 400) {
      const error = await resultatCreation.json();
      setValidationError(error.message);
      window.turnstile.reset(widgetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (!resultatCreation.status) {
      setValidationError(resultatCreation.message);
      window.turnstile.reset(widgetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/candidature-validee-structure');
    }
  };

  return (
    <div className="fr-container fr-mt-5w fr-mb-5w">
      <div className="fr-grid-row">
        <div className="fr-col-12 fr-col-md-4">
          <SommaireCoordinateur />
        </div>
        <div className="fr-col-12 fr-col-md-8 fr-py-12v">
          <h1 className="cc-titre fr-mb-5w">Je souhaite engager un coordinateur pour mes conseillers numériques</h1>
          <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
          {validationError &&
            <div className="fr-pb-2w">
              <Alert titre="Erreur de validation">
                {validationError}
              </Alert>
            </div>
          }
          <form aria-label="Candidature coordinateur" onSubmit={validerLaCandidature}>
            <InformationsDeStructure setGeoLocation={setGeoLocation} geoLocation={geoLocation} setCodeCommune={setCodeCommune}/>
            <InformationsDeContact />
            <BesoinEnCoordinateur />
            <Motivation />
            <Engagement />
            <div className="fr-mt-2w fr-mb-2w">
              <Captcha setWidgetId={setWidgetId} widgetId={widgetId} />
            </div>
            <button className="fr-btn cc-envoyer" type="submit">
              Envoyer votre candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
