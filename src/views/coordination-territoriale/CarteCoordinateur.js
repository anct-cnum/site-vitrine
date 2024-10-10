import React, { Component } from 'react';

import '@gouvfr-anct/cartographie-nationale/coordinateurs';
import '../../../public/styles-5.22.0.css';

class CarteCoordinateur extends Component {
  render() {
    const urlCoordinateurs = import.meta.env.VITE_APP_API_URL + '/coordinateurs';
    const urlConseillers = import.meta.env.VITE_APP_API_URL + '/coordination-conseillers';

    return (
      <section className="carteCoordo vh-100">
        <fr-mediation-numerique-coordinateurs
          titre={'Conseiller Numérique coordinateur'}
          coordinateurs-source={urlCoordinateurs}
          conseillers-source={urlConseillers}
        />
      </section>
    );
  }
}

export default CarteCoordinateur;
