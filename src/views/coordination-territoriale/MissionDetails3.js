import React from 'react';
import PropTypes from 'prop-types';
import CoordinateurMission3 from '../../assets/images/coordinateur-mission-3-min.svg';

function MissionDetails3({ isDisplayed }) {

  return (
    <section>
      <div className={`fr-container ${isDisplayed ? 'display' : 'no-display'}`}>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-grid-row fr-p-2w fr-mb-6w fr-mb-12w gris-background">
            <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
              <li>
                <p>
                  Participer &agrave; l&rsquo;ancrage du dispositif Conseiller num&eacute;rique dans le cadre des politiques publiques
                  d&rsquo;inclusion num&eacute;rique territoriales
                </p>
              </li>
              <li>
                <p style={{ width: '94%' }}>
                  Mettre en place des partenariats locaux pour mettre en r&eacute;seau les actions des Conseillers num&eacute;riques
                  avec les autres acteurs du territoire potentiellement prescripteurs (&agrave; titre d&rsquo;exemple, P&ocirc;le Emploi,
                  Missions locales, Cap emploi...) ou b&eacute;n&eacute;ficiaires potentiels de l&rsquo;offre de service
                  (&agrave; titre d&rsquo;exemple coll&egrave;ge, EPHAD...)
                </p>
              </li>
              <li>
                <p>
                  &Ecirc;tre force de proposition aupr&egrave;s des &eacute;lus quant &agrave; la mise en œuvre de la strat&eacute;gie d&eacute;partementale
                  d&rsquo;inclusion num&eacute;rique
                </p>
              </li>
            </ul>
            <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
              <li>
                <p>
                  Assurer une coordination avec le r&eacute;seau France services du territoire
                </p>
              </li>
              <li>
                <p>
                  &Ecirc;tre un point de contact privil&eacute;gi&eacute; pour le Hub pour un num&eacute;rique inclusif local
                </p>
              </li>
              <li>
                <p>
                  Visibiliser l&rsquo;action globale des Conseillers num&eacute;riques, notamment en se d&eacute;plaçant sur le
                  territoire pour cibler des publics particuliers
                </p>
              </li>
              <img src={CoordinateurMission3} alt="Coordinateur mission 3" className={`illustration-mission3 ${isDisplayed ? 'transition-image' : ''}`} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

MissionDetails3.propTypes = {
  isDisplayed: PropTypes.bool
};

export default MissionDetails3;
