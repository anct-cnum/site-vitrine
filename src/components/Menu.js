import React, { useEffect, useState } from 'react';
import { menuActions } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
  const urlFormStructure = process.env.REACT_APP_FORMS_URL + '/structure/new';
  const urlFormConseiller = process.env.REACT_APP_FORMS_URL + '/conseiller/new';

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

  //Trick pour contourner la mauvaise gestion du DSFR pour les menus d&eacute;roulants
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
                {...(location.pathname.startsWith('/accueil') || location.pathname === '/' ? { 'aria-current': true } : {})}>
                  Accueil
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'home' ? 'fr-collapse--expanded' : ''}`} id="menu-home">
                <ul className="fr-menu__list">
                  <li>
                    <HashLink to="/accueil/#ancre-themes" className="fr-nav__link">&bull;&nbsp;&Agrave; propos des conseillers num&eacute;riques</HashLink>
                  </li>
                  <li>
                    <a className="fr-nav__link">&bull;&nbsp;Le dispositif en chiffres</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <a className="fr-nav__link" href={urlCartographie} target="_self">Carte</a>
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
                    <a className="fr-nav__link" href={urlFormConseiller} target="_blank" rel="noopener noreferrer">
                      &bull;&nbsp;Devenir conseiller num&eacute;rique
                    </a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={urlFormStructure} target="_blank" rel="noopener noreferrer">
                      &bull;&nbsp;Recruter un conseiller num&eacute;rique
                    </a>
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
                  Mon compte
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'pfs' ? 'fr-collapse--expanded' : ''}`} id="menu-pfs">
                <ul className="fr-menu__list">
                  <li>
                    <a className="fr-nav__link" href={urlCoop} target="_blank" rel="noopener noreferrer">&bull;&nbsp;Espace coop</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={urlCandidat} target="_blank" rel="noopener noreferrer">&bull;&nbsp;Espace candidat</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={`${urlBackoffice}?role=structure`}
                      target="_blank" rel="noopener noreferrer">&bull;&nbsp;Espace structure</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={`${urlBackoffice}?role=prefet`}
                      target="_blank" rel="noopener noreferrer">&bull;&nbsp;Espace pr&eacute;fecture</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
