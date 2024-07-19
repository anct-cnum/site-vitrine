import React from 'react';
import PropTypes from 'prop-types';

export default function Badge({ children }) {
  return (
    <p className="fr-badge fr-badge--info fr-badge--no-icon">
      {children}
    </p>
  );
}

Badge.propTypes = {
  children: PropTypes.node,
};
