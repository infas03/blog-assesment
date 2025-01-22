import { defineNuxtPlugin } from '#app';
import { useRuntimeConfig } from '#app';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = {
    async get(endpoint: string) {
      const response = await fetch(`${config.public.apiUrl}/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${endpoint}`);
      }
      return response.json();
    },
    async post(endpoint: string, body: any) {
      const response = await fetch(`${config.public.apiUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`Failed to post to: ${endpoint}`);
      }
      return response.json();
    },
  };

  return {
    provide: {
      api,
    },
  };
});
