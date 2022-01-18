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
            <Link to="/" title="R&eacute;publique Fran&ccedil;aise - France Relance" onClick={onClickLink}>
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
                <Link to="/kit-communication" title="kit communication" className="fr-footer__content-link" onClick={onClickLink}>
                  Kit de communication
                </Link>
              </li>
              <li className="fr-footer__content-item">
                <a
                  title="France services"
                  className="fr-footer__content-link"
                  href="https://www.cohesion-territoires.gouv.fr/france-services"
                  target="_blank" rel="noopener noreferrer">
                    France services
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://agence-cohesion-territoires.gouv.fr"
                  title="Agence Nationale de la Coh&eacute;sion des Territoires"
                  target="_blank" rel="noopener noreferrer">
                    Agence Nationale de la Coh&eacute;sion des Territoires</a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://societenumerique.gouv.fr"
                  title="Programme Soci&eacute;t&eacute; Num&eacute;rique"
                  target="_blank" rel="noopener noreferrer">
                    Programme Soci&eacute;t&eacute; Num&eacute;rique
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://incubateur.anct.gouv.fr"
                  title="Incubateur des territoires"
                  target="_blank" rel="noopener noreferrer">
                    Incubateur des territoires
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  title="Statistiques"
                  href="https://metabase.conseiller-numerique.gouv.fr/public/dashboard/446208c4-cae2-4c0c-be19-44cb14ce7d06"
                  target="_blank" rel="noopener noreferrer">
                    Statistiques
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
                title="Don&eacute;es personnelles et cookies"
                target="_blank" rel="noopener noreferrer">
                  Donn&eacute;es personnelles et cookies
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <Link
                to="/accessibilite"
                title="Accessibilit&eacute;"
                className="fr-footer__bottom-link"
                onClick={onClickLink}>
                  Accessibilit&eacute; : non conforme
              </Link>
            </li>
            <li className="fr-footer__bottom-item">
              <Link
                to="/mentions-legales"
                title="Mentions L&eacute;gales"
                className="fr-footer__bottom-link"
                onClick={onClickLink}>
                  Mentions l&eacute;gales
              </Link>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention contraire, tous les textes de ce site sont sous&nbsp;
              <a
                href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                target="_blank" rel="noopener noreferrer"
                title="Licence etalab">licence etalab-2.0</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
