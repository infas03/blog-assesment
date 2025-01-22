<template>
  <header class="w-full shadow-header-shadow py-4 h-[82px]">
    <div class="max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-[100px]">
      <div class="flex flex-row gap-x-4 items-center">
        <img @click="navigateToHome" src="assets/images/Brand.png" alt="Brand Logo"
          class="h-10 w-auto cursor-pointer" />
        <div class="flex flex-row gap-x-2">
          <Call class="text-xl hidden md:flex" />
          <p class="text-sm hidden md:flex">+1 (628) 587-3235</p>
        </div>
      </div>

      <div class="flex flex-row gap-x-4 items-center">
        <p class="text-sm font-semibold hidden md:flex">Top Vendors, Apply Now!</p>
        <div class="flex flex-row gap-x-2 bg-[#296BFF0D] px-4 py-1.5 rounded-[40px]" ref="dropdownRef">
          <button @click="toggleDropdown('admin')" class="relative">
            <Menu class="text-2xl" />
            <div v-if="isAdminDropdownOpen" class="absolute top-10 -right-5 bg-black/20 shadow-md rounded-lg w-40">
              <ul>
                <li class="px-4 py-2 hover:bg-blue1 hover:rounded-lg cursor-pointer font-bold" @click="handleCreatePost">
                  Create Post (Admin Only)
                </li>
              </ul>
            </div>
          </button>
          <button @click="toggleDropdown('auth')" class="relative">
            <User class="text-2xl text-gray-300" />
            <div v-if="isAuthDropdownOpen" class="absolute top-10 -right-5 bg-black/20 shadow-md rounded-lg w-28">
              <ul>
                <li v-if="isAuthenticated" class="px-4 py-2 hover:bg-red-400 hover:rounded-lg cursor-pointer font-bold" @click="handleLogout">
                  Logout
                </li>
                <li v-else class="px-4 py-2 hover:bg-green-400 hover:rounded-lg cursor-pointer font-bold" @click="handleLogin">
                  Login
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>


    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import Call from '~/assets/icons/Call.svg';
import Menu from '~/assets/icons/Menu.svg';
import User from '~/assets/icons/User.svg';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';

const router = useRouter();
const authStore = useAuthStore();

const isAuthDropdownOpen = ref(false);
const isAdminDropdownOpen = ref(false);
const dropdownRef = ref(null);

const isAuthenticated = computed(() => authStore.isAuthenticated);

const toggleDropdown = (dropdownType) => {
  if (dropdownType === "auth") {
    isAuthDropdownOpen.value = !isAuthDropdownOpen.value;
    isAdminDropdownOpen.value = false; // Close admin dropdown
  } else if (dropdownType === "admin") {
    isAdminDropdownOpen.value = !isAdminDropdownOpen.value;
    isAuthDropdownOpen.value = false; // Close auth dropdown
  }
};

const closeDropdowns = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isAuthDropdownOpen.value = false;
    isAdminDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdowns);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdowns);
});

const navigateToHome = () => {
  router.push(`/`);
};

const handleLogin = () => {
  router.push(`/login`);
};

const handleCreatePost = () => {
  router.push(`/admin/create-post`);
};

const handleLogout = () => {
  authStore.logout();
  router.push("/login");
};
</script>

