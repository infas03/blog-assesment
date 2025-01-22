import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const isAuthenticated = computed(() => authStore.isAuthenticated);

  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }
});
