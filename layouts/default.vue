<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <!-- Main Content -->
    <main class="flex-grow py-8 px-4">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2025 My Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Header from '~/components/layout/Header.vue';
</script>
