import React from 'react';
import Badge from './Badge';
import Notice from './Notice';

export default function EnResume() {
  return (
    <div className="fr-mb-3w" id="enResume">
      <Notice>
        <Badge>En résumé</Badge>
        <p>
          <strong>Vous recherchez une certification et un emploi de conseiller numérique à partir du 20/04/2023.</strong>
        </p>
        <p className="fr-notice__desc">
          Votre choix vous engage à transmettre vos coordonnées, répondre aux sollicitations des{' '}
          structures accueillantes, vous présenter aux entretiens, et accepter de fournir des{' '}
          éléments administratifs pour finaliser votre dossier de candidature.
        </p>
      </Notice>
    </div>
  );
}
