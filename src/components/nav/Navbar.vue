<template>
  <v-container>
    <v-app-bar :elevation="2">
      <v-app-bar-title>Indie Posting</v-app-bar-title>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          v-if="!isLargeScreen"
        ></v-app-bar-nav-icon>
      </template>
      <template v-slot:append>
        <template v-if="isLargeScreen">
          <v-btn text :to="{ path: '/' }">Homeee</v-btn>
          <v-btn text :to="{ path: '/concerts' }">Conciertos</v-btn>
          <v-btn text :to="{ path: '/interviews' }">Entrevistas</v-btn>
          <v-btn text :to="{ path: '/music' }">Música</v-btn>
          <v-btn text :to="{ path: '/about' }">Nosotros</v-btn>
          <v-btn
            target="_blank"
            href="https://www.facebook.com/IndiePostingMx"
            icon="mdi-facebook"
          ></v-btn>
          <v-btn
            target="_blank"
            href="https://www.instagram.com/indieposting.mx"
            icon="mdi-instagram"
          ></v-btn>
          <v-btn icon="mdi-spotify"></v-btn>
        </template>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-if="drawer" v-model="drawer" app temporary>
      <v-list dense>
        <v-list-item :to="{ path: '/' }">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/concerts' }">
          <v-list-item-title>Conciertos</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/interviews' }">
          <v-list-item-title>Entrevistas</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/music' }">
          <v-list-item-title>Música</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{ path: '/about' }">
          <v-list-item-title>Nosotros</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const drawer = ref(false);
const { mdAndUp } = useDisplay();

const isLargeScreen = computed(() => mdAndUp.value);
</script>

<style scoped>
.v-btn__content {
  font-size: 1.5rem;
}
</style>
