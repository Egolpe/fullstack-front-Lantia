import axios from "axios";

const storedUser = JSON.parse(localStorage.getItem("currentUser"));

let accessToken = (storedUser && storedUser.accessToken) || null;

axios.interceptors.request.use(
  function(config) {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    if (response.data.accessToken) {
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      accessToken = response.data.accessToken;
    }
    return response;
  },
  function(error) {
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config.url.includes("/login")
    ) {
      localStorage.removeItem("currentUser");

      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export function signIn(loginData) {
  return axios.post(`http://127.0.0.1:8000/api/auth/login`, loginData);
}

export function signUp(registerData) {
  return axios.post(
    `http://127.0.0.1:8000/api/auth/signUp`,
    registerData
  );
}