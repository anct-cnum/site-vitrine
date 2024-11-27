import React from 'react';
import Datepicker from '../../components/commun/Datepicker';
import PropTypes from 'prop-types';
import RadioGroup from '../../components/commun/RadioGroup';

const distances = [
  {
    id: '5',
    label: '5 km'
  },
  {
    id: '10',
    label: '10 km'
  },
  {
    id: '15',
    label: '15 km'
  },
  {
    id: '20',
    label: '20 km'
  },
  {
    id: '40',
    label: '40 km'
  },
  {
    id: '100',
    label: '100 km'
  },
  {
    id: '2000',
    label: 'France entière'
  },
];

export default function Disponibilite({ setDateDisponibilite, errors }) {
  const dateDuJour = new Date().toISOString().slice(0, 10);

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votre-disponibilite">
      <legend className="fr-h5">Votre disponibilité</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        À quel moment êtes-vous prêt(e) à démarrer votre mission et la formation de conseiller numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">
        Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.
      </p>
      <Datepicker id="dateDisponibilite" onChange={event => setDateDisponibilite(event.target.value)} min={dateDuJour} error={errors.dateDisponibilite}>
        Choisir une date
      </Datepicker>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Pour un emploi et une formation de conseiller numérique, vous êtes prêt(e) à vous déplacer à : <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">Distance à partir de votre lieu d’habitation</p>
      <RadioGroup nomGroupe="distanceMax" options={distances} tailleColonne={4} />
    </fieldset>
  );
}

Disponibilite.propTypes = {
  setDateDisponibilite: PropTypes.func,
  errors: PropTypes.object
};
