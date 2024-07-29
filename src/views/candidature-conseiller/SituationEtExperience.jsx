import React, { useState } from 'react';
import Checkbox from '../../components/commun/Checkbox';
import BoutonRadio from '../../components/commun/BoutonRadio';
import Input from '../../components/commun/Input';
import { situations } from './situations';
import PropTypes from 'prop-types';

export default function SituationEtExperience({ situationChecks, setSituationChecks, isSituationValid }) {
  const [isDiplomeSelected, setIsDiplomeSelected] = useState(false);

  const handleCheck = event => {
    const indexCaseCochee = situations.findIndex(situation => situation.id === event.target.id);
    const updatedCheckedState = situationChecks.map((item, index) =>
      index === indexCaseCochee ? !item : item
    );
    setSituationChecks(updatedCheckedState);

    setIsDiplomeSelected(event.target.id === 'diplome' && event.target.checked);
  };

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="situation-et-experience">
      <legend className="fr-h5">Votre situation et expérience</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Êtes-vous actuellement dans l’une des situations suivantes ? <span className="cc-obligatoire">*</span>
      </p>
      {situations.map(({ id, libelle }, index) =>
        <Checkbox id={id} key={id} onCheck={handleCheck} checked={situationChecks[index]}>
          {libelle}
        </Checkbox>
      )}
      {!isSituationValid && <div className="fr-messages-group fr-pl-1w" id="erreurs-checkboxes" aria-live="assertive">
        <p className="fr-message fr-message--error" id="checkboxes-error-message-error">Vous devez cocher au moins une case</p>
      </div>}
      {
        isDiplomeSelected &&
        <Input
          id="detailDiplome"
          isRequired={false}
        >
          Précisez le nom de votre diplôme, formation certifiante, modules de formation de médiation, numérique /accompagnement au numérique des publics.
        </Input>
      }
      <hr />
      <p className="fr-mb-3w cc-bold">
        Avez-vous une expérience professionnelle de médiation numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.</p>
      <BoutonRadio id="oui" nomGroupe="experienceProfessionnelle">
        Oui
      </BoutonRadio>
      <BoutonRadio id="non" nomGroupe="experienceProfessionnelle">
        Non
      </BoutonRadio>
    </fieldset >
  );
}

SituationEtExperience.propTypes = {
  situationChecks: PropTypes.array,
  setSituationChecks: PropTypes.func,
  isSituationValid: PropTypes.bool
};
