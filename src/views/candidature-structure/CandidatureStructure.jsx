import SommaireStructure from './SommaireStructure';
import InformationsDeContact from './InformationsDeContact';
import InformationsDeStructure from './InformationsDeStructure';
import BesoinEnConseillerNumerique from './BesoinEnConseillerNumerique';
import Motivation from './Motivation';
import Engagement from './Engagement';
import { useScrollToSection } from '../../hooks/useScrollToSection';

import '@gouvfr/dsfr/dist/component/form/form.min.css';
import '@gouvfr/dsfr/dist/component/input/input.min.css';
import '@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css';
import '@gouvfr/dsfr/dist/component/radio/radio.min.css';
import '@gouvfr/dsfr/dist/component/badge/badge.min.css';
import '@gouvfr/dsfr/dist/component/notice/notice.min.css';
import '@gouvfr/dsfr/dist/component/sidemenu/sidemenu.min.css';
import '../candidature-conseiller/CandidatureConseiller.css';
import { useState } from 'react';

export default function CandidatureStructure() {
  const [geoLocation, setGeoLocation] = useState(null);

  useScrollToSection();

  const validerLaCandidature = async event => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const structureData = { ...Object.fromEntries(formData), ...geoLocation };
    if (structureData.dateAccueilConseillerNumerique) {
      const date = new Date(structureData.dateAccueilConseillerNumerique);
      structureData.dateAccueilConseillerNumerique = date.toISOString();
    }
    console.log('structureData', structureData);
    // creerCandidatureStructure(structureData);
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
          <form aria-label="Candidature structure" onSubmit={validerLaCandidature}>
            <InformationsDeStructure setGeoLocation={setGeoLocation} geoLocation={geoLocation}/>
            <InformationsDeContact />
            <BesoinEnConseillerNumerique />
            <Motivation />
            <Engagement />
            <button className="fr-btn cc-envoyer" type="submit">
              Envoyer votre candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
