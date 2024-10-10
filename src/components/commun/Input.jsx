import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ children, id, isRequired = true, autoComplete = 'on', testId = '', type = 'text',
  pattern, onChange, list, min, readOnly, isLoading, ariaBusy, value }) {
  return (
    <div className="fr-fieldset__element">
      <div className="fr-input-group">
        <label className="fr-label" htmlFor={id}>{children}</label>
        <input
          className="fr-input"
          type={type}
          id={id}
          required={isRequired}
          autoComplete={autoComplete}
          pattern={pattern}
          onChange={onChange}
          list={list}
          min={min}
          readOnly={readOnly}
          name={id}
          value={value?.trim()}
          aria-busy={ariaBusy}
          data-testid={testId}
        />
        {isLoading && (
          <div className="fr-input-spinner" aria-hidden="true">
            <div className="fr-spinner fr-spinner--sm" aria-label="Chargement..."></div>
          </div>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  onChange: PropTypes.func,
  list: PropTypes.string,
  min: PropTypes.string,
  readOnly: PropTypes.bool,
  isLoading: PropTypes.bool,
  ariaBusy: PropTypes.bool,
  value: PropTypes.string,
  testId: PropTypes.string,
};
