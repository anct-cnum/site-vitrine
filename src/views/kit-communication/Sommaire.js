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
                2.&nbsp;&nbsp;&Eacute;l&eacute;ments d&rsquo;identit&eacute; visuelle
              </a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.1">2.1&nbsp;&nbsp;Charte Graphique</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.2">2.2&nbsp;&nbsp;Logotypes</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.3">2.3&nbsp;&nbsp;Illustrations</a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-3">3.&nbsp;&nbsp;Supports d&rsquo;affichage</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.1">3.1&nbsp;&nbsp;Gabarits pour les r&eacute;seaux sociaux</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.2">3.2&nbsp;&nbsp;Mod&egrave;le de pr&eacute;sentation Powerpoint</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.3">3.3&nbsp;&nbsp;Affiche</a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-4">
                4.&nbsp;&nbsp;Outils &agrave; destination des conseillers num&eacute;riques
              </a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-4.1">4.1&nbsp;&nbsp;Cartes de visite</a>
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
          Des supports sont &eacute;galement adress&eacute;s sp&eacute;cifiquement aux conseillers num&eacute;riques : signatures mail, cartes de visites,
          et &eacute;tiquettes.
          <br/><br/>
          <em>Kit de communication version 2.</em>
        </p>
        <div className="about-div">
          <p className="about-p">
            <a href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/kit-cnfs-v2-complet.zip"
              title="archive compl&egrave;te du kit"
              className="bleu-france"
              style={{ boxShadow: 'none' }}
              target="_blank"
              rel="noopener noreferrer">
              T&eacute;l&eacute;charger la version compl&egrave;te du kit de communication Conseiller num&eacute;rique France Services (7,8 Mo).
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sommaire;
