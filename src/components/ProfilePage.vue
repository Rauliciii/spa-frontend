<template>
<h1>Profile Page</h1>
<div class="user-details">
  <h2> Welcome, {{getCurrentUser()}}</h2>
  <!-- <p>id:{{ user.id }}</p>
  <p>email:{{ user.email }}</p>
  <p>name:{{ user.name }}</p>
  <p>role:{{ user.role }}</p>
  <p>token:{{ user.token }}</p> -->
</div>
</template>

<script>
import {
  useUserStore
} from "../store/user";
export default {
  name: "ProfilePage",
  setup() {
    const userStore = useUserStore();
    return {
      userStore
    };
  },

  methods: {
    getCurrentUser() {
      if (this.userStore.currentUser != null && this.userStore.currentUser.username!= null) {
        return this.userStore.currentUser.username;
      } else {
        return "not logged in";
      }
    }
  }
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
