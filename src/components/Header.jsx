import React from 'react';
import logo from '../assets/brands/logo-conseiller-numerique.svg';

import '@gouvfr/dsfr/dist/component/button/button.min.css';
import '@gouvfr/dsfr/dist/component/link/link.min.css';
import '@gouvfr/dsfr/dist/component/modal/modal.min.css';
import '@gouvfr/dsfr/dist/component/navigation/navigation.min.css';
import '@gouvfr/dsfr/dist/component/logo/logo.min.css';
import '@gouvfr/dsfr/dist/component/header/header.min.css';
import '@gouvfr/dsfr/dist/utility/icons/icons-communication/icons-communication.min.css';

const SITE_VITRINE_URL = 'https://conseiller-numerique.gouv.fr';

// Reproduit le header du site vitrine (EnTete.tsx) pour que les pages de
// candidature, hébergées sur une application séparée, restent visuellement
// cohérentes avec le reste du dispositif. Les liens pointent vers le site
// vitrine car ces pages n'existent pas dans cette application.
export default function Header() {
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <p className="fr-logo">
                    République
                    <br />
                    Française
                  </p>
                </div>
                <div className="fr-header__operator">
                  <img className="fr-responsive-img" style={{ maxWidth: '9.0625rem' }} src={logo} alt="" />
                </div>
                <div className="fr-header__navbar">
                  <button
                    className="fr-btn--menu fr-btn"
                    data-fr-opened="false"
                    aria-controls="header-modal-menu"
                    aria-haspopup="menu"
                    title="Menu"
                    id="header-menu-button"
                    type="button"
                  >
                    Menu
                  </button>
                </div>
              </div>
              <div className="fr-header__service">
                <a href={SITE_VITRINE_URL} title="Accueil - Conseiller numérique">
                  <p className="fr-header__service-title">
                    Conseiller
                    <br />
                    Numérique
                  </p>
                </a>
              </div>
            </div>
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <ul className="fr-links-group">
                  <li>
                    <a
                      className="fr-link fr-icon-question-answer-line"
                      href="https://aide.conseiller-numerique.gouv.fr/fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      J&apos;ai une question
                      <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-header__menu fr-modal" id="header-modal-menu" aria-labelledby="header-menu-button">
        <div className="fr-container">
          <button
            className="fr-btn--close fr-btn"
            aria-controls="header-modal-menu"
            title="Fermer"
            type="button"
          >
            Fermer
          </button>
          <div className="fr-header__menu-links" />
          <nav className="fr-nav" id="header-navigation" role="navigation" aria-label="Menu principal">
            <ul className="fr-nav__list">
              <li className="fr-nav__item">
                <a className="fr-nav__link" href={SITE_VITRINE_URL}>
                  Accueil
                </a>
              </li>
              <li className="fr-nav__item">
                <a className="fr-nav__link" href={`${SITE_VITRINE_URL}/devenir-conseiller`}>
                  Devenir conseiller numérique
                </a>
              </li>
              <li className="fr-nav__item">
                <a className="fr-nav__link" href={`${SITE_VITRINE_URL}/formation`}>
                  Formation
                </a>
              </li>
              <li className="fr-nav__item">
                <a
                  className="fr-nav__link"
                  href="https://cartographie.societenumerique.gouv.fr/?dispositif_programmes_nationaux=Conseillers+num%C3%A9riques&mtm_campaign=siteconum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  La cartographie
                  <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
                </a>
              </li>
              <li className="fr-nav__item">
                <a
                  className="fr-nav__link"
                  href="https://docs.numerique.gouv.fr/docs/a6aa5288-156a-4670-8387-43ec3fd1458d/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kit de communication
                  <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
