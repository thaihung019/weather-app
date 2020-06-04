import {
  GET_WEATHER_BY_WOEID,
  GET_WEATHER_BY_WOEID_FAIL,
  GET_WEATHER_BY_WOEID_SUCCESS,
  SEARCH_CITY,
  SEARCH_CITY_FAIL,
  SEARCH_CITY_SUCCESS
} from './actionTypes';

const initialState = {
  cities: [],
  searching: false,
  searchError: null,
  weatherData: null,
  fetching: false,
  fetchError: null,
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        ...state,
        searching: true,
      };
    case SEARCH_CITY_SUCCESS:
      return {
        ...state,
        cities: action.data,
        searching: false,
      };
    case SEARCH_CITY_FAIL:
      return {
        ...state,
        searchError: action.error,
        searching: false,
      };
    case GET_WEATHER_BY_WOEID:
      return {
        ...state,
        fetching: true,
      };
    case GET_WEATHER_BY_WOEID_SUCCESS:
      return {
        ...state,
        weatherData: action.data,
        fetching: false,
      };
    case GET_WEATHER_BY_WOEID_FAIL:
      return {
        ...state,
        fetchError: action.error,
        fetching: false,
      };
    default:
      return {...state};
  }
}
