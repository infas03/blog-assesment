<template>
  <div class="space-y-12">
    <h1 class="text-2xl font-bold text-gray-800 capitalize">
      Category: {{ categoryName }}
    </h1>
    <div v-if="loading">
      <BlogHomeSkeleton />
    </div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="filteredPosts.length === 0" class="text-gray-600">
      No posts found for this category.
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        @readMore="navigateToPost(post.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import BlogCard from '~/components/blog/BlogCard.vue';
import { usePostsStore } from '~/store/post';

const route = useRoute();
const router = useRouter();

const categoryName = route.params.name as string;

const postsStore = usePostsStore();
const filteredPosts = computed(() => postsStore.categoriesPosts);
const loading = computed(() => postsStore.loading);
const error = computed(() => postsStore.error);

const navigateToPost = (id: number) => {
  router.push(`/post/${id}`);
};

onMounted(() => {
  if (categoryName) {
    postsStore.fetchPostsByCategory(categoryName);
  }
});
</script>

<style scoped>
</style>
