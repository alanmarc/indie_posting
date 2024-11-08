<template>
  <v-carousel
    :height="cardHeight + 'px'"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item v-for="(image, i) in images" :key="i" :src="image">
      <v-sheet color="transparent" height="100%">
        <div class="d-flex fill-height justify-center align-end">
          <div class="text-h4 text-md-h2">{{ slides[i] }}</div>
        </div>
      </v-sheet>
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

const slides = ["Siddhartha", "Hello Seahorse", "Vivle Latino"];
</script>
