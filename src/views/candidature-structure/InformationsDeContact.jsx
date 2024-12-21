import React from 'react';
import Input from '../../components/commun/Input';
import PropTypes from 'prop-types';

export default function InformationsDeContact({ errors }) {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="informations-de-contact">
      <legend className="fr-h5">Vos informations de contact</legend>
      <hr />
      <Input
        id="prenom"
        name="prenom"
        error={errors.prenom}
      >
        Prénom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="nom"
        name="nom"
        error={errors.nom}
      >
        Nom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="fonction"
        name="fonction"
        error={errors.fonction}
      >
        Fonction <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="email"
        name="email"
        type="email"
        pattern="^\S+@\S+\.\S+$"
        error={errors.email}
      >
        Adresse électronique <span className="cc-obligatoire">*</span> <span className="fr-hint-text">Format attendu : nom@domaine.fr</span>
      </Input>
      <Input
        id="telephone"
        name="telephone"
        type="tel"
        pattern="([+][0-9]{11,12})|([0-9]{10})"
        error={errors.telephone}
      >
        Téléphone <span className="cc-obligatoire">*</span>{' '}
        <span className="fr-hint-text">Format attendu : 0122334455 ou +33122334455</span>
      </Input>
    </fieldset>
  );
}

InformationsDeContact.propTypes = {
  errors: PropTypes.object,
};
