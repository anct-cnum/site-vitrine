import React from 'react';

export default function Disponibilite() {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votreDisponibilite">
      <legend className="fr-h5">Votre disponibilité</legend>
      <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
      <hr />
      <p className="fr-mb-3w cc-bold">
        À quel moment êtes-vous prêt(e) à démarrer votre mission et la formation de conseiller numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">
        Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.
      </p>
    </fieldset>
  );
}
