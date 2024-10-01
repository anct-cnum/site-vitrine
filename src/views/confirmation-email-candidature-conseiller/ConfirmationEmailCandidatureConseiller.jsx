import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApiConfirmationEmailCandidatureConseiller } from './useApiConfirmationEmailCandidatureConseiller';

import '@gouvfr/dsfr/dist/component/alert/alert.min.css';

export default function ConfirmationEmailCandidatureConseiller() {
  const [reponseStatusConfirmation, setReponseStatusConfirmation] = useState(null);
  const { actionConfirmationEmailCandidatureConseiller } = useApiConfirmationEmailCandidatureConseiller();
  const { token } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const ClickBoutonConfirmer = async () => {
    const response = await actionConfirmationEmailCandidatureConseiller(token);
    setReponseStatusConfirmation(response.status);
  };
  return (
    <div className="fr-container fr-p-10w cv-contenu">
      <h1 className="fr-mb-5w cv-titre">Confirmation de l’enregistrement de votre candidature</h1>
      {reponseStatusConfirmation === 200 && <div className="fr-alert fr-alert--success fr-alert--sm">
        <p>Votre email a été confirmé et votre inscription est maintenant active.
          Vous serez contacté par mail ou par téléphone si une structure est intéressée par votre profil.</p>
      </div>}
      {reponseStatusConfirmation === 403 && <div className="fr-alert fr-alert--error fr-alert--sm">
        <p>Impossible de valider l’email, le lien a expiré ou est invalide.</p>
      </div>}
      {reponseStatusConfirmation >= 400 && reponseStatusConfirmation !== 403 && <div className="rf-alert fr-alert--error fr-alert--sm">
        <p>Une erreur s’est produite veuillez réessayer plus tard.</p>
      </div>}
      {!reponseStatusConfirmation && <>
        <p>
          Appuyez sur le bouton pour confirmer votre email
        </p>
        <button onClick={ClickBoutonConfirmer} className="fr-btn fr-btn--secondary">
          Confirmer
        </button>
      </>}
    </div>
  );
}
