<template>
  <header class="shadow-header-shadow py-4 px-10 md:px-[100px] h-[82px] flex justify-between items-center">
    <div class="flex flex-row gap-x-4 items-center">
      <img src="assets/images/Brand.png" alt="Brand Logo" class="h-10 w-auto" />
      <div class="flex flex-row gap-x-2">
        <Call class="text-xl hidden md:flex"/>
        <p class="text-sm hidden md:flex">+1 (628) 587-3235</p>
      </div>

    </div>
    <div class="flex flex-row gap-x-4 items-center">
      <p class="text-sm font-semibold hidden md:flex">Top Vendors, Apply Now!</p>
      <div class="flex flex-row gap-x-2 bg-[#296BFF0D] px-4 py-1.5 rounded-[40px]">
        <button>
          <Menu class="text-2xl" />
        </button>
        <button>
          <User class="text-2xl text-gray-300" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import Call from '~/assets/icons/Call.svg';
import Menu from '~/assets/icons/Menu.svg';
import User from '~/assets/icons/User.svg';
</script>
