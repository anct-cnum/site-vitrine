import React from 'react';
import { menuActions } from '../actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/brands/logo-conseiller-numerique-min.svg';
import Menu from './Menu';

function Header() {
  // eslint-disable-next-line max-len
  const aideUrl = `${import.meta.env.VITE_APP_AIDE_URL}/article/renouvellement-quel-est-le-montant-de-la-subvention-quelle-est-la-duree-de-la-subvention-et-du-contrat-1ci8cxv/`;
  const dispatch = useDispatch();

  const toggleBurgerMenu = () => {
    dispatch(menuActions.toggleBurgerMenu());
  };

  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo" style={{ paddingRight: '0', marginRight: '0' }}>
                  <Link to="/" title="Accueil - Conseiller num&eacute;rique">
                    <p className="fr-logo">
                        R&eacute;publique
                      <br />
                        Française
                    </p>
                  </Link>
                </div>
                <div className="fr-header__operator" style={{ paddingLeft: '24px' }}>
                  <img src={logo} className="fr-responsive-img" alt="Logo Conseiller num&eacute;rique" style={{ height: '70px' }} />
                </div>
                <div className="fr-header__navbar">
                  <button
                    className="fr-btn--menu fr-btn"
                    data-fr-opened="false"
                    aria-controls="modal-870"
                    aria-haspopup="menu"
                    title="Menu"
                    id="fr-btn-menu-mobile-4"
                    onClick={toggleBurgerMenu}>
                      Menu
                  </button>
                </div>
              </div>
            </div>
            <div className="fr-header__tools">
              <div className="fr-header__tools-links">
                <ul className="fr-links-group">
                  <li>
                    <a
                      title="Renouvellement conventions"
                      className="fr-link fr-icon-star-fill link-renouvellement-conventions"
                      href={aideUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                        Renouvellement conventions
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/documentheque"
                      title="Documenth&egrave;que"
                      className="fr-link fr-icon-file-line">
                        Documenth&egrave;que
                    </Link>
                  </li>
                  <li>
                    <a
                      title="Aide"
                      className="fr-link fr-icon-question-answer-line"
                      href={import.meta.env.VITE_APP_AIDE_URL}
                      target="_blank"
                      rel="noopener noreferrer">
                        J&rsquo;ai une question
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </header>

  );
}

export default Header;
