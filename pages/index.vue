<template>
  <div class="flex flex-col w-full gap-y-12">
    <h1 class="text-2xl text-black1 font-bold">Popular Articles</h1>
    <div v-if="loading" class="space-y-6">
      <BlogHomeSkeleton />
    </div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @readMore="navigateToPost"
        @navigateCategory="navigateToCategory"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '~/store/post';

const router = useRouter();
const postsStore = usePostsStore();

const posts = computed(() => postsStore.posts);
const loading = computed(() => postsStore.loading);
const error = computed(() => postsStore.error);

onMounted(() => {
  if (!posts.value.length) {
    postsStore.fetchPosts();
  }
});

// Navigation handlers
const navigateToPost = (id: number) => {
  router.push(`/post/${id}`);
};

const navigateToCategory = (category: string) => {
  router.push(`/category/${encodeURIComponent(category)}`);
};
</script>
