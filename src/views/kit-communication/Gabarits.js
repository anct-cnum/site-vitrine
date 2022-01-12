import React from 'react';

function Gabarits() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-3.1">3.1&nbsp;&nbsp;Gabarits pour les r&eacute;seaux sociaux</h4>
        <p style={{ marginBottom: '24px' }}>
          Personnalisables avec le texte de votre choix, ils vous permettent d&rsquo;annoncer sur les r&eacute;seaux sociaux que vous accueillez un ou plusieurs
          Conseillers num&eacute;riques France Services ou que vous menez une action en lien avec le dispositif.
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/gabaritsRS.zip"
            title="Gabarits RS Conseiller num&eacute;rique France Services"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger les gabarits RS Conseiller num&eacute;rique France Services.
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/preview-gabarits-rs.png" alt="preview gabarits RS" style={{ height: '176px' }}/>
      </div>
    </div>
  );
}

export default Gabarits;
