import React from 'react';
import CoordinateurMission4 from '../../assets/images/coordinateur-mission-4.svg';
import PictoMission4 from '../../assets/pictos/mission-4.svg';

function Mission4() {

  return (
    <section>
      <div className="fr-container fr-pt-10w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 display-mobile fr-ml-auto fr-grid-row--center fr-grid-row fr-pt-16w block-mission4">
            <img src={PictoMission4} alt="Picto mission 4" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w block-title-mission" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                Les Conseillers num&eacute;riques coordinateurs pourront s&rsquo;ils le souhaitent exercer les missions suivantes
                &agrave; titre facultatif(liste non-exhaustive)&nbsp;:
              </p>
            </div>
            <img src={CoordinateurMission4} alt="Coordinateur mission 4" className="illustration-mission4" />
          </div>
          <div className="fr-col-xl-8 fr-col-12">
            <div className="fr-grid-row">
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p style={{ width: '90%' }}>
                    Faciliter la mont&eacute;e en comp&eacute;tences des Conseillers num&eacute;riques en les orientant vers des
                    offres de formations locales
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    Faire des accompagnements aupr&egrave;s des usagers si le coordinateur exerce au sein d&rsquo;un bassin de vie
                  </p>
                </li>
                <li>
                  <p style={{ width: '95%' }}>
                    Mettre en place des r&eacute;unions de suivi avec les Conseillers num&eacute;riques et les structures
                    pour avoir un retour sur les formations et les accompagnements propos&eacute;s
                    par les Conseillers num&eacute;riques
                  </p>
                </li>
              </ul>
              <ul className="fr-col-xl-6 fr-col-12 primary-list">
                <li>
                  <p>
                    &Ecirc;tre le point de relais entre l&rsquo;animation nationale et les Conseillers num&eacute;riques&nbsp;:
                  </p>
                </li>
                <li>
                  <p>
                    D&eacute;ployer un agenda commun via RDV Aide Num&eacute;rique
                  </p>
                </li>
                <li>
                  <p>
                    Mettre en place un suivi RH dans le cadre d&rsquo;une relation hi&eacute;rarchique entre le
                    coordinateur et certains Conseillers num&eacute;riques coordonn&eacute;s
                  </p>
                </li>
                <li>
                  <p>
                    Assurer un suivi statistique d&rsquo;accompagnement des Conseillers num&eacute;riques coordonn&eacute;s et appuyer
                    la Pr&eacute;fecture dans les relances sur la compl&eacute;tion des rapports d&rsquo;activit&eacute;
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="fr-col-4 display-desktop fr-ml-auto fr-grid-row--center fr-grid-row fr-pt-16w fr-pb-15w">
            <img src={PictoMission4} alt="Picto mission 4" className="picto-mission" />
            <div className="fr-pt-10w fr-pb-10w fr-pr-5w fr-pl-5w" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="fr-h6 title-mission">
                Les Conseillers num&eacute;riques coordinateurs pourront s&rsquo;ils le souhaitent exercer les missions suivantes
                &agrave; titre facultatif(liste non-exhaustive)&nbsp;:
              </p>
            </div>
            <img src={CoordinateurMission4} alt="Coordinateur mission 4" className="illustration-mission4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission4;
