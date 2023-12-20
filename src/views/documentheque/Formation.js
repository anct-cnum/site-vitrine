import React from 'react';

function Formation() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-mb-9w">
        <h4 className="h4CustomKit" id="titre-ancre-3" style={{ marginBottom: '28px' }}>3.&nbsp;&nbsp;Formation des conseillers num&eacute;riques</h4>
        <p style={{ marginBottom: '0' }}>
          L&rsquo;offre de formation des conseillers num&eacute;riques&nbsp;:
          <br />
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/Slide_presentation_formation_conseillers_numeriques.pdf"
            title="T&eacute;l&eacute;charger l&rsquo;offre de formation des conseillers num&eacute;riques"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
            T&eacute;l&eacute;charger l&rsquo;offre de formation des conseillers num&eacute;riques (pdf)
          </a>
        </p>
      </div>
    </div>
  );
}

export default Formation;
