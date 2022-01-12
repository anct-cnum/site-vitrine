import React from 'react';
import pictoEchanger from '../../assets/images/logo-echanger-proches-min.svg';

function Themes() {

  return (
    <div className="themes">
      <div className="fr-container fr-mt-4w">
        <div className="fr-grid-row fr-grid-row--gutter fr-grid-row--center fr-mb-9w">
          <div className="fr-col-1"></div>
          <div className="fr-col-10">
            <h2 className="fr-h1" style={{ textAlign: 'center' }}>
              En me formant aupr&egrave;s d&rsquo;un conseiller num&eacute;rique, j&rsquo;apprends &agrave; devenir autonome pour&nbsp;:
            </h2>
          </div>
        </div>
        <div className="fr-grid-row fr-grid-row--gutter fr-grid-row--center fr-mb-9w">
          <div className="fr-col-4"></div>
          <div className="fr-col-2">
            <div className="circleBlue">
              <img src={pictoEchanger} alt="logo France Relance" className="pictoEchanger" />
            </div>
          </div>
          <div className="fr-col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
