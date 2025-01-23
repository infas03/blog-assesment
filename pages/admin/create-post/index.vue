<template>
  <div class="p-6">
    <CreatePostForm @submitPost="handlePostSubmit" />
    <ToastBar :message="toastErrorMessage" type="error"/>
    <ToastBar :message="toastSuccessMessage" type="success"/>
  </div>
</template>

<script setup>
import CreatePostForm from "~/components/admin/CreatePostForm.vue";
import ToastBar from "~/components/ui/ToastBar.vue";
import { usePostsStore } from "~/store/post";

const router = useRouter();

definePageMeta({
  middleware: "auth",
});

const toastSuccessMessage = ref("");
const toastErrorMessage = ref("");

const postsStore = usePostsStore();

const handlePostSubmit = async (newPost) => {
  try {
    const unwrappedPost = { ...newPost.value };
    const result = await postsStore.addPost(unwrappedPost);
    if (result) {
      toastSuccessMessage.value = "";
      setTimeout(() => {
        toastSuccessMessage.value = "Post created successfully!";
        router.push("/");
      }, 10);
    } else {
      toastErrorMessage.value = "";
      setTimeout(() => {
        toastErrorMessage.value = "Failed to create post";
      }, 10);
    }
  } catch (error) {
    console.error("Error creating post:", error);
    alert("Failed to create post.");
  }
};
</script>


