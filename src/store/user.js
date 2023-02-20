import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentUser: null,
    title : "Hello Title"
  }),
  getters: {
    getUser() {
      return this.currentUser;
    }
  },
  actions: {
    setUser(user) {
      this.currentUser = user;
    }
  },
});