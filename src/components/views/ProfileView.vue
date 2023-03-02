<template>
<h1>Profile Page</h1>
<div class="user-details">
  <h2> Welcome, {{getUsername()}}</h2>

  <div class="container">
    <div class="card ms-auto me-auto p-3 shadow-lg custom-card">

      <font-awesome-icon icon="user-circle" class="ms.auto me-auto user-icon" />
      <h3>Id: {{ getUserId() }}</h3>
      <h3>Name: {{ getName() }}</h3>
      <h3>Username: {{ getUsername() }}</h3>
      <h3>Role: {{ getUserRole() }}</h3>

    </div>
  </div>

</div>
</template>

<script>
import {
  useUserStore
} from "../../store/user.store";
export default {
  name: "ProfileView",

  setup() {
    const userStore = useUserStore();
    return {
      userStore
    };
  },

  methods: {
    getUsername() {
      if (this.userStore.currentUser != null && this.userStore.currentUser.username != null) {
        return this.userStore.currentUser.username;
      } else {
        return "not logged in";
      }
    },

    getUserRole() {
      if (this.userStore.currentUser != null && this.userStore.currentUser.role != null) {
        return this.userStore.currentUser.role;
      } else {
        return "";
      }
    },

    getUserId() {
      if (this.userStore.currentUser != null && this.userStore.currentUser.id != null) {
        return this.userStore.currentUser.id;
      } else {
        return "";
      }
    },

    getName() {
      if (this.userStore.currentUser != null && this.userStore.currentUser.name != null) {
        return this.userStore.currentUser.name;
      } else {
        return "";
      }
    }
  },
}
</script>

<style scoped>
h2 {
  color: orange
}

.user-details {
  text-align: left;
  margin-left: 100px;
}
</style>
