<script setup>
import useI18n from '@/i18n'
const { t } = useI18n()
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center scale-105"
      style="background-image: url('/rwanda.png');"
    ></div>

    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-green-900/40"
    ></div>

    <!-- Decorative Blur -->
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
    ></div>

    <div
      class="absolute bottom-10 right-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
    ></div>

    <!-- Hero Content -->
    <div
      class="relative z-10 text-center px-6 max-w-5xl mx-auto"
    >
      <!-- Badge -->
      <span
        class="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm md:text-base font-medium text-yellow-300 mb-6"
      >
        {{ t('exploreBadge') }}
      </span>

      <!-- Heading -->
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-6"
      >
        {{ t('discover') }}
        <span class="text-yellow-400">
          {{ t('rwanda') }}
        </span>
      </h1>

      <!-- Description -->
      <p
        class="text-lg md:text-2xl text-gray-200 leading-8 max-w-3xl mx-auto mb-10"
      >
  {{ t('description') }}
      </p>

      <!-- Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <button
          class="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          {{ t('exploreNow') }}
        </button>

        <button
          class="border border-white/40 hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-full backdrop-blur-md transition duration-300"
        >
          {{ t('learnMore') }}
        </button>
      </div>

      <!-- Stats -->
      <div
        class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
      >
        <div
          class="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
        >
            <h3 class="text-3xl font-bold text-yellow-400 mb-2">
            {{ t('stats1val') }}
          </h3>
          <p class="text-gray-200">
            {{ t('stats1label') }}
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
        >
            <h3 class="text-3xl font-bold text-yellow-400 mb-2">
            {{ t('stats2val') }}
          </h3>
          <p class="text-gray-200">
            {{ t('stats2label') }}
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
        >
            <h3 class="text-3xl font-bold text-yellow-400 mb-2">
            {{ t('stats3val') }}
          </h3>
          <p class="text-gray-200">
            {{ t('stats3label') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>