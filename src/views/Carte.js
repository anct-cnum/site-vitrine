import React, { Component } from 'react';
import Header from '../components/Header';

import '@gouvfr-anct/cartographie-nationale/cartographie';
import '../../public/styles-5.22.0.css';

class Carte extends Component {
  render() {
    const urlPermanences = import.meta.env.VITE_APP_API_URL + '/lieux-mediation-numerique';

    window.scrollTo({ top: 0 });

    return (
      <div className="carte vh-100">
        <Header/>
        <fr-mediation-numerique-cartographie source={urlPermanences} titre={'Conseiller Numérique'}/>
      </div>
    );
  }
}

export default Carte;
