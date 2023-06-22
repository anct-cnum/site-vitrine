import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Bienvenue from './Bienvenue';
import Themes from './Themes';
import Rencontres from './Rencontres';
import Accompagnements from './Accompagnements';
import Aide from './Aide';
import Statistiques from './Statistiques';
import PriseRDV from './PriseRDV';

function Accueil() {

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
    <>
      <Bienvenue />
      <Themes />
      <Rencontres />
      <Accompagnements />
      <Aide />
      <Statistiques />
      <PriseRDV />
    </>
  );
}

export default Accueil;
