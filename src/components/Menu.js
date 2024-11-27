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

  const urlBlog = import.meta.env.VITE_APP_BLOG_URL;
  const urlDashboard = import.meta.env.VITE_APP_DASHBOARD_URL;
  const urlCoop = import.meta.env.VITE_APP_COOP_URL;
  const urlCandidat = import.meta.env.VITE_APP_CANDIDAT_URL;
  const urlFormCandidature = import.meta.env.VITE_APP_FORMS_URL;

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
    <div className={`fr-header__menu ${burgerMenuHidden ? 'fr-modal' : 'fr-modal fr-modal--opened'}`} id="modal-870" aria-labelledby="fr-btn-menu-mobile-4">
      <div className="fr-container">
        <button className="fr-link--close fr-link" aria-controls="modal-870" onClick={toggleBurgerMenu}>Fermer</button>
        <div className="fr-header__menu-links"></div>
        <nav className="fr-nav fr-display--none-lg" id="navigation-869" role="navigation" aria-label="Menu principal">
          <ul className="fr-nav__list">
            <li className="fr-nav__item">
              <button
                id="home"
                className="fr-nav__btn"
                aria-expanded={activeMenu === 'home'}
                aria-controls="menu-home"
                onClick={onClickMenu}
                {...(location.pathname.startsWith('/accueil') || location.pathname === '/' ? { 'aria-current': true } : {})}>
                Accueil
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'home' ? 'fr-collapse--expanded' : ''}`} id="menu-home">
                <ul className="fr-menu__list">
                  <li>
                    <Link to="/accueil/#ancre-themes" className="fr-nav__link">&Agrave; propos des conseillers num&eacute;riques</Link>
                  </li>
                  <li>
                    <Link to="/accueil/#ancre-statistiques" className="fr-nav__link">Le dispositif en chiffres</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <a className="fr-nav__link" href={urlBlog} target="_self">M&eacute;dia</a>
            </li>
            <li className="fr-nav__item">
              <Link
                to="/carte"
                className="fr-nav__link"
                {...(location.pathname.startsWith('/carte') ? { 'aria-current': 'page' } : {})}>
                Carte
              </Link>
            </li>
            <li className="fr-nav__item">
              <a className="fr-nav__link"
                href="https://metabase.conseiller-numerique.gouv.fr/public/dashboard/446208c4-cae2-4c0c-be19-44cb14ce7d06"
                target="_blank" rel="noopener noreferrer">
                Statistiques
              </a>
            </li>
            <li className="fr-nav__item">
              <button
                id="cnfs"
                className="fr-nav__btn"
                aria-expanded={activeMenu === 'cnfs'}
                aria-controls="menu-cnfs"
                onClick={onClickMenu}
                {
                  ...(location.pathname.startsWith('/aide-candidat') ||
                  location.pathname.startsWith('/aide-structure') ||
                  location.pathname.startsWith('/candidature-poste-coordinateur') ? { 'aria-current': true } : {})
                }>
                Candidature
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'cnfs' ? 'fr-collapse--expanded' : ''}`} id="menu-cnfs">
                <ul className="fr-menu__list">
                  <li>
                    <Link
                      to="/aide-candidat"
                      className="fr-nav__link"
                      {...(location.pathname.startsWith('/aide-candidat') ? { 'aria-current': 'page' } : {})}>
                      Devenir conseiller num&eacute;rique
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/aide-structure"
                      className="fr-nav__link"
                      {...(location.pathname.startsWith('/aide-structure') ? { 'aria-current': 'page' } : {})}>
                      Obtenir un poste de conseiller num&eacute;rique
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/candidature-poste-coordinateur"
                      className="fr-nav__link"
                      {...(location.pathname.startsWith('/candidature-poste-coordinateur') ? { 'aria-current': 'page' } : {})}>
                      Obtenir un poste de coordinateur de conseiller num&eacute;rique
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <button
                id="pfs"
                className="fr-nav__btn"
                aria-expanded={activeMenu === 'pfs'}
                aria-controls="menu-pfs" onClick={onClickMenu}>
                Mon compte
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'pfs' ? 'fr-collapse--expanded' : ''}`} id="menu-pfs">
                <ul className="fr-menu__list">
                  <li>
                    <a className="fr-nav__link" href={urlCoop} target="_blank" rel="noopener noreferrer">La Coop de la médiation numérique</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={urlCandidat} target="_blank" rel="noopener noreferrer">Espace candidat</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={urlDashboard}
                      target="_blank" rel="noopener noreferrer">Tableau de pilotage - structure</a>
                  </li>
                  <li>
                    <a className="fr-nav__link" href={urlDashboard}
                      target="_blank" rel="noopener noreferrer">Tableau de pilotage - pr&eacute;fecture</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <button
                id="coordinateur"
                className="fr-nav__btn"
                aria-expanded={activeMenu === 'coordinateur'}
                aria-controls="menu-coordinateur"
                onClick={onClickMenu}
                {...(location.pathname.startsWith('/coordination-territoriale') ? { 'aria-current': true } : {})}>
                Coordination territoriale
              </button>
              <div className={`fr-collapse fr-menu ${activeMenu === 'coordinateur' ? 'fr-collapse--expanded' : ''}`} id="menu-coordinateur">
                <ul className="fr-menu__list" style={{ width: '23rem' }}>
                  <li>
                    <a href={`${urlFormCandidature}/structure/new`} className="fr-nav__link">
                      Recrutement d&rsquo;un coordinateur
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/coordination-territoriale"
                      className="fr-nav__link"
                      {...(location.pathname.startsWith('/coordination-territoriale') ? { 'aria-current': 'page' } : {})}>
                      Les missions et la cartographie des coordinateurs
                    </Link>
                  </li>
                  <li>
                    <a className="fr-nav__link"
                      // eslint-disable-next-line max-len
                      href="https://www.data.gouv.fr/fr/datasets/conseiller-numerique-liste-des-structures-validees-par-le-comite-de-selection-conum-et-conum-coordinateur/"
                      target="_blank" rel="noopener noreferrer">Liste des structures laur&eacute;ates</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <Link
                to="/formation"
                title="Page de formation des conseillers num&eacute;riques"
                className="fr-nav__link"
                {...(location.pathname.startsWith('/formation') ? { 'aria-current': 'page' } : {})}>
                Formation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
