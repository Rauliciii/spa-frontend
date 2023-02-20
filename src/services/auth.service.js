import { BASE_API_URL } from "@/common/constants";
import axios from "axios";

const API_URL = BASE_API_URL + "/api/authentication";
const config = {
  headers:{
    'Content-Type': 'application/json'
  }
};

class AuthService {

  login(username, password) {
    return axios.post(API_URL + "/sign-in", JSON.stringify({ username, password }), config);
  }

  register(name, username, password) {
    return axios.post(API_URL + "/sign-up", JSON.stringify({ username, password }), config);
  }


  // async login(email, password) {
  //     const res = await fetch("http://localhost:8080/api/authentication/sign-in", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  //     const user = await res.json();
  //     return user;
  // }

}

export default new AuthService();

    // async fetchUser() {
    //   const res = await fetch("http://localhost:8080/user");

    //   const user = await res.json();
    //   this.user = user;
    // },
    // async signUp(email, password) {
    //   const res = await fetch("http://localhost:8080/sing-up", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const user = await res.json()
    //   this.user = user;
    // },