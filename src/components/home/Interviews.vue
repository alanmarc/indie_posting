<template>
  <v-carousel
    :height="cardHeight + 'px'"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-card class="d-flex flex-row align-center">
        <v-img :src="image" max-width="100%" height="300px" cover></v-img>
        <v-card-text class="text-center py-4">
          <div class="text-h4 text-md-h2">{{ slides[i] }}</div>
          <p>Información adicional sobre {{ slides[i] }}.</p>
        </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { computed } from "vue";
import img1 from "../../assets/img/inter1.jpg";
import img2 from "../../assets/img/inter2.jpg";
import img3 from "../../assets/img/inter3.jpg";

const images = [img1, img2, img3];
const display = useDisplay();

const cardHeight = computed(() => {
  if (display.xs.value) return 550;
  if (display.sm.value) return 600;
  if (display.md.value) return 650;
  if (display.lg.value) return 700;
  return 750;
});

const slides = ["Siddhartha", "Hello Seahorse", "Vive Latino"];
</script>
