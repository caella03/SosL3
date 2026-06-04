<template>
  <nav class="bg-green-800 text-white px-6 py-3 flex justify-between items-center">

    <!-- Logo -->
    <img
      src="/logo.png"
      alt="Logo"
      class="h-10 w-10 rounded-full object-cover"
    />

    <!-- Navigation Links -->
    <ul class="flex gap-8 text-sm font-medium items-center">

      <li>
        <router-link to="/" class="hover:text-yellow-300 transition">
          {{ labels.home }}
        </router-link>
      </li>

      <li>
        <router-link to="/about" class="hover:text-yellow-300 transition">
          {{ labels.about }}
        </router-link>
      </li>

      <li>
        <router-link to="/services" class="hover:text-yellow-300 transition">
          {{ labels.services }}
        </router-link>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <span class="hover:text-yellow-300 transition cursor-pointer">
          {{ labels.gallery }}
        </span>

        <ul class="absolute left-0 top-full hidden group-hover:block bg-white text-green-900 rounded shadow-md w-48 z-50">

          <li>
            <router-link to="/gallery/photos" class="block px-4 py-2 hover:bg-green-200">
              Photos
            </router-link>
          </li>

          <li>
            <router-link to="/gallery/videos" class="block px-4 py-2 hover:bg-green-200">
              Videos
            </router-link>
          </li>

        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <span class="hover:text-yellow-300 transition cursor-pointer">
          {{ labels.destination }}
        </span>

        <ul class="absolute left-0 top-full hidden group-hover:block bg-white text-green-900 rounded shadow-md w-52 z-50">

          <li>
            <router-link to="/" class="block px-4 py-2 hover:bg-green-200">
              Kigali City
            </router-link>
          </li>

          <li>
            <router-link to="/provinces/west" class="block px-4 py-2 hover:bg-green-200">
              Western Province
            </router-link>
          </li>

          <li>
            <router-link to="/provinces/north" class="block px-4 py-2 hover:bg-green-200">
              Northern Province
            </router-link>
          </li>

          <li>
            <router-link to="/provinces/south" class="block px-4 py-2 hover:bg-green-200">
              Southern Province
            </router-link>
          </li>

        </ul>
      </li>

      <!-- Login -->
      <li>
        <router-link to="/login" class="hover:text-yellow-300 transition">
          {{ labels.login }}
        </router-link>
      </li>

      <!-- Register -->
      <li>
        <router-link to="/register" class="hover:text-yellow-300 transition">
          {{ labels.register }}
        </router-link>
      </li>

      <!-- Contact -->
      <li>
        <router-link to="/contact" class="hover:text-yellow-300 transition">
          {{ labels.contact }}
        </router-link>
      </li>

      <!-- Language Selector -->
      <li class="relative">
        <button
          @click="open = !open"
          class="flex items-center gap-2 px-3 py-1 bg-green-700 rounded hover:bg-green-600"
        >
          {{ languageNames[selected] }}
          <span class="text-xs">▾</span>
        </button>

        <ul
          v-if="open"
          class="absolute right-0 mt-2 bg-white text-green-900 rounded shadow-md w-40 z-50"
        >
          <li v-for="(name, code) in languageNames" :key="code">
            <button
              @click="select(code)"
              class="w-full text-left px-4 py-2 hover:bg-green-200"
            >
              {{ name }}
            </button>
          </li>
        </ul>
      </li>

    </ul>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import useI18n from '@/i18n'

const { t, setLocale } = useI18n()

const selected = ref('en')
const open = ref(false)

const languageNames = {
  en: 'English',
  rw: 'Kinyarwanda',
  fr: 'Français'
}

const labels = computed(() => ({
  home: t('home'),
  about: t('about'),
  services: t('services'),
  gallery: t('gallery'),
  destination: t('destination'),
  login: t('login'),
  register: t('register'),
  contact: t('contact')
}))

function select(code) {
  selected.value = code
  setLocale(code)
  open.value = false
}
</script>