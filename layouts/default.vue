<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-grow py-8 px-10 md:px-[100px]">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';
</script>
