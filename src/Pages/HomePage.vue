<template>
  <div class="bg-[#F9FAFB] text-gray-800 font-inter min-h-screen">

    <!-- NAVBAR -->
    <nav class="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50">

      <!-- LOGO -->
      <h1 class="text-xl font-semibold tracking-tight">
        Crypto<span class="text-indigo-600">Journal</span>
      </h1>

      <!-- MENU DESKTOP -->
      <div class="hidden md:flex items-center gap-6 text-sm">
        <RouterLink to="/" class="hover:text-indigo-600">Dashboard</RouterLink>
        <RouterLink to="/journal" class="hover:text-indigo-600">Journal</RouterLink>
        <RouterLink to="/notes" class="hover:text-indigo-600">Catatan</RouterLink>
        <RouterLink to="/market" class="hover:text-indigo-600">Market</RouterLink>
      </div>

      <!-- BURGER MOBILE -->
      <button
        class="md:hidden flex flex-col gap-1.5"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="w-6 h-0.5 bg-gray-800"></span>
        <span class="w-6 h-0.5 bg-gray-800"></span>
        <span class="w-6 h-0.5 bg-gray-800"></span>
      </button>
    </nav>

    <!-- MOBILE MENU DROPDOWN -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-white border-b px-6 py-4 flex flex-col gap-4 animate-fade"
    >
      <RouterLink to="/" class="hover:text-indigo-600" @click="mobileOpen = false">Dashboard</RouterLink>
      <RouterLink to="/journal" class="hover:text-indigo-600" @click="mobileOpen = false">Journal</RouterLink>
      <RouterLink to="/notes" class="hover:text-indigo-600" @click="mobileOpen = false">Catatan</RouterLink>
      <RouterLink to="/market" class="hover:text-indigo-600" @click="mobileOpen = false">Market</RouterLink>
    </div>



    <!-- HERO -->
    <section class="px-6 py-20 max-w-5xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight leading-snug">
        Analisa Crypto, Catat Progress,<br />
        Bangun Pemahaman Lebih Dalam
      </h2>

      <p class="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Workspace modern untuk memantau harga cryptocurrency, membuat jurnal trading,
        dan menyimpan insight penting setiap hari.
      </p>

      <div class="mt-8">
        <RouterLink
          to="/journal"
          class="px-6 py-3 bg-black text-white rounded-xl text-sm hover:bg-gray-800"
        >
          Mulai Mencatat
        </RouterLink>
      </div>
    </section>



    <!-- QUICK ACCESS -->
    <section class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

      <div
        class="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition"
        @click="$router.push('/market')"
      >
        <h3 class="text-xl font-semibold mb-3">Crypto Market</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Pantau pergerakan harga terbaru dari berbagai koin.
        </p>
        <button class="px-4 py-2 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
          Buka Market
        </button>
      </div>

      <div
        class="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition"
        @click="$router.push('/journal')"
      >
        <h3 class="text-xl font-semibold mb-3">Trading Journal</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Catat setiap entry, exit, strategi, dan emosi saat trading.
        </p>
        <button class="px-4 py-2 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
          Mulai Menulis
        </button>
      </div>

      <div
        class="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition"
        @click="$router.push('/notes')"
      >
        <h3 class="text-xl font-semibold mb-3">Catatan Harian</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Simpan insight penting dan ide trading dengan mudah.
        </p>
        <button class="px-4 py-2 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
          Tulis Catatan
        </button>
      </div>

    </section>



    <!-- MARKET -->
    <section class="max-w-6xl mx-auto px-6 py-10">
      <h2 class="text-2xl font-bold mb-6 tracking-tight">🔥 Top Market Movers</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="coin in coins.slice(0, 6)"
          :key="coin.id"
          class="p-5 bg-white border rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
        >
          <div class="flex items-center gap-4 mb-3">
            <img :src="coin.image" class="w-10 h-10 rounded-full" />
            <div>
              <h4 class="font-semibold">{{ coin.name }}</h4>
              <p class="text-xs uppercase text-gray-500 tracking-wide">
                {{ coin.symbol }}
              </p>
            </div>
          </div>

          <div class="text-lg font-bold">
            Rp {{ formatNumber(coin.current_price) }}
          </div>

          <div
            class="mt-1 text-sm font-semibold"
            :class="coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'"
          >
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </div>
        </div>
      </div>
    </section>



    <!-- FOOTER -->
    <footer class="text-center text-sm text-gray-500 py-10">
      © 2025 CryptoJournal — Workspace modern untuk trader Indonesia.
    </footer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      coins: [],
      mobileOpen: false, // ✔ burger menu toggle
    };
  },

  mounted() {
    this.getMarketData();
  },

  methods: {
    async getMarketData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        this.coins = await res.json();
      } catch (err) {
        console.error("Gagal memuat data market:", err);
      }
    },

    formatNumber(num) {
      return num.toLocaleString("id-ID");
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* ANIMASI DROP */
.animate-fade {
  animation: fadeDown 0.2s ease-out;
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
