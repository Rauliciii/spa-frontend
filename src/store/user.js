import authService from "@/services/auth.service";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    title : "Hello Title"
  }),
  getters: {
    loggedIn: (state) => state.user != null,
    currentUser: (state) => state.user,
    currentUserName: (state) =>  {
      if (state.currentUser) {
        return state.user.username;
      } else {
        return "";
      }
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
    },

    async signIn(userForm) {
      const response = await authService.login(userForm.username, userForm.password);
      this.user = response.data;
      return response;
    },

    signOut() {
      this.user = null;
    }
  },
});