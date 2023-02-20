<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <span class="display-1">
        401
      </span>
      <div class="mb-4 lead">
        Anauthorized! Access to this resouce is denied.
      </div>
      <router-link to="/home" class="btn btn-link">Back to Home</router-link>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "NotAuthorised",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>