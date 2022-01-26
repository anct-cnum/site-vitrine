import React from 'react';
import imageAccompagnementIndividuel from '../../assets/images/accompagnement-individuel-min.svg';
import imageAtelierCollectif from '../../assets/images/atelier-collectif-min.svg';

function Accompagnements() {

  return (
    <div className="accompagnements">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-pt-9w fr-pt-md-12w fr-mb-1w">
          <div className="fr-col-offset-1 fr-col-10">
            <h4 className="fr-h4 fr-pt-3w" style={{ textAlign: 'center' }}>
              De quels types d&rsquo;accompagnement puis-je b&eacute;n&eacute;ficier&nbsp;?
            </h4>
          </div>
          <div className="fr-col-1"></div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-mb-4w" style={{ textAlign: 'center' }}>
          Vous b&eacute;n&eacute;ficierez d&rsquo;un accompagnement sur mesure. En fonction de vos besoins,
          votre conseiller num&eacute;rique vous proposera&nbsp;:
        </div>
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-grid-row--middle">
          <div className="fr-col-6">
            <h4 className="fr-h4 titlePart fr-mb-5w">un accompagnement individuel</h4>
          </div>
          <div className="fr-col-6">
            <h4 className="fr-h4 titlePart fr-mb-5w">un atelier collectif</h4>
          </div>
        </div>
      </div>
      {/* On sort du container */}
      <div className="typePart">
        <div className="yellowPart">
          <div className="contentPart">
            <img src={imageAccompagnementIndividuel} alt="Accompagnement individuel" className="image" />
          </div>
        </div>
        <div className="greenPart">
          <div className="contentPart">
            <img src={imageAtelierCollectif} alt="Atelier collectif" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accompagnements;
