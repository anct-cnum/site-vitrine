import React, { useEffect, useState, useRef } from 'react';
import SommaireStructure from './SommaireStructure';
import InformationsDeContact from './InformationsDeContact';
import InformationsDeStructure from './InformationsDeStructure';
import BesoinEnConseillerNumerique from './BesoinEnConseillerNumerique';
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
import { checkValidity } from '../../shared/checkValidity';

export default function CandidatureStructure() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [codeCommune, setCodeCommune] = useState('');
  const [widgetId, setWidgetId] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { buildStructureData, creerCandidatureStructure } = useApiAdmin();
  const ref = useRef(null);

  useEffect(() => {
    document.title = 'Conseiller numérique - Engager un conseiller numérique';
  }, []);

  useScrollToSection();

  const validerLaCandidature = async event => {
    setIsSending(true);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const structureData = await buildStructureData(formData, geoLocation, codeCommune);
    const resultatCreation = await creerCandidatureStructure(structureData);
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
    setIsSending(false);
  };

  return (
    <div className="fr-container fr-mt-5w fr-mb-5w">
      <div className="fr-grid-row">
        <div className="fr-col-12 fr-col-md-4">
          <SommaireStructure />
        </div>
        <div className="fr-col-12 fr-col-md-8 fr-py-12v">
          <h1 className="cc-titre fr-mb-5w">Je souhaite engager un conseiller numérique</h1>
          <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
          {validationError &&
            <div className="fr-pb-2w">
              <Alert titre="Erreur de validation">
                {validationError}
              </Alert>
            </div>
          }
          <form
            aria-label="Candidature structure"
            onSubmit={validerLaCandidature}
            onInput={() => checkValidity(ref, setErrors)}
            ref={ref}
          >
            <InformationsDeStructure
              setGeoLocation={setGeoLocation}
              geoLocation={geoLocation}
              setCodeCommune={setCodeCommune}
              errors={errors}
              setErrors={setErrors}
              formRef={ref}
            />
            <InformationsDeContact errors={errors} />
            <BesoinEnConseillerNumerique errors={errors} />
            <Motivation errors={errors} />
            <Engagement />
            <div className="fr-mt-2w fr-mb-2w">
              <Captcha setWidgetId={setWidgetId} widgetId={widgetId} />
            </div>
            <button
              className="fr-btn cc-envoyer"
              type="submit"
              onClick={() => checkValidity(ref, setErrors)}
              disabled={isSending}>
              {isSending ? 'Envoi en cours...' : 'Envoyer votre candidature'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
