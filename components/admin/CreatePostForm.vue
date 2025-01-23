<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
    <h1 class="text-xl font-bold mb-4">Create a New Post</h1>
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
      <input
        id="title"
        v-model="form.title"
        type="text"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        id="description"
        v-model="form.description"
        rows="3"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>
    <div class="mb-4">
      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
      <input
        id="category"
        v-model="form.category"
        type="text"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
      <input
        id="image"
        v-model="form.image"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      ></input>
    </div>
    <button
      type="submit"
      :disabled="loading"
      class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { usePostsStore } from "~/store/post";

const postStore = usePostsStore();
const loading = computed(() => postStore.loading);

const form = ref({
  title: "",
  description: "",
  category: "",
  image: "",
  createdDate: Date.now(),
});

const emit = defineEmits(["submitPost"]);

const handleSubmit = () => {
  emit("submitPost", { ...form.value });
};
</script>
