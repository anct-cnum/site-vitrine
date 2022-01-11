import React, { useEffect, useState } from 'react';
import { menuActions } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

function Menu() {

  const dispatch = useDispatch();
  const location = useLocation();

  const burgerMenuHidden = useSelector(state => state.menu?.hiddenBurgerMenu);
  const [activeMenu, setActiveMenu] = useState(null);
  const [changedMenu, setIsChangedMenu] = useState(false);

  const urlCartographie = process.env.REACT_APP_CARTOGRAPHIE_URL;
  const urlBackoffice = process.env.REACT_APP_BACKOFFICE_URL;
  const urlCoop = process.env.REACT_APP_COOP_URL;
  const urlCandidat = process.env.REACT_APP_CANDIDAT_URL;

  const toggleBurgerMenu = () => {
    dispatch(menuActions.toggleBurgerMenu());
  };

  //Fermeture du burger menu et fermeture des menus ouverts au changement de route
  useEffect(() => {
    if (burgerMenuHidden === false) {
      dispatch(menuActions.toggleBurgerMenu());
    }
    setActiveMenu(null);
  }, [location.pathname]);

  //Trick pour contourner la mauvaise gestion du DSFR pour les menus déroulants
  useEffect(() => {
    if (changedMenu !== false) {
      setTimeout(() => {
        setActiveMenu(changedMenu);
        setIsChangedMenu(false);
      }, 60);
    }
  }, [changedMenu]);

  const onClickMenu = e => {
    setIsChangedMenu(e.target?.id);
  };

  return (
    <div className={`fr-header__menu ${burgerMenuHidden ? 'fr-modal' : ''}`} id="modal-870" aria-labelledby="fr-btn-menu-mobile-4">
      <div className="fr-container">
        <button className="fr-link--close fr-link" aria-controls="modal-870" onClick={toggleBurgerMenu}>Fermer</button>
        <div className="fr-header__menu-links"></div>
        <nav className="fr-nav fr-display--none-lg" id="navigation-869" role="navigation" aria-label="Menu principal">
          <ul className="fr-nav__list">
            <li className="fr-nav__item">
              <button
                id="home"
                className="fr-nav__btn"
                aria-expanded={ activeMenu === 'home' }
                aria-controls="menu-home"
                onClick={onClickMenu}
                {...(location.pathname.startsWith('/accueil') ? { 'aria-current': true } : {})}>
                  Accueil
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'home' ? 'fr-collapse--expanded' : ''}`} id="menu-home">
                <ul className="fr-menu__list">
                  <li>
                    <Link to="/accueil" className="fr-nav__link"
                      {...(location.pathname.startsWith('/accueil') ? { 'aria-current': 'page' } : {})}>&bull;&nbsp;L&rsquo;offre de services</Link>
                  </li>
                  <li>
                    <a className="fr-nav__link">&bull;&nbsp;Le dispositif CnFS</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <a className="fr-nav__link" href={urlCartographie} target="_self">Cartographie</a>
            </li>
            <li className="fr-nav__item">
              <button
                id="cnfs"
                className="fr-nav__btn"
                aria-expanded={ activeMenu === 'cnfs' }
                aria-controls="menu-cnfs"
                onClick={onClickMenu}>
                  Recrutement
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'cnfs' ? 'fr-collapse--expanded' : ''}`} id="menu-cnfs">
                <ul className="fr-menu__list">
                  <li>
                    <a className="fr-nav__link">&bull;&nbsp;Devenir CnFS</a>
                  </li>
                  <li>
                    <a className="fr-nav__link">&bull;&nbsp;Recruter des CnFS</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <button
                id="pfs"
                className="fr-nav__btn"
                aria-expanded={ activeMenu === 'pfs' }
                aria-controls="menu-pfs" onClick={onClickMenu}>
                  Accès plateformes et gestion
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'pfs' ? 'fr-collapse--expanded' : ''}`} id="menu-pfs">
                <ul className="fr-menu__list">
                  <li>
                    <a className="fr-nav__link" href={urlCoop} target="_blank" rel="noopener noreferrer">&bull;&nbsp;Connexion espace coop</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={urlCandidat} target="_blank" rel="noopener noreferrer">&bull;&nbsp;Connexion espace candidat</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={`${urlBackoffice}?role=structure`}
                      target="_blank" rel="noopener noreferrer">&bull;&nbsp;Connexion espace structure</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={`${urlBackoffice}?role=prefet`}
                      target="_blank" rel="noopener noreferrer">&bull;&nbsp;Connexion espace préfet</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <Link to="/kit-communication" className="fr-nav__link"
                {...(location.pathname.startsWith('/kit-communication') ? { 'aria-current': 'page' } : {})}>Kit de communication</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
