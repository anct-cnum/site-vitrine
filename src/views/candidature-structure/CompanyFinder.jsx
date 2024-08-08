import React from 'react';
import Input from '../../components/commun/Input';
import { useSiretApi } from './useSiretApi';
import { debounce } from '../candidature-conseiller/debounce';

export default function CompanyFinder() {
  const { search, entreprise } = useSiretApi();

  return (
    <>
      <Input
        id="siretEntreprise"
        isRequired={false}
        onChange={debounce(event => search(event.target.value))}
        placeholder="N° SIRET / RIDET"
      />
      {entreprise}
    </>
  );
}
