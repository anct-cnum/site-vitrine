import React from 'react';

function Sommaire() {
  return (
    <div className="fr-grid-row fr-grid-row--gutter fr-grid-row--center">
      <div className="fr-col-8 fr-col-md-5 fr-mb-9w">
        <nav className="fr-summary summary-custom" aria-labelledby="fr-summary-title">
          <div className="summary-title-custom fr-mb-6w" id="fr-summary-title">Sommaire</div>
          <ol className="summary-list-custom">
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-1">
                1.&nbsp;Présentation du dispositif Conseiller numérique
              </a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-2">
                2.&nbsp;Charte institutionnelle et identité visuelle
              </a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.1">2.1&nbsp;Orthographe</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.2">2.2&nbsp;Charte Graphique</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.3">2.3&nbsp;Logotypes</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-2.4">2.4&nbsp;Illustrations</a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-3">3.&nbsp;Supports de communication</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.1">3.1&nbsp;Plaquette de présentation du dispositif Conum</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.2">
                3.2&nbsp;Affiche &laquo;&nbsp;Trouver un conseiller numérique près de chez soi&nbsp;&raquo;
              </a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.3">3.3&nbsp;Gabarits pour les réseaux sociaux</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.4">3.4&nbsp;Modèle de présentation Powerpoint</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-3.5">3.5&nbsp;Affiche A3 (gabarit)</a>
            </li>
            <li>
              <a className="summary-link-custom summary-link-custom-bold" href="#titre-ancre-4">
                4.&nbsp;Outils à destination des conseillers numériques
              </a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-4.1">4.1&nbsp;Cartes de visite imprimables</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-4.2">4.2&nbsp;Signature e-mail</a>
            </li>
            <li>
              <a className="summary-link-custom" href="#titre-ancre-4.3">4.3&nbsp;étiquettes</a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="fr-col-8 fr-col-md-5 fr-mb-9w sommaire">
        <div className="about-title-custom fr-mb-6w">À propos</div>
        <p>
          Vous déployez des actions dans le cadre de Conseiller numérique ?
          Un kit a été spécialement conçu pour valoriser le dispositif sur vos différents canaux de communication.
        </p>
        <p>
          Des supports sont également adressés spécifiquement aux conseillers numériques : signatures e-mail, cartes de visite et étiquettes.
        </p>
        <div className="cadre-kit">
          <p className="bleu-france">
            <span className="fr-icon-flashlight-fill flashlight-icon" aria-hidden="true"></span>&nbsp;
            Kit de communication version 4 – février 2024
          </p>
          <p>
            La charte graphique du dispositif Conseiller numérique a évolué.
            Sa nouvelle version propose une charte qui ne comprend plus le logo « France Relance »,
            dispositif européen dont étaient originaires les fonds ayant permis de financer
            les deux premières années de chaque poste attribué. Ainsi, il convient d’utiliser :
          </p>
          <ul>
            <li>
              la charte comportant le logo France Relance lorsque les postes de conseillers numériques
              sur lesquels vous communiquez sont toujours financés dans le cadre des fonds France Relance,
            </li>
            <li>
              la nouvelle charte (sans logo France Relance), si vos postes de conseillers numériques
              ont été renouvelés et sont donc dans leur 3e, 4e ou 5e année de financement.
            </li>
          </ul>
          <a
            href="https://cdn.conseiller-numerique.gouv.fr/kit-communication/V4/kit-conum-v4-complet.zip"
            className="fr-btn fr-btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger le kit complet (85,1 Mo)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sommaire;
