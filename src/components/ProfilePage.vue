<template>
<h1>Profile Page</h1>
<h2> Welcome, {{getCurrentUser()}}</h2>
</template>

  
<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      user : ""
    }
  },
  methods: {
    getCurrentUser() {
      const userName = this.$route.query.username;
      this.user = userName;
      return userName;
    }
  }
}
</script>

  
<style scoped>
h2 {
  color: orange
}
</style>
