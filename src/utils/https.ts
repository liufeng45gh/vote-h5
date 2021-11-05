import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_PATH_API,
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    // 'Access-Control-Allow-Origin': '*',
    // 'access-control-allow-credentials': 'true'
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;
