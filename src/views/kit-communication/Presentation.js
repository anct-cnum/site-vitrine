import React from 'react';

function Presentation() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-8 fr-mb-9w">
        <h4 className="h4CustomKit" id="titre-ancre-1">1.&nbsp;&nbsp;Pr&eacute;sentation du dispositif Conseiller num&eacute;rique</h4>
        <p style={{ marginBottom: '0' }}>
          Cette page explicative du site de l&rsquo;ANCT donne les &eacute;l&eacute;ments de contexte
          et les informations essentielles pour prendre connaissance du dispositif Conseiller num&eacute;rique&nbsp;:
          <br/><br/>
          <a
            href="https://agence-cohesion-territoires.gouv.fr/conseillers-numeriques-france-services-437"
            title="Agence coh&eacute;sion territoires"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              agence-cohesion-territoires.gouv.fr/conseillers-numeriques-france-services-437
          </a>
        </p>
      </div>
    </div>
  );
}

export default Presentation;
