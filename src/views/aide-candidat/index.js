import React from 'react';
import Header from '../../components/Header';
import Presentation from './Presentation';
import Recrutement from './Recrutement';
import Actions from './Actions';

function AideCandidat() {

  return (
    <div className="aideCandidat">
      <Header/>
      <Presentation />
      <Recrutement />
      <Actions />
    </div>
  );
}

export default AideCandidat;
