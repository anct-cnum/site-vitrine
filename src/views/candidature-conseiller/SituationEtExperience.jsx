import React, { useState } from 'react';
import Checkbox from './Checkbox';
import BoutonRadio from './BoutonRadio';
import Input from './Input';

export default function SituationEtExperience() {
  const situations = [
    {
      id: 'demandeurEmploi',
      libelle: 'Demandeur d’emploi',
    },
    {
      id: 'enEmploi',
      libelle: 'En emploi',
    },
    {
      id: 'enFormation',
      libelle: 'En formation',
    },
    {
      id: 'diplome',
      libelle: 'Diplômé dans le secteur de la médiation numérique (formation certifiante ou non)',
    }
  ];

  const [isDiplomeSelected, setIsDiplomeSelected] = useState(false);
  const [isSituationValid, setIsSituationValid] = useState(true);
  const [checkedState, setCheckedState] = useState(
    new Array(situations.length).fill(false)
  );

  const handleCheck = event => {
    const indexCaseCochee = situations.findIndex(situation => situation.id === event.target.id);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === indexCaseCochee ? !item : item
    );
    setCheckedState(updatedCheckedState);
    setIsSituationValid(updatedCheckedState.some(checked => checked));
    setIsDiplomeSelected(event.target.id === 'diplome' && event.target.checked);
  };

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="situationEtExperience">
      <legend className="fr-h5">Votre situation et expérience</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Êtes-vous actuellement dans l’une des situations suivantes ? <span className="cc-obligatoire">*</span>
      </p>
      {situations.map(({ id, libelle }, index) =>
        <Checkbox id={id} key={id} onCheck={handleCheck} checked={checkedState[index]}>
          {libelle}
        </Checkbox>
      )}
      {!isSituationValid && <div className="fr-messages-group fr-pl-1w" id="checkboxes-error-messages" aria-live="assertive">
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
