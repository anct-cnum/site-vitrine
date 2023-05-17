import React from 'react';

function Informations() {

  return (
    <section className="section-informations">
      <div className="fr-container fr-pt-10w fr-pb-8w">
        <div className="fr-grid-row fr-grid-row--gutter">
          <div className="fr-col-xl-7 fr-col-12">
            <p style={{ color: 'white', width: '98%' }}>
              <strong>Le nombre de Conseillers numériques coordinateurs</strong> présents sur le territoire sera
              <strong> accru</strong> au cours du second trimestre 2023.
            </p>
            <p style={{ color: 'white' }}>
              La <strong>cartographie</strong> consultable ci-dessous permet de localiser es Conseillers
              numériques coordinateurs et d’identifier leurs périmètres de compétence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Informations;
