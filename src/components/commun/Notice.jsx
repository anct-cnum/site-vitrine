import React from 'react';
import PropTypes from 'prop-types';

export default function Notice({ children }) {
  return (
    <div className="fr-notice cc-notice">
      <div className="fr-container">
        <div className="fr-notice__body">
          {children}
        </div>
      </div>
    </div>
  );
}

Notice.propTypes = {
  children: PropTypes.node,
};
