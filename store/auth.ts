import { defineStore } from "pinia";
import type { LoginPayload, User } from "~/types/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
    isAuthenticated: false,
  }),
  actions: {
    login(payload: LoginPayload): boolean {
      const { username, password } = payload;

      if (username === "admin" && password === "password") {
        this.user = { id: 1, username: "admin", role: "admin" };
        this.token = "mockToken123";
        this.isAuthenticated = true;
        return true;
      }

      return false;
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
    },
  },
});
