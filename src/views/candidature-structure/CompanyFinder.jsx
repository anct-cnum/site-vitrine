import React from 'react';
import Input from '../../components/commun/Input';
import { debounce } from '../candidature-conseiller/debounce';
import PropTypes from 'prop-types';

export default function CompanyFinder({ onSearch, errors }) {
  const handleSearch = debounce(value => {
    onSearch(value);
  });

  return (
    <Input
      id="siret"
      onChange={event => handleSearch(event.target.value)}
      pattern="^(?:[0-9]{7}|[0-9]{14})$"
      maxlength="14"
      error={errors.siret}
    >
      SIRET / RIDET <span className="cc-obligatoire">*</span> <span className="fr-hint-text">Format attendu : SIRET (12345678901234) ou RIDET (1234567)</span>
    </Input>
  );
}

CompanyFinder.propTypes = {
  onSearch: PropTypes.func,
  errors: PropTypes.object,
};
