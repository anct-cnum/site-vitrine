import React from 'react';

function CartesVisite() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-4.1">4.1&nbsp;&nbsp;Cartes de visite imprimables</h4>
        <p style={{ marginBottom: '24px' }}>
          &Agrave; destination des conseillers débutant leur mission, ou souhaitant mettre à jour leurs informations professionnelles,
          ce fichier permet de personnaliser et d&rsquo;imprimer dix cartes de visites par planche (format de papier recommandé : bristol &rsaquo; 200g).
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/gabarit-carte-de-visite-cnfs-word.docx"
            title="Modèle carte visite DOCX"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              Télécharger le modèle de carte de visite Conseiller numérique France Services au format Microsoft Word (.docx).
          </a>
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/gabarit-carte-de-visite-openoffice.odt"
            title="Modèle carte visite ODT"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              Télécharger le modèle de carte de visite Conseiller numérique France Services au format Open Office (.odt).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/preview-cartes-de-visite.png"
          alt="preview cartes visite"
          style={{ height: '176px' }}/>
      </div>
    </div>
  );
}

export default CartesVisite;
