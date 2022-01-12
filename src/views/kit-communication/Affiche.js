import React from 'react';

function Affiche() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-9w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-3.3">3.3&nbsp;&nbsp;Affiche</h4>
        <p style={{ marginBottom: '24px' }}>
          Ce gabarit d&rsquo;affiche A3 est principalement destiné aux structures et aux conseillers
          et permet d&rsquo;informer sur une activité relative au dispositif CnFS.
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/affiche-A3-cnfs-2.docx"
            title="Modèle affiche A3 DOCX"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank" rel="noopener noreferrer">
              Télécharger le modèle d&rsquo;affiche A3, format Open Office et Word (.docx).
          </a>
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/affiche-A3-cnfs-3.zip"
            title="Modèle affiche A3 TIF"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              Télécharger le modèle d&rsquo;affiche A3, format Gimp et Photoshop (.tif).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/preview-affiche.png" alt="preview affiche" style={{ height: '175px' }}/>
      </div>
    </div>
  );
}

export default Affiche;
