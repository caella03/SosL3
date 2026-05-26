<script setup>
import Logo from '../assets/logo.png'
</script>

<template>
  <nav class="bg-gradient-to-r from-sky-600 to-sky-500 text-white p-4 shadow-md">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="rounded-full bg-white p-1 shadow-sm">
          <img :src="Logo" alt="SOS logo" class="w-14 h-14 rounded-full" />
        </div>
        <div>
          <h1 class="text-2xl font-extrabold leading-tight">SOS Technical School</h1>
          <p class="text-sm text-sky-100">Practical skills, real outcomes</p>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-3">
        <a href="#home"><button class="bg-white text-sky-600 px-4 py-2 rounded-lg shadow-sm hover:scale-105 transition">Home</button></a>
        <a href="#about"><button class="bg-white text-sky-600 px-4 py-2 rounded-lg shadow-sm hover:scale-105 transition">About</button></a>
        <a href="#contact"><button class="bg-white text-sky-600 px-4 py-2 rounded-lg shadow-sm hover:scale-105 transition">Contact</button></a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* no extra styles */
</style>
