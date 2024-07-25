import React, { Component } from 'react';
import '@gouvfr-anct/cartographie-nationale/coordinateurs';

const urlCoordinateurs = import.meta.env.VITE_APP_API_URL + '/coordinateurs';
const urlConseillers = import.meta.env.VITE_APP_API_URL + '/coordination-conseillers';

class CarteCoordinateur extends Component {
  render() {
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
