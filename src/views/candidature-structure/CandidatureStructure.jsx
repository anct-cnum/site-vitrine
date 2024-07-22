import React from 'react';
import Sommaire from './Sommaire';

export default function CandidatureStructure() {
  return (
    <div>
      <h1>Je souhaite engager un conseiller numérique</h1>
      <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
      <Sommaire />
    </div>
  );
}
