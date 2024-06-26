import React from 'react';
import Checkbox from './Checkbox';

export default function SituationEtExperience() {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="situationEtExperience">
      <legend className="fr-h5">Votre situation et expérience</legend>
      <p className="fr-text--sm fr-hint-text">Les champs avec <span className="cc-obligatoire">*</span> sont obligatoires.</p>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Êtes-vous actuellement dans l’une des situations suivantes ? <span className="cc-obligatoire">*</span>
      </p>
      <Checkbox id="demandeurEmploi">
        Demandeur d’emploi
      </Checkbox>
      <Checkbox id="enEmploi">
        En emploi
      </Checkbox>
      <Checkbox id="enFormation">
        En formation
      </Checkbox>
      <Checkbox id="diplome">
        Diplômé dans le secteur de la médiation numérique (formation certifiante ou non)
      </Checkbox>
      <hr />
      <p className="fr-mb-3w cc-bold">
      Avez-vous une expérience professionnelle de médiation numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.</p>
      <div className="fr-fieldset__element">
        <div className="fr-radio-group">
          <input type="radio" id="oui" name="experienceProfessionnelle" required />
          <label className="fr-label" htmlFor="oui">
            Oui
          </label>
        </div>
      </div>
      <div className="fr-fieldset__element">
        <div className="fr-radio-group">
          <input type="radio" id="non" name="experienceProfessionnelle" required />
          <label className="fr-label" htmlFor="non">
            Non
          </label>
        </div>
      </div>
    </fieldset>
  );
}
