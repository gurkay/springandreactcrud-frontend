import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

const baseURL = "http://localhost:8080/api/v1/";

export const _axios: AxiosInstance = axios.create({
  baseURL,
});

const configure = () => {
  _axios.interceptors.request.use(
    async (config: AxiosRequestConfig<any>) => {
      return config;
    }
  );
};

const getAxiosClient = (): AxiosInstance => _axios;

const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
};

export default HttpService;