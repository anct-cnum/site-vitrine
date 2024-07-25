import React from 'react';

import BoutonRadio from '../../components/commun/BoutonRadio';
import Datepicker from '../../components/commun/Datepicker';
import Input from '../../components/commun/Input';
import PropTypes from 'prop-types';

export default function BesoinEnConseillerNumerique({ setDateAccueilConseillerNumerique }) {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votre-besoin-en-conseiller-numerique">
      <legend className="fr-h5">Votre besoin en conseiller(s) numérique(s)</legend>
      <hr />
      <Input id="nombreConseillersSouhaites" type="number">
        Combien de conseillers numériques souhaitez-vous accueillir ?<span className="cc-obligatoire">*</span>
      </Input>
      <hr />
      <p className="fr-mb-3w cc-bold">Avez-vous déjà identifié un candidat pour le poste de conseiller numérique ?<span className="cc-obligatoire">*</span></p>
      <p className="fr-text--sm fr-hint-text">Si oui, merci d’inviter ce candidat à s’inscrire sur la plateforme Conseiller numérique</p>
      <BoutonRadio id="oui" nomGroupe="identificationCandidat">
        Oui
      </BoutonRadio>
      <BoutonRadio id="non" nomGroupe="identificationCandidat">
        Non
      </BoutonRadio>
      <hr />
      <p className="fr-mb-3w cc-bold">À partir de quand êtes vous prêt à accueillir votre conseiller numerique ?<span className="cc-obligatoire">*</span></p>
      <Datepicker id="choisir-date" onChange={event => setDateAccueilConseillerNumerique(event.target.value)}>
        Choisir une date
      </Datepicker>
    </fieldset >
  );
}

BesoinEnConseillerNumerique.propTypes = {
  setDateAccueilConseillerNumerique: PropTypes.func,
};
