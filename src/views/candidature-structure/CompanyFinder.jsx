import React from 'react';
import Input from '../../components/commun/Input';
import { debounce } from '../candidature-conseiller/debounce';
import PropTypes from 'prop-types';

export default function CompanyFinder({ onSearch }) {
  const handleSearch = debounce(value => {
    onSearch(value);
  });

  return (
    <Input
      id="siretEntreprise"
      isRequired
      onChange={event => handleSearch(event.target.value)}
    >
      SIRET / RIDET <span className="cc-obligatoire">*</span>
    </Input>
  );
}

CompanyFinder.propTypes = {
  onSearch: PropTypes.func
};
