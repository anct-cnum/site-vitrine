import React from 'react';
import Badge from '../../components/commun/Badge';
import Notice from '../../components/commun/Notice';
import PropTypes from 'prop-types';

export default function EnResume({ dateDisponibilite }) {
  const formatDate = () => {
    if (!dateDisponibilite) {
      return '[Renseignez votre date de disponibilité]';
    }
    return new Date(dateDisponibilite).toLocaleDateString();
  };

  return (
    <div className="fr-mb-3w" id="enResume">
      <Notice>
        <Badge>En résumé</Badge>
        <p className="fr-mb-2w">
          <strong>Vous recherchez une certification et un emploi de conseiller numérique à partir du {formatDate(dateDisponibilite)}.</strong>
        </p>
        <p className="fr-notice__desc fr-mb-2w">
          Votre choix vous engage à transmettre vos coordonnées, répondre aux sollicitations des{' '}
          structures accueillantes, vous présenter aux entretiens, et accepter de fournir des{' '}
          éléments administratifs pour finaliser votre dossier de candidature.
        </p>
      </Notice>
    </div>
  );
}

EnResume.propTypes = {
  dateDisponibilite: PropTypes.string,
};
