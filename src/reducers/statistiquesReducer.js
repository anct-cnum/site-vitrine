import dayjs from 'dayjs';

const initialState = {
  date: dayjs(new Date()).format('DD/MM/YYYY'),
  structuresMobilisees: 0,
  nbAccompagnements: 0
};

export default function statistiques(state = initialState, action) {
  switch (action.type) {
    case 'GET_STATISTIQUES':
      return {
        ...state
      };
    default:
      return state;
  }
}
