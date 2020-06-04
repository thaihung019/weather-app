import { takeLatest, put, call, all } from 'redux-saga/effects';
import * as actions from './actions';
import { GET_WEATHER_BY_WOEID, SEARCH_CITY } from './actionTypes';

function* searchCity({ api }, { searchText }) {
  try {
    if (searchText.length === 0) {
      yield put(actions.searchCitySuccess([]));
    } else {
      const cities = yield call(api.weather.searchCity, searchText);
      yield put(actions.searchCitySuccess(cities.data));
    }
  } catch (e) {
    yield put(actions.searchCityFail(e.message));
  }
}

function* getWeatherByWoeid({ api }, { woeid }) {
  try {
    const result = yield call(api.weather.getWeatherDataByWoeid, woeid);
    yield put(actions.getWeatherByWoeidSuccess(result.data));
  } catch (e) {
    yield put(actions.getWeatherByWoeidFail(e.message));
  }
}

function weatherSaga(deps) {
  return function* saga() {
    yield all([
      takeLatest(SEARCH_CITY, searchCity, deps),
      takeLatest(GET_WEATHER_BY_WOEID, getWeatherByWoeid, deps),
    ]);
  };
}

export default weatherSaga;
