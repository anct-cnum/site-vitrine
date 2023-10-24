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
      </div>
    </div>
  );
}

export default KitCommunication;
