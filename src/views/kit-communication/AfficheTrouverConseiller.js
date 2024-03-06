import React from 'react';

function AfficheTrouverConseiller() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-3.2">
          3.2&nbsp;&nbsp;Affiche &laquo;&nbsp;Trouver un conseiller num&eacute;rique pr&egrave;s de chez soi&nbsp;&raquo;
        </h4>
        <p style={{ marginBottom: '24px' }}>
         Le support d&eacute;crit les services Conseiller num&eacute;rique.
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/affiche-trouver-un-conseiller-numerique.png"
            title="Affiche au format web PNG"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger l&rsquo;affiche au format web (PNG).
          </a>
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/affiche-trouver-un-conseiller-numerique.pdf"
            title="Affiche au format imprimable PDF"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger l&rsquo;affiche au format imprimable (PDF).
          </a>
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/affiche-trouver-un-conseiller-numerique.eps"
            title="Affiche au format web vectoriel EPS"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger le fichier source &eacute;ditable,format vectoriel (EPS).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/previews/preview-affiche-conseiller-numerique.png"
          alt="preview affiche &laquo;&nbsp; Trouver un conseiller num&eacute;rique pr&egrave;s de chez soi&nbsp;&raquo;"
          style={{ height: '180px' }}/>
      </div>
    </div>
  );
}

export default AfficheTrouverConseiller;
