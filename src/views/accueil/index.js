import React from 'react';
import Bienvenue from './Bienvenue';
import Themes from './Themes';
import Rencontres from './Rencontres';
import Accompagnements from './Accompagnements';
import Aide from './Aide';

function Accueil() {

  return (
    <>
      <Bienvenue />
      <Themes />
      <Rencontres />
      <Accompagnements />
      <Aide />
    </>
  );
}

export default Accueil;
