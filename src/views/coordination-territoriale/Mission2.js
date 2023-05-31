import React from 'react';
import CoordinateurMission2 from '../../assets/images/coordinateur-mission-2-min.svg';
import PictoMission2 from '../../assets/pictos/mission-2-min.svg';

function Mission2() {

  return (
    <section>
      <div className="fr-container fr-pt-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 display-mobile fr-grid-row--center fr-grid-row fr-pt-16w block-mission2">
            <img src={PictoMission2} alt="Picto mission 2" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w block-title-mission" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                &Ecirc;tre le relais principal des employeurs, des Conseillers num&eacute;riques et de l&rsquo;&eacute;quipe d&rsquo;animation nationale
              </p>
            </div>
            <img src={CoordinateurMission2} alt="Coordinateur mission 2" className="illustration-mission2" />
          </div>
          <div className="fr-col-xl-8 fr-col-12">
            <div className="fr-grid-row">
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p style={{ width: '90%' }}>
                    &Ecirc;tre le point de relais entre l&rsquo;animation nationale et les Conseillers num&eacute;riques&nbsp;:
                  </p>
                  <ul className="secondary-list">
                    <li>
                      <p>
                        Participer aux ateliers de consultation organis&eacute;s par l&rsquo;&eacute;quipe d&rsquo;animation nationale&nbsp;;
                      </p>
                    </li>
                    <li>
                      <p>
                        Identifier et recenser les initiatives et activit&eacute;s locales et les porter &agrave; la connaissance
                        de l&rsquo;&eacute;quipe d&rsquo;animation nationale&nbsp;;
                      </p>
                    </li>
                    <li>
                      <p>
                        Recenser et remonter les questions, les difficult&eacute;s et les besoins des conseillers
                        num&eacute;riques coordonn&eacute;s.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    &Ecirc;tre le point de relais du Hub et des Conseillers num&eacute;riques du territoire
                  </p>
                </li>
              </ul>
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Animer le r&eacute;seau des employeurs et g&eacute;rer les &eacute;ventuelles difficult&eacute;s rencontr&eacute;es par
                    les Conseillers num&eacute;riques avec l&rsquo;employeur&nbsp;;
                  </p>
                </li>
                <li>
                  <p>
                    Organiser des temps d&rsquo;&eacute;change bilat&eacute;raux avec chaque Conseiller num&eacute;rique coordonn&eacute;&nbsp;;
                  </p>
                </li>
                <li>
                  <p>
                    Diffuser les informations, outils, ressources et cadres d&rsquo;action &agrave; l&rsquo;ensemble des Conseillers
                    num&eacute;riques coordonn&eacute;s&nbsp;;
                  </p>
                </li>
                <li>
                  <p>
                    Communiquer sur l&rsquo;offre de service des Conseillers num&eacute;riques coordonn&eacute;s et sur les &eacute;v&egrave;nements,
                    et participer &agrave; leur organisation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="fr-col-4 display-desktop fr-ml-auto fr-grid-row--center fr-grid-row fr-pt-16w fr-pb-15w">
            <img src={PictoMission2} alt="Cartographie Coordinateur" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                &Ecirc;tre le relais principal des employeurs, des Conseillers num&eacute;riques et de l&rsquo;&eacute;quipe d&rsquo;animation nationale
              </p>
            </div>
            <img src={CoordinateurMission2} alt="Coordinateur mission 2" className="illustration-mission2" />
          </div>
        </div>
        <div className="fr-grid-row horizontal-line fr-col-12">
          <hr />
        </div>
      </div>
    </section>
  );
}

export default Mission2;
