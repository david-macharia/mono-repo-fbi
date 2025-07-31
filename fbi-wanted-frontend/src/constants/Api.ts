const backendPort = 3000;

const BASE_API_URL = `${window.location.protocol}//${window.location.hostname}:${backendPort}`;

export const FBI_API_ENDPOINTS = {
  WANTED_LIST: `${BASE_API_URL}/api/wanted`,
};

export const AUTH_ENDPOINTS = {
  LOGIN: `${BASE_API_URL}/auth/login`,
  SIGNUP: `${BASE_API_URL}/auth/signup`,
};

export default BASE_API_URL;
