<template>
  <v-card
    class="mx-auto my-5"
    max-width="400"
    v-for="(item, i) in data.upcomingConcerts"
    :key="i"
  >
    <v-img class="align-end text-white" height="200" :src="imageSrc" cover>
      <v-card-title>{{ item.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ item.subtitle }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ item.location }}</div>
      <div>{{ item.descriptrion }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>Share</v-btn>
      <v-btn color="orange" text>Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import data from "../../assets/data/concerts.json";
import img1 from "../../assets/img/inter1.jpg";
import img2 from "../../assets/img/inter2.jpg";
import img3 from "../../assets/img/inter3.jpg";

// Definimos variables reactivas para los datos del card
const title = ref("Top 10 Australian beaches");
const subtitle = ref("Number 10");
const locationName = ref("Whitehaven Beach");
const locationDetails = ref("Whitsunday Island, Whitsunday Islands");
const imageSrc = ref("https://cdn.vuetifyjs.com/images/cards/docks.jpg");
</script>
