import React from 'react';
import CoordinateurMission4 from '../../assets/images/coordinateur-mission-4.svg';
import PictoMission4 from '../../assets/pictos/mission-4.svg';

function Mission4() {

  return (
    <section>
      <div className="fr-container fr-pt-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-8">
            <div className="fr-grid-row">
              <ul className="fr-col-6 primary-list">
                <li>
                  <p style={{ width: '90%' }}>
                    Faciliter la montée en compétences des Conseillers numériques en les orientant vers des
                    offres de formations locales
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    Faire des accompagnements auprès des usagers si le coordinateur exerce au sein d’un bassin de vie
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    Mettre en place des réunions de suivi avec les Conseillers numériques et les structures
                    pour avoir un retour sur les formations et les accompagnements proposés
                    par les Conseillers numériques
                  </p>
                </li>
              </ul>
              <ul className="fr-col-6 primary-list">
                <li>
                  <p>
                    Être le point de relais entre l’animation nationale et les Conseillers numériques :
                  </p>
                </li>
                <li>
                  <p>
                    Déployer un agenda commun via RDV Aide Numérique
                  </p>
                </li>
                <li>
                  <p>
                    Mettre en place un suivi RH dans le cadre d’une relation hiérarchique entre le
                    coordinateur et certains Conseillers numériques coordonnés
                  </p>
                </li>
                <li>
                  <p>
                    Assurer un suivi statistique d’accompagnement des Conseillers numériques coordonnés et appuyer
                    la Préfecture dans les relances sur la complétion des rapports d’activité
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="fr-col-4 fr-ml-auto fr-grid-row--center fr-grid-row fr-pt-16w fr-pb-15w">
            <img src={PictoMission4} style={{ position: 'absolute', bottom: '-128.5rem' }} alt="Cartographie Coordinateur" className="image" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                Les Conseillers numériques coordinateurs pourront s’ils le souhaitent exercer les missions suivantes
                à titre facultatif(liste non-exhaustive) :
              </p>
            </div>
            <img style={{ position: 'absolute', bottom: '-152.5rem' }} src={CoordinateurMission4} alt="Cartographie Coordinateur" className="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission4;
