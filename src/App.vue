<template>
  <v-app>
    <nav>
      <Navbar />
    </nav>
    <router-view />
  </v-app>
</template>

<script setup>
import Navbar from './components/nav/Navbar.vue'
</script>
