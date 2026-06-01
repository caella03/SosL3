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
        <a href="/" class="hover:text-yellow-300 transition">
          {{ labels.home }}
        </a>
      </li>

      <li>
        <a href="/about" class="hover:text-yellow-300 transition">
          {{ labels.about }}
        </a>
      </li>

      <li>
        <a href="/services" class="hover:text-yellow-300 transition">
          {{ labels.services }}
        </a>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300 transition">
          {{ translations.en.gallery }}
        </a>

        <ul
          class="absolute left-0 top-full hidden group-hover:block bg-white text-green-900 rounded shadow-md w-48 z-50"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-green-200 text-green-700"
            >
              Photos
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-green-200 text-green-700"
            >
              Videos
            </a>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <a href="#" class="hover:text-yellow-300 transition">
          {{ translations.en.destination }}
        </a>

        <ul
          class="absolute left-0 top-full hidden group-hover:block bg-white text-green-900 rounded shadow-md w-52 z-50"
        >
          <li>
            <router-link to="/" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Kigali City
            </router-link>
          </li>

          <li>
            <router-link to="/provinces/west" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Western Province
            </router-link>
          </li>

          <li>
            <router-link to="/provinces/north" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Northern Province
            </router-link>
          </li>

          <li>
            <router-link to="/provinces/south" class="block px-4 py-2 hover:bg-green-200 text-green-700">
              Southern Province
            </router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="/contact" class="hover:text-yellow-300 transition">
          {{ labels.contact }}
        </a>
      </li>

      <!-- Language selector -->
      <li class="relative">
        <div class="relative">
          <button @click="open = !open" class="flex items-center gap-2 px-3 py-1 bg-green-700 rounded hover:bg-green-600">
            {{ languageNames[selected] }}
            <span class="text-xs">▾</span>
          </button>

          <ul v-if="open" class="absolute right-0 mt-2 bg-white text-green-900 rounded shadow-md w-40 z-50">
            <li v-for="(name, code) in languageNames" :key="code">
              <button @click="select(code)" class="w-full text-left px-4 py-2 hover:bg-green-200">
                {{ name }}
              </button>
            </li>
          </ul>
        </div>
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

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    gallery: 'Gallery ▼',
    photos: 'Photos',
    videos: 'Videos',
    destination: 'Destination ▼',
    kigali: 'Kigali City',
    western: 'Western Province',
    northern: 'Northern Province',
    southern: 'Southern Province',
    contact: 'Contact'
  },
  rw: {
    home: 'Ahabanza',
    about: 'Ibyerekeye',
    services: 'Serivisi',
    gallery: 'Gallery ▼',
    photos: 'Amafoto',
    videos: 'Videwo',
    destination: 'Aho ujya ▼',
    kigali: 'Umujyi wa Kigali',
    western: 'Intara y\'Iburengerazuba',
    northern: 'Intara y\'Amajyaruguru',
    southern: 'Intara y\'Amajyepfo',
    contact: 'Twandikire'
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    gallery: 'Galerie ▼',
    photos: 'Photos',
    videos: 'Vidéos',
    destination: 'Destinations ▼',
    kigali: 'Ville de Kigali',
    western: 'Province de l\'Ouest',
    northern: 'Province du Nord',
    southern: 'Province du Sud',
    contact: 'Contact'
  }
}

const labels = computed(() => ({
  home: t('home'),
  about: t('about'),
  services: t('services'),
  contact: t('contact')
}))

function select(code) {
  selected.value = code
  setLocale(code)
  open.value = false
}
</script>