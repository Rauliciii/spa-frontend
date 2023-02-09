<template>
<img class="logo" src="../assets/logo.png" />
<h1>Login Page</h1>
<div class="login">
  <input type="text" v-model="email" placeholder="Enter Email" />
  <input type="password" v-model="password" placeholder="Enter Password" />
  <button @click="login()">Login</button>
</div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log("Log me in:", this.email, " - ", this.password);
      const router = this.$router;
      router.push("/profile?email=" + this.email);
    }
  },
}
</script>

<style scoped>
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue
}

.login button {
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
