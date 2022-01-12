import React from 'react';

function CharteGraphique() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-8 fr-mb-7w">
        <h4 className="h4CustomKit h4CustomKit--secondary" id="titre-ancre-2.1">2.1&nbsp;&nbsp;Charte Graphique</h4>
        <p style={{ marginBottom: '24px' }}>
          Ce document d&eacute;taille les consignes d&rsquo;utilisation du logo Conseiller num&eacute;rique Frances Services et ses cas d&rsquo;usages
          pour la production de supports de communication en lien avec le dispositif&nbsp;:
        </p>
        <p style={{ marginBottom: '0' }}>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/charte-graphique-cnfs.pdf"
            title="charte graphique"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger la charte graphique Conseiller num&eacute;rique France Services au format PDF.
          </a>
        </p>
      </div>
      <div className="fr-col-12 fr-col-md-2 fr-mb-7w fr-mb-md-0w preview-image">
        <img
          src="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/preview-charte-graphique.png"
          alt="preview charte graphique"
          style={{ height: '117px' }}/>
      </div>
    </div>
  );
}

export default CharteGraphique;
