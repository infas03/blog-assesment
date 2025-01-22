<template>
  <div
    class="bg-gray-300 animate-pulse"
    :class="[
      'rounded-md',
      height ? `${height}` : 'h-4',
      width ? `${width}` : 'w-full'
    ]"
  ></div>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: [String, Number],
    default: 'h-4',
  },
  width: {
    type: [String, Number],
    default: 'w-full',
  },
});
</script>
