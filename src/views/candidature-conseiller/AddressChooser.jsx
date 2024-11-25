import React, { useState } from 'react';
import Input from '../../components/commun/Input';
import { useGeoApi } from './useGeoApi';
import { debounce } from './debounce';

export default function AddressChooser() {
  const { searchByName, villes } = useGeoApi();
  const [codeCommune, setCodeCommune] = useState('');

  return (
    <>
      <Input
        autoComplete= "off"
        id="lieuHabitation"
        list="resultatsRecherche"
        onChange={debounce(async event => {
          searchByName(event.target.value);
          const codeCommune = await villes.find(({ codesPostaux, nom }) =>
            (`${codesPostaux[0]} ${nom}`).toUpperCase() === (event.target.value).toUpperCase())?.code;
          setCodeCommune(codeCommune);
        })}
      >
        Votre lieu d’habitation <span className="cc-obligatoire">*</span>{' '}
        <span className="fr-hint-text">Saississez le nom ou le code postal de votre commune.</span>
      </Input>
      <Input type="hidden" id="lieuHabitationCodeCommune" value={codeCommune} testId="lieuHabitationCodeCommune-hidden"/>
      <datalist id="resultatsRecherche">
        {villes?.map(({ codesPostaux, nom }, key) => (
          <option value={`${codesPostaux[0]} ${nom}`} key={key}>
            {codesPostaux[0]} {nom}
          </option>
        ))}
      </datalist>
    </>
  );
}
