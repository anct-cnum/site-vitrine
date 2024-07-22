import React, { useState } from 'react';
import Input from './Input';
import { useGeoApi } from './useGeoApi';

export default function AddressChooser() {
  const { fetchVilles } = useGeoApi();
  const [villes, setVilles] = useState([]);

  const onSearch = async event => {
    const resultat = await fetchVilles(event.target.value);
    setVilles(resultat);
  };

  return (
    <>
      <Input
        id="lieuHabitation"
        list="resultatsRecherche"
        isRequired={false}
        onChange={onSearch}
      >
        Votre lieu d’habitation <span className="fr-hint-text">Saississez le nom ou le code postal de votre commune.</span>
      </Input>
      <datalist id="resultatsRecherche">
        {(villes || []).map(({ code, nom }) => (
          <option value={`${code} ${nom}`} key={code}>{code} {nom}</option>
        ))}
      </datalist>
    </>
  );
}
