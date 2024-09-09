import React from 'react';
import Input from '../../components/commun/Input';
import { useGeoApi } from './useGeoApi';
import { debounce } from './debounce';

export default function AddressChooser() {
  const { searchByName, villes } = useGeoApi();

  return (
    <>
      <Input
        id="lieuHabitation"
        list="resultatsRecherche"
        isRequired={false}
        onChange={debounce(event => searchByName(event.target.value))}
      >
        Votre lieu d’habitation <span className="fr-hint-text">Saississez le nom ou le code postal de votre commune.</span>
      </Input>
      <datalist id="resultatsRecherche">
        {villes.map(({ code, nom }) => (
          <option value={`${code} ${nom}`} key={code}>
            {code} {nom}
          </option>
        ))}
      </datalist>
    </>
  );
}
