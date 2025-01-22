import { defineNuxtRouteMiddleware } from "nuxt/app";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const isAuthenticated = computed(() => authStore.isAuthenticated);
  const user = computed(() => authStore.user);

  if (!isAuthenticated.value || user.value?.role !== 'admin') {
    return navigateTo("/login");
  }
});
