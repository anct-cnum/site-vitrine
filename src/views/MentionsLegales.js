import React, { useEffect } from 'react';
import Header from '../components/Header';

function MentionsLegales() {

  //Effet de scroll car cette vue est accessible via le footer
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div className="mentionsLegales">
      <Header/>
      <div className="fr-container fr-mb-10w">
        <div className="fr-grid-row">
          <div className="fr-col-12" style={{ textAlign: 'center' }}>
            <h2 className="fr-h1 fr-mt-10w fr-mb-5w">Mentions l&eacute;gales</h2>
          </div>
          <div>
            <div className="fr-grid-row">
              <h3 className="bleu-secondaire">&Eacute;diteur de la plateforme</h3>
            </div>
            <p>
              Agence Nationale de la Coh&eacute;sion des Territoires<br />
              20 avenue de S&eacute;gur - TS 10717<br />
              75334 Paris Cedex 07
            </p>
          </div>
        </div>

        <div>
          <div className="fr-grid-row">
            <h3 className="bleu-secondaire">Directeur de la publication</h3>
          </div>
          <p>
            Yves Le BRETON, Directeur g&eacute;n&eacute;ral de l&rsquo;Agence Nationale de la Coh&eacute;sion des Territoires
          </p>
        </div>

        <div>
          <div className="fr-grid-row">
            <h3 className="bleu-secondaire">H&eacute;bergement de la plateforme</h3>
          </div>
          <p>
            Cette plateforme est h&eacute;berg&eacute;e par&nbsp;:
          </p>
          <p>
            Clever Cloud SAS<br />
            3 rue de l&rsquo;Allier<br />
            44000 Nantes<br />
            France
          </p>
          <p>
            Scalingo<br />
            15 avenue du Rhin<br />
            67000 STRASBOURG<br />
            France
          </p>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;
