<template>
  <div class="space-y-12">
    <h1 class="text-2xl font-bold text-gray-800 capitalize">
      Category: {{ categoryName }}
    </h1>
    <div v-if="loading">
      <BlogPostSkeleton />
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
import BlogPostSkeleton from '~/components/blog/BlogPostSkeleton.vue';

const route = useRoute();
const router = useRouter();

const categoryName = route.params.name as string;

const postsStore = usePostsStore();
const posts = computed(() => postsStore.posts);
const loading = computed(() => postsStore.loading);
const error = computed(() => postsStore.error);

const filteredPosts = computed(() =>
  posts.value.filter((post) => post.category.toLowerCase() === categoryName.toLowerCase())
);

const navigateToPost = (id: number) => {
  router.push(`/post/${id}`);
};

onMounted(() => {
  if (!posts.value.length) {
    postsStore.fetchPosts();
  }
});
</script>

<style scoped>
</style>
