import React from 'react';
import { Link } from 'react-router-dom';
import logoRF from '../assets/brands/logoRF-min.svg';
import logoFR from '../assets/brands/logo-france-relance-alt-min.svg';

function Footer() {

  return (
    <footer className="fr-footer" role="contentinfo" id="footer">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand">
            <a href="/" title="République française">
              <img src={logoRF} width="96px" alt="République Française. Liberté Égalité Fraternité." className="header__logo-rf" />
              <img src={logoFR} alt="logo France Relance" className="logoFranceRelance" />
            </a>
          </div>
          <div className="fr-footer__content footerContentCustom">
            <ul className="fr-footer__content-list footerListCustom">
              <li className="fr-footer__content-item">
                <Link to="/kit-communication" className="fr-footer__content-link">
                  Kit de communication CnFS
                </Link>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link"
                  href="https://www.cohesion-territoires.gouv.fr/france-services"
                  target="_blank" rel="noopener noreferrer">
                    Maison France services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
