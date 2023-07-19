import React from 'react';
import PropTypes from 'prop-types';
import CoordinateurMission1 from '../../assets/images/coordinateur-mission-1-min.svg';

function MissionDetails1({ isDisplayed }) {

  return (
    <div className={`fr-container fr-mb-15w ${isDisplayed ? 'display' : 'no-display'}`}>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-grid-row fr-p-2w fr-mb-6w fr-mb-12w gris-background">
          <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
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
            <li>
              <p>
                Effectuer une veille sur le secteur local de l&rsquo;inclusion num&eacute;rique
              </p>
            </li>
          </ul>
          <ul className={`fr-col-xl-6 fr-col-12 primary-list gris-light fr-px-2w ${isDisplayed ? 'transition' : ''}`}>
            <li>
              <p>
                Participer &agrave; la structuration du maillage territorial des lieux de permanence pour favoriser des
                parcours usagers coh&eacute;rents et garantir une r&eacute;partition homog&egrave;ne, notamment en facilitant
                les r&eacute;attributions de poste et en proposant des portages de postes permettant de p&eacute;renniser
                les postes des Conseillers num&eacute;riques
              </p>
            </li>
            <li className="fr-pb-6w">
              <p>
                Organiser des journ&eacute;es de rencontres en lien avec la pr&eacute;fecture et le Hub en conviant
                l&rsquo;ensemble des Conseillers num&eacute;riques et des partenaires de la m&eacute;diation num&eacute;rique
              </p>
            </li>
            <img src={CoordinateurMission1} alt="Coordinateur mission 1" className={`illustration-mission1 ${isDisplayed ? 'transition-image' : ''}`} />
          </ul>
        </div>
      </div>
    </div>
  );
}

MissionDetails1.propTypes = {
  isDisplayed: PropTypes.bool
};

export default MissionDetails1;
