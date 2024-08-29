import React from 'react';
import BoutonRadio from '../../components/commun/BoutonRadio';
import Datepicker from '../../components/commun/Datepicker';

export default function BesoinEnCoordinateur() {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votre-besoin-en-coordinateur">
      <legend className="fr-h5">Votre besoin en coordinateur</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Avez-vous déjà identifié un candidat pour le poste de coordinateur de conseiller numérique ?<span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">Si oui, merci d’inviter ce candidat à s’inscrire sur la plateforme Conseiller numérique</p>
      <BoutonRadio id="oui" nomGroupe="identificationCandidat">
        Oui
      </BoutonRadio>
      <BoutonRadio id="non" nomGroupe="identificationCandidat">
        Non
      </BoutonRadio>
      <p className="fr-mt-4w fr-mb-3w cc-bold">Le coordinateur<span className="cc-obligatoire">*</span></p>
      <BoutonRadio id="coordination" nomGroupe="coordinateur">
        Effectuera uniquement des missions de coordination
      </BoutonRadio>
      <BoutonRadio id="publics" nomGroupe="coordinateur">
        Accompagnera également des publics
      </BoutonRadio>
      <hr />
      <p className="fr-mb-3w cc-bold">À partir de quand êtes vous prêt à accueillir votre coordinateur ?<span className="cc-obligatoire">*</span></p>
      <Datepicker id="choisir-date">
        Choisir une date
      </Datepicker>
    </fieldset >
  );
}
