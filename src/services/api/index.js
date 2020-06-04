import HttpClient from '../../config/httpClient';
import WeatherApi from './weather';

export default class Api {
  constructor() {
    this.http = new HttpClient('/');

    this.weather = new WeatherApi(this.http);
  }
}
