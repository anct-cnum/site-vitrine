import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApiConfirmationEmailCandidatureStructure } from './useApiConfirmationEmailCandidatureStructure';

import '@gouvfr/dsfr/dist/component/alert/alert.min.css';

export default function ConfirmationEmailCandidatureStructure() {
  const [reponseStatusConfirmation, setReponseStatusConfirmation] = useState(null);
  const { actionConfirmationEmailCandidatureStructure } = useApiConfirmationEmailCandidatureStructure();
  const { token } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const confirmerEmailCandidatureStructure = async () => {
    const response = await actionConfirmationEmailCandidatureStructure(token);
    setReponseStatusConfirmation(response.status);
  };
  return (
    <div className="fr-container fr-p-10w cv-contenu">
      <h1 className="fr-mb-5w cv-titre">Confirmation de l’enregistrement de votre candidature</h1>
      {reponseStatusConfirmation === 200 && <div className="fr-alert fr-alert--success fr-alert--sm">
        <p>Votre email a été confirmé et votre inscription est maintenant active.
          Vous recevrez un mail d’activation de votre espace structure lorsque votre candidature aura été validée.</p>
      </div>}
      {reponseStatusConfirmation === 403 && <div className="fr-alert fr-alert--error fr-alert--sm">
        <p>Le lien de validation de votre adresse électronique est invalide.</p>
      </div>}
      {reponseStatusConfirmation >= 400 && reponseStatusConfirmation !== 403 && <div className="rf-alert fr-alert--error fr-alert--sm">
        <p>Une erreur s’est produite veuillez réessayer plus tard.</p>
      </div>}
      {!reponseStatusConfirmation && <>
        <p>
          Appuyez sur le bouton pour confirmer votre email
        </p>
        <button onClick={confirmerEmailCandidatureStructure} className="fr-btn fr-btn--secondary">
          Confirmer
        </button>
      </>}
    </div>
  );
}
