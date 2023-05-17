import React from 'react';
import CoordinateurMission2 from '../../assets/images/coordinateur-mission-2.svg';
import PictoMission2 from '../../assets/pictos/mission-2.svg';

function Mission2() {

  return (
    <section>
      <div className="fr-container fr-pt-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 display-mobile fr-grid-row--center fr-grid-row fr-pt-16w block-mission2">
            <img src={PictoMission2} alt="Cartographie Coordinateur" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                Être le relais principal des employeurs, des Conseillers numériques et de l’équipe d’animation nationale
              </p>
            </div>
            <img src={CoordinateurMission2} alt="Cartographie Coordinateur" className="illustration-mission2" />
          </div>
          <div className="fr-col-xl-8 fr-col-12">
            <div className="fr-grid-row">
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p style={{ width: '90%' }}>
                    Être le point de relais entre l’animation nationale et les Conseillers numériques :
                  </p>
                  <ul className="secondary-list">
                    <li>
                      <p>
                        Participer aux ateliers de consultation organisés par l’équipe d’animation nationale ;
                      </p>
                    </li>
                    <li>
                      <p>
                        Identifier et recenser les initiatives et activités locales et les porter à la connaissance
                        de l’équipe d’animation nationale ;
                      </p>
                    </li>
                    <li>
                      <p>
                        Recenser et remonter les questions, les difficultés et les besoins des conseillers
                        numériques coordonnés.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Être le point de relais du Hub et des Conseillers numériques du territoire
                  </p>
                </li>
              </ul>
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Animer le réseau des employeurs et gérer les éventuelles difficultés rencontrées par
                    les Conseillers numériques avec l’employeur ;
                  </p>
                </li>
                <li>
                  <p>
                    Organiser des temps d’échange bilatéraux avec chaque Conseiller numérique coordonné ;
                  </p>
                </li>
                <li>
                  <p>
                    Diffuser les informations, outils, ressources et cadres d’action à l’ensemble des Conseillers
                    numériques coordonnés ;
                  </p>
                </li>
                <li>
                  <p>
                    Communiquer sur l’offre de service des Conseillers numériques coordonnés et sur les évènements,
                    et participer à leur organisation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="fr-col-4 display-desktop fr-ml-auto fr-grid-row--center fr-grid-row fr-pt-16w fr-pb-15w">
            <img src={PictoMission2} alt="Cartographie Coordinateur" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                Être le relais principal des employeurs, des Conseillers numériques et de l’équipe d’animation nationale
              </p>
            </div>
            <img src={CoordinateurMission2} alt="Cartographie Coordinateur" className="illustration-mission2" />
          </div>
        </div>
        <div className="fr-grid-row fr-mt-xl-12w fr-mt-3w fr-mb-xl-2w fr-col-12">
          <div className="fr-col-12">
            <hr style={{ borderWidth: '0.5px', borderColor: '#E5E5E5' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission2;
