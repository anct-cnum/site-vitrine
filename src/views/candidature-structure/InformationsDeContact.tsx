import React from "react";
import Input from "../../components/commun/Input";
import CompanyFinder from "./CompanyFinder";
import BoutonRadio from "../../components/commun/BoutonRadio";

export default function InformationsDeContact() {
  return (
    <fieldset
      className="fr-border cc-section fr-p-3w fr-mb-3w"
      id="informationsDeContact"
    >
      <legend className="fr-h5">Vos informations de structure</legend>
      <hr />
      <CompanyFinder />
      <Input 
        id="denomination"
      >
        Dénomination <span className="cc-obligatoire">*</span>
      </Input>
      <Input 
        id="adresse"
      >
        Adresse <span className="cc-obligatoire">*</span>
      </Input>
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
          Une structure privée (association, entreprise de l'ESS, fondations)
        </BoutonRadio>
      </div>
    </fieldset>
  );
}
