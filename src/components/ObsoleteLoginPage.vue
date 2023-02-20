<template>
<div class="login-page">
  <img class="logo" src="../assets/logo.png" />
  <h1>Login Page</h1>
  <div class="login-form">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="login()">Login</button>
  </div>
</div>
</template>

<script>
import {
  useUserStore
} from "../store/user";

export default {
  name: 'LoginPage',
  setup() {
    const userStore = useUserStore();
    return {
      userStore
    };
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async login() {
      console.log("Log me in:", this.email, " - ", this.password);
      await this.userStore.login(this.email, this.password)
      this.$router.push("profile");
    }
  },
}
</script>

<style scoped>
.login-page {
  text-align: center;
}

.login-form input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue
}

.login-form button {
  width: 320px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  cursor: pointer;
}

.logo {
  width: 100px;
}

h1 {
  color: black
}
</style>
