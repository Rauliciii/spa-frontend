<template>
<nav class="navbar navbar-expand navbar-dark bg-dark">
  <router-link class="nav-link" to="/" active-class="active">
    <img src="./assets/europol-logo-white.png" height="15" class="margin-horizontal"/>  
  </router-link>

  <div class="navbar-nav me-auto">
    <li class="nav-item">
      <router-link class="nav-link" to="/submissions" active-class="active"  v-if="currentUser">
        Submissions
      </router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/home" active-class="active"  v-if="!currentUser">
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
      <router-link class="nav-link margin-horizontal" to="/login" active-class="active">
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
} from './store/user.store'

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
.margin-horizontal {
  margin-left: 12px;
  margin-right: 12px;
}

</style>
