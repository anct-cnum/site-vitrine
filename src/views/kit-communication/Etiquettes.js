import React from 'react';

function Etiquettes() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-4.3">4.3&nbsp;&nbsp;&Eacute;tiquettes</h4>
        <p style={{ marginBottom: '24px' }}>
          Ce fichier permet d&rsquo;imprimer des étiquettes du logo Conseiller numérique France Services afin de l&rsquo;aposer sur du matériel.
          Il est possible de modifier la grille de la planche en fonction du format d&rsquo;étiquettes à disposition (onglet Publipostage &rsaquo; options).
        </p>
        <p style={{ marginBottom: '0px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/gabarit-etiquettes.docx"
            title="Etiquetes DOCX"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              Télécharger les étiquettes au format Word (.docx).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image preview-image-last">
        <img src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/preview-etiquettes.png" alt="preview etiquettes" style={{ height: '176px' }}/>
      </div>
    </div>
  );
}

export default Etiquettes;
