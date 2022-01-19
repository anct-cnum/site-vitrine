import React from 'react';
import Bienvenue from './Bienvenue';
import Themes from './Themes';
import Rencontres from './Rencontres';
import Accompagnements from './Accompagnements';
import Aide from './Aide';
import Statistiques from './Statistiques';
import PriseRDV from './PriseRDV';

function Accueil() {

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
