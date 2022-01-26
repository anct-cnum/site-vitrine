import React, { Fragment } from 'react';
import Square from '../../shapes/Square';
import pictosList from '../../assets/pictos';

function Rencontres() {

  return (
    <div className="rencontres fr-my-0w fr-my-md-9w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center fr-mb-6w">
          <div className="fr-col-offset-1 fr-col-10">
            <h4 className="fr-h4" style={{ textAlign: 'center' }}>
              Je suis une petite, moyenne entreprise (TPE/PME), ou une association,
              j&rsquo;aimerais rencontrer un conseiller num&eacute;rique France Services pour&nbsp;:
            </h4>
          </div>
          <div className="fr-col-1"></div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters" style={{ justifyContent: 'space-around' }}>
          <Square
            pictoUrl={pictosList.pictoDemarchesAdmin}
            altImg="D&eacute;marches administratives"
            title={<Fragment>&Ecirc;tre accompagn&eacute; pour mes d&eacute;marches administratives</Fragment>} />
          <Square
            pictoUrl={pictosList.pictoReferencer}
            altImg="Mieux r&eacute;f&eacute;renc&eacute;"
            title={<Fragment>&Ecirc;tre mieux r&eacute;f&eacute;renc&eacute; et promouvoir mon activit&eacute; professionnelle en ligne</Fragment>} />
          <Square
            pictoUrl={pictosList.pictoComprendreNum}
            altImg="Comprendre le num&eacute;rique"
            title={<Fragment>Comprendre ce que le num&eacute;rique peut apporter &agrave; mon activit&eacute;</Fragment>} />
          <Square
            pictoUrl={pictosList.pictoDeposerOffre}
            altImg="Offre d'emploi"
            title={<Fragment>Apprendre &agrave; d&eacute;poser une offre d&rsquo;emploi</Fragment>} />
        </div>
      </div>
    </div>
  );
}

export default Rencontres;
