<script setup>
import useI18n from '@/i18n'
import { ref } from 'vue'

const { t } = useI18n()


// Use existing images from the project's assets. Add video entries (placeholders) so the
// gallery supports both images and videos. If you add real mp4/webm files under
// src/assets/provinces/*/videos you can update the `src` values to point at them.
const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: new URL('../assets/provinces/north/north.png', import.meta.url).href,
    thumb: new URL('../assets/provinces/north/north.png', import.meta.url).href,
    alt: 'Northern Province'
  },
  {
    id: 2,
    type: 'image',
    src: new URL('../assets/provinces/south/south.png', import.meta.url).href,
    thumb: new URL('../assets/provinces/south/south.png', import.meta.url).href,
    alt: 'Southern Province'
  },
  {
    id: 3,
    type: 'video',
    // no local mp4s included; use a safe public placeholder (will stream from web)
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: new URL('../assets/provinces/west/west.png', import.meta.url).href,
    alt: 'Sample drone footage'
  },
  {
    id: 4,
    type: 'image',
    src: new URL('../assets/provinces/east/east.png', import.meta.url).href,
    thumb: new URL('../assets/provinces/east/east.png', import.meta.url).href,
    alt: 'Eastern Province'
  },
  {
    id: 5,
    type: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    poster: new URL('../public/logo.png', import.meta.url).href,
    alt: 'Sample webm clip'
  }
]

const isOpen = ref(false)
const selectedIndex = ref(0)

function openGallery(index) {
  selectedIndex.value = index
  isOpen.value = true
}

function closeGallery() {
  isOpen.value = false
}

function next() {
  selectedIndex.value = (selectedIndex.value + 1) % galleryItems.length
}

function prev() {
  selectedIndex.value =
    (selectedIndex.value - 1 + galleryItems.length) % galleryItems.length
}
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 py-16 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- Heading -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-green-800 mb-4">
          {{ t('contact') }}
        </h1>

        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions about your next adventure in Rwanda?
          We'd love to hear from you. Reach out and our team will get back to
          you as soon as possible.
        </p>
      </div>

      <!-- Gallery -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-green-800 mb-4">
          Gallery
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div
            v-for="(item, i) in galleryItems"
            :key="item.id"
            class="relative rounded-xl overflow-hidden bg-white/60 shadow-sm cursor-pointer"
            @click="openGallery(i)"
          >
            <template v-if="item.type === 'image'">
              <img
                :src="item.thumb || item.src"
                :alt="item.alt"
                class="w-full h-36 object-cover"
              />
            </template>

            <template v-else>
              <img
                :src="item.poster"
                :alt="item.alt"
                class="w-full h-36 object-cover"
              />

              <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-black/50 text-white rounded-full p-3">
                  ▶
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Lightbox / modal -->
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          @click.self="closeGallery"
        >
          <div class="max-w-4xl w-full bg-transparent">
            <div class="relative">
              <button
                class="absolute right-0 top-0 text-white text-2xl p-2"
                @click="closeGallery"
                aria-label="Close"
              >
                ×
              </button>

              <template v-if="galleryItems[selectedIndex].type === 'image'">
                <img
                  :src="galleryItems[selectedIndex].src"
                  :alt="galleryItems[selectedIndex].alt"
                  class="w-full h-[60vh] object-contain rounded-lg"
                />
              </template>

              <template v-else>
                <video
                  :src="galleryItems[selectedIndex].src"
                  :poster="galleryItems[selectedIndex].poster"
                  controls
                  autoplay
                  class="w-full h-[60vh] bg-black rounded-lg"
                />
              </template>

              <div class="flex items-center justify-between mt-3">
                <button
                  class="text-white bg-green-700 px-4 py-2 rounded"
                  @click="prev"
                >
                  ← Prev
                </button>

                <div class="text-white">{{ galleryItems[selectedIndex].alt }}</div>

                <button
                  class="text-white bg-green-700 px-4 py-2 rounded"
                  @click="next"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="grid md:grid-cols-2 gap-10">
        <div
          class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-green-100"
        >
          <h2 class="text-2xl font-bold text-green-800 mb-6">
            Get In Touch
          </h2>

          <!-- Your contact content here -->
        </div>
      </div>

    </div>
  </section>
</template>