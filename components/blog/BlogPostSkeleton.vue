<template>
  <div class="flex flex-row gap-5 items-start p-4 bg-white max-h-80">
    <div class="w-1/2">
      <Skeleton height="h-[330px]" width="w-full" />
    </div>

    <div class="flex flex-col gap-y-2 w-1/2">
      <Skeleton height="h-14" width="w-3/4" />
      <Skeleton height="h-10" width="w-1/2" />
      <Skeleton height="h-5" width="w-5/6" />
      <Skeleton height="h-5" width="w-4/6" />
      <Skeleton height="h-5" width="w-5/6" />
      <Skeleton height="h-5" width="w-4/6" />
      <Skeleton height="h-5" width="w-5/6" />
      <Skeleton height="h-5" width="w-4/6" />
      <Skeleton height="h-5" width="w-5/6" />
      <Skeleton height="h-5" width="w-4/6" />
    </div>
  </div>
</template>

<script setup>
import Skeleton from '../ui/Skeleton.vue';
</script>
