<template>
  <div>
    <div v-if="loading" class="space-y-6">
      <BlogPostSkeleton />
    </div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="post">
      <div class="rounded-lg bg-white flex flex-col md:flex-row gap-6">
        <img :src="post?.image" :alt="post?.title" class="md:w-1/2 h-[280px] object-cover rounded-lg" loading="lazy" />
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold text-gray2">{{ post?.title }}</h1>
          <div @click="onCategory" class="cursor-pointer w-fit bg-gray-400 text-white text-[10px] font-bold uppercase px-2.5 py-2 rounded-lg">{{ post?.category }}</div>
          <p class="text-gray-600">{{ post?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { usePostsStore } from '~/store/post';
const router = useRouter();
const route = useRoute();
const postId = Number(route.params.id);

const postsStore = usePostsStore();
const post = computed(() => postsStore.currentPost?.[0]) || {};
const error = computed(() => postsStore.error);
const loading = computed(() => postsStore.loading);

onMounted(() => {
  postsStore.fetchPostById(postId);
});

useHead({
  title: post.value?.title || 'Events',
})

const onCategory = () => {
  if (post.value && post.value.category) {
    router.push(`/category/${encodeURIComponent(post.value.category)}`);
  } else {
    console.error("Category is not available.");
  }
};
</script>

<style scoped>
</style>
