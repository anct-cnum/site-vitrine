import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ children, titre }) {
  return (
    <div className="fr-alert fr-alert--error">
      <h3 className="fr-alert__title">{titre}</h3>
      <p>{children}</p>
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  titre: PropTypes.string,
};

