import React from 'react';
import CoordinateurMission1 from '../../assets/images/coordinateur-mission-1.svg';
import PictoMission1 from '../../assets/pictos/mission-1.svg';

function Mission1() {

  return (
    <section>
      <div className="fr-container fr-pt-14w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-xl-4 fr-col-12 fr-grid-row--center fr-grid-row fr-pt-16w block-mission1">
            <img src={PictoMission1} alt="Picto mission 1" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w block-title-mission" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">Renforcer le maillage et les synergies territoriales</p>
            </div>
            <img src={CoordinateurMission1} alt="Coordinateur mission 1" className="illustration-mission1" />
          </div>
          <div className="fr-col-xl-8 fr-col-12 fr-ml-auto">
            <div className="fr-grid-row">
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Op&eacute;rer un diagnostic territorial des besoins de m&eacute;diation num&eacute;rique sur son p&eacute;rim&egrave;tre g&eacute;ographique
                  </p>
                </li>
                <li>
                  <p>
                    Proposer une organisation de l&rsquo;activit&eacute; des Conseillers num&eacute;riques en fonction de leur expertise,
                    du secteur d&rsquo;activit&eacute; de leurs structures et des typologies d&rsquo;usagers re&ccedil;us
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    D&eacute;velopper des partenariats aupr&egrave;s d&rsquo;acteurs locaux pour faire conna&icirc;tre le dispositif
                    et attirer un public plus large
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    Penser des parcours usagers et participer &agrave; cr&eacute;er une redirection des usagers par besoin
                    sur le territoire
                  </p>
                </li>
              </ul>
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    Effectuer une veille sur le secteur local de l&rsquo;inclusion num&eacute;rique
                  </p>
                </li>
                <li>
                  <p>
                    Participer &agrave; la structuration du maillage territorial des lieux de permanence pour favoriser des
                    parcours usagers coh&eacute;rents et garantir une r&eacute;partition homog&egrave;ne, notamment en facilitant
                    les r&eacute;attributions de poste et en proposant des portages de postes permettant de p&eacute;renniser
                    les postes des Conseillers num&eacute;riques
                  </p>
                </li>
                <li>
                  <p>
                    Organiser des journ&eacute;es de rencontres en lien avec la pr&eacute;fecture et le Hub en conviant
                    l&rsquo;ensemble des Conseillers num&eacute;riques et des partenaires de la m&eacute;diation num&eacute;rique
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fr-grid-row horizontal-line fr-col-12">
          <div className="fr-col-12">
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission1;
