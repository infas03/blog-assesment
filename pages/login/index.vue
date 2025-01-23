<template>
  <div class="flex items-center justify-center">
    <LoginForm :onLogin="handleLogin" />
    <ToastBar :message="toastMessage" type="error"/>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import LoginForm from "~/components/auth/LoginForm.vue";
import { useAuthStore } from "@/store/auth";
import type { LoginPayload } from "~/types/auth";
import ToastBar from "~/components/ui/ToastBar.vue";

const authStore = useAuthStore();
const router = useRouter();

const toastMessage = ref("");

const handleLogin = async (payload: LoginPayload) => {
  const success = await authStore.login(payload);
  if (success) {
    router.push("/");
  } else {
    console.log('wrong')
    toastMessage.value = ""; 
    setTimeout(() => {
      toastMessage.value = "The Username and Password is wrong";
    }, 10);
  }
  return success;
};
</script>
