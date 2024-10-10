import React, { useState } from 'react';
import Checkbox from '../../components/commun/Checkbox';
import BoutonRadio from '../../components/commun/BoutonRadio';
import Input from '../../components/commun/Input';
import { situations } from './situations';
import PropTypes from 'prop-types';

export default function SituationEtExperience({ isSituationValid }) {
  const [isDiplomeSelected, setIsDiplomeSelected] = useState(false);

  const handleCheck = event => {
    setIsDiplomeSelected(event.target.id === 'estDiplomeMedNum' && event.target.checked);
  };

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="situation-et-experience">
      <legend className="fr-h5">Votre situation et expérience</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Êtes-vous actuellement dans l’une des situations suivantes ? <span className="cc-obligatoire">*</span>
      </p>
      {situations.map(({ id, libelle }) =>
        <Checkbox id={id} key={id} onCheck={handleCheck} required={false}>
          {libelle}
        </Checkbox>
      )}
      {!isSituationValid && <div className="fr-messages-group fr-pl-1w" id="erreurs-checkboxes" aria-live="assertive">
        <p className="fr-message fr-message--error" id="checkboxes-error-message-error">Vous devez cocher au moins une case</p>
      </div>}
      {
        isDiplomeSelected &&
        <Input
          id="nomDiplomeMedNum"
          isRequired={isDiplomeSelected}
        >
          Précisez le nom de votre diplôme, formation certifiante, modules de formation de médiation, numérique /accompagnement au numérique des publics.
        </Input>
      }
      <hr />
      <p className="fr-mb-3w cc-bold">
        Avez-vous une expérience professionnelle de médiation numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.</p>
      <BoutonRadio id="oui" nomGroupe="aUneExperienceMedNum">
        Oui
      </BoutonRadio>
      <BoutonRadio id="non" nomGroupe="aUneExperienceMedNum">
        Non
      </BoutonRadio>
    </fieldset >
  );
}

SituationEtExperience.propTypes = {
  isSituationValid: PropTypes.bool
};
