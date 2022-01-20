import React, { useEffect } from 'react';
import { history } from '../../helpers';
import Bienvenue from './Bienvenue';
import Themes from './Themes';
import Rencontres from './Rencontres';
import Accompagnements from './Accompagnements';
import Aide from './Aide';
import Statistiques from './Statistiques';
import PriseRDV from './PriseRDV';

function Accueil() {

  const allowedAncres = ['#ancre-themes', '#ancre-statistiques'];

  //Permet de se positionner sur l'ancre avec url+hash provenant hors du router
  useEffect(() => {
    if (allowedAncres.includes(history.location.hash)) {
      document.querySelector(history.location.hash).scrollIntoView();
      history.replace('/accueil'); //suppression hash
    }
  }, [history.location.hash]);

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
