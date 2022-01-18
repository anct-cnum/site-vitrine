import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statistiquesActions } from '../../actions';

function Statistiques() {
  const dispatch = useDispatch();
  const date = useSelector(state => state.statistiques?.date);
  const structures = useSelector(state => state.statistiques?.structures);
  const cras = useSelector(state => state.statistiques?.cras);
  
  useEffect(() => {
    dispatch(statistiquesActions.getStatistiques());
  });

  return (
    <div className="statistiques fr-py-12w fr-mb-8w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12 center">
            <h2 className="fr-h1 fr-mb-0" id="ancre-statistiques">
                Les chiffres cl&eacute;s du dispositif<br/> Conseiller num&eacute;rique France Services
            </h2>
          </div>
          <div className="fr-col-12 center baseline-maj fr-mt-n2w fr-mb-6w">Données actualisées le {date}</div>
          <div className="fr-col-sm-4 center">
            <div className="nombre fr-mb-3w">{structures}</div>
            <div className="texte">structures mobilisées<br/> pour vous sur l’ensemble du <br/>territoire</div>
          </div>
          <div className="fr-col-sm-4 center">
            <div className="nombre fr-mb-3w">4 000</div>
            <div className="texte">conseillers numériques disponibles<br/> pour vous accompagner vers l’autonomie<br/> dans l’usage du numérique </div>
          </div>
          <div className="fr-col-sm-4 center">
            <div className="nombre fr-mb-3w">{cras}</div>
            <div className="texte">accompagnements ont déjà été réalisés<br/> dans le cadre de ce dispositif</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistiques;
