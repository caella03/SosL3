<script setup>
import Administration from './Administration.vue'
</script>

<template>
  <main class="w-full max-w-5xl mt-8 mx-auto">
    <!-- Hero -->
    <section class="relative bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div class="p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
        <div class="flex-1">
          <h2 class="text-4xl font-extrabold text-sky-800 mb-3">Hands-on technical training that works</h2>
          <p class="text-sky-700 mb-4">Project-based courses, industry mentors, and real outcomes — our graduates start careers with confidence.</p>
          <div class="flex gap-3">
            <a href="#about" class="inline-block bg-sky-600 text-white px-5 py-3 rounded-lg shadow hover:scale-105 transition">Explore programs</a>
            <a href="#contact" class="inline-block border border-sky-200 text-sky-700 px-4 py-3 rounded-lg">Contact us</a>
          </div>
        </div>

        <div class="w-full md:w-80">
          <div class="bg-sky-50 p-4 rounded-lg border">
            <h4 class="font-bold text-sky-800 mb-2">Upcoming cohort</h4>
            <p class="text-sky-700">Next intake: July 2026 — limited places available.</p>
          </div>
        </div>
      </div>

      <!-- decorative SVG accent -->
      <svg class="absolute right-0 bottom-0 opacity-30" width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="60" fill="#e0f2fe" />
        <rect x="120" y="10" width="80" height="80" rx="12" fill="#bae6fd" />
      </svg>
    </section>

    <!-- About -->
    <section id="about" class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border">
        <h3 class="text-xl font-semibold mb-2 text-sky-800">What we teach</h3>
        <ul class="list-disc pl-5 text-sky-700 space-y-2">
          <li><strong>Software Development</strong> — full stack web & backend projects</li>
          <li><strong>Systems & Networks</strong> — practical sysadmin and cloud labs</li>
          <li><strong>Electronics</strong> — embedded systems & hands-on prototyping</li>
        </ul>
      </div>

      <!-- Admin card -->
      <div class="bg-white p-6 rounded-lg shadow-sm border">
        <Administration />
      </div>
    </section>

    <!-- Features -->
    <section class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-sm border">
        <h4 class="font-bold text-sky-800 mb-2">Industry mentors</h4>
        <p class="text-sky-700 text-sm">Learn from professionals working in the field today.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border">
        <h4 class="font-bold text-sky-800 mb-2">Portfolio projects</h4>
        <p class="text-sky-700 text-sm">Build real projects you can show to employers.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm border">
        <h4 class="font-bold text-sky-800 mb-2">Job support</h4>
        <p class="text-sky-700 text-sm">CV help, interview practice and employer introductions.</p>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="max-w-4xl mx-auto mb-12">
      <blockquote class="bg-white p-6 rounded-lg shadow border">
        <p class="text-sky-700">"The bootcamp changed my life — I had no experience and now I'm working as a junior developer."</p>
        <footer class="mt-4 text-sm text-sky-500">— A recent graduate</footer>
      </blockquote>
    </section>
  </main>
</template>

<style scoped></style>
