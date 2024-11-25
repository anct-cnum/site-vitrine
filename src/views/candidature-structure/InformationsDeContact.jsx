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
        pattern=".+@.+\..{2,}"
      >
        Adresse électronique <span className="cc-obligatoire">*</span> <span className="fr-hint-text">Format attendu : nom@domaine.fr</span>
      </Input>
      <Input
        id="telephone"
        name="telephone"
        type="tel"
        pattern="([+][0-9]{11,12})|([0-9]{10})"
      >
        Téléphone <span className="cc-obligatoire">*</span>{' '}
        <span className="fr-hint-text">Format attendu : 0122334455 ou +33122334455</span>
      </Input>
    </fieldset>
  );
}
