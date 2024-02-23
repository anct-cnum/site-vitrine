import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Introduction from './Introduction';
import ParcoursFormation from './ParcoursFormation';
import FormationInitiale from './FormationInitiale';
import FormationContinue from './FormationContinue';
import PassageTitreREMN from './PassageTitreREMN';
import Question from './Question';

function Formation() {

  const location = useLocation();
  const navigate = useNavigate();
  const allowedAncres = ['#ancre-themes', '#ancre-statistiques'];

  //Permet de se positionner sur l'ancre avec url+hash provenant hors du router
  useEffect(() => {
    if (allowedAncres.includes(location.hash)) {
      document.querySelector(location.hash).scrollIntoView();
      navigate('/accueil', { replace: true }); //suppression hash
    }
  }, [location.hash]);

  return (
    <div className="formation">
      <Header/>
      <div className="fr-container fr-mb-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <Introduction />
          <ParcoursFormation />
          <FormationInitiale />
          <FormationContinue />
          <PassageTitreREMN />
          <Question />
        </div>
      </div>
    </div>
  );
}

export default Formation;
