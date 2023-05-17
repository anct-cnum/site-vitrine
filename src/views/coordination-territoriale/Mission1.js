import React from 'react';
import CartographieCoordinateur from '../../assets/images/coordinateur-mission-1.svg';
import PictoMission1 from '../../assets/pictos/mission-1.svg';

function Mission1() {

  return (
    <section>
      <div className="fr-container fr-pt-14w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-xl-4 fr-col-12 fr-grid-row--center fr-grid-row fr-pt-16w fr-pb-15w">
            <img src={PictoMission1} alt="Cartographie Coordinateur" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">Renforcer le maillage et les synergies territoriales</p>
            </div>
            <img src={CartographieCoordinateur} alt="Cartographie Coordinateur" className="illustration-mission1" />
          </div>
          <div className="fr-col-xl-8 fr-col-12 fr-ml-auto">
            <div className="fr-grid-row">
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Opérer un diagnostic territorial des besoins de médiation numérique sur son périmètre géographique
                  </p>
                </li>
                <li>
                  <p>
                    Proposer une organisation de l’activité des Conseillers numériques en fonction de leur expertise,
                    du secteur d’activité de leurs structures et des typologies d’usagers reçus
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    Développer des partenariats auprès d’acteurs locaux pour faire connaître le dispositif
                    et attirer un public plus large
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    Penser des parcours usagers et participer à créer une redirection des usagers par besoin
                    sur le territoire
                  </p>
                </li>
              </ul>
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Effectuer une veille sur le secteur local de l’inclusion numérique
                  </p>
                </li>
                <li>
                  <p>
                    Participer à la structuration du maillage territorial des lieux de permanence pour favoriser des
                    parcours usagers cohérents et garantir une répartition homogène, notamment en facilitant
                    les réattributions de poste et en proposant des portages de postes permettant de pérenniser
                    les postes des Conseillers numériques
                  </p>
                </li>
                <li>
                  <p>
                    Organiser des journées de rencontres en lien avec la préfecture et le Hub en conviant
                    l’ensemble des Conseillers numériques et des partenaires de la médiation numérique
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fr-grid-row fr-mt-xl-12w fr-mt-3w fr-mb-xl-2w fr-col-12">
          <div className="fr-col-12">
            <hr style={{ borderWidth: '0.5px', borderColor: '#E5E5E5' }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission1;
