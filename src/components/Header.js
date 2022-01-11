import React from 'react';
import { menuActions } from '../actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/brands/logo-rf-conseiller-numerique-min.svg';
import Menu from './Menu';

function Header() {

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
                <div className="fr-header__logo">
                  <Link to="/" title="Accueil - Conseiller numérique France services">
                    <p className="fr-logo">
                        République
                      <br />
                        Française
                    </p>
                  </Link>
                </div>
                <div className="fr-header__operator">
                  <img src={logo} className="fr-responsive-img" alt="Logo Conseiller numérique" />
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
                      className="fr-link fr-fi-question-line fr-link--icon-left"
                      href="https://aide.conseiller-numerique.gouv.fr/fr/"
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
