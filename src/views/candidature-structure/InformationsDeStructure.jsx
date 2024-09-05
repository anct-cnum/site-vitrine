import React, { useEffect } from 'react';
import Input from '../../components/commun/Input';
import CompanyFinder from './CompanyFinder';
import BoutonRadio from '../../components/commun/BoutonRadio';
import { useEntrepriseFinder } from './useEntrepriseFinder';

export default function InformationsDeContact() {
  const { entreprise, search, getAddressSuggestions, addressSuggestions } = useEntrepriseFinder();

  useEffect(() => {
    if (entreprise) {
      document.getElementById('denomination').value = entreprise.nomStructure || '';
      if (!entreprise.isRidet) {
        document.getElementById('adresse').value = entreprise.adressStructure || '';
      } else {
        document.getElementById('adresse').value = '';
      }
    }
  }, [entreprise]);

  const handleSearch = value => {
    search(value);
  };
  const handleAdresseChange = event => {
    if (entreprise?.isRidet) {
      getAddressSuggestions(event.target.value);
    }
  };

  const handleSuggestionClick = suggestion => {
    document.getElementById('adresse').value = suggestion;
    getAddressSuggestions('');
  };
  return (
    <fieldset
      className="fr-border cc-section fr-p-3w fr-mb-3w"
      id="informations-de-structure"
    >
      <legend className="fr-h5">Vos informations de structure</legend>
      <hr />
      <CompanyFinder onSearch={handleSearch}/>
      <Input
        id="denomination"
      >
        Dénomination <span className="cc-obligatoire">*</span>
      </Input>
      <Input
        id="adresse"
        onChange={handleAdresseChange}
        readOnly={!entreprise?.isRidet}
        list="adresseSuggestions"
      >
        Adresse <span className="cc-obligatoire">*</span>
      </Input>
      <datalist id="adresseSuggestions">
        {addressSuggestions.map((suggestion, index) => (
          <option key={index} value={suggestion.label} onClick={handleSuggestionClick}>
            {suggestion.label}
          </option>
        ))}
      </datalist>
      <p className="fr-mb-3w cc-bold">
        Votre structure est <span className="cc-obligatoire">*</span>
      </p>
      <div className="fr-grid-row">
        <BoutonRadio id="commune" nomGroupe="typeStructure">
          Une commune
        </BoutonRadio>
        <BoutonRadio id="intercommunalite" nomGroupe="typeStructure">
          Un département
        </BoutonRadio>
        <BoutonRadio id="region" nomGroupe="typeStructure">
          Une région
        </BoutonRadio>
        <BoutonRadio id="etablissement" nomGroupe="typeStructure">
          Un établissement public de coopération intercommunale
        </BoutonRadio>
        <BoutonRadio id="collectivite" nomGroupe="typeStructure">
          Une collectivité à statut particulier
        </BoutonRadio>
        <BoutonRadio id="gip" nomGroupe="typeStructure">
          Un GIP
        </BoutonRadio>
        <BoutonRadio id="structurePrivee" nomGroupe="typeStructure">
          Une structure privée (association, entreprise de l’ESS, fondations)
        </BoutonRadio>
      </div>
    </fieldset>
  );
}
