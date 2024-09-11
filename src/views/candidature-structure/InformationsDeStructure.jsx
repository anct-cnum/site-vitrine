import React, { useEffect } from 'react';
import Input from '../../components/commun/Input';
import CompanyFinder from './CompanyFinder';
import BoutonRadio from '../../components/commun/BoutonRadio';
import { useEntrepriseFinder } from './useEntrepriseFinder';
import proptypes from 'prop-types';
const TAILLE_SIRET = 14;
const TAILLE_RIDET = [6, 7];
const TAILLES_POSSIBLES = [...TAILLE_RIDET, TAILLE_SIRET];

export default function InformationsDeContact({ setGeoLocation, geoLocation }) {
  const {
    entreprise,
    search,
    getAddressSuggestions,
    addressSuggestions,
    loading,
    addressLoading,
    clearEntrepriseData
  } = useEntrepriseFinder(geoLocation, setGeoLocation);

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
    const numericValue = value.replace(/\D/g, '');
    if (TAILLES_POSSIBLES.includes(numericValue.length)) {
      search(numericValue);
    } else {
      clearEntrepriseData();
    }
  };
  
  const handleAdresseChange = event => {
    if (entreprise?.isRidet) {
      getAddressSuggestions(event.target.value);
    }
  };

  const handleSuggestionClick = suggestion => {
    document.getElementById('adresse').value = suggestion.label;
    setGeoLocation(suggestion.geometry);
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
        name="denomination"
        isLoading={loading}
      >
        Dénomination <span className="cc-obligatoire">*</span>
      </Input>
      <div className="adresse-container">
        <Input
          id="adresse"
          name="adresse"
          onChange={handleAdresseChange}
          readOnly={!entreprise?.isRidet}
          list="adresseSuggestions"
          isLoading={(entreprise && loading && !entreprise?.isRidet) || addressLoading}
        >
        Adresse <span className="cc-obligatoire">*</span>
        </Input>
        <div className="listeAdresses">
          <div className="adressesTrouvees">
            {addressSuggestions.map((suggestion, index) => (
              <div key={index} className="adresse" value={suggestion.label} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="fr-mb-3w cc-bold">
        Votre structure est <span className="cc-obligatoire">*</span>
      </p>
      <div className="fr-grid-row">
        <BoutonRadio id="commune" nomGroupe="typeStructure" value="commune">
          Une commune
        </BoutonRadio>
        <BoutonRadio id="intercommunalite" nomGroupe="typeStructure" value="intercommunalite">
          Un département
        </BoutonRadio>
        <BoutonRadio id="region" nomGroupe="typeStructure" value="region">
          Une région
        </BoutonRadio>
        <BoutonRadio id="etablissement" nomGroupe="typeStructure" value="etablissement">
          Un établissement public de coopération intercommunale
        </BoutonRadio>
        <BoutonRadio id="collectivite" nomGroupe="typeStructure" value="collectivite">
          Une collectivité à statut particulier
        </BoutonRadio>
        <BoutonRadio id="gip" nomGroupe="typeStructure" value="gip">
          Un GIP
        </BoutonRadio>
        <BoutonRadio id="structurePrivee" nomGroupe="typeStructure" value="structurePrivee">
          Une structure privée (association, entreprise de l&apos;ESS, fondations)
        </BoutonRadio>
      </div>
    </fieldset>
  );
}

InformationsDeContact.propTypes = {
  setGeoLocation: proptypes.func.isRequired,
  geoLocation: proptypes.object,
};
