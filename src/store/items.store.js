import submissionService from "@/services/submission.service";
import { defineStore } from "pinia";

export const useItemsStore = defineStore("items", {
  state: () => ({
    items: [],
  }),
  getters: {

    getItems : (state) => {
      return state.items;
    }

  },
  actions: {

    addItem(item) {
      this.items.push(item);
    },

    async deleteItem(item, index) {
      const response = submissionService.delete(item);
      this.items.splice(index, 1);
      return response;
    },

    async fillItems() {
      submissionService.findAll()
      .then(response => {
        console.log(response.data)
        this.items = response.data;
      })
      .catch(err => {
        console.error(err);
      });
    },

  },
});