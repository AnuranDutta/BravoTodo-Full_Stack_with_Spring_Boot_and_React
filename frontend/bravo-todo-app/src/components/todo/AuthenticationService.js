import axios from "axios";
import { API_URL } from "../../Constants";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {
  //for Basic Auth start
  executeBasicAuthenticationService(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password);
    return axios.get(`${API_URL}/basicauth`, {
      headers: { authorization: basicAuthHeader},
    });
  }  
  
  createBasicAuthToken(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }
  
  registerSuccessfulLogin(username, password) {
    let basicAuthHeader = this.createBasicAuthToken(username, password);
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }
  //for Basic Auth end

  //for JWT start
  executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL}/authenticate`, {
      username,
      password
    });
  }

  createJWTToken(jwtToken) {
    return "Bearer " + jwtToken;
  }
  
  registerSuccessfulLoginForJwt(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    let jwtToken = this.createJWTToken(token);
    this.setupAxiosInterceptors(jwtToken);
  }
  //for JWT end
  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    return user;
  }

  setupAxiosInterceptors(token) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = token;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
