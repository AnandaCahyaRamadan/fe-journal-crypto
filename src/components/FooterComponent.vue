<template>
    <footer class="relative mt-20 bg-gradient-to-br from-white to-gray-50 dark:from-[#0f0f0f] dark:to-[#1a1a1a] border-t">
      <div class="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-12 animate-fade-up">

        <!-- BRAND -->
        <div>
            <h1 class="text-xl font-semibold tracking-tight flex items-center gap-2 mb-3">
                <img src="logo.png" alt="" style="width: 40px;"> <span>Jurnal Trading</span>
            </h1>

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
</template>