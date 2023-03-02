<template>
<div class="container">
  <div class="pt-5">
    <div class="alert alert-danger" v-if="errorMessage">
      {{ errorMessage }}
    </div>

    <div class="card">
      <div class="card-header">

        <div class="row">
          <div class="col-6">
            <h3>All Submissions</h3>
          </div>

          <div class="col-6 text-end">
            <button class="btn btn-primary" @click="createDeviceRequest">
              Create Submission
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="clol">#</th>
              <th scope="clol">Name</th>
              <th scope="clol">Price</th>
              <th scope="clol">Type</th>
              <th scope="clol">Date</th>
              <th scope="clol">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ item.name }}</td>
              <td>{{ `$ ${item.price}` }}</td>
              <td>{{ item.type }}</td>
              <td> {{ new Date(item.createTime).toLocaleDateString() }}</td>
              <td>
                <button class="btn btn-primary me-1">Edit</button>
                <button class="btn btn-danger" @click="handleDelete(item, i)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<DetailsComponent ref="deviceModal" />
</template>

<script>
import DetailsComponent from '../DetailsComponent.vue';
import { storeToRefs } from 'pinia';
import {
  useUserStore
} from '@/store/user.store';
import {useItemsStore} from '@/store/items.store'

export default {
  name: "SubmissionsView",
  components: {
    DetailsComponent
  },
  setup() {
    const userStore = useUserStore();
    const itemsStore = useItemsStore();

    const {items} = storeToRefs(itemsStore);

    return {
      userStore,
      itemsStore,
      items
    };
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  methods: {
    createDeviceRequest() {
      console.log("Create Device!");
    },

    handleDelete(submission, index) {
      console.log("delete");
      this.itemsStore.deleteItem(submission, index)
      .then(() => {
      }).catch(err => {
        this.errorMessage = 'Unexpected error occured.'
        console.log(err);
      })
    },

  },
  mounted() {
    this.itemsStore.fillItems();
  }
};
</script>

<style lang="scss" scoped></style>