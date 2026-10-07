import React from 'react';
import Input from '../../components/commun/Input';
import AddressChooser from './AddressChooser';
import PropTypes from 'prop-types';

export default function InformationsDeContact({ errors }) {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="informations-de-contact">
      <legend className="fr-h5">Vos informations de contact</legend>
      <hr />
      <Input
        id="prenom"
        autoComplete="given-name"
        error={errors.prenom}
      >
        Prénom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="nom"
        autoComplete="family-name"
        error={errors.nom}
      >
        Nom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="email"
        autoComplete="email"
        type="email"
        pattern="^\S+@\S+\.\S+$"
        error={errors.email}
        formatAttendu="nom@domaine.fr"
      >
        Adresse électronique <span className="cc-obligatoire">*</span> <span className="fr-hint-text">Format attendu : nom@domaine.fr</span>
      </Input>
      <Input
        id="telephone"
        autoComplete="tel"
        type="tel"
        pattern="^(\+\d{11,12}|\d{10})$"
        isRequired={false}
        error={errors.telephone}
        formatAttendu="0122334455 ou +33122334455"
      >
        Téléphone <span className="fr-hint-text">Format attendu : 0122334455 ou +33122334455</span>
      </Input>
      <AddressChooser error={errors.lieuHabitation} />
    </fieldset>
  );
}

InformationsDeContact.propTypes = {
  errors: PropTypes.object
};
