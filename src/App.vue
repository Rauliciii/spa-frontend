<template>
  <router-link class="link" to="/">Login Page</router-link> 
  <router-link class="link" to="/profile">Profile Page</router-link> <br/>
<router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

.link {
  margin: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
