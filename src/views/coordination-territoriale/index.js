import React from 'react';
import Header from '../../components/Header';
import Coordination from './Coordination';
import Mission1 from './Mission1';
import Mission2 from './Mission2';
import Mission3 from './Mission3';
import Mission4 from './Mission4';
import Informations from './Informations';
import CarteCoordinateur from './CarteCoordinateur';

function CoordinationTerritorial() {

  return (
    <div className="coordination-territoriale">
      <Header />
      <Coordination />
      <Mission1 />
      <Mission2 />
      <Mission3 />
      <Mission4 />
      <Informations />
      <CarteCoordinateur />
    </div>
  );
}

export default CoordinationTerritorial;
