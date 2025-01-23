<!-- <template>
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
</style> -->

<template>
<div
    v-if="visible"
    class="fixed bottom-0 left-0 w-full text-white text-[10px] text-center py-1 z-50 transition-transform duration-300"
    :class="{
      '-translate-y-full': !visible,
      'translate-y-0': visible,
      'bg-red-600': type === 'error',
      'bg-yellow-500': type === 'warning',
      'bg-green-500': type === 'success'
    }"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  message: string;
  type: string
}>();

const visible = ref(false);
const message = ref("");

watch(
  () => props.message,
  (newMessage) => {
    if (newMessage) {
      message.value = newMessage;
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, 2000);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
