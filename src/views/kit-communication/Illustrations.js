import React from 'react';

function Illustrations() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-9w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-2.3">2.3&nbsp;&nbsp;Illustrations</h4>
        <p style={{ marginBottom: '24px' }}>
          Cette archive contient différentes illustrations de conseillers numériques et d&rsquo;usagers.
          Celles-ci peuvent-être utilisées pour composer vos supports de communication.
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/illustratins-cnfs.zip"
            title="pack illustrations"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">Téléchargez le pack d&rsquo;illustrations Conseiller numérique France Services.</a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/preview-illus.png"
          alt="preview illustrations"
          style={{ height: '177px', border: '1px solid #9C9C9C' }}/>
      </div>
    </div>
  );
}

export default Illustrations;
