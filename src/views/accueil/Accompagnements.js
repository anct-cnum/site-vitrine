import React from 'react';
import pictosList from '../../assets/pictos';

function Accompagnements() {

  return (
    <div className="accompagnements fr-mb-12w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-mb-4w">
          <div className="fr-col-1"></div>
          <div className="fr-col-10">
            <h4 className="fr-h4" style={{ textAlign: 'center' }}>
              De quels types d&rsquo;accompagnement puis-je b&eacute;n&eacute;ficier ?
            </h4>
          </div>
          <div className="fr-col-1"></div>
        </div>
      </div>
      {/* On sort du container */}
      <div className="typePart">
        <div className="bluePart">
          <div className="contentPart">
            <h4 className="fr-h4 titleCustom">
                D&rsquo;un accompagnement individuel ?
            </h4>
            <img src={pictosList.pictoAccInd} alt="Accompagnement individuel" className="picto" />
          </div>
        </div>
        <div className="yellowPart">
          <div className="contentPart">
            <h4 className="fr-h4 titleCustom">
                D&rsquo;un atelier collectif ?
            </h4>
            <img src={pictosList.pictoAtelier} alt="Atelier" className="picto" />
          </div>
        </div>
        <div className="descriptionPart">
          <p className="textPart">
            Vous b&eacute;n&eacute;ficierez d&rsquo;un accompagnement sur mesure. En fonction de vos besoins,
            votre conseiller num&eacute;rique vous proposera<br />un accompagnement individuel ou de participer &agrave; un atelier collectif.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accompagnements;
