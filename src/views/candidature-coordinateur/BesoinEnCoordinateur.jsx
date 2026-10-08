import React from 'react';
import Datepicker from '../../components/commun/Datepicker';
import PropTypes from 'prop-types';
import RadioGroup from '../../components/commun/RadioGroup';

const ouiOuNOn = [
  {
    id: 'oui',
    label: 'Oui'
  },
  {
    id: 'non',
    label: 'Non'
  },
];

const typeContrat = [
  {
    id: 'FT',
    label: 'Effectuera uniquement des missions de coordination'
  },
  {
    id: 'PT',
    label: 'Accompagnera également des publics'
  },
];

export default function BesoinEnCoordinateur({ errors }) {
  const dateDuJour = new Date().toISOString().slice(0, 10);

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votre-besoin-en-coordinateur">
      <legend className="fr-h5">Votre besoin en coordinateur</legend>
      <hr />
      <p className="fr-mb-3w cc-bold" id="question-candidat-identifie">
        Avez-vous déjà identifié un candidat pour le poste de coordinateur de conseiller numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text" id="description-candidat-identifie">Si oui, merci d’inviter ce candidat à s’inscrire sur la plateforme Conseiller numérique</p>
      <RadioGroup
        nomGroupe="aIdentifieCoordinateur"
        options={ouiOuNOn}
        labelledBy="question-candidat-identifie"
        describedBy="description-candidat-identifie"
      />
      <p className="fr-mt-4w fr-mb-3w cc-bold" id="question-type-contrat-coordinateur">Le coordinateur<span className="cc-obligatoire">*</span></p>
      <RadioGroup nomGroupe="coordinateurTypeContrat" options={typeContrat} labelledBy="question-type-contrat-coordinateur" />
      <hr />
      <Datepicker id="dateDebutMission" min={dateDuJour} error={errors.dateDebutMission}>
        <span className="cc-bold">
          À partir de quand êtes vous prêt à accueillir votre coordinateur ? <span className="cc-obligatoire">*</span>
        </span>
      </Datepicker>
    </fieldset >
  );
}

BesoinEnCoordinateur.propTypes = {
  errors: PropTypes.object
};
