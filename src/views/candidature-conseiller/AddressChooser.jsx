import React from 'react';
import Input from '../../components/commun/Input';
import { useGeoApi } from './useGeoApi';
import { debounce } from './debounce';
import PropTypes from 'prop-types';

export default function AddressChooser({ setCodeCommune }) {
  const { searchByName, villes } = useGeoApi();

  return (
    <>
      <Input
        id="lieuHabitation"
        list="resultatsRecherche"
        isRequired={false}
        onChange={debounce(event => {
          searchByName(event.target.value);
          const codeCommune = villes.find(({ codesPostaux, nom }) =>
            `${codesPostaux[0]} ${nom}` === event.target.value)?.code;
          setCodeCommune(codeCommune);
        })}
      >
        Votre lieu d’habitation <span className="fr-hint-text">Saississez le nom ou le code postal de votre commune.</span>
      </Input>
      <datalist id="resultatsRecherche">
        {villes.map(({ codesPostaux, code, nom }) => (
          <option value={`${codesPostaux[0]} ${nom}`} key={code}>
            {codesPostaux[0]} {nom}
          </option>
        ))}
      </datalist>
    </>
  );
}

AddressChooser.propTypes = {
  setCodeCommune: PropTypes.func
};
