import React from 'react';
import { Link } from 'react-router-dom';

function KitCommunication() {

  const onClickLink = () => {
    //Effet de scroll
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10">
        <h4 className="h4CustomKit" id="titre-ancre-6" style={{ marginBottom: '28px' }}>6.&nbsp;&nbsp;Kit de communication</h4>
        <p style={{ marginBottom: '0' }}>
          Logos, charte graphique, gabarits, mod&egrave;le de carte de visite&nbsp;:
          <br/>
          <Link className="bleu-france" to="/kit-communication" title="kit de communication" onClick={onClickLink}>
            Acc&eacute;der au kit de communication
          </Link>
        </p>
        <br/>
        <p style={{ marginBottom: '0' }}>
          Retrouvez les articles de valorisation du dispositif Conseiller num&eacute;rique pour chaque d&eacute;partement&nbsp;: 4 pages
          avec une pr&eacute;sentation du dispositif, la carte des lieux d&rsquo;accompagnement d&eacute;clar&eacute;s dans l&rsquo;Espace coop
          et un t&eacute;moignage de conseiller num&eacute;rique.
          <br/>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/ANCT_CampagneCNFS.zip"
            title="Presse Quotidienne R&eacute;gionale (PQR) - campagne d&eacute;cembre 2023"
            className="bleu-france"
            style={{ boxShadow: 'none' }}
            target="_blank"
            rel="noopener noreferrer">
              Presse Quotidienne R&eacute;gionale (PQR) - campagne d&eacute;cembre 2023 (zip)
          </a>
        </p>
      </div>
    </div>
  );
}

export default KitCommunication;
