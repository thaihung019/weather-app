import {
  GET_WEATHER_BY_WOEID,
  GET_WEATHER_BY_WOEID_FAIL,
  GET_WEATHER_BY_WOEID_SUCCESS,
  SEARCH_CITY,
  SEARCH_CITY_FAIL,
  SEARCH_CITY_SUCCESS
} from './actionTypes';

export function searchCity(searchText) {
  return ({ type: SEARCH_CITY, searchText });
}
export function searchCitySuccess(data) {
  return ({ type: SEARCH_CITY_SUCCESS, data });
}
export function searchCityFail(error) {
  return ({ type: SEARCH_CITY_FAIL, error });
}

export function getWeatherByWoeid(woeid) {
  return ({ type: GET_WEATHER_BY_WOEID, woeid });
}
export function getWeatherByWoeidSuccess(data) {
  return ({ type: GET_WEATHER_BY_WOEID_SUCCESS, data });
}
export function getWeatherByWoeidFail(error) {
  return ({ type: GET_WEATHER_BY_WOEID_FAIL, error });
}

