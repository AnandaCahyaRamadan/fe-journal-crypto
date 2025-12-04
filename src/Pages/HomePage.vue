<template>
  <div class="bg-[#F9FAFB] text-gray-800 font-inter min-h-screen">

    <!-- NAVBAR -->
    <NavbarComponent />

    <div
      v-if="mobileOpen"
      class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg px-6 py-5 flex flex-col gap-4 z-40 animate-slide-down"
    >
      <RouterLink to="/" @click="closeMenu" class="nav-link">Dashboard</RouterLink>
      <RouterLink to="/journal" @click="closeMenu" class="nav-link">Journal</RouterLink>
      <RouterLink to="/notes" @click="closeMenu" class="nav-link">Catatan</RouterLink>
      <a href="https://www.coingecko.com/id" target="_blank" rel="noopener" class="nav-link">
        Market
      </a>
      <a href="" class="btn btn-primary text-center">Login</a>
    </div>

    <!-- HERO -->
    <section class="relative px-6 py-24 max-w-5xl mx-auto text-center animate-fade-up">

      <!-- FLOATING ICONS -->
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/768px-Bitcoin.svg.png"
          class="w-12 opacity-70 absolute left-10 top-20 animate-float-slow hidden md:block" />
      <img src="https://images.seeklogo.com/logo-png/44/2/ethereum-eth-logo-png_seeklogo-444507.png"
          class="w-10 opacity-70 absolute right-16 top-32 animate-float-med hidden md:block" />
      <img src="https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/Renzo+-+EZ.png"
          class="w-8 opacity-70 absolute left-1/2 bottom-20 animate-float-fast hidden md:block" />

      <!-- MAIN TITLE -->
      <h2 class="p-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-snug bg-gradient-to-br from-black to-gray-700 bg-clip-text text-transparent">
        Analisa Crypto, Catat Progress,<br />
        Tingkatkan Mindset Tradingmu
      </h2>

      <!-- SUBTITLE -->
      <p class="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Platform modern untuk memantau harga crypto, menulis jurnal trading,
        dan menyimpan insight pengalaman supaya progres trading makin konsisten.
      </p>

      <!-- GLASS CARD -->
      <div class="mx-auto mt-10 max-w-md backdrop-blur bg-white/30 border border-white/20 shadow-xl p-6 rounded-2xl animate-fade-up"
          style="animation-delay: .2s">

        <RouterLink
          to="/journal"
          class="btn-secondary block w-fit mx-auto px-6 py-3 rounded-xl text-white font-semibold text-sm bg-black hover:bg-gray-800 transition"
        >
          Mulai Mencatat
        </RouterLink>
      </div>

    </section>

    <!-- FEATURE SECTION -->
    <section class="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

      <!-- CARD -->
    <div
      class="group feature-card bg-white/70 backdrop-blur-lg rounded-2xl p-7 shadow-lg border border-white/40 
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up"
      style="animation-delay:.1s"
    >
      <div class="flex items-center justify-center mb-5">
        <!-- ICON CANDLESTICK -->
        <svg 
          class="w-12 h-12 text-indigo-600 group-hover:text-indigo-700 transition"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <!-- Left candle -->
          <path d="M6 3v4M6 13v8" />
          <rect x="4" y="7" width="4" height="6" rx="1" />

          <!-- Middle candle -->
          <path d="M12 2v5M12 14v8" />
          <rect x="10" y="7" width="4" height="7" rx="1" />

          <!-- Right candle -->
          <path d="M18 5v4M18 14v7" />
          <rect x="16" y="9" width="4" height="5" rx="1" />
        </svg>
      </div>

      <h3 class="text-2xl font-semibold mb-3 text-gray-800">Crypto Market</h3>
      <p class="text-gray-600 leading-relaxed mb-6">
        Pantau pergerakan harga terbaru dari berbagai koin.
      </p>

      <a
        href="https://www.coingecko.com/id"
        class="w-full block text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl 
              font-medium transition"
      >
        Buka Market
      </a>
    </div>

      <!-- CARD -->
      <div
        class="group feature-card bg-white/70 backdrop-blur-lg rounded-2xl p-7 shadow-lg border border-white/40 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up cursor-pointer"
        @click="$router.push('/journal')"
        style="animation-delay:.2s"
      >
        <div class="flex items-center justify-center mb-5">
          <svg class="w-12 h-12 text-indigo-600 group-hover:text-indigo-700 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H18"></path>
            <path d="M18 2H6.5A2.5 2.5 0 0 0 4 4.5v15"></path>
            <path d="M8 7h8M8 11h8M8 15h5"></path>
          </svg>
        </div>

        <h3 class="text-2xl font-semibold mb-3 text-gray-800">Trading Journal</h3>
        <p class="text-gray-600 leading-relaxed mb-6">
          Catat setiap entry, exit, strategi, dan emosi saat trading.
        </p>

        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-medium 
                 transition">
          Mulai Menulis
        </button>
      </div>

      <!-- CARD -->
      <div
        class="group feature-card bg-white/70 backdrop-blur-lg rounded-2xl p-7 shadow-lg border border-white/40 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-up cursor-pointer"
        @click="$router.push('/notes')"
        style="animation-delay:.3s"
      >
        <div class="flex items-center justify-center mb-5">
          <svg class="w-12 h-12 text-indigo-600 group-hover:text-indigo-700 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 20h16"></path>
            <path d="M4 4h16v13H4z"></path>
            <path d="M8 8h8M8 12h5"></path>
          </svg>
        </div>

        <h3 class="text-2xl font-semibold mb-3 text-gray-800">Catatan Harian</h3>
        <p class="text-gray-600 leading-relaxed mb-6">
          Simpan insight penting dan ide trading dengan mudah.
        </p>

        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-medium transition">
          Tulis Catatan
        </button>
      </div>

    </section>

    <!-- LIST COIN -->
    <section class="max-w-6xl mx-auto px-6 py-12">
      <h2 class="text-2xl font-bold mb-6 tracking-tight">📌 Daftar Coin Populer</h2>

      <div class="overflow-x-auto rounded-2xl shadow-sm border bg-white">
        <table class="w-full text-left table-auto min-w-[700px]">
          <thead>
            <tr class="bg-gray-100 text-gray-700 text-sm">
              <th class="py-3 px-4">Coin</th>
              <th class="py-3 px-4">Harga</th>
              <th class="py-3 px-4">24h</th>
              <th class="py-3 px-4">Market Cap</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="coin in coins.slice(0, 20)"
              :key="coin.id"
              class="border-b hover:bg-gray-50 transition"
            >
              <td class="py-3 px-4 flex items-center gap-3">
                <img :src="coin.image" class="w-7 h-7 rounded-full" />
                <div>
                  <div class="font-semibold">{{ coin.name }}</div>
                  <div class="text-xs text-gray-500 uppercase">{{ coin.symbol }}</div>
                </div>
              </td>

              <td class="py-3 px-4 font-semibold">
                Rp {{ formatNumber(coin.current_price) }}
              </td>

              <td
                class="py-3 px-4 font-semibold"
                :class="coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'"
              >
                {{ coin.price_change_percentage_24h.toFixed(2) }}%
              </td>

              <td class="py-3 px-4 text-gray-700">
                Rp {{ formatNumber(coin.market_cap) }}
              </td>
            </tr>
          </tbody>
        </table>
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

          <div class="mt-1 text-sm font-semibold"
            :class="coin.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'">
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </div>

          <canvas :id="`spark-${coin.id}`" width="140" height="40" class="mt-3"></canvas>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="relative mt-20 bg-gradient-to-br from-white to-gray-50 dark:from-[#0f0f0f] dark:to-[#1a1a1a] border-t">
      <div class="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-12 animate-fade-up">

        <!-- BRAND -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img src="logo.png" alt="CryptoJournal" class="w-40 h-10 object-contain" />
          </div>

          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Workspace modern untuk trader Indonesia — mengelola market, jurnal,
            dan insight trading dalam satu platform minimalis.
          </p>

          <!-- SOCIAL ICONS -->
          <div class="flex items-center gap-4 mt-5">
            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110">
              <!-- Instagram -->
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
                0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 
                3 1.34 3 3v10c0 1.66-1.34 3-3 
                3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 
                3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 
                2a3 3 0 110 6 3 3 0 010-6zm4.5-.88a1.12 1.12 
                0 100 2.24 1.12 1.12 0 000-2.24z"/>
              </svg>
            </a>

            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110">
              <!-- GitHub -->
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.648.5.5 5.648.5 
                12c0 5.088 3.292 9.39 7.868 10.914.575.11.786-.25.786-.556 
                0-.274-.01-1.003-.015-1.97-3.2.695-3.88-1.543-3.88-1.543-.523-1.33-1.278-1.684-1.278-1.684-1.045-.714.08-.7.08-.7 
                1.157.082 1.766 1.188 1.766 1.188 1.028 1.763 2.695 1.253 
                3.35.958.104-.744.402-1.253.73-1.543-2.555-.29-5.238-1.277-5.238-5.683 
                0-1.255.448-2.28 1.184-3.085-.118-.29-.513-1.454.112-3.03 
                0 0 .966-.31 3.166 1.18A10.93 10.93 0 0112 6.3c.98.004 1.97.132 
                2.89.388 2.2-1.49 3.163-1.18 3.163-1.18.627 1.576.232 2.74.114 
                3.03.74.805 1.183 1.83 1.183 3.085 0 4.417-2.688 5.39-5.252 
                5.675.414.355.784 1.06.784 2.137 0 1.543-.014 2.783-.014 
                3.163 0 .308.207.67.792.556A10.999 10.999 0 0023.5 12c0-6.352-5.148-11.5-11.5-11.5z"/>
              </svg>
            </a>

            <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition transform hover:scale-110">
              <!-- X -->
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656c-.793.352-1.645.589-2.538.696a4.48 
                4.48 0 001.962-2.475 8.93 8.93 0 01-2.828 1.08A4.462 
                4.462 0 0015.44 4c-2.47 0-4.47 2.004-4.47 
                4.474 0 .35.04.69.116 1.017A12.67 12.67 0 013.17 
                5.15a4.473 4.473 0 001.382 5.965 4.42 4.42 
                0 01-2.025-.56v.056c0 2.17 1.546 3.984 3.6 
                4.398a4.49 4.49 0 01-2.018.077A4.47 4.47 0 007.735 
                17.5a8.97 8.97 0 01-5.557 1.92c-.36 0-.715-.02-1.066-.06A12.65 
                12.65 0 006.946 21c8.285 0 12.814-6.866 12.814-12.814 
                0-.195-.005-.39-.014-.583a9.15 9.15 0 002.416-2.347z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- QUICK LINKS -->
        <div>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 tracking-wide">
            Menu
          </h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li><RouterLink to="/" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Dashboard</RouterLink></li>
            <li><RouterLink to="/journal" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Journal</RouterLink></li>
            <li><RouterLink to="/notes" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Catatan</RouterLink></li>
            <li><a href="https://www.coingecko.com/id" target="_blank" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Market</a></li>
          </ul>
        </div>

        <!-- SUPPORT -->
        <div>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 tracking-wide">
            Support
          </h3>
          <ul class="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Panduan</a></li>
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">FAQ</a></li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h3 class="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4 tracking-wide">
            Kontak
          </h3>

          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Telepon / WhatsApp:
            <br />
            <span class="font-medium text-gray-800 dark:text-gray-300">0819-9965-1534</span>
          </p>

          <p class="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            Email:
            <br />
            <span class="font-medium text-gray-800 dark:text-gray-300">support@cryptojournal.id</span>
          </p>
        </div>

      </div>

      <div class="text-center text-gray-500 dark:text-gray-500 text-xs py-4 border-t border-gray-200 dark:border-gray-700">
        © 2025 CryptoJournal · Dibangun dengan ❤️ untuk trader Indonesia.
      </div>
    </footer>

  </div>
</template>


<script setup>
import { ref, onMounted, nextTick } from "vue";

const coins = ref([]);
import NavbarComponent from "@/components/NavbarComponent.vue";

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

@keyframes floatSlow {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
@keyframes floatMed {
  0% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
  100% { transform: translateY(0); }
}
@keyframes floatFast {
  0% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0); }
}

.animate-float-slow { animation: floatSlow 5s ease-in-out infinite; }
.animate-float-med { animation: floatMed 4s ease-in-out infinite; }
.animate-float-fast { animation: floatFast 3s ease-in-out infinite; }

</style>
