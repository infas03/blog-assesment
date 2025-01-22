<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
    <h1 class="text-xl font-bold mb-4">Create a New Post</h1>
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
      <input
        id="title"
        v-model="post.title"
        type="text"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
      <textarea
        id="description"
        v-model="post.description"
        rows="3"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>
    <div class="mb-4">
      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
      <input
        id="category"
        v-model="post.category"
        type="text"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
      <textarea
        id="content"
        v-model="post.content"
        rows="5"
        class="mt-1 block w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const post = ref({
  title: "",
  description: "",
  category: "",
  content: "",
});

const emit = defineEmits(["submitPost"]);

const handleSubmit = () => {
  emit("submitPost", post.value);
  post.value = { title: "", description: "", category: "", content: "" };
};
</script>
