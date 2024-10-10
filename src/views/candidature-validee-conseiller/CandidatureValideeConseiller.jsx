import React, { useEffect } from 'react';

import './CandidatureValideeConseiller.css';

export default function CandidatureValideeConseiller() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Conseiller numérique - Candidature validée';
  }, []);

  return (
    <div className="fr-container fr-p-10w cv-contenu">
      <div className="fr-mb-5w fr-display--sm">👏</div>
      <h1 className="fr-mb-5w cv-titre">Merci, votre demande a été envoyée.</h1>
      <p>
        Pour confirmer votre inscription et pouvoir recevoir des propositions de structure consultez le mail qui vient de vous être envoyé.<br/>
        Si toutefois vous ne receviez pas dans les prochaines minutes un mail de confirmation de votre inscription, pensez à vérifier vos spams.
      </p>
      <a href="/" className="fr-btn fr-btn--secondary">
        Retour à la page d’accueil
      </a>
    </div>
  );
}
