import { blogPosts } from "~/constant/mock";

export const fetchPostById = (id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    const post = blogPosts.find((post) => post.id === id);
    post ? resolve(post) : reject(new Error('Post not found'));
  });
};