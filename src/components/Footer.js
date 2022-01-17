import React from 'react';
import { Link } from 'react-router-dom';
import logoRF from '../assets/brands/logoRF-min.svg';
import logoFR from '../assets/brands/logo-france-relance-alt-min.svg';

function Footer() {

  const onClickLink = () => {
    //Effet de scroll
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="fr-footer" role="contentinfo" id="footer">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand">
            <Link to="/" title="R&eacute;publique Fran&ccedil;aise" onClick={onClickLink}>
              <img
                src={logoRF}
                width="96px"
                alt="R&eacute;publique Fran&ccedil;aise. Libert&eacute; &eacute;galit&eacute; Fraternit&eacute;."
                className="header__logo-rf" />
              <img src={logoFR} alt="Logo France Relance" className="logoFranceRelance" />
            </Link>
          </div>
          <div className="fr-footer__content footerContentCustom">
            <ul className="fr-footer__content-list footerListCustom">
              <li className="fr-footer__content-item">
                <Link to="/kit-communication" className="fr-footer__content-link" onClick={onClickLink}>
                  Kit de communication
                </Link>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link"
                  href="https://www.cohesion-territoires.gouv.fr/france-services"
                  target="_blank" rel="noopener noreferrer">
                    France services
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <a href="https://cdn.conseiller-numerique.gouv.fr/CGU-Donn%C3%A9es_personnellesConseiller_Num%C3%A9rique.pdf"
                className="fr-footer__bottom-link"
                target="_blank" rel="noopener noreferrer">
                  Donn&eacute;es personnelles et cookies
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <Link to="/accessibilite" className="fr-footer__bottom-link" onClick={onClickLink}>Accessibilit&eacute; : non conforme</Link>
            </li>
            <li className="fr-footer__bottom-item">
              <Link to="/mentions-legales" className="fr-footer__bottom-link" onClick={onClickLink}>Mentions l&eacute;gales</Link>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention contraire, tous les textes de ce site sont sous&nbsp;
              <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener noreferrer">licence etalab-2.0</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
