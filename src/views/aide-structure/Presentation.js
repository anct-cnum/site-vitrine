import React from 'react';
import ImageStructure from '../../assets/images/conseiller-numerique-et-structure-min.svg';

function Presentation() {

  return (
    <div className="fr-container fr-mb-1w">
      <div className="fr-grid-row fr-grid-row--gutter">
        <div className="fr-col-12" style={{ textAlign: 'center' }}>
          <h2 className="fr-h1 fr-mt-10w fr-mb-5w red-text">Je recrute</h2>
          <div className="fr-col-12" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="fr-col-xs-12 fr-col-sm-12 fr-col-md-6 fr-col-lg-5 fr-px-3w fr-grid-row--center">
              <img className="fr-mb-5w" src={ImageStructure} alt="Conseiller avec sa structure" />
            </div>
          </div>
        </div>
        <h3 className="bleu-secondaire">Pr&eacute;sentation</h3>
        <p>
          Vous &ecirc;tes une organisation publique ou priv&eacute;e avec une activit&eacute; qui vise &agrave; former des individus au num&eacute;rique,
          b&eacute;n&eacute;ficiez de conseillers num&eacute;riques France Services pour accompagner votre public vers l&rsquo;autonomie num&eacute;rique.
        </p>
        <p>
          L&rsquo;&Eacute;tat finance, forme et outille vos conseillers num&eacute;riques France Services pendant deux ans. Vous les s&eacute;lectionnez.
        </p>
      </div>
    </div>
  );
}

export default Presentation;
