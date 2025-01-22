import { defineStore } from 'pinia';
import type { Post } from '~/types/post';

export const usePostsStore = defineStore('post', {
  state: () => ({
    posts: [] as Post[],
    currentPost: null as Post | null,
    categoriesPosts: [] as Post[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchPosts() {
      try {
        this.loading = true;
        const { $api } = useNuxtApp();
        this.posts = await $api.get('/posts');
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch posts';
      } finally {
        this.loading = false;
      }
    },
    async fetchPostById(id: number) {
      try {
        this.loading = true;
        const { $api } = useNuxtApp();
        this.currentPost = await $api.get(`/posts?id=${id}`);
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch post';
      } finally {
        this.loading = false;
      }
    },
    async fetchPostsByCategory(category: string) {
      try {
        this.loading = true;
        const { $api } = useNuxtApp();
        this.categoriesPosts = await $api.get(`/categories?category=${category}`);
      } catch (error: any) {
        this.error = error.message || "Failed to fetch posts by category";
      } finally {
        this.loading = false;
      }
    },
  },
});