<template>
  <div class="flex flex-col w-full gap-y-12">
    <h1 class="text-2xl text-black1 font-bold">Popular Articles</h1>
    <div class="flex gap-5 flex-wrap">
      <BlogCard
        v-for="post in blogPosts"
        :key="post.id"
        :post="post"
        @readMore="navigateToPost"
      />
    </div>
  </div>
</template>

<script setup>
import BlogCard from "~/components/blog/BlogCard.vue";
import { blogPosts } from "~/constant/mock";

const navigateToPost = (id) => {
  console.log(`Navigate to blog post with ID: ${id}`);
};
</script>
