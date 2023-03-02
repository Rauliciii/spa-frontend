<template>
<div class="modal fade" id="submissionModal" tabIndex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <h5 class="modal-title">
            Submission Details
          </h5>
          <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body"></div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
            Close
          </button>
          <button class="btn btn-primary" type="submit" @click="submitted=true">
            Save Changes
          </button>

        </div>

      </form>
    </div>
  </div>
</div>
</template>

<script>
import Submission from "@/models/submission";
import SubmissionType from "@/models/submission-type";
import submissionService from "@/services/submission.service";
import $ from "jquery";

export default {
  name: "DetailsComponent",
  created() {},
  data() {
    return {
      submission: new Submission(),
      errorMessage: "",
      submitted: false,
      deviceTypes: [
        SubmissionType.LAPTOP,
        SubmissionType.DESKTOP,
        SubmissionType.PHONE,
        SubmissionType.TABLET,
      ],
    };
  },
  props: {},
  methods: {
    saveDevice() {
      submissionService
        .save(this.submission)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
          this.errorMessage = "Unexpected error occured.";
        });
      },

      showModal() {
        $('#submissionModal').modal('show');
      }
  },
};
</script>

<style lang="scss" scoped></style>
