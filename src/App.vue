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

  <div class="navbar-nav ms-auto">
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
</nav>

<div class="container">
  <router-view />
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.link {
  margin: 10px;
}


</style>
