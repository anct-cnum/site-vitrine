import React from 'react';

function ModelePresentation() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-3.2">3.2&nbsp;&nbsp;Modèle de présentation Powerpoint</h4>
        <p style={{ marginBottom: '24px' }}>
          Ce fichier vous permet d&rsquo;éditer des rétroprojections avec l&rsquo;identité du dispositif Conseiller numérique France Services.
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/modele_presentation.pptx"
            title="Modèle présentation PPTX"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              Télécharger le modèle de présentation Powerpoint et Open Office (.pptx).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/preview-powerpoint.png" alt="preview powerpoint" style={{ height: '116px' }}/>
      </div>
    </div>
  );
}

export default ModelePresentation;
