import React from 'react';
import CoordinateurMission3 from '../../assets/images/coordinateur-mission-3-min.svg';
import PictoMission3 from '../../assets/pictos/mission-3-min.svg';

function Mission3() {

  return (
    <section>
      <div className="fr-container fr-pt-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-xl-4 fr-col-12 fr-grid-row--center fr-grid-row fr-pt-16w block-mission3">
            <img src={PictoMission3} alt="Picto mission 3" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w block-title-mission" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                Imaginer et mettre en place des collaborations sur la base des besoins de
                la communaut&eacute; des Conseillers num&eacute;riques&nbsp;:
              </p>
            </div>
            <img src={CoordinateurMission3} alt="Coordinateur mission 3" className="illustration-mission3" />
          </div>
          <div className="fr-col-xl-8 fr-col-12 fr-ml-auto">
            <div className="fr-grid-row">
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
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
                    (&agrave; titre d&rsquo;exemple coll&egrave;ge, EPHAD...)&nbsp;;
                  </p>
                </li>
              </ul>
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    &Ecirc;tre force de proposition aupr&egrave;s des &eacute;lus quant &agrave; la mise en œuvre de la strat&eacute;gie d&eacute;partementale
                    d&rsquo;inclusion num&eacute;rique&nbsp;;
                  </p>
                </li>
                <li>
                  <p>
                    Assurer une coordination avec le r&eacute;seau France services du territoire&nbsp;;
                  </p>
                </li>
                <li>
                  <p>
                    &Ecirc;tre un point de contact privil&eacute;gi&eacute; pour le Hub pour un num&eacute;rique inclusif local&nbsp;;
                  </p>
                </li>
                <li>
                  <p>
                    Visibiliser l&rsquo;action globale des Conseillers num&eacute;riques, notamment en se d&eacute;plaçant sur le
                    territoire pour cibler des publics particuliers.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="horizontal-line">
          <hr />
        </div>
      </div>
    </section>
  );
}

export default Mission3;
