import React from 'react';
import ImageFormation from '../../assets/images/conseiller-numerique-formation-min.svg';

function Presentation() {

  return (
    <div className="fr-container fr-mb-10w">
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12" style={{ textAlign: 'center' }}>
          <h2 className="fr-h1 fr-mt-10w fr-mb-5w bleu-conseiller">
            Je veux devenir Conseiller num&eacute;rique France Services
          </h2>
          <div className="fr-col-12" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="fr-col-xs-12 fr-col-sm-12 fr-col-md-6 fr-col-lg-5 fr-px-3w fr-grid-row--center">
              <img className="fr-mb-5w" src={ImageFormation} alt="Conseiller n&eacute;merique en formation" />
            </div>
          </div>
        </div>
        <h3 className="bleu-secondaire">Pr&eacute;sentation</h3>
        <p>
          Vous aimez le contact humain, cherchez un m&eacute;tier qui a du sens dans un secteur d&rsquo;avenir ? Rejoignez le
          mouvement national des conseillers num&eacute;riques France Services.
        </p>
        <p>
          Form&eacute;(e) puis employ&eacute;(e) par une structure locale pendant 2 ans, vous cr&eacute;ez et animez des ateliers
          num&eacute;riques pour initier et former vos concitoyens au num&eacute;rique.
        </p>
        <p>
          Adaptabilit&eacute;, intelligence &eacute;motionnelle et compr&eacute;hension du num&eacute;rique, vous d&eacute;velopperez des
          connaissances et des comp&eacute;tences durables, attest&eacute;es par un dipl&ocirc;me d&rsquo;&Eacute;tat
          d&eacute;livr&eacute; &agrave; l&rsquo;issue de votre parcours.
        </p>
      </div>
    </div>
  );
}

export default Presentation;
