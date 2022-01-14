import React, { Fragment } from 'react';
import Square from '../../shapes/Square';
import pictosList from '../../assets/pictos';

function Rencontres() {

  return (
    <div className="rencontres fr-py-12w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-1"></div>
          <div className="fr-col-10">
            <h2 className="fr-h4" style={{ textAlign: 'center' }}>
              Je suis une petite, moyenne entreprise (TPE/PME), ou une association, j&rsquo;aimerais rencontrer un conseiller num&eacute;rique pour
            </h2>
          </div>
          <div className="fr-col-1"></div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutters" style={{ justifyContent: 'space-around' }}>
          <Square
            className="squareBlueLight"
            pictoUrl={pictosList.pictoTPE}
            altImg="D&eacute;marches administratives"
            title={<Fragment>&Ecirc;tre accompagn&eacute; pour mes d&eacute;marches administratives</Fragment>} />
          <Square
            className="squareBrown"
            pictoUrl=""
            altImg="Mieux r&eacute;f&eacute;renc&eacute;"
            title={<Fragment>&Ecirc;tre mieux r&eacute;f&eacute;renc&eacute; et/ou promouvoir mon activit&eacute; professionnelle en ligne</Fragment>} />
          <Square
            className="squareRed"
            pictoUrl=""
            altImg="Comprendre le num&eacute;rique"
            title={<Fragment>Comprendre ce que le num&eacute;rique peut apporter &agrave; mon activit&eacute;</Fragment>} />
          <Square
            className="squareYellow"
            pictoUrl=""
            altImg="Offre d'emploi"
            title={<Fragment>Apprendre &agrave; d&eacute;poser une offre d&rsquo;emploi</Fragment>} />
        </div>
      </div>
    </div>
  );
}

export default Rencontres;
