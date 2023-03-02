<template>
<div class="container mt-5">
  <div class="card ms-auto me-auto p-3 shadow-lg custom-card">

    <font-awesome-icon icon="user-circle" class="ms.auto me-auto user-icon" />

    <div v-if="errorMessage" class="alert alert-danger">
      {{ errorMessage }}
    </div>

    <form @submit.prevent="handleRegister" nonvalidate :class="submitted ? 'was-validated' : ''">
      <!-- needed by bootstrap -->

      <div class="form-group">
        <label for="name"> Full Name </label>
        <input v-model="formData.name" type="text" id="name" class="form-control" name="name" placeholder="Full Name" required>
        <div class="invalid-feedback">
          Full name is required.
        </div>
      </div>

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
        Sign Up
      </button>

    </form>

    <router-link to="/login" class="btn btn-link" style="color:darkgray;">I have an Account!</router-link>

  </div>
</div>
</template>

<script>
import {
  useUserStore
} from "../../store/user.store";
import User from "@/models/user";
import authService from "@/services/auth.service";

export default {
  name: "RegisterView",
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
    handleRegister() {
      console.log("I HANDLE REGISTER!");
      console.log(this.formData);

      if (!this.formData.username || !this.formData.password || !this.formData.name) {
        return;
      }
      this.loading = true;

      authService.register(this.formData.name, this.formData.username, this.formData.password)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          if (err?.response.status === 409) {
            this.errorMessage = "Username is not valid.";
          } else {
            this.errorMessage = "Unexpected Error occured!";
          }
        }).then(() => this.loading = false);

    }
  },
  mounted() {
    //session-user
    if (this.userStore.currentUser != null && this.currentUser.username != null) {
      this.$router.push("profile");
    }
  }
};
</script>

<style scoped>

</style>
