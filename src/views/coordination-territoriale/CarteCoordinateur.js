import React, { Component } from 'react';

class CarteCoordinateur extends Component {
  render() {
    require('@gouvfr-anct/cartographie-nationale/coordinateurs');
    return (
      <section className="carte vh-100">
        <fr-mediation-numerique-coordinateurs />
      </section>
    );
  }
}

export default CarteCoordinateur;
