<template>
  <div class="flex flex-col min-h-screen min-w-[320px]">
    <Header />

    <main class="flex-grow w-full mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-[100px] py-8">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/layout/Footer.vue";
import Header from "~/components/layout/Header.vue";
</script>

