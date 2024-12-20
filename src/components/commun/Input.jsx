import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  children,
  id,
  isRequired = true,
  autoComplete = 'on',
  testId = '',
  type = 'text',
  pattern,
  onChange,
  list,
  min,
  disabled,
  isLoading,
  ariaBusy,
  value,
  maxlength,
  error,
}) {
  return (
    <div className="fr-fieldset__element">
      <div className={`fr-input-group${error ? ' fr-input-group--error' : ''}`}>
        <label className="fr-label" htmlFor={id}>{children}</label>
        <input
          className="fr-input"
          type={type}
          id={id}
          required={isRequired}
          autoComplete={autoComplete}
          pattern={pattern}
          maxLength={maxlength}
          onChange={onChange}
          list={list}
          min={min}
          disabled={disabled}
          name={id}
          value={value}
          aria-busy={ariaBusy}
          data-testid={testId}
        />
        {isLoading && (
          <div className="fr-input-spinner" aria-hidden="true">
            <div className="fr-spinner fr-spinner--sm" aria-label="Chargement..."></div>
          </div>
        )}
        {error && (
          <p id="text-input-error-desc-error" className="fr-error-text">
            {error}
          </p>
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
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  ariaBusy: PropTypes.bool,
  value: PropTypes.string,
  testId: PropTypes.string,
  maxlength: PropTypes.string,
  error: PropTypes.string
};
