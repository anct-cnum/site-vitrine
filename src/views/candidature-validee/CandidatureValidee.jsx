import React, { useEffect } from 'react';

import './CandidatureValidee.css';

export default function CandidatureValidee() {
  useEffect(() => {
    //window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Conseiller numérique - Candidature validée';
  }, []);

  return (
    <div className="fr-container fr-p-10w cv-contenu">
      <div className="fr-mb-5w fr-display--sm">👏</div>
      <h1 className="fr-mb-5w cv-titre">Merci, votre demande a été envoyée.</h1>
      <p>
        Pour confirmer votre inscription et recevoir des propositions de candidats, veuillez{' '}
        consulter l’email qui vient de vous être envoyé. Si vous ne recevez pas cet email dans les prochaines minutes,{' '}
        pensez à vérifier votre dossier de spams.
      </p>
      <a href="/" className="fr-btn fr-btn--secondary">
        Retour à la page d’accueil
      </a>
    </div>
  );
}
