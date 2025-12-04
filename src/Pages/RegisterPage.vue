<template>
  <div class="min-h-screen bg-[#F9FAFB] flex items-center justify-center px-6">
    <div
      class="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100 animate-fade-up"
    >
      <!-- Logo -->
      <div class="flex flex-col items-center mb-6">
        <img src="/logo.png" alt="Logo" class="w-14 mb-3" />
        <h2 class="text-2xl font-bold text-gray-800">Buat Akun Baru</h2>
        <p class="text-gray-500 text-sm mt-1">
          Lengkapi data di bawah untuk membuat akun
        </p>
      </div>

      <!-- FORM -->
      <form @submit.prevent="register">

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            v-model="form.name"
            class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 
                   focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            placeholder="John Doe"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            v-model="form.email"
            class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 
                   focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1"
            >Password</label
          >
          <input
            type="password"
            v-model="form.password"
            class="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 
                   focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl 
                 font-semibold transition-all"
        >
          Daftar
        </button>
      </form>

      <!-- login link -->
      <p class="mt-6 text-center text-gray-600 text-sm">
        Sudah punya akun?
        <RouterLink to="/login" class="text-indigo-600 font-semibold">
          Login di sini
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });

        if (!res.ok) throw new Error("Gagal mendaftar");

        this.$router.push("/login");
      } catch (err) {
        alert("Pendaftaran gagal, cek kembali data Anda");
      }
    },
  },
};
</script>

<style>
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.5s ease forwards;
}
</style>
