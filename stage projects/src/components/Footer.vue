<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-green-800 text-white px-8 py-10 mt-10">
    
    <div class="flex flex-wrap justify-between gap-8">

      <!-- About Footer -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          TEMBERA U RWANDA
        </h3>

        <p class="text-sm text-green-200">
          Discover the beautiful hills of Rwanda
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          Quick Links
        </h3>

        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink to="/" class="hover:text-yellow-300">
              Home
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/services" class="hover:text-yellow-300">
              Services
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/contact" class="hover:text-yellow-300">
              Contact
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/about" class="hover:text-yellow-300">
              About
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Destinations -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          Destinations
        </h3>

        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink to="/" class="hover:text-yellow-300">
              Northern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/" class="hover:text-yellow-300">
              Western Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/" class="hover:text-yellow-300">
              Kigali City
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/" class="hover:text-yellow-300">
              Southern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/" class="hover:text-yellow-300">
              Eastern Province
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-yellow-300 font-bold text-lg mb-3">
          Contact
        </h3>

        <ul class="space-y-2 text-green-300 text-sm">
          <li>Abanyamabanga</li>
          <li>+250 789 972 321</li>
          <li>Kagugu, Kigali</li>
        </ul>
      </div>

    </div>

    <!-- Copyright -->
    <div class="border-t border-green-600 mt-8 pt-4 text-center text-sm text-green-300">
      © 2026 Tembera U Rwanda. All rights reserved.
    </div>

  </footer>
</template>