import React from 'react';

function Affiche() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-9w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-3.5">3.5&nbsp;&nbsp;Affiche A3 (gabarit)</h4>
        <p style={{ marginBottom: '24px' }}>
          Ce gabarit d&rsquo;affiche A3 est principalement destin&eacute; aux structures et aux conseillers
          et permet d&rsquo;informer sur une activit&eacute; relative au dispositif Conseiller num&eacute;rique.
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/affiche-A3-conseiller-numerique.docx"
            title="Mod&egrave;le affiche A3 DOCX"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank" rel="noopener noreferrer">
              T&eacute;l&eacute;charger le mod&egrave;le d&rsquo;affiche A3, format Open Office et Word (.docx).
          </a>
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/affiche-A3-conseiller-numerique.tif"
            title="Mod&egrave;le affiche A3 TIF"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger le mod&egrave;le d&rsquo;affiche A3, format Gimp et Photoshop (.tif).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/previews/preview-affiche-a3-conseiller-numerique.png"
          alt="preview affiche"
          style={{ height: '175px' }}/>
      </div>
    </div>
  );
}

export default Affiche;
