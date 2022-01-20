import React from 'react';
import ImageEtape1 from './../assets/images/conseiller-numerique-etape-1-min.svg';
import ImageEtape2 from './../assets/images/conseiller-numerique-etape-2-min.svg';
import ImageEtape3 from './../assets/images/conseiller-numerique-etape-3-min.svg';

function ProgrammeChiffresCles() {

  return (
    <div className="programme">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 texte-centre fr-mt-5w">
            <h2 className="fr-h2 bleu-conseiller texte-centre">Le programme en 3 &eacute;tapes</h2>
          </div>
          <div className="fr-col-xs-12 fr-col-sm-4 fr-col-md-4 fr-col-lg-4 etapes fr-px-3w">
            <img src={ImageEtape1} className="etape"
              alt="premi&egrave;re &eacute;tape matching structures et candidats" />
            <h5 className="fr-text--lg fr-text--xx-bold bleu-conseiller">La s&eacute;lection</h5>
            <p className="texte-centre" style={{ marginTop: 0 }}>
                Candidat au poste de conseiller et structure d&rsquo;accueil&nbsp;: inscrivez-vous sur la plateforme,
                rencontrez-vous et signez ensemble.
            </p>
          </div>
          <div className="fr-col-xs-12 fr-col-sm-4 fr-col-md-4 fr-col-lg-4 etapes fr-px-3w">
            <img src={ImageEtape2} className="etape"
              alt="seconde &eacute;tape le candidat est form&eacute;" />
            <h5 className="fr-text--lg fr-text--xx-bold bleu-conseiller">La formation</h5>
            <p className="texte-centre" style={{ marginTop: 0 }}>
                Conseiller, recevez une formation dans un organisme habilit&eacute; pr&egrave;s de chez vous.
            </p>
          </div>
          <div className="fr-col-xs-12 fr-col-sm-4 fr-col-md-4 fr-col-lg-4 etapes fr-px-3w">
            <img src={ImageEtape3} className="etape" alt="troisi&egrave;me &eacute;tape " />
            <h5 className="fr-text--lg fr-text--xx-bold bleu-conseiller">L&rsquo;activit&eacute;</h5>
            <p className="texte-centre" style={{ marginTop: 0 }}>
                Une fois form&eacute;, vous animez des ateliers d&rsquo;initiation au num&eacute;rique pr&egrave;s de chez vous.
            </p>
          </div>
        </div>
      </div>
      <div className="fr-container-fluid fond-bleu-secondaire fr-mb-5w">
        <div className="fr-container">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 texte-centre fr-my-5w">
              <h2 className="fr-h1 texte-centre white-text ">Les chiffres cl&eacute;s</h2>
            </div>
          </div>

          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-xs-12 fr-col-sm-4 fr-col-md-4 fr-col-lg-4 etapes fr-px-3w">
              <span className="fr-h1 white-text">13</span>
              <p className="texte-centre white-text">
                millions de nos concitoyens sont &eacute;loign&eacute;s du num&eacute;rique
              </p>
            </div>
            <div className="fr-col-xs-12 fr-col-sm-4 fr-col-md-4 fr-col-lg-4 etapes fr-px-3w contenu-centre">
              <span className="fr-h1 white-text">15&nbsp;%</span>
              <p className="texte-centre white-text">
                des emplois sont cr&eacute;&eacute;s dans le num&eacute;rique
              </p>
            </div>
            <div className="fr-col-xs-12 fr-col-sm-4 fr-col-md-4 fr-col-lg-4 etapes fr-mb-5w">
              <span className="fr-h1 white-text">4&nbsp;000</span>
              <p className="texte-centre white-text">
                Conseillers num&eacute;riques France Services form&eacute;s par l&rsquo;&Eacute;tat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgrammeChiffresCles;
