import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './CandidatureValidee.css';


export default function CandidatureValidee() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fr-container fr-p-10w cv-contenu">
      <h1 className="fr-mb-5w">👏</h1>
      <h2 className="fr-mb-5w cv-titre">Merci, votre demande a été envoyée.</h2>
      <p>
        Pour confirmer votre inscription et recevoir des propositions de candidats, veuillez{' '}
        consulter l’email qui vient de vous être envoyé. Si vous ne recevez pas cet email dans les prochaines minutes,{' '}
        pensez à vérifier votre dossier de spams.
      </p>
      <button className="fr-btn fr-btn--secondary" onClick={goToHome}>
        Retour à la page d’accueil
      </button>
    </div>
  );
}
