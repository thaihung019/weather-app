import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import weatherReducer from './weather/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  weather: weatherReducer,
})
