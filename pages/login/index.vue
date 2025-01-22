<template>
  <div class="flex items-center justify-center">
    <LoginForm :onLogin="handleLogin" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import LoginForm from "~/components/auth/LoginForm.vue";
import { useAuthStore } from "@/store/auth";
import type { LoginPayload } from "~/types/auth";

const authStore = useAuthStore();
const router = useRouter();

const handleLogin = (payload: LoginPayload): boolean => {
  const success = authStore.login(payload);
  if (success) {
    router.push("/");
  }
  return success;
};
</script>
