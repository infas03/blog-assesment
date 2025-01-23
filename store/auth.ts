import { defineStore } from "pinia";
import type { LoginPayload, User } from "~/types/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
    isAuthenticated: false,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async login(payload: LoginPayload) {
      const { username, password } = payload;
      this.loading = true;

      try {
        this.loading = true;
        const { $api } = useNuxtApp();
        const user = await $api.get(`/users?username=${username}`);
        if (username === user?.[0]?.username && password === user?.[0]?.password) {
          this.user = user?.[0];
          this.token = "mockToken123";
          this.isAuthenticated = true;
          return true;
        } else {
          return false;
        }

      } catch (error: any) {
        this.error = error.message || 'Failed to fetch posts';
        return false;
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
    },
  },
  persist: {
    key: "auth",
    storage: piniaPluginPersistedstate.localStorage(),
  }
});
