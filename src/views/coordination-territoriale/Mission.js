import React from 'react';
import PropTypes from 'prop-types';
import MissionButton from './MissionButton';
import MissionDetails1 from './MissionDetails1';
import MissionDetails2 from './MissionDetails2';
import MissionDetails3 from './MissionDetails3';
import MissionDetails4 from './MissionDetails4';

function Mission({ image, imageAlt, marge, stepRef, step, changeStep, titre }) {

  const MissionDetails = () => {
    switch (stepRef) {
      case 1:
        return <MissionDetails1 isDisplayed={step === stepRef} />;
      case 2:
        return <MissionDetails2 isDisplayed={step === stepRef} />;
      case 3:
        return <MissionDetails3 isDisplayed={step === stepRef} />;
      case 4:
        return <MissionDetails4 isDisplayed={step === stepRef}/>;
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="fr-col-xl-3 fr-col-12 fr-pt-16w step">
        <img src={image} alt={imageAlt} className="picto-mission" />
        <div className={`fr-pt-10w fr-pb-2w fr-px-5w ${marge} ${step === stepRef || step === 0 ? 'gris-background' : ''}`} style={{ width: '100%' }}>
          <p className={`fr-h6 title-mission ${step === stepRef || step === 0 ? 'bleu-primary' : 'gris-light'}`}>{titre}</p>
          <MissionButton
            marge="display-mobile"
            stepRef={stepRef}
            step={step}
            changeStep={changeStep} />
        </div>
      </div>
      <div className="display-mobile" style={ step === stepRef || step === 4 ? { display: 'none' } : { marginBottom: '7.5rem' }}>&nbsp;</div>
      <section className="mission-details display-mobile marge-image">
        <MissionDetails />
      </section>
    </>
  );
}

Mission.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  marge: PropTypes.string,
  stepRef: PropTypes.number,
  step: PropTypes.number,
  changeStep: PropTypes.func,
  titre: PropTypes.any
};

export default Mission;
