const BASE_API_URL = "http://localhost:3000";

export const FBI_API_ENDPOINTS = {
  WANTED_LIST: `${BASE_API_URL}/api/wanted`,
};

export const AUTH_ENDPOINTS = {
  LOGIN: `${BASE_API_URL}/auth/login`,
  SIGNUP: `${BASE_API_URL}/auth/signup`,
};

export default BASE_API_URL;
