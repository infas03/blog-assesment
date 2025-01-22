<script setup>
import CreatePostForm from "~/components/admin/CreatePostForm.vue";
import { usePostsStore } from "~/store/post";

definePageMeta({
  middleware: "auth",
});

const postsStore = usePostsStore();

const handlePostSubmit = (newPost) => {
  postsStore.addPost(newPost);
};
</script>

<template>
  <div class="p-6">
    <CreatePostForm @submitPost="handlePostSubmit" />
  </div>
</template>
