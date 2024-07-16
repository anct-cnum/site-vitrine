import React from 'react';
import Checkbox from './Checkbox';
import BoutonRadio from './BoutonRadio';

export default function SituationEtExperience() {
  const situations = [
    {
      id: 'demandeurEmploi',
      libelle: 'Demandeur d’emploi'
    },
    {
      id: 'enEmploi',
      libelle: 'En emploi'
    },
    {
      id: 'enFormation',
      libelle: 'En formation'
    },
    {
      id: 'diplome',
      libelle: 'Diplômé dans le secteur de la médiation numérique (formation certifiante ou non)'
    }
  ];

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="situationEtExperience">
      <legend className="fr-h5">Votre situation et expérience</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Êtes-vous actuellement dans l’une des situations suivantes ? <span className="cc-obligatoire">*</span>
      </p>
      {situations.map(({ id, libelle }) =>
        <Checkbox id={id} key={id}>
          {libelle}
        </Checkbox>
      )}
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
    </fieldset>
  );
}
