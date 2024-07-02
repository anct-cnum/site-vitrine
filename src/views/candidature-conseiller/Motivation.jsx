import React from 'react';

export default function Motivation() {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votreMotivation">
      <legend className="fr-h5" id="titreMotivation">Votre motivation <span className="cc-obligatoire">*</span></legend>
      <p className="fr-text--sm fr-hint-text">
        En quelques lignes, décrivez votre motivation personnelle pour devenir conseiller numérique et{' '}
        aider les personnes à devenir autonomes dans l’utilisation des outils numériques.
      </p>
      <div className="fr-input-group">
        <textarea className="fr-input" aria-labelledby="titreMotivation" id="descriptionMotivation" name="descriptionMotivation"></textarea>
      </div>
    </fieldset>
  );
}
