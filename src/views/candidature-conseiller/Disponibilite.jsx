import React from 'react';
import BoutonRadio from './BoutonRadio';
import Datepicker from './Datepicker';
import PropTypes from 'prop-types';

export default function Disponibilite({ setDateDisponibilite }) {
  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votreDisponibilite">
      <legend className="fr-h5">Votre disponibilité</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        À quel moment êtes-vous prêt(e) à démarrer votre mission et la formation de conseiller numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">
        Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.
      </p>
      <Datepicker id="choisir-date" onChange={event => setDateDisponibilite(event.target.value)}>
        Choisir une date
      </Datepicker>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Pour un emploi et une formation de conseiller numérique, vous êtes prêt(e) à vous déplacer à : <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">Distance à partir de votre lieu d’habitation</p>
      <div className="fr-grid-row">
        <div className="fr-col-6">
          <BoutonRadio id="5km" nomGroupe="distanceDomicile">
            5 km
          </BoutonRadio>
          <BoutonRadio id="10km" nomGroupe="distanceDomicile">
            10 km
          </BoutonRadio>
          <BoutonRadio id="15km" nomGroupe="distanceDomicile">
            15 km
          </BoutonRadio>
          <BoutonRadio id="20km" nomGroupe="distanceDomicile">
            20 km
          </BoutonRadio>
        </div>
        <div className="fr-col-6">
          <BoutonRadio id="40km" nomGroupe="distanceDomicile">
            40 km
          </BoutonRadio>
          <BoutonRadio id="100km" nomGroupe="distanceDomicile">
            100 km
          </BoutonRadio>
          <BoutonRadio id="France entière" nomGroupe="distanceDomicile">
            France entière
          </BoutonRadio>
        </div>
      </div>
    </fieldset>
  );
}

Disponibilite.propTypes = {
  setDateDisponibilite: PropTypes.func,
};
