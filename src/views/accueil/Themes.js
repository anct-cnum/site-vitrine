import React from 'react';
import pictosList from '../../assets/pictos';

function Themes() {

  return (
    <div className="themes">
      <div className="fr-container fr-mt-4w fr-mb-12w">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-mb-9w">
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
          <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
            <div className="circle circleBlueDark">
              <img src={pictosList.pictoEchanger} alt="&Eacute;changer avec mes proches" className="picto" />
            </div>
            <div className="titlePart">
              <span className="titleCircle">&Eacute;changer avec<br />mes proches</span>
            </div>
          </div>
          <div className="fr-col-5 hideColumn"></div>
        </div>
        {/* CERCLES JAUNE ET ROUGE */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-2 hideColumn"></div>
          <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
            <div className="circle circleYellow">
              <img src={pictosList.pictoTrouverEmploi} alt="Trouver un emploi" className="picto" />
            </div>
            <div className="titlePart">
              <span className="titleCircle">Trouver un emploi<br />ou une formation</span>
            </div>
          </div>
          <div className="fr-col-4 hideColumn"></div>
          <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
            <div className="circle circleRed">
              <img src={pictosList.pictoAccompagnerEnfant} alt="Accompagner mon enfant" className="picto" />
            </div>
            <div className="titlePart">
              <span className="titleCircle">Accompagner mon<br />enfant</span>
            </div>
          </div>
          <div className="fr-col-2 hideColumn"></div>
        </div>
        {/* CERCLE BLEU CLAIR */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-5 hideColumn"></div>
          <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
            <div className="circle circleBlueLight">
              <img src={pictosList.pictoDemarcheLigne} alt="D&eacute;marches en ligne" className="picto" />
            </div>
            <div className="titlePart">
              <span className="titleCircle">R&eacute;aliser mes<br />d&eacute;marches en ligne</span>
            </div>
          </div>
          <div className="fr-col-5 hideColumn"></div>
        </div>
        {/* CERCLES MARRON ET VERT */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-2 hideColumn"></div>
          <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
            <div className="circle circleBrown">
              <img src="" alt="Opportunit&eacute;s du num&eacute;rique" className="picto" />
            </div>
            <div className="titlePart">
              <span className="titleCircle">Utiliser les<br />opportunit&eacute;s<br />du num&eacute;rique</span>
            </div>
          </div>
          <div className="fr-col-4 hideColumn"></div>
          <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
            <div className="circle circleGreen">
              <img src={pictosList.pictoContenuNum} alt="Prendre en main l&rsquo;outil num&eacute;rique" className="picto" />
            </div>
            <div className="titlePart">
              <span className="titleCircle">Prendre en main<br />l&rsquo;outil num&eacute;rique</span>
            </div>
          </div>
          <div className="fr-col-2 hideColumn"></div>
        </div>
        {/* CERCLE VIOLET */}
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineCircle">
          <div className="fr-col-5 hideColumn"></div>
          <div className="fr-col-sm-12 fr-col-md-2 responsiveCircle">
            <div className="circle circlePurple">
              <img src="" alt="Découvrir les opportunit&eacute;s" className="picto" />
            </div>
            <div className="titlePart">
              <span className="titleCircle">Découvrir<br />les opportunit&eacute;s<br />de mon territoire</span>
            </div>
          </div>
          <div className="fr-col-5 hideColumn"></div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
