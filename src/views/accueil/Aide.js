import React from 'react';

import logoFS from '../../assets/brands/logo-france-services-min.svg';

function Aide() {
  return (
    <div className="aide fr-pt-7w fr-pb-9w">
      <div className="rowCustom">
        <div className="partLogo">
          <img src={logoFS} alt="" className="logoFS" />
        </div>
        <div className="partText">
          <h1 className="fr-h1 title fr-mb-4w">
            J’ai besoin d’aide pour mes démarches administratives
          </h1>
          <p>
            À moins de 30 minutes de chez vous, les agents France services vous accompagnent pour réaliser vos démarches auprès
            de 9 opérateurs nationaux : les ministères de l’Intérieur et de la Justice, les services des impôts (DGFIP),
            Pôle Emploi, la Caisse d’allocations familiales (CAF), l’Assurance maladie (CNAM), l’Assurance Vieillesse (CNAV),
            la Mutualité sociale agricole (MSA) et La Poste.
            <br />
            <a
              className="fr-link linkCustom"
              title="Trouver la France services la plus proche de chez vous"
              href="https://www.france-services.gouv.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              En savoir plus
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aide;
