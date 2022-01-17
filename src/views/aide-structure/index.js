import React from 'react';
import Header from '../../components/Header';
import Presentation from './Presentation';
import Etapes from './Etapes';
import Questions from './Questions';
import Documentation from './Documentation';

function AideStructure() {

  return (
    <div className="aideStructure">
      <Header/>
      <Presentation />
      <Etapes />
      <Questions />
      <Documentation />
    </div>
  );
}

export default AideStructure;
