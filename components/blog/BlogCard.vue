<template>
  <div
    class="relative group cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 ease-in-out w-full md:w-[48%] lg:w-[32%] pb-[30px] hover:scale-105 hover:shadow-lg"
    @click="onReadMore"
  >
    <img :src="post.image" :alt="title" class="w-full h-[280px] object-cover rounded-lg" />
    <div class="p-0 transition-all duration-300 ease-in-out group-hover:p-2">
      <span class="text-xs text-gray1">{{ formatDate(post.createdDate) }}</span>
      <h2 class="text-base font-semibold text-gray2 mt-2">
        {{ post.title }}
      </h2>
      <p class="text-gray3 text-sm mt-2 line-clamp-3">
        {{ post.description }}
      </p>
    </div>
    <div class="absolute top-4 right-4 bg-black/25 text-white text-[10px] font-bold uppercase px-2.5 py-2 rounded-lg">{{ post.category }}</div>
  </div>
</template>

<script setup>
import { formatDate } from '~/utils/functions';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['readMore']);

const onReadMore = () => {
  emit('readMore', props.post.id);
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
