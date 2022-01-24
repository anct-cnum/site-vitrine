import { statistiquesService } from '../services/statistiques.service';

export const statistiquesActions = {
  getHomeStats
};

function getHomeStats() {
  return dispatch => {
    dispatch(request());

    statistiquesService.getHomeStats()
    .then(
      stats => {
        dispatch(success(stats));
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function request() {
    return { type: 'GET_HOME_STATS_REQUEST' };
  }
  function success(stats) {
    return { type: 'GET_HOME_STATS_SUCCESS', stats };
  }
  function failure(error) {
    return { type: 'GET_HOME_STATS_FAILURE', error };
  }
}
