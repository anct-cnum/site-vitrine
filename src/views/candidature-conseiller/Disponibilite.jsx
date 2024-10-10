import React from 'react';
import BoutonRadio from '../../components/commun/BoutonRadio';
import Datepicker from '../../components/commun/Datepicker';
import PropTypes from 'prop-types';

export default function Disponibilite({ setDateDisponibilite }) {
  const dateDuJour = new Date().toISOString().slice(0, 10);

  return (
    <fieldset className="fr-border cc-section fr-p-3w fr-mb-3w" id="votre-disponibilite">
      <legend className="fr-h5">Votre disponibilité</legend>
      <hr />
      <p className="fr-mb-3w cc-bold">
        À quel moment êtes-vous prêt(e) à démarrer votre mission et la formation de conseiller numérique ? <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">
        Accompagnement de personnes vers l’autonomie dans leurs usages de technologies, services et médias numériques.
      </p>
      <Datepicker id="dateDisponibilite" onChange={event => setDateDisponibilite(event.target.value)} min={dateDuJour}>
        Choisir une date
      </Datepicker>
      <hr />
      <p className="fr-mb-3w cc-bold">
        Pour un emploi et une formation de conseiller numérique, vous êtes prêt(e) à vous déplacer à : <span className="cc-obligatoire">*</span>
      </p>
      <p className="fr-text--sm fr-hint-text">Distance à partir de votre lieu d’habitation</p>
      <div className="fr-grid-row">
        <div className="fr-col-6">
          <BoutonRadio id="5" nomGroupe="distanceMax">
            5 km
          </BoutonRadio>
          <BoutonRadio id="10" nomGroupe="distanceMax">
            10 km
          </BoutonRadio>
          <BoutonRadio id="15" nomGroupe="distanceMax">
            15 km
          </BoutonRadio>
          <BoutonRadio id="20" nomGroupe="distanceMax">
            20 km
          </BoutonRadio>
        </div>
        <div className="fr-col-6">
          <BoutonRadio id="40" nomGroupe="distanceMax">
            40 km
          </BoutonRadio>
          <BoutonRadio id="100" nomGroupe="distanceMax">
            100 km
          </BoutonRadio>
          <BoutonRadio id="2000" nomGroupe="distanceMax">
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
