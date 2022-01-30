import axios from "axios";

export const getQueryVariable = variable => {
  const href = window.location.href;
  const query = href.substring(href.indexOf('?') + 1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return null;
};

export const getToken = () => {
  const token = getQueryVariable('token') || null;

  if (token) {
    sessionStorage.setItem('token', token);
  }
  return sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
};

const instance = axios.create({
  baseURL: process.env.VUE_APP_PATH_API,
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken()
  }
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


