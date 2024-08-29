import React from 'react';
import ZoneDeTexte from '../../components/commun/ZoneDeTexte';

export default function Motivation() {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votre-motivation">
      <legend className="fr-h5" id="votre-motivation">Votre motivation</legend>
      <p className="fr-text--sm fr-hint-text">
        En quelques lignes, décrivez le motif de votre besoin en recrutement.{' '}
        Indiquez les actions prévues, la justification du poste, ainsi que le public ciblé.
      </p>
      <ZoneDeTexte id="votreMessage">
        Votre message <span className="cc-obligatoire">*</span>
      </ZoneDeTexte>
    </fieldset>
  );
}
