import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statistiquesActions } from '../../actions';

function Statistiques() {
  const dispatch = useDispatch();
  const date = useSelector(state => state.statistiques?.date);
  const structuresMobilisees = useSelector(state => state.statistiques?.structuresMobilisees);
  const nbAccompagnements = useSelector(state => state.statistiques?.nbAccompagnements);

  useEffect(() => {
    dispatch(statistiquesActions.getHomeStats());
  });

  return (
    <div className="statistiques fr-py-12w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div className="fr-col-12 center">
            <h1 className="fr-h1 fr-mb-3w" id="ancre-statistiques">
                Les chiffres cl&eacute;s du dispositif<br/> Conseiller num&eacute;rique France Services
            </h1>
          </div>
          <div className="fr-col-12 center baseline-maj fr-mb-5w">Donn&eacute;es actualis&eacute;es le {date}</div>
          <div className="fr-col-sm-4 center">
            <h1 className="fr-h1 fr-mb-3w">{structuresMobilisees?.toLocaleString('fr-FR')}</h1>
            <div className="texte">
              structures mobilis&eacute;es<br/> pour vous sur l&rsquo;ensemble du <br/>territoire
            </div>
          </div>
          <div className="fr-col-sm-4 center">
            <h1 className="fr-h1 fr-mb-3w">4&nbsp;000</h1>
            <div className="texte">
              conseillers num&eacute;riques disponibles<br/> pour vous accompagner vers l&rsquo;autonomie<br/>
              dans l&rsquo;usage du num&eacute;rique
            </div>
          </div>
          <div className="fr-col-sm-4 center">
            <h1 className="fr-h1 fr-mb-3w">{nbAccompagnements?.toLocaleString('fr-FR')}</h1>
            <div className="texte">
              accompagnements ont d&eacute;j&agrave; &eacute;t&eacute; r&eacute;alis&eacute;s<br/>
              dans le cadre de ce dispositif
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistiques;
