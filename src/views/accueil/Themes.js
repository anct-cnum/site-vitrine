import React, { Fragment } from 'react';
import Hexagon from '../../shapes/Hexagon';
import pictosList from '../../assets/pictos';

function Themes() {

  return (
    <div className="themes fr-pt-5w fr-pt-md-12w fr-pb-5w fr-pb-md-9w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12">
            <h1 className="fr-h1" style={{ textAlign: 'center' }} id="ancre-themes">
              En me formant aupr&egrave;s d&rsquo;un conseiller num&eacute;rique, j&rsquo;apprends &agrave; devenir autonome pour&nbsp;:
            </h1>
            <p className="helpTooltip fr-mb-5w">
              <em>Survolez les &eacute;l&eacute;ments avec la souris ou le doigt pour en d&eacute;couvrir les d&eacute;tails.</em>
            </p>
          </div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-5 hideColumn"></div>
          <Hexagon
            id="echanger"
            pictoUrl={pictosList.pictoEchanger}
            altImg="&Eacute;changer avec mes proches"
            title={<Fragment>&Eacute;changer avec<br />mes proches</Fragment>}
            textTooltip={
              <Fragment>
                Apprendre &agrave; :
                <ul>
                  <li> Utiliser une messagerie &eacute;lectronique</li>
                  <li> Utiliser un r&eacute;seau social</li>
                  <li> Participer &agrave; une visioconf&eacute;rence</li>
                  <li> Cr&eacute;er et partager des contenus num&eacute;riques</li>
                </ul>
              </Fragment>}/>
          <div className="fr-col-5 hideColumn"></div>
        </div>
        <div id="emploiResponsive" className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineHexagon">
          <div className="fr-col-2 hideColumn"></div>
          <Hexagon
            id="trouver"
            pictoUrl={pictosList.pictoTrouverEmploi}
            altImg="Trouver un emploi"
            title={<Fragment>Trouver un emploi<br />ou une formation</Fragment>}
            textTooltip={
              <Fragment>
                Apprendre &agrave; :
                <ul>
                  <li> Utiliser une plateforme de recherche d&rsquo;emploi</li>
                  <li> Utiliser un r&eacute;seau social pour ma recherche d&rsquo;emploi</li>
                  <li> R&eacute;aliser mon CV et le diffuser</li>
                  <li> D&eacute;poser une candidature</li>
                  <li> Faire mes d&eacute;clarations sur le site de P&ocirc;le emploi</li>
                </ul>
              </Fragment>} />
          <div className="fr-col-4 hideColumn"></div>
          <Hexagon
            id="accompagner"
            pictoUrl={pictosList.pictoAccompagnerEnfant}
            altImg="Accompagner mon enfant"
            title={<Fragment>Accompagner mon<br />enfant</Fragment>}
            textTooltip={
              <Fragment>
                Apprendre &agrave; :
                <ul>
                  <li> Suivre la scolarit&eacute; de mon enfant (logiciel de vie scolaire)</li>
                  <li> Acc&eacute;der aux services en ligne de ma commune pour mon enfant</li>
                  <li> D&eacute;couvrir et conna&icirc;tre les usages num&eacute;riques des enfants/adolescents</li>
                  <li> Me sensibiliser aux m&eacute;canismes excessifs ou addictifs li&eacute;s au num&eacute;rique</li>
                </ul>
              </Fragment>} />
          <div className="fr-col-2 hideColumn"></div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineHexagon">
          <div className="fr-col-5 hideColumn"></div>
          <Hexagon
            id="demarches"
            pictoUrl={pictosList.pictoDemarchesEnLigne}
            altImg="D&eacute;marches en ligne"
            title={<Fragment>R&eacute;aliser mes<br />d&eacute;marches en ligne</Fragment>} />
          <div className="fr-col-5 hideColumn"></div>
        </div>
        <div id="OpportunitesResponsive" className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineHexagon">
          <div className="fr-col-2 hideColumn"></div>
          <Hexagon
            id="opportunites"
            pictoUrl={pictosList.pictoOpportunites}
            altImg="Opportunit&eacute;s du num&eacute;rique"
            title={<Fragment>Utiliser les<br />opportunit&eacute;s<br />du num&eacute;rique</Fragment>}
            textTooltip={
              <Fragment>
                Apprendre &agrave; :
                <ul>
                  <li> D&eacute;poser une annonce sur un site de petites annonces</li>
                  <li> Payer en ligne</li>
                  <li> Cr&eacute;er et utiliser mon espace personnel sur les sites des grands services publics (France Connect)</li>
                  <li> D&eacute;couvrir les outils pour optimiser ma consommation &eacute;nerg&eacute;tique</li>
                </ul>
              </Fragment>} />
          <div className="fr-col-4 hideColumn"></div>
          <Hexagon
            id="prendreEnMain"
            pictoUrl={pictosList.pictoPriseEnMain}
            altImg="Prendre en main l&rsquo;outil num&eacute;rique"
            title={<Fragment>Prendre en main<br />l&rsquo;outil num&eacute;rique</Fragment>}
            textTooltip={
              <Fragment>
                Apprendre &agrave; :
                <ul>
                  <li> Utiliser les outils bureautiques (traitement de texte, etc.)</li>
                  <li> S&eacute;curiser mes connexions, me prot&eacute;ger des arnaques</li>
                  <li> V&eacute;rifier une information</li>
                  <li> G&eacute;rer, prot&eacute;ger mes donn&eacute;es personnelles</li>
                  <li> Acheter un &eacute;quipement et un abonnement adapt&eacute;s &agrave; mes usages</li>
                  <li> Me sensibiliser aux pratiques num&eacute;riques &eacute;co-responsables</li>
                  <li> R&eacute;server un billet en ligne</li>
                </ul>
              </Fragment>} />
          <div className="fr-col-2 hideColumn"></div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center spaceLineHexagon">
          <div className="fr-col-5 hideColumn"></div>
          <Hexagon
            id="decouvrir"
            pictoUrl={pictosList.pictoDecouverte}
            altImg="D&eacute;couvrir les opportunit&eacute;s"
            title={<Fragment>D&eacute;couvrir<br />les opportunit&eacute;s<br />de mon territoire</Fragment>}
            textTooltip={
              <Fragment>
                Apprendre &agrave; :
                <ul>
                  <li> Trouver un logement sur internet</li>
                  <li> Acc&eacute;der &agrave; l&rsquo;offre locale de soins</li>
                  <li> D&eacute;couvrir les transports en commun et autres solutions de mobilit&eacute;</li>
                  <li> Faire mes d&eacute;marches aupr&egrave;s des services locaux</li>
                  <li> M&rsquo;informer sur les activit&eacute;s culturelles et sociales pr&egrave;s de chez moi</li>
                </ul>
              </Fragment>} />
          <div className="fr-col-5 hideColumn"></div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
