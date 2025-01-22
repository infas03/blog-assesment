<template>
  <div>
    <div v-if="loading" class="space-y-6">
      <BlogPostSkeleton />
    </div>
    <div v-else>
      <div class="rounded-lg shadow-sm bg-white flex flex-col md:flex-row gap-6">
        <img :src="post.image" :alt="title" class="md:w-1/2 h-[280px] object-cover rounded-lg" />
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold text-gray2">{{ post.title }}</h1>
          <div class="w-fit bg-gray3 text-white text-[10px] font-bold uppercase px-2.5 py-2 rounded-lg">{{ post.category }}</div>
          <p class="text-gray-600">{{ post.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePostsStore } from '~/store/post';

const route = useRoute();
const postId = Number(route.params.id);

const postsStore = usePostsStore();
const post = computed(() => postsStore.currentPost);
const loading = computed(() => postsStore.loading);

onMounted(() => {
  postsStore.fetchPostById(postId);
});
</script>

<style scoped>
</style>
