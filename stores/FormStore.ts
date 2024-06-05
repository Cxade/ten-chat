import { defineStore } from "pinia";

export const useFormStore = defineStore("formStore", {
  state: () => ({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }),
  actions: {
    clearPassword() {
      this.password = "";
      this.confirmPassword = "";
    },
    clearAll() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
  },
});
