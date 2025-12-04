<template>
  <nav
    class="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50 transition-all duration-300"
  >
    <h1 class="text-xl font-semibold tracking-tight flex items-center gap-2">
      <img src="logo.png" alt="" style="width: 100px;">
    </h1>

    <div class="hidden md:flex items-center gap-6 text-sm">
      <RouterLink to="/" class="nav-link flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 12l9-9 9 9"></path>
          <path d="M9 21V9h6v12"></path>
        </svg>
        Dashboard
      </RouterLink>

      <RouterLink to="/journal" class="nav-link flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H18"></path>
          <path d="M18 2H6.5A2.5 2.5 0 0 0 4 4.5v15"></path>
          <path d="M8 7h8M8 11h8M8 15h5"></path>
        </svg>
        Journal
      </RouterLink>

      <RouterLink to="/notes" class="nav-link flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 20h16"></path>
          <path d="M4 4h16v13H4z"></path>
          <path d="M8 8h8M8 12h5"></path>
        </svg>
        Catatan
      </RouterLink>

      <a href="https://coinmarketcap.com/id/" target="_blank" class="nav-link flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
          stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 3v18h18"></path>
          <path d="M7 14l3-3 3 2 4-5"></path>
        </svg>
        Market
      </a>
    </div>
    <div>
    <a href="" class="btn btn-primary hidden md:block flex items-center gap-2">
        <i class="fa-solid fa-right-to-bracket"></i>
        Login
    </a>
    </div>

    <button
      class="md:hidden flex flex-col gap-1.5 active:scale-90 transition"
      @click="toggleMobile"
    >
      <span class="w-6 h-0.5 bg-gray-800"></span>
      <span class="w-6 h-0.5 bg-gray-800"></span>
      <span class="w-6 h-0.5 bg-gray-800"></span>
    </button>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileOpen"
      class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg px-6 py-5 flex flex-col gap-4 z-40 animate-slide-down"
    >
      <RouterLink to="/" @click="closeMenu" class="nav-link">Dashboard</RouterLink>
      <RouterLink to="/journal" @click="closeMenu" class="nav-link">Journal</RouterLink>
      <RouterLink to="/notes" @click="closeMenu" class="nav-link">Catatan</RouterLink>
      <a href="https://coinmarketcap.com/id/" @click="closeMenu" class="nav-link">
        Market
      </a>
      <a href="" class="btn btn-primary bg-indigo-600 text-center"><i class="fa-solid fa-right-to-bracket"></i> Login</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileOpen = ref(false);

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
};

const closeMenu = () => {
  mobileOpen.value = false;
};
</script>

