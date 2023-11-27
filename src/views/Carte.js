import React, { Component } from 'react';
import Header from '../components/Header';

const urlPermanences = process.env.REACT_APP_API_URL + '/permanences';

class Carte extends Component {
  render() {
    window.scrollTo({ top: 0 });
    require('@gouvfr-anct/cartographie-nationale/cartographie');
    return (
      <div className="carte vh-100">
        <Header/>
        <fr-mediation-numerique-cartographie source={urlPermanences} titre={'Conseiller Numérique'}/>
      </div>
    );
  }
}

export default Carte;
