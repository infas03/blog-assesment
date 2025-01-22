<template>
  <div
    v-if="isVisible"
    class="fixed bottom-0 left-0 w-full bg-red-600 text-white text-[10px] text-center py-1 z-50 transition-transform duration-300"
    :class="{ '-translate-y-full': !isVisible, 'translate-y-0': isVisible }"
  >
    {{ message }}
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

defineProps({
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 1000,
  },
});

const isVisible = ref(true);

watch(isVisible, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      isVisible.value = false;
    }, duration);
  }
});
</script>

<style scoped>
</style>
