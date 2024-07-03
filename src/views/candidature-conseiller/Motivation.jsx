import React from 'react';
import ZoneDeTexte from './ZoneDeTexte';

export default function Motivation() {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votreMotivation">
      <legend className="fr-h5" id="titreMotivation">Votre motivation</legend>
      <p className="fr-text--sm fr-hint-text">
        En quelques lignes, décrivez votre motivation personnelle pour devenir conseiller numérique et{' '}
        aider les personnes à devenir autonomes dans l’utilisation des outils numériques.
      </p>
      <ZoneDeTexte id="descriptionMotivation">
        Votre message <span className="cc-obligatoire">*</span>
      </ZoneDeTexte>
    </fieldset>
  );
}
