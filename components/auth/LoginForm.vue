<template>
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
    <h1 class="text-2xl font-bold mb-6">Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input
          id="username"
          v-model="loginPayload.username"
          type="text"
          class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          v-model="loginPayload.password"
          type="password"
          class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue1 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
    </form>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { LoginPayload } from "~/types/auth";

const props = defineProps({
  onLogin: {
    type: Function,
    required: true,
  },
});

const loginPayload = ref<LoginPayload>({
  username: "",
  password: "",
});

const errorMessage = ref("");

const handleSubmit = () => {
  const success = props.onLogin(loginPayload.value);
  if (!success) {
    errorMessage.value = "Invalid username or password.";
  }
};
</script>
