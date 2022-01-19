import dayjs from 'dayjs';

const initialState = {
  date: dayjs(new Date()).format('DD/MM/YYYY'),
  structures: '2 934',
  cras: '77 609'
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
