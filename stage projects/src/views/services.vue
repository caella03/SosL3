<script setup>
import useI18n from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 py-16 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-14">
        <h1 class="text-5xl font-extrabold text-green-800 mb-4">
          {{ t('services') }}
        </h1>

        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover Rwanda with confidence. We provide tourism, travel, and community-based services designed to help visitors experience the beauty, culture, and hospitality of the Land of a Thousand Hills.
        </p>
      </div>

      <!-- Services Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

        <div class="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">
          <div class="text-5xl mb-4">🌍</div>
          <h3 class="text-xl font-bold text-green-800 mb-2">
            Guided Tours
          </h3>
          <p class="text-gray-600">
            Explore Rwanda's breathtaking landscapes, wildlife, and cultural heritage with experienced local guides.
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">
          <div class="text-5xl mb-4">🤝</div>
          <h3 class="text-xl font-bold text-green-800 mb-2">
            Community Support
          </h3>
          <p class="text-gray-600">
            Connect with local communities and support small businesses while enjoying authentic experiences.
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">
          <div class="text-5xl mb-4">🏨</div>
          <h3 class="text-xl font-bold text-green-800 mb-2">
            Accommodation
          </h3>
          <p class="text-gray-600">
            Find the best hotels, lodges, and guesthouses tailored to your travel needs and budget.
          </p>
        </div>

        <div class="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">
          <div class="text-5xl mb-4">🎉</div>
          <h3 class="text-xl font-bold text-green-800 mb-2">
            Event Planning
          </h3>
          <p class="text-gray-600">
            From cultural festivals to corporate events, we help organize memorable experiences.
          </p>
        </div>

      </div>

      <!-- Request Service Section -->
      <div class="bg-white rounded-3xl shadow-xl p-8 mb-12">
        <h2 class="text-3xl font-bold text-green-800 mb-4">
          Request a Service
        </h2>

        <p class="text-gray-600 mb-6">
          Need assistance planning your trip or organizing an event? Contact our team and we'll help you create the perfect experience.
        </p>

        <a
          href="/contact"
          class="inline-block bg-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-800 transition"
        >
          Contact Us
        </a>
      </div>

      <!-- Provinces -->
      <div>
        <h2 class="text-3xl font-bold text-center text-green-800 mb-8">
          Explore Services by Province
        </h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <a
            href="/provinces/north"
            class="bg-white p-6 rounded-2xl shadow-lg text-center hover:bg-green-700 hover:text-white transition duration-300"
          >
            🏔️
            <h3 class="font-bold mt-3">
              {{ t('northern') || 'Northern Province' }}
            </h3>
          </a>

          <a
            href="/provinces/east"
            class="bg-white p-6 rounded-2xl shadow-lg text-center hover:bg-green-700 hover:text-white transition duration-300"
          >
            🦁
            <h3 class="font-bold mt-3">
              {{ t('eastern') || 'Eastern Province' }}
            </h3>
          </a>

          <a
            href="/provinces/south"
            class="bg-white p-6 rounded-2xl shadow-lg text-center hover:bg-green-700 hover:text-white transition duration-300"
          >
            🌿
            <h3 class="font-bold mt-3">
              {{ t('southern') || 'Southern Province' }}
            </h3>
          </a>

          <a
            href="/provinces/west"
            class="bg-white p-6 rounded-2xl shadow-lg text-center hover:bg-green-700 hover:text-white transition duration-300"
          >
            🌊
            <h3 class="font-bold mt-3">
              {{ t('western') || 'Western Province' }}
            </h3>
          </a>

        </div>
      </div>

    </div>
  </section>
</template>