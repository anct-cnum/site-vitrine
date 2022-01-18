import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import statistiquesReducer from './statistiquesReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  statistiques: statistiquesReducer,
});

export default rootReducer;
