<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="d-flex flex-column flex-md-row mx-auto my-12"
    :max-width="cardHeight + 'px'"
    v-for="(item, i) in data.events"
    :key="i"
  >
    <v-img
      class="w-full w-md-50"
      height="300"
      :src="images[i % images.length]"
      cover
    ></v-img>
    <div>
      <v-card-item>
        <v-card-title class="text-h4 text-wrap">{{ item.title }}</v-card-title>
        <v-card-subtitle>
          <span class="me-1">{{ item.location }}</span>
          <v-icon color="error" icon="mdi-calendar-range" size="small"></v-icon>
          <span>{{ item.date }}</span>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <div>{{ item.summary }}</div>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Ir"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { computed, ref } from "vue";
import data from "../../assets/data/news.json";
import img1 from "../../assets/img/inter1.jpg";
import img2 from "../../assets/img/inter2.jpg";
import img3 from "../../assets/img/inter3.jpg";

const loading = ref(false);

const reserve = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const images = [img1, img2, img3];
const display = useDisplay();

const cardHeight = computed(() => {
  if (display.xs.value) return 550;
  if (display.sm.value) return 650;
  if (display.md.value) return 850;
  if (display.lg.value) return 1000;
  return 1200;
});
</script>
