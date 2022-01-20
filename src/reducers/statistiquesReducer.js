import dayjs from 'dayjs';

const initialState = {
  date: dayjs().add(-1, 'day').format('DD/MM/YYYY'), //stats du jour précédent sur le BDD anonymisée
  structuresMobilisees: 0,
  nbAccompagnements: 0
};

export default function statistiques(state = initialState, action) {
  switch (action.type) {
    case 'GET_HOME_STATS_REQUEST':
      return {
        ...state,
        error: false
      };
    case 'GET_HOME_STATS_SUCCESS':
      return {
        ...state,
        structuresMobilisees: action.stats?.nbStructures,
        nbAccompagnements: action.stats?.nbAccompagnements
      };
    case 'GET_HOME_STATS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
