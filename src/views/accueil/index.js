import React from 'react';
import Bienvenue from './Bienvenue';
import Themes from './Themes';
import Rencontres from './Rencontres';
import Statistiques from './Statistiques';

function Accueil() {

  return (
    <>
      <Bienvenue />
      <Themes />
      <Rencontres />
      <Statistiques />
    </>
  );
}

export default Accueil;
