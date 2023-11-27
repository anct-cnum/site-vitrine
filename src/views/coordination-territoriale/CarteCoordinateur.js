import React, { Component } from 'react';

const urlCoordinateurs = process.env.REACT_APP_API_URL + '/coordinateurs';
const urlConseillers = process.env.REACT_APP_API_URL + '/coordination-conseillers';

class CarteCoordinateur extends Component {
  render() {
    require('@gouvfr-anct/cartographie-nationale/coordinateurs');
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
