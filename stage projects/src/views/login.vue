<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

// this function will handle login
function handleLogin() {
  router.push('/dashboard')
}
</script>

<template>
  <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">
        Login
      </h2>

      <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Please enter email"
          class="border border-gray-300 p-2 rounded"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Please enter password"
          class="border border-gray-300 p-2 rounded"
          required
        />

        <button
          type="submit"
          class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold"
        >
          Sign In
        </button>
      </form>

      <p class="text-center text-sm mt-4 text-gray-600">
        Don't have an account? Create it here
      </p>

      <RouterLink
        to="/register"
        class="block text-center text-green-800 hover:text-green-600"
      >
        Register
      </RouterLink>

      <RouterLink
        to="/login"
        class="block text-center text-green-800 hover:text-green-600"
      >
        Login
      </RouterLink>

      <RouterLink
        to="/contact"
        class="block text-center text-green-800 hover:text-green-600 mt-2"
      >
        Contact Us
      </RouterLink>
    </div>
  </div>
</template>