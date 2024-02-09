import React from 'react';

function PlaquettePresentation() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-3.1">
          3.1&nbsp;&nbsp;Plaquette de pr&eacute;sentation du dispositif Conseiller num&eacute;rique</h4>
        <p style={{ marginBottom: '24px' }}>
          &Agrave; destination des usagers, cette plaquette explicative pr&eacute;sente le dispositif et les missions des conseillers num&eacute;riques
          de mani&egrave;re synth&eacute;tique. Il s&rsquo;agit d&rsquo;un format A4 recto verso imprimable.
          Les coordonn&eacute;es (structure et conseiller) sont personnalisables via un encart situ&eacute; en quatri&egrave;me de couverture.
        </p>
        <p style={{ marginBottom: '0' }}>
          Pour int&eacute;gration de la plaquette et &eacute;dition des coordonn&eacute;es via logiciel de votre choix&nbsp;:
        </p>
        <p style={{ marginBottom: '24px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/plaquette-vierge.zip"
            title="Plaquette avec bloc de coordonn&eacute;es &eacute;ditable, format PNG et format PDF"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
             T&eacute;l&eacute;charger la plaquette avec le bloc de coordonn&eacute;es &eacute;ditable, format PNG et format PDF.
          </a>
        </p>
        <p style={{ marginBottom: '0' }}>
          Plaquette avec bloc coordonn&eacute;es pr&eacute;-rempli (non &eacute;ditable)&nbsp;:
        </p>
        <p style={{ marginBottom: '24px' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/plaquette-conum-pre-remplie.pdf"
            title="Plaquette avec bloc coordonnées pr&eacute;-rempli au format PDF"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
             T&eacute;l&eacute;charger le mod&egrave;le de plaquette avec bloc coordonn&eacute;es pr&eacute;-rempli au format PDF.
          </a>
        </p>
        <p style={{ marginBottom: '0' }}>
          Fichier source &eacute;ditable via InDesign&nbsp;:
        </p>
        <p style={{ marginBottom: '0' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/assemblage-InDesign-plaquette-conum.zip"
            title="Assemblage InDesign"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
             T&eacute;l&eacute;charger l&rsquo;assemblage InDesign (.idml).
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/previews/preview-plaquette-conseiller-numerique.png"
          alt="preview plaquette cnfs"
          style={{ height: '180px' }}/>
      </div>
    </div>
  );
}

export default PlaquettePresentation;
