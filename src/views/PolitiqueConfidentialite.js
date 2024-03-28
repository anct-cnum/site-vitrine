import React, { useEffect } from 'react';
import Header from '../components/Header';

function PolitiqueConfidentialite() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.conseiller-numerique.gouv.fr/matomo/matomo-opt-out.js'; // self contained code
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="PolitiqueConfidentialite">
      <Header/>
      <div className="fr-container fr-mb-10w">
        <div className="fr-grid-row">
          <div className="fr-col-12" style={{ textAlign: 'center' }}>
            <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Politique de confidentialit&eacute;</h2>
          </div>
          <div>
            <div className="fr-grid-row">
              <h3 className="bleu-secondaire">Suivi de navigation</h3>
            </div>
            <div id="matomo-opt-out" className="fr-toggle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolitiqueConfidentialite;
