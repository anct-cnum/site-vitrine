import React from 'react';
import PropTypes from 'prop-types';
import CoordinateurMission2 from '../../assets/images/coordinateur-mission-2-min.svg';

function MissionDetails2({ isDisplayed }) {

  return (
    <section>
      <div className={`fr-container ${isDisplayed ? 'display' : 'no-display'}`}>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-grid-row fr-p-2w fr-mb-6w fr-mb-12w gris-background">
            <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
              <li>
                <p style={{ width: '90%' }}>
                  &Ecirc;tre le point de relais entre l&rsquo;animation nationale et les Conseillers num&eacute;riques&nbsp;:
                </p>
                <ul className="secondary-list">
                  <li>
                    <p>
                      Participer aux ateliers de consultation organis&eacute;s par l&rsquo;&eacute;quipe d&rsquo;animation nationale
                    </p>
                  </li>
                  <li>
                    <p>
                      Identifier et recenser les initiatives et activit&eacute;s locales et les porter &agrave; la connaissance
                      de l&rsquo;&eacute;quipe d&rsquo;animation nationale
                    </p>
                  </li>
                  <li>
                    <p>
                      Recenser et remonter les questions, les difficult&eacute;s et les besoins des conseillers
                      num&eacute;riques coordonn&eacute;s
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  &Ecirc;tre le point de relais du Hub et des Conseillers num&eacute;riques du territoire
                </p>
              </li>
              <li>
                <p>
                  Animer le r&eacute;seau des employeurs et g&eacute;rer les &eacute;ventuelles difficult&eacute;s rencontr&eacute;es par
                  les Conseillers num&eacute;riques avec l&rsquo;employeur
                </p>
              </li>
            </ul>
            <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
              <li>
                <p>
                  Organiser des temps d&rsquo;&eacute;change bilat&eacute;raux avec chaque Conseiller num&eacute;rique coordonn&eacute;
                </p>
              </li>
              <li>
                <p>
                  Diffuser les informations, outils, ressources et cadres d&rsquo;action &agrave; l&rsquo;ensemble des Conseillers
                  num&eacute;riques coordonn&eacute;s
                </p>
              </li>
              <li>
                <p>
                  Communiquer sur l&rsquo;offre de service des Conseillers num&eacute;riques coordonn&eacute;s et sur les &eacute;v&egrave;nements,
                  et participer &agrave; leur organisation
                </p>
              </li>
              <img src={CoordinateurMission2} alt="Coordinateur mission 2" className={`illustration-mission2 ${isDisplayed ? 'transition-image' : ''}`} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

MissionDetails2.propTypes = {
  isDisplayed: PropTypes.bool
};

export default MissionDetails2;
