import React, { useEffect, useState } from 'react';
import SommaireCoordinateur from './SommaireCoordinateur';
import InformationsDeContact from '../candidature-structure/InformationsDeContact';
import InformationsDeStructure from '../candidature-structure/InformationsDeStructure';
import BesoinEnCoordinateur from './BesoinEnCoordinateur';
import Motivation from './Motivation';
import Engagement from './Engagement';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import Captcha from '../../components/commun/Captcha';

import '@gouvfr/dsfr/dist/component/form/form.min.css';
import '@gouvfr/dsfr/dist/component/input/input.min.css';
import '@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css';
import '@gouvfr/dsfr/dist/component/radio/radio.min.css';
import '@gouvfr/dsfr/dist/component/badge/badge.min.css';
import '@gouvfr/dsfr/dist/component/notice/notice.min.css';
import '@gouvfr/dsfr/dist/component/sidemenu/sidemenu.min.css';
import '../candidature-conseiller/CandidatureConseiller.css';

export default function CandidatureCoordinateur() {
  const [geoLocation, setGeoLocation] = useState(null);
  useScrollToSection();

  useEffect(() => {
    document.title = 'Conseiller numérique - Devenir coordinateur de conseillers numériques';
  }, []);

  return (
    <div className="fr-container fr-mt-5w fr-mb-5w">
      <div className="fr-grid-row">
        <div className="fr-col-12 fr-col-md-4">
          <SommaireCoordinateur />
        </div>
        <div className="fr-col-12 fr-col-md-8 fr-py-12v">
          <h1 className="cc-titre fr-mb-5w">Je souhaite engager un coordinateur pour mes conseillers numériques</h1>
          <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
          <form aria-label="Candidature coordinateur" >
            <InformationsDeStructure setGeoLocation={setGeoLocation} geoLocation={geoLocation} />
            <InformationsDeContact />
            <BesoinEnCoordinateur />
            <Motivation />
            <Engagement />
            <div className="fr-mt-2w fr-mb-2w">
              <Captcha />
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
