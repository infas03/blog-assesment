<template>
  <div class="flex items-center justify-center">
    <LoginForm :onLogin="handleLogin" />
    <ToastBar v-if="toastVisible" :message="toastMessage" />
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

const toastVisible = ref(false);
const toastMessage = ref("");

const handleLogin = async (payload: LoginPayload) => {
  const success = await authStore.login(payload);
  if (success) {
    router.push("/");
  } else {
    console.log('wrong')
    showToast("The Username and Password is wrong")
  }
  return success;
};

const showToast = (message: string) => {
  toastMessage.value = message;
  toastVisible.value = true;

  setTimeout(() => {
    toastVisible.value = false;
  }, 2000);
};
</script>
