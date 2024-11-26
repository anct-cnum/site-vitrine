import React from 'react';

import Datepicker from '../../components/commun/Datepicker';
import Input from '../../components/commun/Input';
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

export default function BesoinEnConseillerNumerique({ errors }) {
  const dateDuJour = new Date().toISOString().slice(0, 10);

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votre-besoin-en-conseiller-numerique">
      <legend className="fr-h5">Votre besoin en conseiller(s) numérique(s)</legend>
      <hr />
      <Input id="nombreConseillersSouhaites" name="nombreConseillersSouhaites" type="number" min="1" error={errors.nombreConseillersSouhaites}>
        Combien de conseillers numériques souhaitez-vous accueillir ? <span className="cc-obligatoire">*</span>
      </Input>
      <hr />
      <p className="fr-mb-3w cc-bold">Avez-vous déjà identifié un candidat pour le poste de conseiller numérique ? <span className="cc-obligatoire">*</span></p>
      <p className="fr-text--sm fr-hint-text">Si oui, merci d’inviter ce candidat à s’inscrire sur la plateforme Conseiller numérique.</p>
      <RadioGroup nomGroupe="aIdentifieCandidat" options={ouiOuNOn} />
      <hr />
      <p className="fr-mb-3w cc-bold">À partir de quand êtes vous prêt à accueillir votre conseiller numerique ? <span className="cc-obligatoire">*</span></p>
      <Datepicker id="dateDebutMission" min={dateDuJour} error={errors.dateDebutMission}>
        Choisir une date
      </Datepicker>
    </fieldset >
  );
}

BesoinEnConseillerNumerique.propTypes = {
  errors: PropTypes.object
};
