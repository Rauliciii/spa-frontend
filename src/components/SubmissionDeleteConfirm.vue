<template>
<div></div>
<div class="modal fade" id="deleteModal" tabIndex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title"> </h5>
        <button class="btn-close" type="button" data-bs-dismiss="modal">
          
        </button>
      </div>

      <div class="modal-body">
        Are you sure to delete this selected submission?
      </div>

      <div class="modal-footer">
      <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
      Cancel
      </button>

      <button class="btn-btn-danger" @click="handleDelete()" type="button">
        I'm sure
      </button>

      </div>


    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  name: "SubmissionDeleteConfirm",
  methods: {

    showDeleteModal() {
      $('#deleteModal').modal('show');
    },

    handleDelete() {
      this.$emit('confirmed');
      $('#deleteModal').modal('hide');
    }

  },
};
</script>

<style lang="scss" scoped></style>
