import React from 'react';
import PropTypes from 'prop-types';

function StepButton({ marge, stepRef, step, changeStep }) {

  const getPlusClass = stepRef => {
    if (step === stepRef) {
      return 'indeterminate-circle';
    } else if (step === 0) {
      return 'fr-icon-add-circle-fill bleu-primary';
    } else {
      return 'fr-icon-add-circle-fill';
    }
  };

  return (
    <div className="fr-col-xl-3 fr-col-12 encart-plus">
      <div className={`${marge} fr-pb-2w ${step === stepRef || step === 0 ? 'gris-background' : ''}`}>
        <p className="plus-mission"><button className={getPlusClass(stepRef)} onClick={() => changeStep(stepRef)} aria-hidden="true">&nbsp;</button></p>
      </div>
    </div>
  );
}

StepButton.propTypes = {
  marge: PropTypes.string,
  stepRef: PropTypes.number,
  step: PropTypes.number,
  changeStep: PropTypes.func
};

export default StepButton;
