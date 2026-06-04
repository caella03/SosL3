<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const hideLayout = computed(() =>
  ['dashboard'].includes(route.name?.toString())
)
</script>

<template>
  <Navbar v-if="!hideLayout" />
  <RouterView />
  <Footer v-if="!hideLayout" />
</template> 