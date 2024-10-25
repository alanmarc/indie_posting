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
          <div class="text-h4 text-md-h2">{{ slides[i] }} Slide</div>
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

// Lista de imágenes
const images = [img1, img2, img3];

// Obtener display info
const display = useDisplay();

// Altura del carrusel basada en el tamaño de pantalla
const cardHeight = computed(() => {
  if (display.xs.value) return 200; // Pantallas extra pequeñas
  if (display.sm.value) return 300; // Pantallas pequeñas
  if (display.md.value) return 400; // Pantallas medianas
  if (display.lg.value) return 500; // Pantallas grandes
  return 600; // Pantallas extra grandes
});

const slides = ["First", "Second", "Third"];
</script>
