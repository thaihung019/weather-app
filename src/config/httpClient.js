import axios from 'axios';
import { message } from 'antd';

const BASE_URL = 'http://localhost:8080';

export default class HttpClient {
  constructor(url) {
    const instance = axios.create({
      baseURL: BASE_URL + url,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    });

    // Can handle interceptors here
    instance.interceptors.request.use(
      (config) => {
        /*const authorization = storage.getLocalStorageItem(LOCAL_STORAGE_KEY.authorization);
        if (authorization) {
          config.headers.Authorization = `Bearer ${authorization.authToken}`;
        }*/
        config.headers.mode = 'no-cors';
        return config
      },
      (error) => throw Error(error),
    );
    instance.interceptors.response.use(
      (res) => res.data,
      (error) => {
        if (error.response) {
          const {status, data} = error.response;
          message.error(data.message);
          throw Error(JSON.stringify({status, data}));
        }
      },
    );
    this.request = instance;
  }

  get(url, params, options) {
    return this.request.get(url, {params, ...options});
  }

  post(url, data, options) {
    return this.request.post(url, data, options);
  }

  put(url, data, params, options) {
    return this.request.put(url, data, { params, ...options });
  }

  del(url, data, params, options) {
    return this.request.delete(url, {data, params, ...options});
  }
}
