import React from 'react';
import Header from '../../components/Header';
import Coordination from './Coordination';
import Missions from './Missions';
import Informations from './Informations';
import CarteCoordinateur from './CarteCoordinateur';

function CoordinationTerritorial() {

  return (
    <div className="coordination-territoriale">
      <Header />
      <Coordination />
      <Missions />
      <Informations />
      <CarteCoordinateur />
    </div>
  );
}

export default CoordinationTerritorial;
