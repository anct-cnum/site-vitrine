import React from 'react';

function Sommaire() {

  return (
    <div className="fr-grid-row fr-grid-row--gutter">
      <div className="fr-col-1"></div>
      <div className="fr-col-10 fr-col-md-5 fr-mb-9w">
        <nav className="fr-summary summary-custom" role="navigation" aria-labelledby="fr-summary-title">
          <div className="summary-title-custom fr-mb-6w" id="fr-summary-title">Sommaire</div>
          <ol className="summary-list-custom">
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-1">
                1.&nbsp;&nbsp;Pr&eacute;sentation du dispositif Conseiller num&eacute;rique France services
              </a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-2">
                2.&nbsp;&nbsp;Charte institutionnelle et identit&eacute; visuelle
              </a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.1">2.1&nbsp;&nbsp;Orthographe</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.2">2.2&nbsp;&nbsp;Mentions requises pour l&rsquo;&eacute;dition de documents</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.3">2.3&nbsp;&nbsp;Charte Graphique</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.4">2.4&nbsp;&nbsp;Logotypes</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.5">2.5&nbsp;&nbsp;Illustrations</a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-3">3.&nbsp;&nbsp;Supports de communication</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.1">3.1&nbsp;&nbsp;Plaquette de pr&eacute;sentation du dispositif CnFS</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.2">3.2&nbsp;&nbsp;Gabarits pour les r&eacute;seaux sociaux</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.3">3.3&nbsp;&nbsp;Mod&egrave;le de pr&eacute;sentation Powerpoint</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.4">3.4&nbsp;&nbsp;Affiche</a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-4">
                4.&nbsp;&nbsp;Outils &agrave; destination des conseillers num&eacute;riques
              </a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-4.1">4.1&nbsp;&nbsp;Cartes de visite imprimables</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-4.2">4.2&nbsp;&nbsp;Signature mail</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-4.3">4.3&nbsp;&Eacute;tiquettes</a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="fr-col-10 fr-col-md-5 fr-mb-9w about-part">
        <div className="about-title-custom fr-mb-6w">&Agrave; propos</div>
        <p style={{ marginTop: '-0.4rem' }}>
          Vous d&eacute;ployez des actions dans le cadre de Conseiller num&eacute;rique France Services ?
          Un kit a &eacute;t&eacute; sp&eacute;cialement conçu pour valoriser le dispositif sur vos diff&eacute;rents canaux de communication.
          <br/><br/>
          Des supports sont &eacute;galement adress&eacute;s sp&eacute;cifiquement aux conseillers num&eacute;riques France Services :
          signatures mail, cartes de visite et &eacute;tiquettes.
          <br/><br/><br/>
          <em><span style={{ fontWeight: 700, fontSize: '12px' }}>Kit de communication version 3</span><span className="dateKit"> – mai 2022</span></em>
          <br/><br/>
          <span style={{ fontSize: '12px' }}><em>Liste des nouveaut&eacute;s&nbsp;:<br/>
          – ajout du d&eacute;pliant imprimable de pr&eacute;sentation du dispositif CnFS.<br/>
          – ajout des mentions requises pour la conception de documents.<br/>
          – ajout du bloc-marque France Relance au format vectoriel.<br/>
          – ajout des nouvelles illustrations aux formats images bitmap et vectoriels.<br/>
          – ajout du logo UE sur les supports de pr&eacute;sentation : affiche, PowerPoint, r&eacute;seaux sociaux.</em></span>
        </p>
        <div className="about-div">
          <p className="about-p">
            <a href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V3/kit-cnfs-v3-complet.zip"
              title="archive compl&egrave;te du kit"
              className="bleu-france"
              style={{ boxShadow: 'none' }}
              target="_blank"
              rel="noopener noreferrer">
              T&eacute;l&eacute;charger la version compl&egrave;te du kit de communication Conseiller num&eacute;rique France Services (16,3 Mo).
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sommaire;
