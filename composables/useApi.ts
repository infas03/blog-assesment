export const useApi = () => {
  const config = useRuntimeConfig();

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${config.public.apiUrl}/posts`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      throw error;
    }
  };

  return {
    fetchPosts,
  };
};
