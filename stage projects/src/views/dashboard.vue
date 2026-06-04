<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenu = ref('overview')

function logout() {
  router.push('/login')
}
</script>

<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700">
        Dashboard
      </div>

      <nav class="flex-1 p-4">
        <button
          @click="activeMenu = 'overview'"
          :class="activeMenu === 'overview' ? 'bg-green-700' : ''"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          Overview
        </button>

        <button
          @click="activeMenu = 'settings'"
          :class="activeMenu === 'settings' ? 'bg-green-700' : ''"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          Settings
        </button>

        <button
          @click="activeMenu = 'booking'"
          :class="activeMenu === 'booking' ? 'bg-green-700' : ''"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          Booking
        </button>

        <!-- NEW USER MENU -->
        <button
          @click="activeMenu = 'user'"
          :class="activeMenu === 'user' ? 'bg-green-700' : ''"
          class="w-full text-left px-4 py-3 rounded mb-2"
        >
          User
        </button>
      </nav>

      <!-- Logout Button -->
      <div class="p-4 border-t border-green-700">
        <button
          @click="logout"
          class="w-full bg-red-800 px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto p-8">

      <!-- Overview -->
      <div v-if="activeMenu === 'overview'">
        <h1 class="text-3xl font-bold text-green-800 mb-4">
          Overview
        </h1>
        <p class="text-gray-700 text-lg">
          This is an overview page.
        </p>
      </div>

      <!-- Settings -->
      <div v-else-if="activeMenu === 'settings'">
        <h1 class="text-3xl font-bold text-green-800 mb-4">
          Settings
        </h1>
      </div>

      <!-- Booking -->
      <div v-else-if="activeMenu === 'booking'">
        <h1 class="text-3xl font-bold text-green-800 mb-4">
          Booking
        </h1>
      </div>

      <!-- USER PAGE (NEW) -->
      <div v-else-if="activeMenu === 'user'">
        <h1 class="text-3xl font-bold text-green-800 mb-6">
          User Profile
        </h1>

        <div class="bg-white shadow-md rounded-lg p-6 max-w-md">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-green-700 text-white flex items-center justify-center rounded-full text-xl font-bold">
              IC
            </div>

            <div>
              <h2 class="text-xl font-semibold">Isimbi Caella</h2>
              <p class="text-gray-500">caellaisimbi28a@gmail.com</p>
            </div>
          </div>

          <div class="mt-6 space-y-2 text-gray-700">
            <p><span class="font-semibold">Role:</span> User</p>
            <p><span class="font-semibold">Status:</span> Active</p>
            <p><span class="font-semibold">Member since:</span> 2026</p>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>