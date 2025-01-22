import { defineStore } from 'pinia';
import { blogPosts } from '~/constant/mock';
import { fetchPostById } from '~/utils/mockPosts';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  createdDate: number;
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
    currentPost: null as Post | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    allPosts: (state): Post[] => state.posts,
    getPostById: (state) => (id: number): Post | undefined =>
      state.posts.find((post) => post.id === id),
  },

  actions: {
    async fetchPosts(): Promise<void> {
      this.loading = true;
      try {
        this.posts = await new Promise((resolve) =>
          setTimeout(() => resolve(blogPosts), 500)
        );
        this.error = null;
      } catch (err) {
        this.error = 'Failed to fetch posts';
      } finally {
        this.loading = false;
      }
    },

    async fetchPostById(id: number): Promise<void> {
      this.loading = true;
      try {
        this.currentPost = await fetchPostById(id);
        this.error = null;
      } catch (err) {
        this.error = 'Post not found';
      } finally {
        this.loading = false;
      }
    },
  },
});
