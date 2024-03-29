import React from 'react';

function Signature() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-4.2">4.2&nbsp;&nbsp;Signature mail</h4>
        <p style={{ marginBottom: '24px' }}>
          Ce fichier permet d&rsquo;enregistrer une signature mail personnalis&eacute;e avec vos coordonn&eacute;es,
          l&rsquo;image doit &ecirc;tre export&eacute;e au format GIF afin de pouvoir &ecirc;tre ins&eacute;r&eacute;e dans la signature des mails
          @conseiller-numerique.fr.
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/modele-signature-mail.tif"
            title="Mod&egrave;le de signature TIF"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger le mod&egrave;le de signature mail au format Gimp et Photoshop (.tif).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/previews/preview-signature-conseiller-numerique.png"
          alt="preview signature"
          style={{ height: '117px' }}/>
      </div>
    </div>
  );
}

export default Signature;
