<template>
<div class="container mt-5">
  <div class="card ms-auto me-auto p-3 shadow-lg custom-card">

    <font-awesome-icon icon="user-circle" class="ms.auto me-auto user-icon" />

    <div v-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <form @submit.prevent="handleLogin" nonvalidate :class="submitted ? 'was-validated' : ''">
      <div class="form-group">
        <label for="username"> Username </label>
        <input v-model="formData.username" type="text" id="username" class="form-control" name="username" placeholder="Username" required>
        <div class="invalid-feedback">
          Username is required.
        </div>
      </div>

      <div class="form-group">
        <label for="password"> Password </label>
        <input v-model="formData.password" type="password" id="password" class="form-control" name="password" placeholder="Password" required>
        <div class="invalid-feedback">
          Password is required.
        </div>
      </div>

      <button class="btn btn-success w-100 mt-3" @click="submitted=true" :disable="loading">
        Sign In
      </button>

    </form>

    <router-link to="/register" class="btn btn-link" style="color:darkgray;">Create New Account!</router-link>

  </div>
</div>
</template>

<script>
import {
  useUserStore
} from "../../store/user.store";
import User from "@/models/user";

export default {
  name: "LoginView",
  setup() {
    const userStore = useUserStore();
    return {
      userStore
    };
  },
  data() {
    return {
      formData: new User(),
      loading: false,
      submitted: false,
      errorMessage: ""
    };
  },
  methods: {
    handleLogin() {
      console.log("Started Login");

      if (!this.formData.username || !this.formData.password) {
        return;
      }
      this.loading = true;

      this.userStore.signIn(this.formData).then(() => {
        console.log("Login Successful!")
        this.$router.push("/profile");

      }).catch((err) => {
        console.log("Fail!!")

        console.log(err);
        this.errorMessage = "Unexpected error";
      }).then(() =>
        this.loading = false
      );

    }

  }
};
</script>

<style lang="scss" scoped></style>
