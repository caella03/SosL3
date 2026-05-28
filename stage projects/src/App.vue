<script setup>
// import Home from './views/Home.vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  
  <RouterView />

  <!-- <Home /> -->

  <Footer/>
</template>