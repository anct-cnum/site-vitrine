import React from 'react';
import Input from '../../components/commun/Input';
import AddressChooser from './AddressChooser';
import PropTypes from 'prop-types';

export default function InformationsDeContact({ setCodeCommune }) {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="informations-de-contact">
      <legend className="fr-h5">Vos informations de contact</legend>
      <hr />
      <Input
        id="prenom"
      >
        Prénom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="nom"
      >
        Nom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="email"
        type="email"
      >
        Adresse e-mail <span className="cc-obligatoire">*</span> <span className="fr-hint-text">Format attendu : nom@domaine.fr</span>
      </Input>
      <Input
        id="telephone"
        type="tel"
        pattern="[+](33|590|596|594|262|269|687)[0-9]{9}"
        isRequired={false}
      >
        Téléphone <span className="fr-hint-text">Format attendu : +33122334455</span>
      </Input>
      <AddressChooser setCodeCommune={setCodeCommune} />
    </fieldset>
  );
}

InformationsDeContact.propTypes = {
  setCodeCommune: PropTypes.func
};
