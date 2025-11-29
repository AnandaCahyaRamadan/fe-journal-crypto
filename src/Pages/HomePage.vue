<template>
  <div class="bg-[#F9FAFB] text-gray-800 font-inter min-h-screen">

    <!-- NAVBAR -->
    <nav
      class="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50 transition-all duration-300"
    >
      <h1 class="text-xl font-semibold tracking-tight">
        <img src="logo.png" alt="" style="width: 200px;">
      </h1>

      <div class="hidden md:flex items-center gap-6 text-sm">
        <RouterLink to="/" class="nav-link">Dashboard</RouterLink>
        <RouterLink to="/journal" class="nav-link">Journal</RouterLink>
        <RouterLink to="/notes" class="nav-link">Catatan</RouterLink>

        <a href="https://coinmarketcap.com/id/" target="_blank" rel="noopener" class="nav-link">
          Market
        </a>
      </div>

      <!-- BURGER -->
      <button
        class="md:hidden flex flex-col gap-1.5 active:scale-90 transition"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="w-6 h-0.5 bg-gray-800"></span>
        <span class="w-6 h-0.5 bg-gray-800"></span>
        <span class="w-6 h-0.5 bg-gray-800"></span>
      </button>
    </nav>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileOpen"
      class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg px-6 py-5 flex flex-col gap-4 z-40 animate-slide-down"
    >
      <RouterLink to="/" @click="closeMenu" class="nav-link">Dashboard</RouterLink>
      <RouterLink to="/journal" @click="closeMenu" class="nav-link">Journal</RouterLink>
      <RouterLink to="/notes" @click="closeMenu" class="nav-link">Catatan</RouterLink>
      <a href="https://coinmarketcap.com/id/" target="_blank" rel="noopener" class="nav-link">
        Market
      </a>
    </div>

    <!-- HERO -->
    <section class="px-6 py-20 max-w-5xl mx-auto text-center opacity-0 animate-fade-up">
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
          class="btn-primary"
        >
          Mulai Mencatat
        </RouterLink>
      </div>
    </section>

    <!-- 3 FEATURE CARDS -->
    <section class="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
      <div
        class="feature-card animate-fade-up"
        style="animation-delay: .1s"
      >
        <h3 class="text-xl font-semibold mb-3">Crypto Market</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Pantau pergerakan harga terbaru dari berbagai koin.
        </p>
        <a href="https://coinmarketcap.com/id/" class="btn-secondary">
          Buka Market
        </a>
      </div>

      <div
        class="feature-card animate-fade-up cursor-pointer"
        style="animation-delay: .2s"
        @click="$router.push('/journal')"
      >
        <h3 class="text-xl font-semibold mb-3">Trading Journal</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Catat setiap entry, exit, strategi, dan emosi saat trading.
        </p>
        <button class="btn-secondary">Mulai Menulis</button>
      </div>

      <div
        class="feature-card animate-fade-up cursor-pointer"
        style="animation-delay: .3s"
        @click="$router.push('/notes')"
      >
        <h3 class="text-xl font-semibold mb-3">Catatan Harian</h3>
        <p class="text-gray-600 text-sm leading-relaxed mb-4">
          Simpan insight penting dan ide trading dengan mudah.
        </p>
        <button class="btn-secondary">Tulis Catatan</button>
      </div>
    </section>

    <!-- MARKET MOVERS -->
    <section class="max-w-6xl mx-auto px-6 py-10">
      <h2 class="text-2xl font-bold mb-6 tracking-tight">🔥 Top Market Movers</h2>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(coin, index) in coins.slice(0, 6)"
          :key="coin.id"
          class="market-card animate-fade-up"
          :style="{ animationDelay: (index * 0.1) + 's' }"
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

          <canvas
            :id="`spark-${coin.id}`"
            width="140"
            height="40"
            class="mt-3"
          ></canvas>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="text-center text-sm text-gray-500 py-10">
      © 2025 CryptoJournal — Workspace modern untuk trader Indonesia.
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const coins = ref([]);
const mobileOpen = ref(false);

const closeMenu = () => (mobileOpen.value = false);

// GET MARKET DATA
const getMarketData = async () => {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=true"
    );
    coins.value = await res.json();
  } catch (err) {
    console.error("Gagal memuat data:", err);
  }
};

// SPARKLINE
function drawSparkline(canvas, data, color = "#4F46E5") {
  if (!canvas || !data) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;

  data.forEach((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.stroke();
}

onMounted(async () => {
  await getMarketData();
  await nextTick();

  coins.value.slice(0, 6).forEach((coin) => {
    const canvas = document.getElementById(`spark-${coin.id}`);
    if (canvas) {
      drawSparkline(
        canvas,
        coin.sparkline_in_7d.price,
        coin.price_change_percentage_24h >= 0 ? "#16a34a" : "#dc2626"
      );
    }
  });
});

const formatNumber = (num) => num.toLocaleString("id-ID");
</script>

<style>
/* NAV LINK */
.nav-link {
  transition: 0.25s;
}
.nav-link:hover {
  color: #4f46e5;
  transform: translateY(-2px);
}

/* BUTTONS */
.btn-primary {
  padding: 12px 24px;
  background: black;
  color: white;
  border-radius: 12px;
  font-size: 14px;
  transition: 0.25s;
}
.btn-primary:hover {
  background: #222;
  transform: translateY(-2px);
}
.btn-primary:active {
  transform: scale(0.95);
}

.btn-secondary {
  padding: 10px 18px;
  background: #4f46e5;
  color: white;
  border-radius: 12px;
  font-size: 13px;
  transition: 0.25s;
}
.btn-secondary:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

/* FEATURE CARDS */
.feature-card {
  padding: 24px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  transition: 0.3s;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
}

/* MARKET CARDS */
.market-card {
  padding: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  transition: 0.3s;
}
.market-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
}

/* ANIMATIONS */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-down {
  animation: slideDown 0.25s ease-out forwards;
}
</style>
