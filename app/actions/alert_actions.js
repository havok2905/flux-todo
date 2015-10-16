import AppDispatcher from '../dispatcher/app_dispatcher';

let AlertActions = {
  incrementAlerts: (todo) => {
    AppDispatcher.dispatch({ actionType: 'INCREMENT_ALERTS' });
  },
  decrementAlerts: (uid) => {
    AppDispatcher.dispatch({ actionType: 'DECREMENT_ALERTS' });
  }
};

export default AlertActions;
