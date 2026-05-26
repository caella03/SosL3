<script setup>
// Simple administration card showcasing mixed bold and regular text
</script>

<template>
  <div class="p-6 border rounded-lg bg-gradient-to-br from-sky-50 to-white">
    <div class="flex items-start gap-4">
      <div class="p-3 bg-white rounded-full shadow-sm">
        <!-- small icon -->
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v6" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 12h14" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 19h12" stroke="#0369a1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2 text-sky-800">Administration</h3>
        <p class="text-sky-700 mb-3">
          The <strong>Administration Office</strong> helps with <span class="font-semibold">enrollment</span>, student records, and schedules.
          For quick help or to book a visit, call <strong class="text-sky-800">0789944231</strong> or email <span class="font-medium">info@sos-tech.edu</span>.
        </p>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="p-3 bg-white rounded border">
        <h4 class="font-bold text-sky-800">Office Hours</h4>
        <p class="text-sm text-sky-600">Mon–Fri, 9:00 — 17:00</p>
      </div>
      <div class="p-3 bg-white rounded border flex flex-col justify-center">
        <h4 class="font-bold text-sky-800">Phone</h4>
        <p class="text-sm text-sky-600">0789944231</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* small scoped tweaks if needed */
</style>
