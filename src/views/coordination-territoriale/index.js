import React from 'react';
import Header from '../../components/Header';
import Coordination from './Coordination';
import Missions from './Missions';
import Informations from './Informations';
function CoordinationTerritorial() {

  return (
    <div className="coordination-territoriale">
      <Header />
      <Coordination />
      <Missions />
      <Informations />
    </div>
  );
}

export default CoordinationTerritorial;
