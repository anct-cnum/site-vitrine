import React from 'react';
import { Link } from 'react-router-dom';
import logoFR from '../assets/brands/logo-france-relance-alt-min.svg';

function Footer() {

  const onClickLink = () => {
    //Effet de scroll
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="fr-footer" role="contentinfo" id="footer">
      <div className="fr-container">
        <div className="fr-footer__body fr-footer__body--operator">
          <div className="fr-footer__brand fr-enlarge-link">
            <p className="fr-logo" title="République Française">
              r&eacute;publique
              <br />
              fran&ccedil;aise
            </p>
            <Link className="fr-footer__brand-link" to="/" title="Retour à l&rsquo;accueil" onClick={onClickLink}>
              <img src={logoFR} alt="Logo France Relance" className="logoFranceRelance fr-footer__logo" />
            </Link>
          </div>
          <div className="fr-footer__content footerContentCustom">
            <ul className="fr-footer__content-list footerListCustom fr-mb-2w">
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
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://legifrance.gouv.fr" target="_blank" rel="noopener noreferrer">legifrance.gouv.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://gouvernement.fr" target="_blank" rel="noopener noreferrer">gouvernement.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://service-public.fr" target="_blank" rel="noopener noreferrer">service-public.fr</a>
              </li>
              <li className="fr-footer__content-item">
                <a className="fr-footer__content-link" href="https://data.gouv.fr" target="_blank" rel="noopener noreferrer">data.gouv.fr</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <Link
                to="/accessibilite"
                title="Accessibilit&eacute;"
                className="fr-footer__bottom-link"
                onClick={onClickLink}>
                  Accessibilit&eacute;: non conforme
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
            <li className="fr-footer__bottom-item">
              <a href="https://cdn.conseiller-numerique.gouv.fr/CGU-Donn%C3%A9es_personnellesConseiller_Num%C3%A9rique.pdf"
                className="fr-footer__bottom-link"
                title="Don&eacute;es personnelles"
                target="_blank" rel="noopener noreferrer">
                  Donn&eacute;es personnelles
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a href="https://cdn.conseiller-numerique.gouv.fr/CGU-Donn%C3%A9es_personnellesConseiller_Num%C3%A9rique.pdf"
                className="fr-footer__bottom-link"
                title="Gestion des cookies"
                target="_blank" rel="noopener noreferrer">
                  Gestion des cookies
              </a>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention contraire, tous les contenus de ce site sont sous&nbsp;
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
