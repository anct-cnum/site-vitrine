import React from 'react';
import logoAnct from '../assets/brands/logo-ANCT.svg';

import '@gouvfr/dsfr/dist/component/footer/footer.min.css';
import '@gouvfr/dsfr/dist/component/modal/modal.min.css';
import '@gouvfr/dsfr/dist/component/radio/radio.min.css';

const SITE_VITRINE_URL = 'https://conseiller-numerique.gouv.fr';

function Artwork({ src }) {
  return (
    <svg aria-hidden="true" className="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
      <use className="fr-artwork-decorative" href={`${src}#artwork-decorative`} />
      <use className="fr-artwork-minor" href={`${src}#artwork-minor`} />
      <use className="fr-artwork-major" href={`${src}#artwork-major`} />
    </svg>
  );
}

// Reproduit le pied de page du site vitrine (PiedDePage.tsx) pour que les
// pages de candidature, hébergées sur une application séparée, restent
// visuellement cohérentes avec le reste du dispositif. Les liens pointent
// vers le site vitrine car ces pages n'existent pas dans cette application.
export default function Footer() {
  return (
    <>
      <footer className="fr-footer" role="contentinfo" id="footer">
        <div className="fr-container">
          <div className="fr-footer__body fr-footer__body--operator">
            <div className="fr-footer__brand fr-enlarge-link">
              <a className="fr-footer__brand-link" href={SITE_VITRINE_URL} title="Accueil - Conseiller numérique">
                <p className="fr-logo">
                  République
                  <br />
                  Française
                </p>
              </a>
            </div>
            <div className="fr-footer__content">
              <p className="fr-footer__content-desc">
                Conseiller Numérique rassemble les professionnels et les structures qui accompagnent les
                Français vers l&apos;autonomie dans leurs usages du numérique au quotidien. Il est édité par
                l&apos;
                <a href="https://anct.gouv.fr/" target="_blank" rel="noopener noreferrer">
                  Agence nationale de la cohésion des territoires.
                  <span className="fr-sr-only"> (ouvre une nouvelle fenêtre)</span>
                </a>
              </p>
            </div>
            <div className="fr-footer__partners-logos">
              <div className="fr-footer__partners-main">
                <img
                  className="fr-footer__logo"
                  style={{ maxWidth: '9.0625rem' }}
                  src={logoAnct}
                  alt="Agence Nationale de la Cohésion des Territoires - Société numérique"
                />
              </div>
            </div>
          </div>
          <div className="fr-footer__bottom">
            <ul className="fr-footer__bottom-list">
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="https://conseiller-numerique.gouv.fr/mentions-legales">
                  Mentions légales
                </a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="https://conseiller-numerique.gouv.fr/donnees-personnelles">
                  Utilisation des données personnelles dans le cadre du dispositif
                </a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="https://conseiller-numerique.gouv.fr/cgu">
                  Conditions générales d&apos;utilisation et données personnelles
                </a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="https://conseiller-numerique.gouv.fr/accessibilite">
                  Accessibilité : partiellement conforme
                </a>
              </li>
              <li className="fr-footer__bottom-item">
                <a className="fr-footer__bottom-link" href="https://conseiller-numerique.gouv.fr/plan-du-site">
                  Plan du site
                </a>
              </li>
              <li className="fr-footer__bottom-item">
                <button
                  className="fr-btn--display fr-btn"
                  aria-controls="fr-theme-modal"
                  data-fr-opened="false"
                  title="Paramètres d'affichage"
                  type="button"
                >
                  Paramètres d&apos;affichage
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <dialog id="fr-theme-modal" className="fr-modal" aria-labelledby="fr-theme-modal-title">
        <div className="fr-container fr-container--fluid fr-container-md">
          <div className="fr-grid-row fr-grid-row--center">
            <div className="fr-col-12 fr-col-md-6 fr-col-lg-4">
              <div className="fr-modal__body">
                <div className="fr-modal__header">
                  <button
                    className="fr-btn--close fr-btn"
                    aria-controls="fr-theme-modal"
                    title="Fermer"
                    type="button"
                  >
                    Fermer
                  </button>
                </div>
                <div className="fr-modal__content">
                  <h2 id="fr-theme-modal-title" className="fr-modal__title">
                    Paramètres d&apos;affichage
                  </h2>
                  <div id="fr-display" className="fr-display">
                    <fieldset className="fr-fieldset" id="display-fieldset">
                      <legend className="fr-fieldset__legend--regular fr-fieldset__legend" id="display-fieldset-legend">
                        Choisissez un thème pour personnaliser l&apos;apparence du site.
                      </legend>
                      <div className="fr-fieldset__element">
                        <div className="fr-radio-group fr-radio-rich">
                          <input value="light" type="radio" id="fr-radios-theme-light" name="fr-radios-theme" />
                          <label className="fr-label" htmlFor="fr-radios-theme-light">
                            Thème clair
                          </label>
                          <div className="fr-radio-rich__pictogram">
                            <Artwork src="/pictograms/sun.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="fr-fieldset__element">
                        <div className="fr-radio-group fr-radio-rich">
                          <input value="dark" type="radio" id="fr-radios-theme-dark" name="fr-radios-theme" />
                          <label className="fr-label" htmlFor="fr-radios-theme-dark">
                            Thème sombre
                          </label>
                          <div className="fr-radio-rich__pictogram">
                            <Artwork src="/pictograms/moon.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="fr-fieldset__element">
                        <div className="fr-radio-group fr-radio-rich">
                          <input value="system" type="radio" id="fr-radios-theme-system" name="fr-radios-theme" />
                          <label className="fr-label" htmlFor="fr-radios-theme-system">
                            Système
                            <span className="fr-hint-text">Utilise les paramètres système</span>
                          </label>
                          <div className="fr-radio-rich__pictogram">
                            <Artwork src="/pictograms/system.svg" />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
