<script setup>
import useI18n from '@/i18n'
import { ref } from 'vue'

const { t } = useI18n()
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 py-16 px-6">
    <div class="max-w-6xl mx-auto">

      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-green-800 mb-4">
          {{ t('contact') }}
        </h1>

        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions about your next adventure in Rwanda?
          We'd love to hear from you.
        </p>
      </div>

      <div class="bg-white p-8 rounded-xl shadow">
        <h2 class="text-xl font-bold mb-4">Get In Touch</h2>
        <p>Email: temberaurwanda@rwanda-tour.com</p>
        <p>Phone: +250 789976099</p>
      </div>

    </div>
  </section>
</template>