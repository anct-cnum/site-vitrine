import React from 'react';

function Financement() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-mb-9w">
        <h4 className="h4CustomKit" id="titre-ancre-2" style={{ marginBottom: '28px' }}>2.&nbsp;&nbsp;Financement Conseiller num&eacute;rique</h4>
        <p style={{ marginBottom: '0' }}>
          Panorama de financement du dispositif Conseiller num&eacute;rique&nbsp;:
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/Panorama_financements.pdf"
            title="T&eacute;l&eacute;charger le panorama de financement du dispositif Conseiller num&eacute;rique"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              T&eacute;l&eacute;charger le panorama de financement du dispositif Conseiller num&eacute;rique (pdf)
          </a>
        </p>
      </div>
    </div>
  );
}

export default Financement;
