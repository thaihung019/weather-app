import { bind } from 'decko';
import BaseApi from './baseApi';

export default class WeatherApi extends BaseApi {
  @bind
  async searchCity(searchText) {
    return await this.http.get('/city/' + searchText);
  }

  @bind
  async getWeatherDataByWoeid(woeid) {
    return await this.http.get('/weather/' + woeid);
  }
}
