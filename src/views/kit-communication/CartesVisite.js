import React from 'react';

function CartesVisite() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-4.1">4.1&nbsp;&nbsp;Cartes de visite imprimables</h4>
        <p style={{ marginBottom: '24px' }}>
          &Agrave; destination des conseillers d&eacute;butant leur mission, ou souhaitant mettre &agrave; jour leurs informations professionnelles,
          ce fichier permet de personnaliser et d&rsquo;imprimer dix cartes de visite par planche (format de papier recommand&eacute; : bristol &rsaquo; 200g).
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/gabarit-carte-de-visite-conum-word.docx"
            title="Mod&egrave;le carte de visite DOCX"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger le mod&egrave;le de carte de visite Conseiller num&eacute;rique au format Microsoft Word (.docx).
          </a>
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/gabarit-carte-de-visite-conum-openoffice.odt"
            title="Mod&egrave;le carte de visite ODT"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger le mod&egrave;le de carte de visite Conseiller num&eacute;rique au format Open Office (.odt).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/previews/preview-cartes-de-visite-conseiller-numerique.png"
          alt="preview cartes visite"
          style={{ height: '180px' }}/>
      </div>
    </div>
  );
}

export default CartesVisite;
