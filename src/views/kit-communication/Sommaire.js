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
                1.&nbsp;&nbsp;Présentation du dispositif Conseiller numérique France services
              </a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-2">2.&nbsp;&nbsp;&Eacute;léments d&rsquo;identité visuelle</a>
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
              <a className="summary-link-custom" href="#titre-ancre-3.1">3.1&nbsp;&nbsp;Gabarits pour les réseaux sociaux</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.2">3.2&nbsp;&nbsp;Modèle de présentation Powerpoint</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.3">3.3&nbsp;&nbsp;Affiche</a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-4">
                4.&nbsp;&nbsp;Outils à destination des conseillers numériques
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
          Vous déployez des actions dans le cadre de Conseiller numérique France Services ?
          Un kit a été spécialement conçu pour valoriser le dispositif sur vos différents canaux de communication.
          <br/><br/>
          Des supports sont également adressés spécifiquement aux conseillers numériques : signatures mail, cartes de visites, et étiquettes.
          <br/><br/>
          <em>Kit de communication version 2.</em>
        </p>
        <div className="about-div">
          <p className="about-p">
            <a href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V2/kit-cnfs-v2-complet.zip"
              title="archive complète du kit"
              className="bleu-france"
              style={{ boxShadow: 'none' }}
              target="_blank"
              rel="noopener noreferrer">
              Télécharger la version complète du kit de communication Conseiller numérique France Services (7,8 Mo).
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sommaire;
