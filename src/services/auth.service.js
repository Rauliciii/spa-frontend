import customAxios from './axios-mixin'

import {config} from './request.config'

const API_URL = "/authentication";

class AuthService {

  login(username, password) {
    return customAxios.post(API_URL + "/sign-in", JSON.stringify({ username, password }), config);
  }

  register(name, username, password) {
    return customAxios.post(API_URL + "/sign-up", JSON.stringify({ name, username, password }), config);
  }

  logout() {
    return customAxios.post(API_URL + "/sign-out");
  }

}


export default new AuthService();
