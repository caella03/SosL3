<script setup>
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style="background-image: url('/src/assets/rwanda.png');"
  >
    
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div class="relative text-center px-4 z-10">
      <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-wide">
        MAP OF RWANDA
      </h1>

      <p class="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
        Discover the beauty, culture, and amazing destinations across Rwanda.
      </p>

      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
      >
        Explore Now
      </button>
    </div>
  </section>
</template>