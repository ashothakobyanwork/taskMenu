import axios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';

const API_URL = 'http://localhost:1337';

export class Api {
  static instance: Api;

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 30000,
      baseURL: API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static request<T = unknown>(config: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().request(config);
  }
}
