import React from 'react';
import PropTypes from 'prop-types';
import CoordinateurMission4 from '../../assets/images/coordinateur-mission-4-min.svg';

function MissionDetails4({ isDisplayed }) {

  return (
    <section>
      <div className={`fr-container ${isDisplayed ? 'display' : 'no-display'}`}>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-grid-row fr-p-2w fr-pb-10w fr-mb-6w fr-mb-12w gris-background">
            <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
              <li>
                <p style={{ width: '90%' }}>
                  Faciliter la mont&eacute;e en comp&eacute;tences des Conseillers num&eacute;riques en les orientant vers des
                  offres de formations locales
                </p>
              </li>
              <li>
                <p style={{ width: '95%' }}>
                  Faire des accompagnements aupr&egrave;s des usagers si le coordinateur exerce au sein d&rsquo;un bassin de vie
                </p>
              </li>
              <li>
                <p style={{ width: '95%' }}>
                  Mettre en place des r&eacute;unions de suivi avec les Conseillers num&eacute;riques et les structures
                  pour avoir un retour sur les formations et les accompagnements propos&eacute;s
                  par les Conseillers num&eacute;riques
                </p>
              </li>
            </ul>
            <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
              <li>
                <p>
                  D&eacute;ployer un agenda commun via RDV Aide Num&eacute;rique
                </p>
              </li>
              <li>
                <p>
                  Mettre en place un suivi RH dans le cadre d&rsquo;une relation hi&eacute;rarchique entre le
                  coordinateur et certains Conseillers num&eacute;riques coordonn&eacute;s
                </p>
              </li>
              <li>
                <p>
                  Assurer un suivi statistique d&rsquo;accompagnement des Conseillers num&eacute;riques coordonn&eacute;s et appuyer
                  la Pr&eacute;fecture dans les relances sur la compl&eacute;tion des rapports d&rsquo;activit&eacute;
                </p>
              </li>
              <img src={CoordinateurMission4} alt="Coordinateur mission 4" className={`illustration-mission4 ${isDisplayed ? 'transition-image' : ''}`} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

MissionDetails4.propTypes = {
  isDisplayed: PropTypes.bool
};

export default MissionDetails4;
