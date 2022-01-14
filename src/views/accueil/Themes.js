import React, { Fragment } from 'react';
import Circle from '../../shapes/Circle';
import pictosList from '../../assets/pictos';

function Themes() {

  return (
    <div className="themes fr-py-9w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-1"></div>
          <div className="fr-col-10">
            <h2 className="fr-h1" style={{ textAlign: 'center' }} id="ancre-themes">
              En me formant aupr&egrave;s d&rsquo;un conseiller num&eacute;rique, j&rsquo;apprends &agrave; devenir autonome pour&nbsp;:
            </h2>
          </div>
          <div className="fr-col-1"></div>
        </div>
        {/* CERCLE BLEU FONCE */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-5 hideColumn"></div>
          <Circle
            className="circleBlueDark"
            pictoUrl={pictosList.pictoEchanger}
            altImg="&Eacute;changer avec mes proches"
            title={<Fragment>&Eacute;changer avec<br />mes proches</Fragment>} />
          <div className="fr-col-5 hideColumn"></div>
        </div>
        {/* CERCLES JAUNE ET ROUGE */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-2 hideColumn"></div>
          <Circle
            className="circleYellow"
            pictoUrl={pictosList.pictoTrouverEmploi}
            altImg="Trouver un emploi"
            title={<Fragment>Trouver un emploi<br />ou une formation</Fragment>} />
          <div className="fr-col-4 hideColumn"></div>
          <Circle
            className="circleRed"
            pictoUrl={pictosList.pictoAccompagnerEnfant}
            altImg="Accompagner mon enfant"
            title={<Fragment>Accompagner mon<br />enfant</Fragment>} />
          <div className="fr-col-2 hideColumn"></div>
        </div>
        {/* CERCLE BLEU CLAIR */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-5 hideColumn"></div>
          <Circle
            className="circleBlueLight"
            pictoUrl={pictosList.pictoDemarcheLigne}
            altImg="D&eacute;marches en ligne"
            title={<Fragment>R&eacute;aliser mes<br />d&eacute;marches en ligne</Fragment>} />
          <div className="fr-col-5 hideColumn"></div>
        </div>
        {/* CERCLES MARRON ET VERT */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-2 hideColumn"></div>
          <Circle
            className="circleBrown"
            pictoUrl=""
            altImg="Opportunit&eacute;s du num&eacute;rique"
            title={<Fragment>Utiliser les<br />opportunit&eacute;s<br />du num&eacute;rique</Fragment>} />
          <div className="fr-col-4 hideColumn"></div>
          <Circle
            className="circleGreen"
            pictoUrl={pictosList.pictoContenuNum}
            altImg="Prendre en main l&rsquo;outil num&eacute;rique"
            title={<Fragment>Prendre en main<br />l&rsquo;outil num&eacute;rique</Fragment>} />
          <div className="fr-col-2 hideColumn"></div>
        </div>
        {/* CERCLE VIOLET */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-5 hideColumn"></div>
          <Circle
            className="circlePurple"
            pictoUrl=""
            altImg="Découvrir les opportunit&eacute;s"
            title={<Fragment>Découvrir<br />les opportunit&eacute;s<br />de mon territoire</Fragment>} />
          <div className="fr-col-5 hideColumn"></div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
