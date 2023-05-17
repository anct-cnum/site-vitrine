import React from 'react';
import CoordinateurMission3 from '../../assets/images/coordinateur-mission-3.svg';
import PictoMission3 from '../../assets/pictos/mission-3.svg';

function Mission3() {

  return (
    <section>
      <div className="fr-container fr-pt-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-xl-4 fr-col-12 fr-grid-row--center fr-grid-row fr-pt-16w fr-pb-15w">
            <img src={PictoMission3} alt="Cartographie Coordinateur" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                Imaginer et mettre en place des collaborations sur la base des besoins de
                la communauté des Conseillers numériques :
              </p>
            </div>
            <img src={CoordinateurMission3} alt="Cartographie Coordinateur" className="illustration-mission3" />
          </div>
          <div className="fr-col-xl-8 fr-col-12 fr-ml-auto">
            <div className="fr-grid-row">
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Participer à l’ancrage du dispositif Conseiller numérique dans le cadre des politiques publiques
                    d’inclusion numérique territoriales
                  </p>
                </li>
                <li>
                  <p style={{ width: '94%' }}>
                    Mettre en place des partenariats locaux pour mettre en réseau les actions des Conseillers numériques
                    avec les autres acteurs du territoire potentiellement prescripteurs (à titre d’exemple, Pôle Emploi,
                    Missions locales, Cap emploi...) ou bénéficiaires potentiels de l’offre de service
                    (à titre d’exemple collège, EPHAD...) ;
                  </p>
                </li>
              </ul>
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Être force de proposition auprès des élus quant à la mise en œuvre de la stratégie départementale
                    d’inclusion numérique ;
                  </p>
                </li>
                <li>
                  <p>
                    Assurer une coordination avec le réseau France services du territoire ;
                  </p>
                </li>
                <li>
                  <p>
                    Être un point de contact privilégié pour le Hub pour un numérique inclusif local ;
                  </p>
                </li>
                <li>
                  <p>
                    Visibiliser l’action globale des Conseillers numériques, notamment en se déplaçant sur le
                    territoire pour cibler des publics particuliers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fr-grid-row fr-mt-xl-10w fr-mt-3w fr-mb-xl-2w fr-col-12">
          <div className="fr-col-12">
            <hr style={{ borderWidth: '0.5px', borderColor: '#E5E5E5' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission3;
