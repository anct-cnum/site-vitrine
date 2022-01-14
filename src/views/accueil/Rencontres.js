import React from 'react';
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
          <div className="responsiveSquare">
            <div className="square squareBlueLight">
              <img src={pictosList.pictoTPE} alt="D&eacute;marches administratives" className="picto" />
              <div className="titlePart">
                <span className="titleSquare">&Ecirc;tre accompagn&eacute; pour mes d&eacute;marches administratives</span>
              </div>
            </div>
          </div>
          <div className="responsiveSquare">
            <div className="square squareBrown">
              <img src="" alt="Mieux r&eacute;f&eacute;renc&eacute;" className="picto" />
              <div className="titlePart">
                <span className="titleSquare">
                  &Ecirc;tre mieux r&eacute;f&eacute;renc&eacute; et/ou promouvoir mon activit&eacute; professionnelle en ligne
                </span>
              </div>
            </div>
          </div>
          <div className="responsiveSquare">
            <div className="square squareRed">
              <img src="" alt="Comprendre le num&eacute;rique" className="picto" />
              <div className="titlePart">
                <span className="titleSquare">Comprendre ce que le num&eacute;rique peut apporter &agrave; mon activit&eacute;</span>
              </div>
            </div>
          </div>
          <div className="responsiveSquare">
            <div className="square squareYellow">
              <img src="" alt="Offre d'emploi" className="picto" />
              <div className="titlePart">
                <span className="titleSquare">Apprendre &agrave; d&eacute;poser une offre d&rsquo;emplo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rencontres;
