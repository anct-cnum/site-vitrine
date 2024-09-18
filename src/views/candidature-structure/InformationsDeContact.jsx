import React from 'react';
import Input from '../../components/commun/Input';

export default function InformationsDeContact() {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="informations-de-contact">
      <legend className="fr-h5">Vos informations de contact</legend>
      <hr />
      <Input
        id="prenom"
        name="prenom"
      >
        Prénom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="nom"
        name="nom"
      >
        Nom <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="fonction"
        name="fonction"
      >
        Fonction <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="email"
        name="email"
        type="email"
      >
        Adresse e-mail <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="telephone"
        name="telephone"
        type="tel"
        pattern="0[1-9]{9}"
      >
        Téléphone <span className="cc-obligatoire">*</span>
      </Input>
    </fieldset>
  );
}
