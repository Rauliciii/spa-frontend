<template>
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <a href="https://vuejs.org" class="navbar-brand ms-1">
    <img src="./assets/logo.png" height="40" /> EUROPOL |
  </a>

  <div class="navbar-nav me-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/admin" active-class="active">
        Admin
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/home" active-class="active">
        Home
      </router-link>
    </li>
  </div>

  <div class="navbar-nav ms-auto" v-if="!currentUser">
    <li class="nav-item">
      <router-link class="nav-link" to="/register" active-class="active">
        Sign Up
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/login" active-class="active">
        Sign In
      </router-link>
    </li>
  </div>

  <div class="navbar-nav ms-auto" v-if="currentUser">
    <li class="nav-item">
      <router-link class="nav-link" to="/profile" active-class="active">
        {{ currentUser.username }}
      </router-link>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link" @click="handleLogout">
        Log Out
      </a>
    </li>
  </div>
</nav>

<div class="container">
  <router-view />
</div>
</template>

<script>
import {
  storeToRefs
} from 'pinia';
import {
  useRouter
} from 'vue-router';
import Role from './models/role';
import {
  useUserStore
} from './store/user'

export default {
  name: 'App',
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const {
      loggedIn,
      currentUser
    } = storeToRefs(userStore);

    function handleLogout() {
      userStore.signOut();
      router.push("/login");
    }

    function isAdmin() {
      return this.currentUser?.role === Role.ADMIN;
    }

    return {
      loggedIn,
      currentUser,
      userStore,
      handleLogout,
      isAdmin
    }
  }
}
</script>

<style>
.link {
  margin: 10px;
}
</style>
